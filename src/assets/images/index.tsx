import LeftArrow from "./icons/commons/left-arrow.svg";
import Burger from "./icons/commons/burger.svg";
import Logo from "./icons/commons/logo.png";

import ProfileIcon from "./profile.png";

import GithubLogo from "./icons/quick_links/github-logo.svg";
import TwitterLogo from "./icons/quick_links/twitter-logo.svg";
import FacebookLogo from "./icons/quick_links/facebook-logo.svg";
import LinkedinLogo from "./icons/quick_links/linkedin-logo.svg";
import CvLogo from "./icons/quick_links/cv-logo.png";
import BitLogo from "./icons/quick_links/bit-logo.svg";
import InstagramLogo from "./icons/quick_links/instagram-logo.svg";
import MailLogo from "./icons/quick_links/mail-logo.svg";
import TelegramLogo from "./icons/quick_links/telegram-logo.svg";

import FrameworksIcon from "./icons/custom/frameworks-icon.svg";
import WorkIcon from "./icons/custom/work-icon.svg";
import DegreeIcon from "./icons/custom/degree-icon.svg";
import DevelopingIcon from "./icons/custom/code-icon.svg";
import SkillsIcon from "./icons/custom/skills-icon.svg";
import MusicIcon from "./icons/custom/music-icon.svg";
import SongIcon from "./icons/custom/song-icon.svg";
import UnicalIcon from "./icons/custom/unical-icon.jpg";

import ComcastIcon from "./icons/commons/comcast-logo.svg";
import XcalIcon from "./icons/commons/xcal-logo.png";

import NNBackendIcon from "./icons/projects/nn-image-analyzer-logo.jpg";
import NNAndroidIcon from "./icons/projects/nn-image-analyzer-android-logo.jpg";
import StegfyIcon from "./icons/projects/stegfy-logo.jpg";
import DemoUiIcon from "./icons/projects/demo-ui-logo.png";

import ProjectsPageIcon from "./icons/pages/projects-page.svg";
import InfoIcon from "./icons/pages/info-page.svg";
import Home from "./icons/pages/home.svg";

import IT_FLAG from "./icons/langs/it.svg";
import FR_FLAG from "./icons/langs/fr.svg";
import EN_FLAG from "./icons/langs/en.svg";
import DE_FLAG from "./icons/langs/de.svg";
import ES_FLAG from "./icons/langs/es.svg";

/** App logo */
export const LogoIcon = <img alt="" src={Logo} width={100} height={100} />;

export const LeftArrowIcon = <img alt="" src={LeftArrow} />;

export const BurgerIcon = <img alt="" src={Burger} width={60} />;

export const HomeIcon = <img alt="" src={Home} width={30} />;

export const LANGUAGES_ICONS: Record<string, JSX.Element> = {
  it: <img alt="" width={20} height={20} src={IT_FLAG} />,
  de: <img alt="" width={20} height={20} src={DE_FLAG} />,
  fr: <img alt="" width={20} height={20} src={FR_FLAG} />,
  es: <img alt="" width={20} height={20} src={ES_FLAG} />,
  en: <img alt="" width={20} height={20} src={EN_FLAG} />,
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

export const IMAGES = {
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
