import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconWasher(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <circle cx="12" cy="13" r="1.6" />
      <circle cx="8" cy="6" r="0.6" fill="currentColor" />
      <circle cx="11" cy="6" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconDryer(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M9.5 13a2.5 2.5 0 0 1 5 0" />
      <circle cx="8" cy="6" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconCoin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M9.5 10.2c0-1 1.1-1.7 2.5-1.7s2.5.7 2.5 1.7-1.1 1.6-2.5 1.6-2.5.7-2.5 1.7 1.1 1.7 2.5 1.7 2.5-.7 2.5-1.7" />
    </svg>
  );
}

export function IconDrop(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3s6 6.4 6 10.5A6 6 0 0 1 6 13.5C6 9.4 12 3 12 3Z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.3" />
    </svg>
  );
}

export function IconIron(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 15a8 8 0 0 1 8-6h9v3a3 3 0 0 1-3 3H3Z" />
      <path d="M3 18h11" />
      <path d="M15 9V6a1 1 0 0 0-1-1h-2" />
    </svg>
  );
}

export function IconTools(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a3.5 3.5 0 0 0-4.6 4.6l-6 6a1.5 1.5 0 0 0 2 2l6-6a3.5 3.5 0 0 0 4.6-4.6l-2 2-1.8-.2-.2-1.8Z" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8L15 10" />
    </svg>
  );
}

export function IconChip(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  );
}

export function IconScale(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v16M6 20h12" />
      <path d="M12 6 5 9l2 3a3 3 0 0 1-4 0l2-3M12 6l7 3-2 3a3 3 0 0 0 4 0l-2-3" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 16.5l9 5 9-5" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.9c0 1.76.46 3.45 1.34 4.95L2 22l5.29-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.42 1.32-1.95 1.36-.5.05-1.13.24-3.66-.77-3.08-1.22-5.05-4.37-5.2-4.57-.15-.2-1.24-1.65-1.24-3.15s.79-2.24 1.07-2.54c.28-.3.61-.38.81-.38.2 0 .41 0 .58.01.19.01.44-.07.68.53.24.6.83 2.06.9 2.2.07.15.12.32.02.52-.1.2-.15.32-.29.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.64-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.28.1 1.75.83 2.05.98.3.15.5.22.57.35.07.12.07.72-.17 1.4Z" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
