import {
  IconActivity,
  IconAirplay,
  IconAlertCircle,
  IconAlertOctagon,
  IconAlertTriangle,
  IconAlignLeft,
  IconArchive,
  IconCheckCircle,
  IconPlus,
  IconTrash2,
} from "../ui/icons";

export function IconsDemo() {
  return (
    <div className="space-y-8">
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
    </div>
  );
}
