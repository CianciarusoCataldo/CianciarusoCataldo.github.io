import DarkMode from "./icons/commons/dark-mode.svg";
import LightMode from "./icons/commons/light-mode.svg";

import IT_FLAG from "./icons/langs/it.svg";
import FR_FLAG from "./icons/langs/fr.svg";
import EN_FLAG from "./icons/langs/en.svg";
import DE_FLAG from "./icons/langs/de.svg";
import ES_FLAG from "./icons/langs/es.svg";

export const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    tabIndex={0}
    className={`w-8 h-10 hover:fill-[#ff9f51] active:fill-[#fb7a10] focus-visible:fill-[#fb7a10] focus:outline-none ${className}`}
    viewBox="0 0 11 18"
  >
    <path d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
    <path d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
  </svg>
);

export const DarkModeIcon = <img alt="" src={DarkMode} width={30} />;

export const LightModeIcon = <img alt="" src={LightMode} width={30} />;

export const LANGUAGES_ICONS: Record<string, JSX.Element> = {
  it: <img alt="" width={20} height={20} src={IT_FLAG} />,
  de: <img alt="" width={20} height={20} src={DE_FLAG} />,
  fr: <img alt="" width={20} height={20} src={FR_FLAG} />,
  es: <img alt="" width={20} height={20} src={ES_FLAG} />,
  en: <img alt="" width={20} height={20} src={EN_FLAG} />,
};
