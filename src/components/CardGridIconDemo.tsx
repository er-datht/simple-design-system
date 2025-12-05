import { CardGridIcon } from "../ui/sections/CardGridIcon";
import { IconSettings } from "../ui/icons/IconSettings";
import { IconShield } from "../ui/icons/IconShield";
import { IconZap } from "../ui/icons/IconZap";
import { IconTrendingUp } from "../ui/icons/IconTrendingUp";
import { IconUsers } from "../ui/icons/IconUsers";
import { IconClock } from "../ui/icons/IconClock";

export default function CardGridIconDemo() {
  return (
    <div style={{ padding: "40px 0" }}>
      <CardGridIcon
        heading="Key Features"
        subheading="Everything you need in one powerful platform"
        cards={[
          {
            icon: <IconSettings size="32" />,
            title: "Easy Setup",
            description:
              "Get started in minutes with our intuitive setup process and comprehensive documentation.",
          },
          {
            icon: <IconShield size="32" />,
            title: "Enterprise Security",
            description:
              "Bank-grade encryption and security protocols keep your data safe and compliant.",
          },
          {
            icon: <IconZap size="32" />,
            title: "Lightning Fast",
            description:
              "Optimized performance ensures your team stays productive without delays or bottlenecks.",
          },
          {
            icon: <IconTrendingUp size="32" />,
            title: "Scalable Growth",
            description:
              "Seamlessly scale from startup to enterprise without changing your infrastructure.",
          },
          {
            icon: <IconUsers size="32" />,
            title: "Team Collaboration",
            description:
              "Real-time collaboration tools keep everyone on the same page, anywhere in the world.",
          },
          {
            icon: <IconClock size="32" />,
            title: "24/7 Support",
            description:
              "Round-the-clock support from our expert team ensures you're never stuck or alone.",
          },
        ]}
      />
    </div>
  );
}
