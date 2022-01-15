import { QUICK_LINKS_ICONS } from "assets/images";

const QUICK_LINKS: Record<string, { icon: JSX.Element; link: string }> = {
  facebook: {
    icon: QUICK_LINKS_ICONS.facebook,
    link: "https://www.facebook.com/cataldo.cianciaruso",
  },
  twitter: {
    icon: QUICK_LINKS_ICONS.twitter,
    link: "https://twitter.com/L_Lawliet_93",
  },
  github: {
    icon: QUICK_LINKS_ICONS.github,
    link: "https://github.com/CianciarusoCataldo",
  },
  linkedIn: {
    icon: QUICK_LINKS_ICONS.linkedIn,
    link: "https://www.linkedin.com/in/cataldo-cianciaruso",
  },
  instagram: {
    icon: QUICK_LINKS_ICONS.instagram,
    link: "https://www.instagram.com/ziocat_/",
  },
  bit: {
    icon: QUICK_LINKS_ICONS.bit,
    link: "https://bit.dev/cianciarusocataldo",
  },
  mail: {
    icon: QUICK_LINKS_ICONS.mail,
    link: "mailto:cianciaruso.cataldo@gmail.com",
  },
  telegram: { icon: QUICK_LINKS_ICONS.telegram, link: "https://t.me/Zio_Cat" },
} as const;

export default QUICK_LINKS;
