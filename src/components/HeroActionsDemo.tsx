import { HeroActions } from "../ui/sections/HeroAction";
import { Button } from "../ui/primitives/Button/Button";

const HeroActionsDemo = () => {
  return (
    <div>
      <HeroActions
        title="Build amazing experiences with our platform"
        subtitle="Start creating beautiful, responsive applications in minutes with our comprehensive design system"
        buttons={
          <>
            <Button variant="primary" size="md">
              Get Started
            </Button>
            <Button variant="neutral" size="md">
              Learn More
            </Button>
          </>
        }
      />
    </div>
  );
};

export default HeroActionsDemo;
