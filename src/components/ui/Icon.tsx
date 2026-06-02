import { cn } from "@/lib/cn";

interface IconProps {
  name: string;
  className?: string;
}

const paths: Record<string, React.ReactNode> = {
  stethoscope: (
    <>
      <path d="M11 2v2M9 4h4M10 6v4a3 3 0 0 0 6 0V6" />
      <path d="M16 10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6h16v4a4 4 0 0 1-4 4h-4" />
    </>
  ),
  scan: (
    <>
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  "heart-pulse": (
    <>
      <path d="M19.5 12.572a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
      <path d="M12 8v4l2 2" />
    </>
  ),
  baby: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
    </>
  ),
  tooth: (
    <path d="M12 2c-2 0-3.5 1.5-3.5 3.5 0 1.5.5 2.5 1 3.5-.5 1-1 2-1 3.5 0 2 1 3.5 2.5 3.5s2.5-1.5 2.5-3.5c0-1.5-.5-2.5-1-3.5.5-1 1-2 1-3.5C15.5 3.5 14 2 12 2z" />
  ),
  flask: (
    <>
      <path d="M9 3h6v7l4 9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2l4-9V3z" />
      <path d="M9 3h6" />
    </>
  ),
  wave: (
    <>
      <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      <path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  equipment: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M12 4v5M12 15v5M4 12h5M15 12h5" />
    </>
  ),
  doctors: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
    </>
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  "user-check": (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m16 11 2 2 4-4" />
    </>
  ),
  shield: (
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  ),
  microscope: (
    <>
      <path d="M6 18h8" />
      <path d="M10 22v-4" />
      <path d="M12 2v8" />
      <path d="m16 6-4 4-4-4" />
      <circle cx="10" cy="14" r="4" />
    </>
  ),
  sofa: (
    <>
      <path d="M4 14V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
      <path d="M2 14h20v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3z" />
      <path d="M6 18v2M18 18v2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  telegram: (
    <path d="m22 2-7 20-4-9-9-4Z M22 2 11 13" />
  ),
  cross: (
    <>
      <path d="M12 6v12M6 12h12" />
      <circle cx="12" cy="12" r="10" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="M18 6 6 18M6 6l12 12" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>
  ),
  moon: (
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  ),
  arrow: (
    <>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </>
  ),
  quote: (
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z" />
  ),
  map: (
    <>
      <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
      <path d="M8 2v16M16 6v16" />
    </>
  ),
  star: (
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),
};

export function Icon({ name, className }: IconProps) {
  const content = paths[name];

  if (!content) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
