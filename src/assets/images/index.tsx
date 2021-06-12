import React from "react";

import FrameworksIcon from "./icons/frameworks-icon.svg";
import WorkIcon from "./icons/work-icon.svg";
import DegreeIcon from "./icons/degree-icon.svg";
import DevelopingIcon from "./icons/code-icon.svg";
import SkillsIcon from "./icons/skills-icon.svg";
import MusicIcon from "./icons/music-icon.svg";
import SongIcon from "./icons/song-icon.svg";

import GithubLogo from "./quick_links/github-logo.svg";
import TwitterLogo from "./quick_links/twitter-logo.svg";
import FacebookLogo from "./quick_links/facebook-logo.svg";
import LinkedinLogo from "./quick_links/linkedin-logo.svg";
import CvLogo from "./quick_links/cv-logo.png";
import BitLogo from "./quick_links/bit-logo.svg";
import InstagramLogo from "./quick_links/instagram-logo.svg";
import MailLogo from "./quick_links/mail-logo.svg";
import TelegramLogo from "./quick_links/telegram-logo.svg";

import LeftArrow from "./left-arrow.svg";
import Burger from "./burger.svg";
import Preloader from "./preloader.svg";
import ProfileIcon from "./profile.png";

import UnicalIcon from "./icons/unical-icon.jpg";
import ComcastIcon from "./logo/comcast-logo.svg";
import XcalIcon from "./logo/xcal-logo.png";

import ProjectsPageIcon from "./pages/projects-page.svg";
import InfoIcon from "./pages/info-page.svg";
import Home from "./pages/home.svg";

import NNBackendIcon from "./projects/nn-image-analyzer-logo.jpg";
import NNAndroidIcon from "./projects/nn-image-analyzer-android-logo.jpg";
import StegfyIcon from "./projects/stegfy-logo.jpg";
import DemoUiIcon from "./projects/demo-ui-logo.png";

import IT_FLAG from "./langs/it.svg";
import FR_FLAG from "./langs/fr.svg";
import EN_FLAG from "./langs/en.svg";
import DE_FLAG from "./langs/de.svg";
import ES_FLAG from "./langs/es.svg";

export const PRELOADED_IMAGES = [
  LeftArrow,
  Burger,
  Preloader,
  ProfileIcon,
  EN_FLAG,
  ES_FLAG,
  DE_FLAG,
  EN_FLAG,
  FR_FLAG,
  GithubLogo,
  TwitterLogo,
  FacebookLogo,
  LinkedinLogo,
  CvLogo,
  BitLogo,
  InstagramLogo,
  MailLogo,
  TelegramLogo,
];

export const LANGUAGES_ICONS = {
  it: <img alt="" width={20} height={20} src={IT_FLAG} />,
  de: <img alt="" width={20} height={20} src={DE_FLAG} />,
  fr: <img alt="" width={20} height={20} src={FR_FLAG} />,
  es: <img alt="" width={20} height={20} src={ES_FLAG} />,
  en: <img alt="" width={20} height={20} src={EN_FLAG} />,
} as const;

export const PROJECTS_ICONS = [
  {
    name: "demoUi",
    icon: <img alt="" width={400} src={DemoUiIcon} />,
    icon_small: <img alt="" width={100} src={DemoUiIcon} />,
  },
  {
    name: "nnIa",
    icon: <img alt="" width={400} src={NNBackendIcon} />,
    icon_small: <img alt="" width={100} src={NNBackendIcon} />,
  },
  {
    name: "nnIaAndroid",
    icon: <img alt="" width={400} src={NNAndroidIcon} />,
    icon_small: <img alt="" width={100} src={NNAndroidIcon} />,
  },
  {
    name: "stegfy",
    icon: <img alt="" width={400} src={StegfyIcon} />,
    icon_small: <img alt="" width={100} src={StegfyIcon} />,
  },
];

const IMAGES = {
  ICONS: {
    WORK: <img alt="" width={90} height={90} src={WorkIcon} />,
    FRAMEWORKS: <img alt="" width={90} height={90} src={FrameworksIcon} />,
    EDUCATION: <img alt="" width={90} height={90} src={DegreeIcon} />,
    DEVELOPING: <img alt="" width={90} height={90} src={DevelopingIcon} />,
    SKILLS: <img alt="" width={90} height={90} src={SkillsIcon} />,
    MUSIC: <img alt="" width={90} height={90} src={MusicIcon} />,
    SONG: <img alt="" width={40} height={40} src={SongIcon} />,
    DEGREE: (
      <img
        src={DegreeIcon}
        className="mr-2 my-auto"
        height={90}
        width={100}
        alt=""
      />
    ),
  },
  LOGO: {
    UNICAL: (
      <img
        className="mr-2 my-auto"
        alt=""
        width={100}
        height={90}
        src={UnicalIcon}
      />
    ),
    COMCAST: <img alt="" width={90} height={90} src={ComcastIcon} />,
    XCAL: (
      <div className="bg-gray-600">
        <img alt="" width={90} height={90} src={XcalIcon} />
      </div>
    ),
  },
  PAGES: {
    HOME: <img alt="" width={90} height={90} src={Home} />,
    PROJECTS: <img alt="" width={90} height={90} src={ProjectsPageIcon} />,
    INFO: <img alt="" width={90} height={90} src={InfoIcon} />,
  },
  PROFILE: {
    SMALL: (
      <img
        className="rounded-full"
        alt=""
        src={ProfileIcon}
        width={90}
        height={90}
      />
    ),
    BIG: (
      <img
        className="rounded-full"
        alt=""
        src={ProfileIcon}
        width={150}
        height={150}
      />
    ),
  },
};

export const QUICK_LINKS_ICONS = {
  github: <img alt="" width={30} height={30} src={GithubLogo} />,
  cv: <img alt="" width={30} height={30} src={CvLogo} />,
  instagram: <img alt="" width={30} height={30} src={InstagramLogo} />,
  facebook: <img alt="" width={30} height={30} src={FacebookLogo} />,
  mail: <img alt="" width={30} height={30} src={MailLogo} />,
  twitter: <img alt="" width={30} height={30} src={TwitterLogo} />,
  linkedIn: <img alt="" width={30} height={30} src={LinkedinLogo} />,
  bit: <img alt="" width={30} height={30} src={BitLogo} />,
  telegram: <img alt="" width={30} height={30} src={TelegramLogo} />,
};

export const LeftArrowImage = () => <img alt="" src={LeftArrow} />;
export const DownArrowIcon = () => (
  <div className="ml-2 mr-1 mt-3 transform -rotate-90">
    <img className="m-auto" alt="" src={LeftArrow} width={10} />
  </div>
);
export const BurgerIcon = () => <img alt="" src={Burger} width={60} />;
export const PreloaderImage = <img alt="" src={Preloader} />;

export default IMAGES;
