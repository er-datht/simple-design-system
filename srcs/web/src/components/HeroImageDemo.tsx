import { HeroImage } from "../ui/sections";
import { Button } from "../ui/primitives/Button";
import { ButtonGroup } from "../ui/primitives/Button/ButtonGroup";

const HeroImageDemo = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Background Image with Overlay
        </h3>
        <HeroImage
          title="Welcome to Simple Design System"
          subtitle="A minimal design system with React + TypeScript"
          backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc"
        >
          <ButtonGroup align="center">
            <Button variant="primary">Get Started</Button>
            <Button variant="neutral">Learn More</Button>
          </ButtonGroup>
        </HeroImage>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Background Image without Overlay
        </h3>
        <HeroImage
          title="No Overlay"
          subtitle="Sometimes you want the raw photo to show"
          backgroundImage="https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=def"
          overlay={false}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Height</h3>
        <HeroImage
          title="Tall Hero"
          subtitle="Custom height prop"
          backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=ghi"
          height={420}
        />
      </div>
    </div>
  );
};

export default HeroImageDemo;
