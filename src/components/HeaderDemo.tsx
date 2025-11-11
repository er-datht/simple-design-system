import { useState } from "react";
import Header from "../ui/sections/Header/Header";
import { type NavigationPillItem } from "../ui/primitives/Navigation/NavigationPillList";
import { IconFigma } from "../ui/icons";

// Sample navigation items
const navigationItems: NavigationPillItem[] = [
  { id: "products", label: "Products", href: "/products" },
  { id: "solutions", label: "Solutions", href: "/solutions" },
  { id: "community", label: "Community", href: "/community" },
  { id: "resources", label: "Resources", href: "/resources" },
  { id: "pricing", label: "Pricing", href: "/pricing" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export function HeaderDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeNavId, setActiveNavId] = useState("home");

  return (
    <div className="space-y-8">
      {/* Toggle Control */}
      <section>
        <div className="flex items-center gap-4 p-4 bg-gray-100 rounded">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isLoggedIn}
              onChange={(e) => setIsLoggedIn(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="font-semibold">Logged In</span>
          </label>
        </div>
      </section>

      {/* Desktop Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Desktop View & Mobile View - Closed State (Default) / Open State
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          On desktop (≥992px), the header shows logo + horizontal navigation +
          auth. The menu button is hidden. <br />
          On mobile (&lt;992px), the header shows logo + menu button. Navigation
          and auth are hidden. <br />
          Resize your browser to see this behavior.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Note:</strong> Click the menu button (hamburger icon) to open
          the mobile menu
        </p>
        <div className="border border-dashed border-gray-300 rounded">
          <Header
            logoIcon={<IconFigma size="32" />}
            navigationItems={navigationItems}
            activeNavigationId={activeNavId}
            isLoggedIn={isLoggedIn}
            userName="John Doe"
            avatarSrc="/avatar1.svg"
            onNavigationItemClick={(id) => {
              setActiveNavId(id);
              alert(`Navigation clicked: ${id}`);
            }}
            onAvatarClick={() => alert("Avatar menu clicked!")}
            onSignInClick={() => {
              alert("Sign in clicked!");
              setIsLoggedIn(true);
            }}
            onRegisterClick={() => {
              alert("Register clicked!");
              setIsLoggedIn(true);
            }}
          />
        </div>
      </section>

      {/* Component Features */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Component Features</h2>
        <div className="p-6 border border-dashed border-green-400 rounded bg-green-50">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-3">Three Main Blocks:</h3>
            <p className="text-sm">
              <strong>1. Logo Block:</strong> Logo icon + mobile menu toggle
              button
            </p>
            <p className="text-sm">
              <strong>2. Navigation Block:</strong> NavigationPillList component
              (row on desktop, column on mobile open)
            </p>
            <p className="text-sm">
              <strong>3. Auth Block:</strong> HeaderAuth component (logged in or
              logged out state)
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-3">
              Responsive Behavior:
            </h3>
            <p className="text-sm">
              <strong>✓</strong> Desktop (≥992px): Show horizontal navigation +
              auth, hide menu button
            </p>
            <p className="text-sm">
              <strong>✓</strong> Mobile Closed (&lt;992px): Show menu button,
              hide navigation/auth
            </p>
            <p className="text-sm">
              <strong>✓</strong> Mobile Open (&lt;992px): Show close button +
              vertical navigation + auth
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-3">
              Accessibility Features:
            </h3>
            <p className="text-sm">
              <strong>✓</strong> Semantic HTML (header, nav elements)
            </p>
            <p className="text-sm">
              <strong>✓</strong> ARIA attributes for mobile menu button
            </p>
            <p className="text-sm">
              <strong>✓</strong> aria-expanded for menu state
            </p>
            <p className="text-sm">
              <strong>✓</strong> aria-controls for navigation relationship
            </p>
            <p className="text-sm">
              <strong>✓</strong> Keyboard navigation support
            </p>
          </div>
        </div>
      </section>

      {/* Different Configurations */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Different Configurations</h2>
        <div className="space-y-4">
          {/* Logged Out */}
          <div className="border border-dashed border-gray-300 rounded">
            <h3 className="text-lg font-semibold p-4 bg-gray-50">
              Logged Out State
            </h3>
            <Header
              logoIcon={<IconFigma size="32" />}
              navigationItems={navigationItems}
              activeNavigationId="home"
              isLoggedIn={false}
              onNavigationItemClick={(id) => alert(`Nav: ${id}`)}
              onSignInClick={() => alert("Sign in!")}
              onRegisterClick={() => alert("Register!")}
            />
          </div>

          {/* Logged In with Image Avatar */}
          <div className="border border-dashed border-gray-300 rounded">
            <h3 className="text-lg font-semibold p-4 bg-gray-50">
              Logged In - Image Avatar
            </h3>
            <Header
              logoIcon={<IconFigma size="32" />}
              navigationItems={navigationItems}
              activeNavigationId="products"
              isLoggedIn={true}
              userName="Alex Johnson"
              avatarSrc="/avatar3.svg"
              onNavigationItemClick={(id) => alert(`Nav: ${id}`)}
              onAvatarClick={() => alert("Avatar clicked!")}
            />
          </div>

          {/* Logged In with Initials Avatar */}
          <div className="border border-dashed border-gray-300 rounded">
            <h3 className="text-lg font-semibold p-4 bg-gray-50">
              Logged In - Initials Avatar
            </h3>
            <Header
              logoIcon={<IconFigma size="32" />}
              navigationItems={navigationItems}
              activeNavigationId="about"
              isLoggedIn={true}
              userName="Sarah Connor"
              onNavigationItemClick={(id) => alert(`Nav: ${id}`)}
              onAvatarClick={() => alert("Avatar clicked!")}
            />
          </div>
        </div>
      </section>

      {/* Mobile Testing Instructions */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Testing Instructions</h2>
        <div className="p-6 border border-dashed border-blue-400 rounded bg-blue-50">
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Desktop Testing (≥992px):</strong>
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-4">
              <li>Menu button should be hidden</li>
              <li>Navigation items displayed horizontally</li>
              <li>Auth component visible on the right</li>
              <li>Click navigation items to test interaction</li>
            </ul>

            <p className="text-sm mt-4">
              <strong>Mobile Testing (&lt;992px):</strong>
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-4">
              <li>Resize browser window to below 992px width</li>
              <li>Menu button (hamburger) should be visible</li>
              <li>Navigation and auth should be hidden initially</li>
              <li>Click menu button to open mobile menu</li>
              <li>Menu expands to full viewport height</li>
              <li>Navigation items displayed vertically</li>
              <li>Auth component displayed below navigation</li>
              <li>Close button (X icon) replaces menu button</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
