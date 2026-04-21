import { HeroBasic } from "../ui/sections/HeroBasic";

const HeroBasicDemo = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Example 1: With both title and subtitle */}
      <div>
        <h3 className="text-lg font-semibold mb-4">With Title and Subtitle</h3>
        <HeroBasic
          title="Welcome to Our Platform"
          subtitle="Build amazing products with our design system"
        />
      </div>

      {/* Example 2: Title only */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Title Only</h3>
        <HeroBasic title="Simple and Clean" />
      </div>

      {/* Example 3: Long content example */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Long Content</h3>
        <HeroBasic
          title="Experience the Future of Design"
          subtitle="Create stunning, responsive, and accessible user interfaces with our comprehensive component library built with React and TypeScript"
        />
      </div>

      {/* Example 4: Short impactful message */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Short Impact</h3>
        <HeroBasic title="Start Building" subtitle="Today" />
      </div>
    </div>
  );
};

export default HeroBasicDemo;
