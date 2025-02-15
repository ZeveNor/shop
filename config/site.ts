export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Shop",
      href: "/docs",
    },
    {
      label: "News",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Shop",
      href: "/dashboard",
    },
    {
      label: "News",
      href: "/dashboard",
    },
    {
      label: "Contact",
      href: "/help-feedback",
    },
    {
      label: "Log out",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/ZeveNor",
    discord: "https://discord.gg/fCz6DHGrxt",
    sponsor: "",
    docs:"",
  },
};
