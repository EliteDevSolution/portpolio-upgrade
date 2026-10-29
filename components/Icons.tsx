import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
    </svg>
  );
}

export function AboutIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.2c1.4-3 3.7-4.5 6.5-4.5s5.1 1.5 6.5 4.5" />
    </svg>
  );
}

export function WorkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.2" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" />
    </svg>
  );
}

export function BlogIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 3.5h7.5L19 8v12.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1z" />
      <path d="M14 3.5V8h5" />
      <path d="M9 13h6M9 16.5h4" />
    </svg>
  );
}

export function GalleryIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.4" />
      <path d="m7 16.5 3.2-3.2 2.2 2.2 2-2.4 2.6 3.4" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16.5 14.5A6.5 6.5 0 0 1 9.2 6 6.5 6.5 0 1 0 16.5 14.5z" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3.5v1.8M12 18.7v1.8M3.5 12h1.8M18.7 12h1.8M6 6l1.3 1.3M16.7 16.7 18 18M18 6l-1.3 1.3M7.3 16.7 6 18" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg {...base({ ...props, fill: "currentColor", stroke: "none" })}>
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.47.09.64-.2.64-.46v-1.6c-2.62.57-3.17-1.12-3.17-1.12-.43-1.08-1.04-1.37-1.04-1.37-.85-.58.06-.57.06-.57.94.07 1.44.97 1.44.97.84 1.43 2.2 1.02 2.73.78.09-.6.33-1.02.6-1.25-2.09-.24-4.29-1.05-4.29-4.66 0-1.03.37-1.87.97-2.53-.1-.24-.42-1.2.09-2.5 0 0 .8-.26 2.6.97a9 9 0 0 1 4.74 0c1.8-1.23 2.6-.97 2.6-.97.51 1.3.19 2.26.09 2.5.6.66.97 1.5.97 2.53 0 3.62-2.2 4.41-4.3 4.65.34.29.64.87.64 1.76v2.61c0 .26.17.56.65.46A9.5 9.5 0 0 0 12 2.5z" />
    </svg>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6L19.5 7" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5a8.2 8.2 0 0 0-7.1 12.3L4 20.5l4.9-1.1A8.2 8.2 0 1 0 12 3.5z" />
      <path d="M9.2 9.6c.2 1.6 1.6 3.2 3.2 3.8l1.1-.8c.2-.1.4-.1.6 0l1.3.6c.3.1.4.4.3.7-.2.7-.9 1.3-1.6 1.3-2.6 0-5.4-2.6-5.8-5.2-.1-.6.3-1.2 1-1.4.2 0 .4 0 .5.2z" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m20.5 5.2-2.6 13.2c-.2.9-.7 1.1-1.5.7l-4.1-3-2 1.9c-.2.2-.4.4-.8.4l.3-4.2 7.6-6.9c.3-.3 0-.5-.5-.2L6.7 12.4 2.7 11.1c-.9-.3-.9-.9.2-1.3L19.2 4c.7-.3 1.4.2 1.3 1.2z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.2 2.3 3.3 5 3.3 8s-1.1 5.7-3.3 8c-2.2-2.3-3.3-5-3.3-8s1.1-5.7 3.3-8z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="5.5" width="16" height="14" rx="2" />
      <path d="M8 3.8v3.2M16 3.8v3.2M4 10h16" />
    </svg>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 11v5" />
      <circle cx="12" cy="8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

const map = {
  github: GithubIcon,
  email: EmailIcon,
  whatsapp: WhatsappIcon,
  telegram: TelegramIcon,
};

export function SocialIcon({
  name,
  ...props
}: IconProps & { name: string }) {
  const Icon = map[name as keyof typeof map] ?? EmailIcon;
  return <Icon {...props} />;
}
