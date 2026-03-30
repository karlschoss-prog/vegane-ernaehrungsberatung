import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${narrow ? "max-w-3xl" : "max-w-6xl"}`}>
        {children}
      </div>
    </section>
  );
}
