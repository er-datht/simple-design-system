import {
  IconActivity,
  IconAirplay,
  IconAlertCircle,
  IconAlertOctagon,
  IconAlertTriangle,
  IconAlignLeft,
  IconArchive,
  IconCheckCircle,
  IconChevronRight,
  IconPlus,
  IconTrash2,
} from "./ui/icons";
import {
  Button,
  ButtonDanger,
  IconButton,
  ButtonGroup,
} from "./ui/primitives/Button";
import { Avatar, AvatarGroup, AvatarBlock } from "./ui/primitives/Avatar";

function App() {
  return (
    <div className="p-8 space-y-8">
      {/* Icons Demo */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Icons</h2>
        <div className="flex gap-1.5 justify-between items-center">
          <IconActivity size="40" />
          <IconAirplay size="40" />
          <IconAlertCircle size="40" />
          <IconAlertTriangle size="40" />
          <IconAlignLeft size="40" />
          <IconCheckCircle size="40" />
          <IconPlus size="40" />
          <IconTrash2 size="40" />
          <IconTrash2 size="40" />
          <IconAlertOctagon size="40" />
          <IconArchive size="40" />
        </div>
      </section>

      {/* Button Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary Button</Button>
          <Button variant="neutral">Neutral Button</Button>
          <Button variant="subtle">Subtle Button</Button>
        </div>
      </section>

      {/* Button Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </section>

      {/* Button with Icons */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" iconStart={<IconCheckCircle size="16" />}>
            With Left Icon
          </Button>
          <Button variant="neutral" iconEnd={<IconPlus size="16" />}>
            With Right Icon
          </Button>
        </div>
      </section>

      {/* IconButton */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Icon Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <IconButton
            variant="primary"
            icon={<IconCheckCircle size="20" />}
            aria-label="Check"
          />
          <IconButton
            variant="neutral"
            icon={<IconPlus size="20" />}
            aria-label="Add"
          />
          <IconButton
            variant="subtle"
            icon={<IconTrash2 size="20" />}
            aria-label="Delete"
          />
          <IconButton
            variant="primary"
            size="sm"
            icon={<IconCheckCircle size="16" />}
            aria-label="Small check"
          />
          <IconButton
            variant="primary"
            size="lg"
            icon={<IconCheckCircle size="24" />}
            aria-label="Large check"
          />
          <IconButton
            variant="primary"
            icon={<IconCheckCircle size="20" />}
            aria-label="Disabled check"
            disabled
          />
        </div>
      </section>

      {/* Disabled Buttons */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Disabled States</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" disabled>
            Disabled Primary
          </Button>
          <Button variant="neutral" disabled>
            Disabled Neutral
          </Button>
          <Button variant="subtle" disabled>
            Disabled Subtle
          </Button>
          <ButtonDanger disabled>Disabled Danger Button</ButtonDanger>
        </div>
      </section>

      {/* ButtonDanger */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Danger Button</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <ButtonDanger>Primary Button</ButtonDanger>
          <ButtonDanger variant="subtle">Subtle Button</ButtonDanger>
          <ButtonDanger iconStart={<IconTrash2 size="16" />}>
            Delete with Icon
          </ButtonDanger>
          <ButtonDanger size="sm">Small Danger</ButtonDanger>
          <ButtonDanger size="lg">Large Danger</ButtonDanger>
        </div>
      </section>

      {/* ButtonGroup */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Button Groups</h2>
        <div className="space-y-4">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Justify Group</h3>
            <div className="mt-2 p-4 rounded border border-dashed border-amber-600">
              <ButtonGroup align="justify">
                <Button variant="neutral">Button 1</Button>
                <IconButton
                  variant="primary"
                  icon={<IconPlus size="16" />}
                  aria-label="Add"
                />
                <Button variant="subtle">Button 3</Button>
              </ButtonGroup>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold">Start Group</h3>
            <div className="mt-2 p-4 rounded border border-dashed border-amber-600">
              <ButtonGroup align="start">
                <Button variant="neutral">Button 1</Button>
                <Button
                  variant="neutral"
                  iconEnd={<IconChevronRight size="16" />}
                >
                  Button 2
                </Button>
                <ButtonDanger variant="primary">Button 3</ButtonDanger>
              </ButtonGroup>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold">Center Group</h3>
            <div className="mt-2 p-4 rounded border border-dashed border-amber-600">
              <ButtonGroup align="center">
                <Button variant="primary">Button 1</Button>
                <Button variant="neutral">Button 2</Button>
                <ButtonDanger variant="primary">Button 3</ButtonDanger>
              </ButtonGroup>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold">End Group</h3>
            <div className="mt-2 p-4 rounded border border-dashed border-amber-600">
              <ButtonGroup align="end">
                <Button variant="primary">Save</Button>
                <Button variant="neutral">Cancel</Button>
                <ButtonDanger>Delete</ButtonDanger>
              </ButtonGroup>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold">Stack Group</h3>
            <div className="mt-2 p-4 rounded border border-dashed border-amber-600">
              <ButtonGroup align="stack">
                <Button variant="primary">Save</Button>
                <Button variant="neutral">Cancel</Button>
                <ButtonDanger>Delete</ButtonDanger>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Avatar Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Avatar Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar type="initial" name="John Doe" size="sm" />
          <Avatar type="initial" name="Jane Smith" size="md" />
          <Avatar type="initial" name="Alex Johnson" size="lg" />
        </div>
      </section>

      {/* Avatar Shapes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Avatar Shapes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar
            type="initial"
            name="Circle Avatar"
            shape="circle"
            size="md"
          />
          <Avatar
            type="initial"
            name="Square Avatar"
            shape="square"
            size="md"
          />
        </div>
      </section>

      {/* Avatar Types - Initial */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Initial Avatars</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar type="initial" name="Alice Brown" size="sm" shape="circle" />
          <Avatar type="initial" name="Bob Wilson" size="md" shape="circle" />
          <Avatar
            type="initial"
            name="Charlie Davis"
            size="lg"
            shape="circle"
          />
          <Avatar type="initial" name="Diana Prince" size="sm" shape="square" />
          <Avatar type="initial" name="Ethan Hunt" size="md" shape="square" />
          <Avatar type="initial" name="Fiona Apple" size="lg" shape="square" />
        </div>
      </section>

      {/* Avatar Types - Image */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Image Avatars</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar
            type="image"
            src="/avatar1.svg"
            alt="User 1"
            size="sm"
            shape="circle"
          />
          <Avatar
            type="image"
            src="/avatar2.svg"
            alt="User 2"
            size="md"
            shape="circle"
          />
          <Avatar
            type="image"
            src="/avatar3.svg"
            alt="User 3"
            size="lg"
            shape="circle"
          />
          <Avatar
            type="image"
            src="/avatar4.svg"
            alt="User 1"
            size="sm"
            shape="square"
          />
          <Avatar
            type="image"
            src="/avatar5.svg"
            alt="User 2"
            size="md"
            shape="square"
          />
          <Avatar
            type="image"
            src="/avatar4.svg"
            alt="User 4"
            size="lg"
            shape="circle"
          />
        </div>
      </section>

      {/* Avatar with Click Handler */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Interactive Avatars</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar
            type="initial"
            name="Clickable"
            size="md"
            onClick={() => alert("Avatar clicked!")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <Avatar
            type="image"
            src="/avatar3.svg"
            alt="Clickable User"
            size="md"
            onClick={() => alert("Image avatar clicked!")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </section>

      {/* Avatar Image Fallback Demo */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Image Fallback (Broken Image)
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar
            type="image"
            src="/non-existent-image.jpg"
            alt="Fallback User"
            size="md"
            shape="circle"
          />
          <p className="text-sm text-gray-600">
            This avatar has a broken image URL, so it falls back to showing the
            first character of the alt text
          </p>
        </div>
      </section>

      {/* AvatarGroup - Spaced */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Avatar Group - Spaced</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">
              Small Avatars (Circle)
            </h3>
            <AvatarGroup spacing="spaced">
              <Avatar
                type="initial"
                name="Alice Brown"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Bob Wilson"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Charlie Davis"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Diana Prince"
                size="sm"
                shape="circle"
              />
            </AvatarGroup>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">
              Medium Avatars (Circle)
            </h3>
            <AvatarGroup spacing="spaced">
              <Avatar
                type="image"
                src="/avatar1.svg"
                alt="User 1"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar2.svg"
                alt="User 2"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar3.svg"
                alt="User 3"
                size="md"
                shape="circle"
              />
            </AvatarGroup>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">
              Large Avatars (Square)
            </h3>
            <AvatarGroup spacing="spaced">
              <Avatar type="initial" name="John Doe" size="lg" shape="square" />
              <Avatar
                type="initial"
                name="Jane Smith"
                size="lg"
                shape="square"
              />
              <Avatar
                type="initial"
                name="Alex Johnson"
                size="lg"
                shape="square"
              />
            </AvatarGroup>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">
              Mixed Types (Image + Initial)
            </h3>
            <AvatarGroup spacing="spaced">
              <Avatar
                type="image"
                src="/avatar1.svg"
                alt="User 1"
                size="md"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Bob Wilson"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar3.svg"
                alt="User 3"
                size="md"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Diana Prince"
                size="md"
                shape="circle"
              />
            </AvatarGroup>
          </div>
        </div>
      </section>

      {/* AvatarGroup - Overlap */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Avatar Group - Overlap</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">
              Small Avatars (Circle)
            </h3>
            <AvatarGroup spacing="overlap">
              <Avatar
                type="initial"
                name="Alice Brown"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Bob Wilson"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Charlie Davis"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Diana Prince"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Ethan Hunt"
                size="sm"
                shape="circle"
              />
            </AvatarGroup>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">
              Medium Avatars (Circle)
            </h3>
            <AvatarGroup spacing="overlap">
              <Avatar
                type="image"
                src="/avatar1.svg"
                alt="User 1"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar2.svg"
                alt="User 2"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar3.svg"
                alt="User 3"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar4.svg"
                alt="User 4"
                size="md"
                shape="circle"
              />
            </AvatarGroup>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">
              Large Avatars (Square)
            </h3>
            <AvatarGroup spacing="overlap">
              <Avatar type="initial" name="John Doe" size="lg" shape="square" />
              <Avatar
                type="initial"
                name="Jane Smith"
                size="lg"
                shape="square"
              />
              <Avatar
                type="initial"
                name="Alex Johnson"
                size="lg"
                shape="square"
              />
            </AvatarGroup>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">
              Mixed Types (Image + Initial)
            </h3>
            <AvatarGroup spacing="overlap">
              <Avatar
                type="image"
                src="/avatar1.svg"
                alt="User 1"
                size="md"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Bob Wilson"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar3.svg"
                alt="User 3"
                size="md"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Diana Prince"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar5.svg"
                alt="User 5"
                size="md"
                shape="circle"
              />
            </AvatarGroup>
          </div>
        </div>
      </section>

      {/* AvatarGroup - Comparison */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Avatar Group - Spacing Comparison
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded border border-dashed border-blue-400">
            <h3 className="text-sm font-semibold mb-2">Spaced</h3>
            <AvatarGroup spacing="spaced">
              <Avatar
                type="image"
                src="/avatar1.svg"
                alt="User 1"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar2.svg"
                alt="User 2"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar3.svg"
                alt="User 3"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar4.svg"
                alt="User 4"
                size="md"
                shape="circle"
              />
            </AvatarGroup>
          </div>

          <div className="p-4 rounded border border-dashed border-purple-400">
            <h3 className="text-sm font-semibold mb-2">Overlap</h3>
            <AvatarGroup spacing="overlap">
              <Avatar
                type="image"
                src="/avatar1.svg"
                alt="User 1"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar2.svg"
                alt="User 2"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar3.svg"
                alt="User 3"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar4.svg"
                alt="User 4"
                size="md"
                shape="circle"
              />
            </AvatarGroup>
          </div>
        </div>
      </section>

      {/* AvatarGroup - With Overflow Count */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Avatar Group - With Overflow Count
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded border border-dashed border-yellow-600">
            <h3 className="text-sm font-semibold mb-2">
              Spaced - Show 3, +2 overflow
            </h3>
            <AvatarGroup spacing="spaced" showOverflow maxVisible={3}>
              <Avatar
                type="image"
                src="/avatar1.svg"
                alt="User 1"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar2.svg"
                alt="User 2"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar3.svg"
                alt="User 3"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar4.svg"
                alt="User 4"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar5.svg"
                alt="User 5"
                size="md"
                shape="circle"
              />
            </AvatarGroup>
          </div>

          <div className="p-4 rounded border border-dashed border-yellow-600">
            <h3 className="text-sm font-semibold mb-2">
              Overlap - Show 4, +3 overflow
            </h3>
            <AvatarGroup spacing="overlap" showOverflow maxVisible={4}>
              <Avatar
                type="initial"
                name="Alice Brown"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Bob Wilson"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Charlie Davis"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Diana Prince"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Ethan Hunt"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Fiona Apple"
                size="sm"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="George Miller"
                size="sm"
                shape="circle"
              />
            </AvatarGroup>
          </div>

          <div className="p-4 rounded border border-dashed border-green-400">
            <h3 className="text-sm font-semibold mb-2">
              Spaced - Show 2, +4 overflow (Large)
            </h3>
            <AvatarGroup spacing="spaced" showOverflow maxVisible={2}>
              <Avatar type="initial" name="John Doe" size="lg" shape="circle" />
              <Avatar
                type="initial"
                name="Jane Smith"
                size="lg"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Alex Johnson"
                size="lg"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Sarah Connor"
                size="lg"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Mike Ross"
                size="lg"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Rachel Green"
                size="lg"
                shape="circle"
              />
            </AvatarGroup>
          </div>

          <div className="p-4 rounded border border-dashed border-green-400">
            <h3 className="text-sm font-semibold mb-2">
              Overlap - Show 3, +1 overflow (Mixed Types)
            </h3>
            <AvatarGroup spacing="overlap" showOverflow maxVisible={3}>
              <Avatar
                type="image"
                src="/avatar1.svg"
                alt="User 1"
                size="md"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Bob Wilson"
                size="md"
                shape="circle"
              />
              <Avatar
                type="image"
                src="/avatar3.svg"
                alt="User 3"
                size="md"
                shape="circle"
              />
              <Avatar
                type="initial"
                name="Diana Prince"
                size="md"
                shape="circle"
              />
            </AvatarGroup>
          </div>
        </div>
      </section>

      {/* AvatarBlock - Basic */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Avatar Block</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">With Description</h3>
            <div className="flex flex-wrap gap-4">
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="John Doe"
                    size="md"
                    shape="circle"
                  />
                }
                title="John Doe"
                description="Software Engineer"
              />
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="Jane Smith"
                    size="md"
                    shape="circle"
                  />
                }
                title="Jane Smith"
                description="Product Manager"
              />
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="Alex Johnson"
                    size="md"
                    shape="circle"
                  />
                }
                title="Alex Johnson"
                description="UX Designer"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">Without Description</h3>
            <div className="flex flex-wrap gap-4">
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="Bob Wilson"
                    size="md"
                    shape="circle"
                  />
                }
                title="Bob Wilson"
              />
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="Charlie Davis"
                    size="md"
                    shape="circle"
                  />
                }
                title="Charlie Davis"
              />
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="Diana Prince"
                    size="md"
                    shape="circle"
                  />
                }
                title="Diana Prince"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AvatarBlock - Different Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Avatar Block - Different Sizes
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">Small Avatar</h3>
            <div className="flex flex-wrap gap-4">
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="Alice Brown"
                    size="sm"
                    shape="circle"
                  />
                }
                title="Alice Brown"
                description="Junior Developer"
              />
              <AvatarBlock
                avatar={
                  <Avatar
                    type="image"
                    src="/avatar1.svg"
                    alt="User 1"
                    size="sm"
                    shape="circle"
                  />
                }
                title="User One"
                description="Marketing Lead"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">
              Medium Avatar (Default)
            </h3>
            <div className="flex flex-wrap gap-4">
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="Bob Wilson"
                    size="md"
                    shape="circle"
                  />
                }
                title="Bob Wilson"
                description="Senior Engineer"
              />
              <AvatarBlock
                avatar={
                  <Avatar
                    type="image"
                    src="/avatar2.svg"
                    alt="User 2"
                    size="md"
                    shape="circle"
                  />
                }
                title="User Two"
                description="Sales Manager"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">Large Avatar</h3>
            <div className="flex flex-wrap gap-4">
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="Charlie Davis"
                    size="lg"
                    shape="circle"
                  />
                }
                title="Charlie Davis"
                description="Engineering Director"
              />
              <AvatarBlock
                avatar={
                  <Avatar
                    type="image"
                    src="/avatar3.svg"
                    alt="User 3"
                    size="lg"
                    shape="circle"
                  />
                }
                title="User Three"
                description="VP of Operations"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AvatarBlock - Different Shapes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Avatar Block - Different Shapes
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">
              Circle Shape (Default)
            </h3>
            <div className="flex flex-wrap gap-4">
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="Ethan Hunt"
                    size="md"
                    shape="circle"
                  />
                }
                title="Ethan Hunt"
                description="Security Analyst"
              />
              <AvatarBlock
                avatar={
                  <Avatar
                    type="image"
                    src="/avatar4.svg"
                    alt="User 4"
                    size="md"
                    shape="circle"
                  />
                }
                title="User Four"
                description="Data Scientist"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">Square Shape</h3>
            <div className="flex flex-wrap gap-4">
              <AvatarBlock
                avatar={
                  <Avatar
                    type="initial"
                    name="Fiona Apple"
                    size="md"
                    shape="square"
                  />
                }
                title="Fiona Apple"
                description="Creative Director"
              />
              <AvatarBlock
                avatar={
                  <Avatar
                    type="image"
                    src="/avatar5.svg"
                    alt="User 5"
                    size="md"
                    shape="square"
                  />
                }
                title="User Five"
                description="Brand Manager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AvatarBlock - Image Avatars */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Avatar Block - Image Avatars
        </h2>
        <div className="flex flex-wrap gap-4">
          <AvatarBlock
            avatar={
              <Avatar
                type="image"
                src="/avatar1.svg"
                alt="Sarah Connor"
                size="md"
                shape="circle"
              />
            }
            title="Sarah Connor"
            description="Chief Technology Officer"
          />
          <AvatarBlock
            avatar={
              <Avatar
                type="image"
                src="/avatar2.svg"
                alt="Mike Ross"
                size="md"
                shape="circle"
              />
            }
            title="Mike Ross"
            description="Legal Consultant"
          />
          <AvatarBlock
            avatar={
              <Avatar
                type="image"
                src="/avatar3.svg"
                alt="Rachel Green"
                size="md"
                shape="circle"
              />
            }
            title="Rachel Green"
            description="Fashion Coordinator"
          />
          <AvatarBlock
            avatar={
              <Avatar
                type="image"
                src="/avatar4.svg"
                alt="Ross Geller"
                size="md"
                shape="circle"
              />
            }
            title="Ross Geller"
            description="Paleontologist"
          />
        </div>
      </section>

      {/* AvatarBlock - Interactive */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Avatar Block - Interactive</h2>
        <div className="flex flex-wrap gap-4">
          <AvatarBlock
            avatar={
              <Avatar
                type="initial"
                name="Clickable User"
                size="md"
                shape="circle"
              />
            }
            title="Clickable User"
            description="Click to see alert"
            onClick={() => alert("Avatar Block clicked!")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <AvatarBlock
            avatar={
              <Avatar
                type="image"
                src="/avatar1.svg"
                alt="Interactive User"
                size="md"
                shape="circle"
              />
            }
            title="Interactive User"
            description="Hover and click me"
            onClick={() => alert("Image Avatar Block clicked!")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
