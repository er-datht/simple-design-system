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
    </div>
  );
}

export default App;
