import {
  FaHome,
  FaProjectDiagram,
  FaRaspberryPi,
  FaBrain,
  FaNetworkWired,
  FaChartLine,
  FaTools,
  FaLightbulb,
  FaUsers,
  FaBook,
  FaEnvelope,
  FaBlog,
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { type NavItem } from "@/lib/types";

export const NavItems: NavItem[] = [
  {
    title: "Home",
    icon: FaHome,
    href: "/",
    color: "text-sky-500",
  },
  {
    title: "Project Overview",
    icon: FaProjectDiagram,
    href: "/project-overview",
    color: "text-green-500",
  },
  {
    title: "Technical Details",
    icon: GrTechnology,
    href: "/technical-details",
    color: "text-purple-500",
    isChildren: true,
    children: [
      {
        title: "Raspberry Pi & Sensors",
        icon: FaRaspberryPi,
        href: "/raspberry-pi",
        color: "text-red-500",
      },
      {
        title: "Federated Learning",
        icon: FaBrain,
        href: "/federated-learning",
        color: "text-yellow-500",
      },
      {
        title: "Blockchain Technology",
        icon: SiBlockchaindotcom,
        href: "/blockchain",
        color: "text-blue-500",
      },
    ],
  },
  {
    title: "Architecture & Workflow",
    icon: FaNetworkWired,
    href: "/architecture-workflow",
    color: "text-orange-500",
  },
  {
    title: "Results & Analysis",
    icon: FaChartLine,
    href: "/results-analysis",
    color: "text-teal-500",
  },
  {
    title: "Challenges & Solutions",
    icon: FaTools,
    href: "/challenges-solutions",
    color: "text-gray-500",
  },
  {
    title: "Future Work & Applications",
    icon: FaLightbulb,
    href: "/future-work",
    color: "text-indigo-500",
  },
  {
    title: "Blog/Updates",
    icon: FaBlog,
    href: "/blog-updates",
    color: "text-cyan-500",
  },
  {
    title: "Resources & References",
    icon: FaBook,
    href: "/resources-references",
    color: "text-brown-500",
  },
  {
    title: "About the Team",
    icon: FaUsers,
    href: "/about-team",
    color: "text-blue-800",
  },
  {
    title: "Contact Information",
    icon: FaEnvelope,
    href: "/contact",
    color: "text-green-700",
  },
];
