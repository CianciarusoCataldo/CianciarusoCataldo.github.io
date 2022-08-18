import { useSelector } from "react-redux";
import { CV_FILES } from "assets/files";

import QUICK_LINKS from "constants/quick-links";
import { CV_LOGO } from "assets/images/custom";
import { Container, Link } from "mobrix-ui";
import { getLanguage, isInDarkMode } from "mobrix-engine-plugins";

const FooterContent = () => {
  const lang = useSelector(getLanguage);
  const dark = useSelector(isInDarkMode);

  return (
    <Container dark={dark}>
      <div className="flex flex-col items-center">
        <div className="flex flex-row p-2">
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
    </Container>
  );
};

export default FooterContent;
