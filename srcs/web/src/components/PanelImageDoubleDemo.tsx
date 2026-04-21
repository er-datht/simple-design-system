import { PanelImageDouble } from "../ui/sections";

export const PanelImageDoubleDemo = () => {
  return (
    <div className="demo-container">
      <h2 className="demo-title">PanelImageDouble Component</h2>
      <p className="demo-description">
        A responsive two-panel image section that displays two images
        side-by-side on desktop and stacked vertically on mobile. Automatically
        adapts layout based on viewport width using CSS media queries.
      </p>

      <div className="demo-section">
        <h3 className="demo-subtitle">Basic Usage</h3>
        <p className="demo-text">
          Default layout with two landscape images. On mobile (below 769px),
          images stack vertically. On desktop (769px+), images appear
          side-by-side in equal columns.
        </p>
        <PanelImageDouble
          leftImageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
          rightImageSrc="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"
        />
      </div>

      <div className="demo-section">
        <h3 className="demo-subtitle">Portrait Images</h3>
        <p className="demo-text">
          The component handles portrait-oriented images gracefully, maintaining
          aspect ratio with object-fit: cover.
        </p>
        <PanelImageDouble
          leftImageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop"
          rightImageSrc="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=800&fit=crop"
        />
      </div>

      <div className="demo-section">
        <h3 className="demo-subtitle">Mixed Orientation</h3>
        <p className="demo-text">
          Even with mixed image orientations, the component maintains consistent
          layout and presentation.
        </p>
        <PanelImageDouble
          leftImageSrc="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop"
          rightImageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop"
        />
      </div>

      <div className="demo-section">
        <h3 className="demo-subtitle">Product Showcase</h3>
        <p className="demo-text">
          Perfect for showcasing products, architecture, or any visual content
          that benefits from a dual-panel layout.
        </p>
        <PanelImageDouble
          leftImageSrc="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop"
          rightImageSrc="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop"
        />
      </div>

      <div className="demo-section">
        <h3 className="demo-subtitle">Nature Photography</h3>
        <p className="demo-text">
          High-quality images with rounded corners (border-radius-medium) for a
          modern, polished appearance.
        </p>
        <PanelImageDouble
          leftImageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
          rightImageSrc="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
        />
      </div>

      <div className="demo-section">
        <h3 className="demo-subtitle">Custom Styling</h3>
        <p className="demo-text">
          The component accepts a className prop for additional customization
          while maintaining responsive behavior.
        </p>
        <PanelImageDouble
          leftImageSrc="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop"
          rightImageSrc="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop"
          className="custom-panel-spacing"
        />
      </div>

      <div className="demo-info">
        <h3 className="demo-subtitle">Component Features</h3>
        <ul className="demo-list">
          <li>
            <strong>Responsive Design:</strong> Automatically switches between
            vertical (mobile) and horizontal (desktop) layouts at 769px
            breakpoint
          </li>
          <li>
            <strong>Mobile-First Approach:</strong> Built with mobile as the
            base, progressively enhancing for larger screens
          </li>
          <li>
            <strong>Image Optimization:</strong> Uses object-fit: cover to
            maintain aspect ratios while filling containers
          </li>
          <li>
            <strong>Design Tokens:</strong> All spacing, colors, and border
            radius values use CSS variables from the design system
          </li>
          <li>
            <strong>Accessibility:</strong> Empty alt attributes for decorative
            images (update with meaningful text for content images)
          </li>
          <li>
            <strong>Figma Integration:</strong> Data attributes link to Figma
            design nodes for seamless design-dev workflow
          </li>
          <li>
            <strong>Flexible Content:</strong> Accepts any image source URLs,
            works with external or local images
          </li>
        </ul>
      </div>

      <div className="demo-info">
        <h3 className="demo-subtitle">Props API</h3>
        <table className="demo-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>leftImageSrc</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>Yes</td>
              <td>URL or path for the left image (top image on mobile)</td>
            </tr>
            <tr>
              <td>
                <code>rightImageSrc</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>Yes</td>
              <td>URL or path for the right image (bottom image on mobile)</td>
            </tr>
            <tr>
              <td>
                <code>className</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>No</td>
              <td>Additional CSS classes for custom styling</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="demo-info">
        <h3 className="demo-subtitle">Responsive Behavior</h3>
        <p className="demo-text">
          <strong>Mobile (default, below 769px):</strong>
        </p>
        <ul className="demo-list">
          <li>Images stack vertically (flex-direction: column)</li>
          <li>Each image takes full width</li>
          <li>24px gap between images (--spacing-6)</li>
        </ul>
        <p className="demo-text">
          <strong>Desktop (769px and above):</strong>
        </p>
        <ul className="demo-list">
          <li>Images arrange horizontally (flex-direction: row)</li>
          <li>Each image takes 50% width</li>
          <li>24px gap between images (--spacing-6)</li>
        </ul>
      </div>

      <div className="demo-info">
        <h3 className="demo-subtitle">Usage Example</h3>
        <pre className="demo-code">
          {`import { PanelImageDouble } from "./ui/sections";

export const MyPage = () => {
  return (
    <PanelImageDouble
      leftImageSrc="/images/product-detail.jpg"
      rightImageSrc="/images/product-context.jpg"
    />
  );
};`}
        </pre>
      </div>
    </div>
  );
};
