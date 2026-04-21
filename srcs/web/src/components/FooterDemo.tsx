import { Footer } from "../ui/sections/Footer";
import { TextLinkListItem } from "../ui/typography/TextLinkListItem";

/**
 * FooterDemo component showcases the Footer component with comprehensive
 * documentation, usage examples, and design specifications.
 */
export default function FooterDemo() {
  // Figma logo SVG
  const figmaLogo = (
    <img
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Cpath d='M50 0h100a50 50 0 0 1 0 100H50V0z' fill='%231abcfe'/%3E%3Cpath d='M50 100h100a50 50 0 0 1 0 100H50v-100z' fill='%23a259ff'/%3E%3Cpath d='M50 200h100a50 50 0 0 1 0 100H50v-100z' fill='%23f24e1e'/%3E%3Cpath d='M0 200a50 50 0 0 0 50 50V150a50 50 0 0 0-50 50z' fill='%23ff7262'/%3E%3Cpath d='M0 50A50 50 0 0 0 50 100V0A50 50 0 0 0 0 50z' fill='%230acf83'/%3E%3C/svg%3E"
      alt="Figma"
      className="footer__logo-image"
    />
  );

  // Original Figma data extracted from the hardcoded footer
  const originalFigmaData = {
    logo: figmaLogo,
    socialLinks: [
      {
        href: "https://twitter.com/figma",
        icon: (
          <img
            src="https://www.figma.com/api/mcp/asset/af13904d-aa7c-485c-ad8d-5d98d2bbf133"
            alt=""
            className="footer__social-icon"
          />
        ),
        label: "Follow Figma on X",
      },
      {
        href: "https://instagram.com/figma",
        icon: (
          <img
            src="https://www.figma.com/api/mcp/asset/8f5fc559-e7d0-4176-aee7-5ed3898cc7cb"
            alt=""
            className="footer__social-icon"
          />
        ),
        label: "Follow Figma on Instagram",
      },
      {
        href: "https://youtube.com/figma",
        icon: (
          <img
            src="https://www.figma.com/api/mcp/asset/3139e776-52d6-4b5d-884f-e3404e9342d6"
            alt=""
            className="footer__social-icon"
          />
        ),
        label: "Follow Figma on YouTube",
      },
      {
        href: "https://linkedin.com/company/figma",
        icon: (
          <img
            src="https://www.figma.com/api/mcp/asset/c73b9868-88e9-4724-97d4-dbdf7ccd2461"
            alt=""
            className="footer__social-icon"
          />
        ),
        label: "Follow Figma on LinkedIn",
      },
    ],
    navigationSections: [
      {
        title: "Use cases",
        ariaLabel: "Use cases",
        nodeId: "2162:8659",
        items: [
          { text: "UI design" },
          { text: "UX design" },
          { text: "Wireframing" },
          { text: "Diagramming" },
          { text: "Brainstorming" },
          { text: "Online whiteboard" },
          { text: "Team collaboration" },
        ],
      },
      {
        title: "Explore",
        ariaLabel: "Explore",
        nodeId: "2162:12917",
        items: [
          { text: "Design" },
          { text: "Prototyping" },
          { text: "Development features" },
          { text: "Design systems" },
          { text: "Collaboration features" },
          { text: "Design process" },
          { text: "FigJam" },
        ],
      },
      {
        title: "Resources",
        ariaLabel: "Resources",
        nodeId: "2162:13585",
        items: [
          { text: "Blog" },
          { text: "Best practices" },
          { text: "Colors" },
          { text: "Color wheel" },
          { text: "Support" },
          { text: "Developers" },
          { text: "Resource library" },
        ],
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Footer Component</h1>
        <p className="mt-2 text-gray-600">
          A responsive, composable footer component using the compound component
          pattern. Provides maximum flexibility through sub-components while
          offering a pre-configured default variant for quick implementation.
        </p>
        <a
          href="https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=321-11357"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-blue-600 hover:text-blue-800 underline"
        >
          View in Figma →
        </a>
      </div>

      {/* Example 1: Footer.Default (Original Figma Layout) */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          1. Footer.Default - Pre-configured with Original Figma Data
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          The simplest approach using the pre-configured Footer.Default
          component with the original Figma design data. Perfect for quick
          implementation when you want the standard layout.
        </p>
        <div className="border-2 border-dashed border-amber-300 rounded-lg p-6 bg-amber-50">
          <Footer.Default
            logo={originalFigmaData.logo}
            logoHref="https://www.figma.com"
            socialLinks={originalFigmaData.socialLinks}
            navigationSections={originalFigmaData.navigationSections}
          />
        </div>
        <div className="mt-4 bg-gray-100 p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
            <code>{`import { Footer } from "../ui/sections/Footer";

const data = {
  logo: <img src="logo.png" alt="Figma" className="footer__logo-image" />,
  socialLinks: [
    {
      href: "https://twitter.com/figma",
      icon: <img src="x-icon.png" alt="" className="footer__social-icon" />,
      label: "Follow on X"
    },
    // ... more social links
  ],
  navigationSections: [
    {
      title: "Use cases",
      nodeId: "2162:8659",
      items: [{ text: "UI design" }, { text: "UX design" }]
    },
    // ... more navigation sections
  ]
};

function App() {
  return (
    <Footer.Default
      logo={data.logo}
      logoHref="https://www.figma.com"
      socialLinks={data.socialLinks}
      navigationSections={data.navigationSections}
    />
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Example 2: Custom Composition */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          2. Custom Composition - Full Control with Compound Components
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Use compound components for complete control over structure and
          content. Mix and match sub-components to create custom layouts.
        </p>
        <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50">
          <Footer>
            <Footer.Brand
              logo={
                <div className="text-2xl font-bold text-purple-600">
                  MyCompany
                </div>
              }
            >
              <Footer.Social>
                <Footer.SocialLink
                  href="https://twitter.com/example"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  }
                  label="Follow us on X"
                />
                <Footer.SocialLink
                  href="https://github.com/example"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  }
                  label="View our GitHub"
                />
              </Footer.Social>
            </Footer.Brand>

            <Footer.Nav title="Products">
              <TextLinkListItem text="Product A" />
              <TextLinkListItem text="Product B" />
              <TextLinkListItem text="Product C" />
            </Footer.Nav>

            <Footer.Nav title="Company">
              <TextLinkListItem text="About" />
              <TextLinkListItem text="Careers" />
              <TextLinkListItem text="Contact" />
            </Footer.Nav>
          </Footer>
        </div>
        <div className="mt-4 bg-gray-100 p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
            <code>{`import { Footer } from "../ui/sections/Footer";
import { TextLinkListItem } from "../ui/typography/TextLinkListItem";

function App() {
  return (
    <Footer>
      <Footer.Brand logo={<div className="logo">MyCompany</div>}>
        <Footer.Social>
          <Footer.SocialLink
            href="https://twitter.com/example"
            icon={<XIcon />}
            label="Follow us on X"
          />
          <Footer.SocialLink
            href="https://github.com/example"
            icon={<GitHubIcon />}
            label="View our GitHub"
          />
        </Footer.Social>
      </Footer.Brand>

      <Footer.Nav title="Products">
        <TextLinkListItem text="Product A" />
        <TextLinkListItem text="Product B" />
      </Footer.Nav>

      <Footer.Nav title="Company">
        <TextLinkListItem text="About" />
        <TextLinkListItem text="Careers" />
      </Footer.Nav>
    </Footer>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Example 3: Mixed Approach */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          3. Mixed Approach - Combining Patterns
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Combine Footer.Default with custom sub-components or use compound
          components with different configurations.
        </p>
        <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
          <Footer>
            <Footer.Brand logo={figmaLogo} logoHref="https://www.figma.com">
              <Footer.Social>
                <Footer.SocialLink
                  href="https://twitter.com/figma"
                  icon={originalFigmaData.socialLinks[0].icon}
                  label="Follow Figma on X"
                />
              </Footer.Social>
            </Footer.Brand>

            <Footer.Nav title="Getting Started" density="Tight">
              <TextLinkListItem text="Quick start" />
              <TextLinkListItem text="Tutorials" />
              <TextLinkListItem text="Examples" />
            </Footer.Nav>

            <Footer.Nav
              title="Community"
              ariaLabel="Community resources and links"
            >
              <TextLinkListItem text="Forums" />
              <TextLinkListItem text="Discord" />
              <TextLinkListItem text="Events" />
            </Footer.Nav>
          </Footer>
        </div>
        <div className="mt-4 bg-gray-100 p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
            <code>{`import { Footer } from "../ui/sections/Footer";
import { TextLinkListItem } from "../ui/typography/TextLinkListItem";

function App() {
  return (
    <Footer>
      <Footer.Brand logo={<img src="logo.png" alt="Brand" />} logoHref="/">
        <Footer.Social>
          <Footer.SocialLink href="#" icon={<XIcon />} label="Follow on X" />
        </Footer.Social>
      </Footer.Brand>

      {/* Use tight density for compact spacing */}
      <Footer.Nav title="Getting Started" density="Tight">
        <TextLinkListItem text="Quick start" />
        <TextLinkListItem text="Tutorials" />
      </Footer.Nav>

      {/* Custom aria-label for better accessibility */}
      <Footer.Nav title="Community" ariaLabel="Community resources and links">
        <TextLinkListItem text="Forums" />
        <TextLinkListItem text="Discord" />
      </Footer.Nav>
    </Footer>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Component API */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Component API
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Available Sub-Components
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <code className="bg-gray-200 px-2 py-1 rounded">Footer</code> -
                Main container component
              </li>
              <li>
                <code className="bg-gray-200 px-2 py-1 rounded">
                  Footer.Default
                </code>{" "}
                - Pre-configured footer with original Figma layout
              </li>
              <li>
                <code className="bg-gray-200 px-2 py-1 rounded">
                  Footer.Brand
                </code>{" "}
                - Brand section with logo
              </li>
              <li>
                <code className="bg-gray-200 px-2 py-1 rounded">
                  Footer.Social
                </code>{" "}
                - Container for social links
              </li>
              <li>
                <code className="bg-gray-200 px-2 py-1 rounded">
                  Footer.SocialLink
                </code>{" "}
                - Individual social media link
              </li>
              <li>
                <code className="bg-gray-200 px-2 py-1 rounded">
                  Footer.Navigation
                </code>{" "}
                - Wrapper for navigation columns
              </li>
              <li>
                <code className="bg-gray-200 px-2 py-1 rounded">
                  Footer.Nav
                </code>{" "}
                - Navigation column with title and links
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                • <strong>Compound Components:</strong> Flexible composition
                pattern
              </li>
              <li>
                • <strong>TypeScript Support:</strong> Full type definitions for
                all props
              </li>
              <li>
                • <strong>Accessibility:</strong> Automatic aria-label handling
              </li>
              <li>
                • <strong>Responsive:</strong> Mobile-first CSS media queries
              </li>
              <li>
                • <strong>Customizable:</strong> All sub-components accept
                className
              </li>
              <li>
                • <strong>Design Tokens:</strong> CSS custom properties for
                theming
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Responsive Behavior */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Responsive Behavior
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">
            Mobile-First Design
          </h3>
          <p className="text-blue-800 mb-4">
            The Footer uses CSS media queries to adapt its layout automatically
            based on screen size. No platform prop needed!
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="font-mono bg-blue-100 px-2 py-1 rounded">
                &lt;768px
              </span>
              <span className="text-blue-900">
                Mobile: Vertical flex-col layout, 64px gap, tight spacing
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono bg-blue-100 px-2 py-1 rounded">
                ≥768px
              </span>
              <span className="text-blue-900">
                Desktop: Horizontal flex-wrap layout, 16px gap, default spacing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Structure */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Content Structure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Title Section</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Figma brand logo</li>
              <li>• Social media icons (X, Instagram, YouTube, LinkedIn)</li>
              <li>• Responsive space-between alignment</li>
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Navigation Columns
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                • <strong>Use cases:</strong> 7 links (UI design, UX design,
                etc.)
              </li>
              <li>
                • <strong>Explore:</strong> 7 links (Design, Prototyping, etc.)
              </li>
              <li>
                • <strong>Resources:</strong> 7 links (Blog, Support, etc.)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Design Tokens */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Design Tokens Used
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">
                  Category
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">
                  Token
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">
                  Value
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">
                  Usage
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Colors</td>
                <td className="px-4 py-2 font-mono text-xs">
                  --sds-color-background-default-default
                </td>
                <td className="px-4 py-2">#ffffff</td>
                <td className="px-4 py-2">Footer background</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Colors</td>
                <td className="px-4 py-2 font-mono text-xs">
                  --sds-color-border-default-default
                </td>
                <td className="px-4 py-2">#d9d9d9</td>
                <td className="px-4 py-2">Top border</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Colors</td>
                <td className="px-4 py-2 font-mono text-xs">
                  --sds-color-text-default-default
                </td>
                <td className="px-4 py-2">#1e1e1e</td>
                <td className="px-4 py-2">Text color</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Spacing</td>
                <td className="px-4 py-2 font-mono text-xs">
                  --sds-size-space-400
                </td>
                <td className="px-4 py-2">16px</td>
                <td className="px-4 py-2">Desktop gap</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Spacing</td>
                <td className="px-4 py-2 font-mono text-xs">
                  --sds-size-space-800
                </td>
                <td className="px-4 py-2">32px</td>
                <td className="px-4 py-2">Container padding</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Spacing</td>
                <td className="px-4 py-2 font-mono text-xs">
                  --sds-size-space-1600
                </td>
                <td className="px-4 py-2">64px</td>
                <td className="px-4 py-2">Mobile gap</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Spacing</td>
                <td className="px-4 py-2 font-mono text-xs">
                  --sds-size-space-4000
                </td>
                <td className="px-4 py-2">160px</td>
                <td className="px-4 py-2">Desktop bottom padding</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Typography</td>
                <td className="px-4 py-2 font-mono text-xs">
                  --sds-typography-body-font-family
                </td>
                <td className="px-4 py-2">Inter</td>
                <td className="px-4 py-2">Font family</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Accessibility Features
        </h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <ul className="space-y-2 text-sm text-green-900">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>
                <strong>Semantic HTML:</strong> Uses <code>&lt;footer&gt;</code>{" "}
                and <code>&lt;nav&gt;</code> elements
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>
                <strong>ARIA Labels:</strong> Social icons have descriptive
                aria-label attributes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>
                <strong>Navigation Structure:</strong> Each column wrapped in{" "}
                <code>&lt;nav&gt;</code> with aria-label
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>
                <strong>Keyboard Navigation:</strong> Focus states on all
                interactive elements
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>
                <strong>Color Contrast:</strong> Meets WCAG AA standards
                (#1e1e1e on #ffffff)
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Implementation Notes */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Implementation Notes
        </h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-purple-900 mb-1">
              No Platform Prop
            </h3>
            <p className="text-sm text-purple-800">
              Unlike some responsive components, Footer doesn't require a
              platform prop. All responsive behavior is handled via CSS media
              queries at the 768px breakpoint.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-purple-900 mb-1">
              Design Tokens
            </h3>
            <p className="text-sm text-purple-800">
              All styling uses CSS custom properties (variables) with fallback
              values. This enables theme switching and dynamic token updates.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-purple-900 mb-1">
              Component Reuse
            </h3>
            <p className="text-sm text-purple-800">
              Uses existing <code>TextLinkList</code> and{" "}
              <code>TextLinkListItem</code> components from the design system
              for consistent navigation structure.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-purple-900 mb-1">Image Assets</h3>
            <p className="text-sm text-purple-800">
              Currently using Figma API asset URLs. For production, download
              assets locally and update image paths.
            </p>
          </div>
        </div>
      </section>

      {/* Figma Node IDs Reference */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Figma Node IDs
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div>
              <strong className="text-gray-900">Main Component:</strong>{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">321:11357</code>
            </div>
            <div>
              <strong className="text-gray-900">Desktop Variant:</strong>{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">7717:4142</code>
            </div>
            <div>
              <strong className="text-gray-900">Mobile Variant:</strong>{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">321:11146</code>
            </div>
            <div>
              <strong className="text-gray-900">Title Section:</strong>{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">9640:4285</code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
