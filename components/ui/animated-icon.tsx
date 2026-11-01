import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Atom,
  Award,
  Beaker,
  Binary,
  BookMarked,
  BookOpen,
  Bot,
  Boxes,
  Brain,
  Calendar,
  CircuitBoard,
  Cloud,
  Code,
  Compass,
  Cpu,
  Database,
  FileText,
  Fingerprint,
  Flower2,
  Globe,
  Handshake,
  Heart,
  Hexagon,
  Layers,
  Leaf,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Mic,
  Microchip,
  Network,
  Orbit,
  Presentation,
  Radio,
  Rocket,
  Scan,
  Server,
  Share2,
  Shield,
  Sparkles,
  Star,
  Telescope,
  Users,
  Waves,
  Workflow,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/cn";

export type IconName =
  | "spark"
  | "network"
  | "mic"
  | "book"
  | "users"
  | "award"
  | "paper"
  | "calendar"
  | "pin"
  | "wave"
  | "journal"
  | "mail"
  | "globe"
  | "cpu"
  | "shield"
  | "cloud"
  | "rocket"
  | "presentation"
  | "chip"
  | "database"
  | "star"
  | "handshake"
  | "heart"
  | "lotus"
  | "lock"
  | "compass"
  | "brain"
  | "atom"
  | "orbit"
  | "layers"
  | "scan"
  | "hexagon"
  | "server"
  | "code"
  | "bot"
  | "zap"
  | "activity"
  | "beaker"
  | "light"
  | "binary"
  | "circuit"
  | "share"
  | "boxes"
  | "workflow"
  | "fingerprint"
  | "telescope"
  | "message"
  | "radio"
  | "leaf";

export type IconTone = "cyan" | "coral" | "violet" | "gold" | "teal" | "pink" | "cobalt" | "navy" | "rose";
export type IconMotion = "float" | "pulse" | "spin" | "none";

const icons: Record<IconName, LucideIcon> = {
  spark: Sparkles,
  network: Network,
  mic: Mic,
  book: BookOpen,
  users: Users,
  award: Award,
  paper: FileText,
  calendar: Calendar,
  pin: MapPin,
  wave: Waves,
  journal: BookMarked,
  mail: Mail,
  globe: Globe,
  cpu: Cpu,
  shield: Shield,
  cloud: Cloud,
  rocket: Rocket,
  presentation: Presentation,
  chip: Microchip,
  database: Database,
  star: Star,
  handshake: Handshake,
  heart: Heart,
  lotus: Flower2,
  lock: Lock,
  compass: Compass,
  brain: Brain,
  atom: Atom,
  orbit: Orbit,
  layers: Layers,
  scan: Scan,
  hexagon: Hexagon,
  server: Server,
  code: Code,
  bot: Bot,
  zap: Zap,
  activity: Activity,
  beaker: Beaker,
  light: Lightbulb,
  binary: Binary,
  circuit: CircuitBoard,
  share: Share2,
  boxes: Boxes,
  workflow: Workflow,
  fingerprint: Fingerprint,
  telescope: Telescope,
  message: MessageSquare,
  radio: Radio,
  leaf: Leaf,
};

export function AnimatedIcon({
  name,
  tone = "cobalt",
  size = "md",
  className,
  delay = 0,
  motion = "float",
  variant = "bubble",
}: {
  name: IconName;
  tone?: IconTone;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  delay?: number;
  motion?: IconMotion;
  variant?: "bubble" | "plain";
}) {
  const Icon = icons[name];

  if (variant === "plain") {
    return (
      <Icon
        className={cn("icon-plain", `tone-${tone}`, className)}
        strokeWidth={1.7}
        aria-hidden
      />
    );
  }

  return (
    <span
      className={cn("icon-bubble", `icon-${size}`, `tone-${tone}`, motion !== "none" && `icon-motion-${motion}`, className)}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden
    >
      <Icon strokeWidth={1.7} />
    </span>
  );
}
