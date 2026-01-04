import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Dublin from "./pages/Dublin";
import Armagh from "./pages/Armagh";
import WardAve from "./pages/WardAve";
import Donegal from "./pages/Donegal";
import Zen from "./pages/Zen";
import Bangor from "./pages/Bangor";
import NotFound from "./pages/NotFound";
import BackgroundColorTransition from "./components/BackgroundColorTransition";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <BackgroundColorTransition />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/dublin" element={<Dublin />} />
          <Route path="/armagh" element={<Armagh />} />
          <Route path="/ward-ave" element={<WardAve />} />
          <Route path="/donegal" element={<Donegal />} />
          <Route path="/zen" element={<Zen />} />
          <Route path="/bangor" element={<Bangor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
