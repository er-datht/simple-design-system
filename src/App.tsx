import {
  IconActivity,
  IconAirplay,
  IconAlertCircle,
  IconAlertTriangle,
  IconAlignLeft,
} from "./ui/icons";

function App() {
  return (
    <div className="flex gap-1.5 justify-between items-center">
      <IconActivity size="40" />
      <IconAirplay size="40" />
      <IconAlertCircle size="40" />
      <IconAlertTriangle size="40" />
      <IconAlignLeft size="40" />
    </div>
  );
}

export default App;
