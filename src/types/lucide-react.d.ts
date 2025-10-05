declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';

  interface LucideIconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = ComponentType<LucideIconProps>;

  // Re-export all Lucide icons with proper typing
  export const Activity: LucideIcon;
  export const Airplay: LucideIcon;
  // Add other Lucide icons as needed
  export const X: LucideIcon;
  export const Menu: LucideIcon;
  export const Phone: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Clock: LucideIcon;
  export const Facebook: LucideIcon;
  export const Twitter: LucideIcon;
  export const Instagram: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Award: LucideIcon;
  export const Briefcase: LucideIcon;
}
