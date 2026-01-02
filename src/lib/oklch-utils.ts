/**
 * OKLCH color space utilities for smooth color transitions
 */

// Convert RGB to Linear RGB
function rgbToLinear(rgb: number): number {
  return rgb <= 0.04045 ? rgb / 12.92 : Math.pow((rgb + 0.055) / 1.055, 2.4);
}

// Convert Linear RGB to RGB
function linearToRgb(linear: number): number {
  return linear <= 0.0031308
    ? 12.92 * linear
    : 1.055 * Math.pow(linear, 1 / 2.4) - 0.055;
}

// Convert RGB to XYZ
function rgbToXyz(r: number, g: number, b: number): [number, number, number] {
  const rLinear = rgbToLinear(r);
  const gLinear = rgbToLinear(g);
  const bLinear = rgbToLinear(b);

  const x = 0.4124564 * rLinear + 0.3575761 * gLinear + 0.1804375 * bLinear;
  const y = 0.2126729 * rLinear + 0.7151522 * gLinear + 0.072175 * bLinear;
  const z = 0.0193339 * rLinear + 0.119192 * gLinear + 0.9503041 * bLinear;

  return [x, y, z];
}


// Convert XYZ to OKLab (direct conversion)
function xyzToOklab(x: number, y: number, z: number): [number, number, number] {
  // Convert XYZ to linear LMS
  const l = 0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z;
  const m = 0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z;
  const s = 0.0482003018 * x + 0.2643662691 * y + 0.6338517070 * z;

  // Apply non-linearity
  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  // Convert to OKLab
  const l_ok = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
  const a_ok = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
  const b_ok = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;

  return [l_ok, a_ok, b_ok];
}

// Convert OKLab to OKLCH
function oklabToOklch(l: number, a: number, b: number): [number, number, number] {
  const c = Math.sqrt(a * a + b * b);
  const h = Math.atan2(b, a) * (180 / Math.PI);
  return [l, c, h < 0 ? h + 360 : h];
}

// Convert hex color to OKLCH
export function hexToOklch(hex: string): [number, number, number] {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse hex to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Convert RGB -> XYZ -> OKLab -> OKLCH
  const [x, y, z] = rgbToXyz(r, g, b);
  const [okl, oka, okb] = xyzToOklab(x, y, z);
  const [l, c, h] = oklabToOklch(okl, oka, okb);

  // Convert L from 0-1 range to 0-100% for CSS
  return [l * 100, c, h];
}

// Convert OKLCH to CSS string
export function oklchToCss(l: number, c: number, h: number): string {
  return `oklch(${l}% ${c} ${h})`;
}

// Interpolate between two OKLCH colors
export function interpolateOklch(
  start: [number, number, number],
  end: [number, number, number],
  t: number
): [number, number, number] {
  // Clamp t between 0 and 1
  t = Math.max(0, Math.min(1, t));

  // Interpolate L and C linearly
  const l = start[0] + (end[0] - start[0]) * t;
  const c = start[1] + (end[1] - start[1]) * t;

  // Interpolate H with shortest path around the color wheel
  let hStart = start[2];
  let hEnd = end[2];
  let diff = hEnd - hStart;

  // Find shortest path around the circle
  if (Math.abs(diff) > 180) {
    if (diff > 0) {
      diff -= 360;
    } else {
      diff += 360;
    }
  }

  const h = hStart + diff * t;
  const hNormalized = h < 0 ? h + 360 : h >= 360 ? h - 360 : h;

  return [l, c, hNormalized];
}

// Get computed color from CSS variable or hex
export function getColorValue(color: string): string {
  // If it's a CSS variable reference (like "hsl(var(--secondary))"), 
  // we need to get the computed value
  if (color.includes('var(')) {
    // Extract variable name
    const match = color.match(/var\(([^)]+)\)/);
    if (match) {
      const varName = match[1].trim();
      // Try to get computed value from document
      if (typeof document !== 'undefined') {
        // Get the actual CSS variable value from :root
        const rootStyle = getComputedStyle(document.documentElement);
        const varValue = rootStyle.getPropertyValue(varName).trim();
        
        // If the variable contains HSL values (like "210 40% 96.1%")
        if (varValue && !varValue.startsWith('#')) {
          // Construct HSL string
          return `hsl(${varValue})`;
        }
        
        // Fallback: use a temporary element to get computed color
        const tempEl = document.createElement('div');
        tempEl.style.backgroundColor = `var(${varName})`;
        document.body.appendChild(tempEl);
        const computed = window.getComputedStyle(tempEl).backgroundColor;
        document.body.removeChild(tempEl);
        return computed;
      }
    }
  }
  return color;
}

// Convert HSL to RGB
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// Convert any color format to hex
export function colorToHex(color: string): string {
  // If it's already hex
  if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
    return color.length === 4 
      ? `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
      : color;
  }

  // If it's hsl/hsla format (e.g., "hsl(210 40% 96.1%)")
  const hslMatch = color.match(/hsla?\((\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%/);
  if (hslMatch) {
    const h = parseFloat(hslMatch[1]);
    const s = parseFloat(hslMatch[2]);
    const l = parseFloat(hslMatch[3]);
    const [r, g, b] = hslToRgb(h, s, l);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  // If it's rgb/rgba
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1]).toString(16).padStart(2, '0');
    const g = parseInt(rgbMatch[2]).toString(16).padStart(2, '0');
    const b = parseInt(rgbMatch[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }

  // If it's a CSS variable, try to resolve it
  const computed = getColorValue(color);
  if (computed !== color) {
    return colorToHex(computed);
  }

  // Default fallback
  return '#E7F0F5';
}

