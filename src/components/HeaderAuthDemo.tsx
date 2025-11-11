import { useState } from "react";
import HeaderAuth from "../ui/primitives/HeaderAuth/HeaderAuth";

export function HeaderAuthDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

      {/* Logged Out State */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Logged Out State</h2>
        <div className="p-6 border border-dashed border-gray-300 rounded">
          <HeaderAuth
            isLoggedIn={false}
            onSignInClick={() => alert("Sign in clicked!")}
            onRegisterClick={() => alert("Register clicked!")}
            className="w-[400px]"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Displays "Sign in" (neutral) and "Register" (primary) buttons
        </p>
      </section>

      {/* Logged In State - With Initial Avatar */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Logged In State - Initial Avatar
        </h2>
        <div className="p-6 border border-dashed border-gray-300 rounded">
          <HeaderAuth
            isLoggedIn={true}
            userName="John Doe"
            onAvatarClick={() => alert("Avatar menu clicked!")}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Displays avatar with user initials and dropdown icon. Hover to see
          background change.
        </p>
      </section>

      {/* Logged In State - With Image Avatar */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Logged In State - Image Avatar
        </h2>
        <div className="p-6 border border-dashed border-gray-300 rounded">
          <HeaderAuth
            isLoggedIn={true}
            avatarSrc="/avatar1.svg"
            avatarAlt="Jane Smith"
            userName="Jane Smith"
            onAvatarClick={() => alert("Avatar menu clicked!")}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Displays avatar image with dropdown icon. Falls back to initials if
          image fails to load.
        </p>
      </section>

      {/* Interactive Demo with Toggle */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Interactive Demo</h2>
        <div className="p-6 border border-dashed border-blue-400 rounded bg-blue-50">
          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">
              Current State: {isLoggedIn ? "Logged In" : "Logged Out"}
            </p>
          </div>
          <HeaderAuth
            isLoggedIn={isLoggedIn}
            userName="Alex Johnson"
            avatarSrc="/avatar2.svg"
            avatarAlt="Alex Johnson"
            onAvatarClick={() => {
              alert("Avatar menu opened!");
              setIsLoggedIn(false);
            }}
            onSignInClick={() => {
              alert("Signing in...");
              setIsLoggedIn(true);
            }}
            onRegisterClick={() => {
              alert("Registering...");
              setIsLoggedIn(true);
            }}
            className={!isLoggedIn ? "w-[400px]" : ""}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Toggle the "Logged In" checkbox above or click the buttons to switch
          states. Clicking the avatar menu will log you out, clicking Sign
          in/Register will log you in.
        </p>
      </section>

      {/* Custom Button Text */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Custom Button Text (i18n Support)
        </h2>
        <div className="space-y-4">
          <div className="p-6 border border-dashed border-gray-300 rounded">
            <HeaderAuth
              isLoggedIn={false}
              signInText="Log In"
              registerText="Create Account"
              onSignInClick={() => alert("Log In clicked!")}
              onRegisterClick={() => alert("Create Account clicked!")}
              className="w-[400px]"
            />
          </div>
          <div className="p-6 border border-dashed border-gray-300 rounded">
            <HeaderAuth
              isLoggedIn={false}
              signInText="Se connecter"
              registerText="S'inscrire"
              onSignInClick={() => alert("Se connecter!")}
              onRegisterClick={() => alert("S'inscrire!")}
              className="w-[400px]"
            />
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Button text is configurable for internationalization support
        </p>
      </section>

      {/* Different User Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Multiple Users</h2>
        <div className="space-y-4">
          <div className="p-4 border border-dashed border-gray-300 rounded flex items-center gap-4">
            <span className="text-sm font-semibold w-32">Sarah Connor:</span>
            <HeaderAuth
              isLoggedIn={true}
              userName="Sarah Connor"
              onAvatarClick={() => alert("Sarah's menu")}
            />
          </div>
          <div className="p-4 border border-dashed border-gray-300 rounded flex items-center gap-4">
            <span className="text-sm font-semibold w-32">Mike Ross:</span>
            <HeaderAuth
              isLoggedIn={true}
              avatarSrc="/avatar3.svg"
              userName="Mike Ross"
              avatarAlt="Mike Ross"
              onAvatarClick={() => alert("Mike's menu")}
            />
          </div>
          <div className="p-4 border border-dashed border-gray-300 rounded flex items-center gap-4">
            <span className="text-sm font-semibold w-32">Rachel Green:</span>
            <HeaderAuth
              isLoggedIn={true}
              avatarSrc="/avatar4.svg"
              userName="Rachel Green"
              avatarAlt="Rachel Green"
              onAvatarClick={() => alert("Rachel's menu")}
            />
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
        <div className="p-6 border border-dashed border-green-400 rounded bg-green-50">
          <div className="space-y-2 mb-4">
            <p className="text-sm">
              <strong>✓</strong> Keyboard navigable (Tab to focus, Enter/Space
              to activate)
            </p>
            <p className="text-sm">
              <strong>✓</strong> ARIA labels for screen readers
            </p>
            <p className="text-sm">
              <strong>✓</strong> Focus visible indicator for keyboard users
            </p>
            <p className="text-sm">
              <strong>✓</strong> Semantic HTML (button elements)
            </p>
            <p className="text-sm">
              <strong>✓</strong> Proper button roles and labels
            </p>
          </div>
          <HeaderAuth
            isLoggedIn={true}
            userName="Accessible User"
            onAvatarClick={() => alert("Keyboard accessible!")}
          />
          <p className="text-sm text-gray-600 mt-4">
            Try navigating with Tab key and activating with Enter/Space
          </p>
        </div>
      </section>
    </div>
  );
}
