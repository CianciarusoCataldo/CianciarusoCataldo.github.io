import { useSelector } from "react-redux";
import { CV_FILES } from "assets/files";

import QUICK_LINKS from "app/constants/quick-links";
import { CV_LOGO } from "assets/images/custom";
import { Link } from "@cianciarusocataldo/modular-ui";
import { getLanguage } from "@cianciarusocataldo/modular-engine";

const FooterContent = () => {
  const lang = useSelector(getLanguage);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row p-2 mt-3">
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
      </div>
    </div>
  );
};

export default FooterContent;
