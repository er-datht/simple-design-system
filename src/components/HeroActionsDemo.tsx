import { HeroActions } from "../ui/sections/heroActions";
import { Button } from "../ui/primitives/Button/Button";

const HeroActionsDemo = () => {
  return (
    <div>
      <HeroActions
        title="Build amazing experiences with our platform"
        subtitle="Start creating beautiful, responsive applications in minutes with our comprehensive design system"
        buttons={
          <>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="neutral" size="lg">
              Learn More
            </Button>
          </>
        }
      />
    </div>
  );
};

export default HeroActionsDemo;
