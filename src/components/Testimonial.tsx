import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, title }) => {
  return (
    <article className="bg-secondary border flex w-full items-center gap-6 justify-center p-20 rounded-sm border-white/30 max-md:px-5">
      <blockquote className="text-base leading-[50px] text-foreground font-medium">
        "{quote}"
        <br />
        <br />
        <cite className="not-italic">
          {author} / {title}
        </cite>
      </blockquote>
    </article>
  );
};

export default Testimonial;
