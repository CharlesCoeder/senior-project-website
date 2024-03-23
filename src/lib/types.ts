import { IconType } from "react-icons";

export interface NavItem {
  title: string;
  href: string;
  icon: IconType;
  color?: string;
  isChildren?: boolean;
  children?: NavItem[];
}
