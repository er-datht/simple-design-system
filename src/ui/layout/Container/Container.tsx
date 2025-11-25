import { type ReactNode } from "react";
import { cn } from "../../../utils/cn";
import "./container.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
}

export const Container = ({
  children,
  className,
  as: Component = "div",
}: ContainerProps) => {
  return <Component className={cn("container", className)}>{children}</Component>;
};
