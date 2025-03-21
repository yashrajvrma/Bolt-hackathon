import { cn } from "@/lib/utils";
import {
  TestimonialCard,
  type TestimonialAuthor,
} from "../../components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      id="judge"
      className={cn(
        "bg-black text-foreground",
        "py-12 sm:py-24 md:py-32 px-0 sm:max-w-6xl w-full font-sans",
        className
      )}
    >
      <div className="mx-auto flex max-w-xl sm:max-w-container flex-col items-center gap-4 text-center sm:gap-16 px-4">
        <div className="flex flex-col items-center gap-1 px-4 sm:gap-3">
          <h2 className="max-w-[720px] text-3xl font-medium leading-tighter sm:text-5xl sm:leading-tight text-zinc-300">
            {title}
          </h2>
          <p className="text-sm sm:min-w-[700px] font-medium text-zinc-600 sm:text-lg mb-2 sm-mb-0">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden md:min-w-7xl min-w-[100px]">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-3/8 bg-gradient-to-r from-black via-[#121413]/50 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-3/8 bg-gradient-to-l from-black via-[#121413]/50 to-transparent sm:block" />
        </div>
      </div>
    </section>
  );
}
