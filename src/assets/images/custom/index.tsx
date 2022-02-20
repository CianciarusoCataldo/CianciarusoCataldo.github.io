import ProfileIcon from "./profile.png";

import GithubLogo from "./quick_links/github-logo.svg";
import TwitterLogo from "./quick_links/twitter-logo.svg";
import FacebookLogo from "./quick_links/facebook-logo.svg";
import LinkedinLogo from "./quick_links/linkedin-logo.svg";
import CvLogo from "./quick_links/cv-logo.png";
import BitLogo from "./quick_links/bit-logo.svg";
import InstagramLogo from "./quick_links/instagram-logo.svg";
import MailLogo from "./quick_links/mail-logo.svg";
import TelegramLogo from "./quick_links/telegram-logo.svg";

import FrameworksIcon from "./icons/frameworks-icon.svg";
import WorkIcon from "./icons/work-icon.svg";
import DegreeIcon from "./icons/degree-icon.svg";
import DevelopingIcon from "./icons/code-icon.svg";
import SkillsIcon from "./icons/skills-icon.svg";
import MusicIcon from "./icons/music-icon.svg";
import SongIcon from "./icons/song-icon.svg";

import UnicalIcon from "./logo/unical-logo.jpg";
import ComcastIcon from "./logo/comcast-logo.svg";
import XcalIcon from "./logo/xcal-logo.png";

import NNBackendIcon from "./projects/nn-image-analyzer-logo.jpg";
import NNAndroidIcon from "./projects/nn-image-analyzer-android-logo.jpg";
import StegfyIcon from "./projects/stegfy-logo.jpg";
import DemoUiIcon from "./projects/demo-ui-logo.png";
import ModularUiIcon from "./projects/modular-ui-logo.png";
import ModularAppIcon from "./projects/modular-app-logo.png";
import ModularIcon from "./projects/modular-logo.png";
import ModularEngineIcon from "./projects/modular-engine-logo.png";

import ProjectsPageIcon from "./pages/projects-page.svg";
import InfoIcon from "./pages/info-page.svg";
import Home from "./pages/home.svg";

export const HomeIcon = <img alt="" src={Home} width={30} />;

export const CV_LOGO = <img alt="" width={40} height={40} src={CvLogo} />;

export const QUICK_LINKS_ICONS = {
  github: <img alt="" width={40} height={40} src={GithubLogo} />,
  instagram: <img alt="" width={40} height={40} src={InstagramLogo} />,
  facebook: <img alt="" width={40} height={40} src={FacebookLogo} />,
  mail: <img alt="" width={40} height={40} src={MailLogo} />,
  twitter: <img alt="" width={40} height={40} src={TwitterLogo} />,
  linkedIn: <img alt="" width={40} height={40} src={LinkedinLogo} />,
  bit: <img alt="" width={40} height={40} src={BitLogo} />,
  telegram: <img alt="" width={40} height={40} src={TelegramLogo} />,
};

export const PROJECTS_ICONS = [
  {
    name: "modular",
    icon: <img alt="" width={400} src={ModularIcon} />,
  },
  {
    name: "modularUi",
    icon: <img alt="" width={400} src={ModularUiIcon} />,
  },
  {
    name: "modularEngine",
    icon: <img alt="" width={400} src={ModularEngineIcon} />,
  },
  {
    name: "modularApp",
    icon: <img alt="" width={400} src={ModularAppIcon} />,
  },
  {
    name: "demoUi",
    icon: <img alt="" width={400} src={DemoUiIcon} />,
  },
  {
    name: "nnIa",
    icon: <img alt="" width={400} src={NNBackendIcon} />,
  },
  {
    name: "nnIaAndroid",
    icon: <img alt="" width={400} src={NNAndroidIcon} />,
  },
  {
    name: "stegfy",
    icon: <img alt="" width={400} src={StegfyIcon} />,
  },
];

export const IMAGES = {
  ICONS: {
    WORK: <img alt="" width={60} height={60} src={WorkIcon} />,
    FRAMEWORKS: <img alt="" width={60} height={90} src={FrameworksIcon} />,
    EDUCATION: <img alt="" width={60} height={60} src={DegreeIcon} />,
    DEVELOPING: <img alt="" width={60} height={60} src={DevelopingIcon} />,
    SKILLS: <img alt="" width={60} height={60} src={SkillsIcon} />,
    MUSIC: <img alt="" width={60} height={60} src={MusicIcon} />,
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
    HOME: <img alt="" width={60} height={60} src={Home} />,
    PROJECTS: <img alt="" width={60} height={60} src={ProjectsPageIcon} />,
    INFO: <img alt="" width={60} height={60} src={InfoIcon} />,
  },
  PROFILE: {
    SMALL: (
      <img
        alt=""
        src={ProfileIcon}
        className="rounded-full w-12 h-12 short:w-8 short:h-8 xsm:w-16 xsm:h-16 3xl:w-20 3xl:h-20"
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
