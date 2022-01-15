import { useSelector } from "react-redux";
import { CV_FILES } from "assets/files";

import LanguageSelector from "../LanguageSelector";
import QUICK_LINKS from "app/constants/quick-links";
import { CV_LOGO } from "assets/images";
import { Link } from "@cianciarusocataldo/modular-ui";
import { getLanguage } from "@cianciarusocataldo/modular-engine";

const QuickLinks = () => {
  const lang = useSelector(getLanguage);

  return (
    <div className="fixed z-20 bottom-0 right-0 left-0 border-b-2 bg-gray-600 flex flex-row p-2">
      <Link key="cv_file" className="mt-1" to={CV_FILES[lang]} newTab>
        <div className="mr-2" aria-label="cv">
          {CV_LOGO}
        </div>
      </Link>
      {Object.keys(QUICK_LINKS).map((quickLink) => (
        <Link
          key={quickLink}
          className="mt-1"
          to={QUICK_LINKS[quickLink].link}
          newTab
        >
          <div className="mr-2" aria-label={quickLink}>
            {QUICK_LINKS[quickLink].icon}
          </div>
        </Link>
      ))}
      <LanguageSelector />
    </div>
  );
};

export default QuickLinks;
