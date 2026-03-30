import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  external?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses = {
  primary: "bg-sage text-white hover:bg-sage-dark shadow-sm hover:shadow-md active:scale-[0.98]",
  secondary: "bg-taupe text-white hover:bg-taupe/90 shadow-sm active:scale-[0.98]",
  ghost: "border-2 border-sage text-sage hover:bg-sage/10 active:scale-[0.98]",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm rounded-card",
  md: "px-6 py-3 text-base rounded-card",
  lg: "px-8 py-4 text-base rounded-card-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled,
  className = "",
  children,
  external,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
