import { TextContentTitle } from "../../typography/TextContentTitle";
import { cn } from "../../../utils/cn";
import "./hero-basic.css";

export type HeroBasicProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const HeroBasic = ({ title, subtitle, className }: HeroBasicProps) => {
  return (
    <div
      className={cn("hero-basic", className)}
      data-figma-node-id-desktop="2142:10483"
      data-figma-node-id-mobile="348:15897"
    >
      <TextContentTitle
        variant="hero"
        align="center"
        title={title}
        subtitle={subtitle}
        hasSubtitle={!!subtitle}
      />
    </div>
  );
};

export { HeroBasic };
