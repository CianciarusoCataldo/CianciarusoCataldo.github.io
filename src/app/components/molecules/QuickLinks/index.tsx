import { useQuickLinksTranslation } from "app/hooks/localization";

import LanguageSelector from "../LanguageSelector";
import { QUICK_LINKS_ICONS } from "assets/images";

const QuickLinks = () => {
  const t = useQuickLinksTranslation();

  return (
    <div className="fixed z-20 bottom-0 right-0 left-0 border-b-2 bg-gray-600 flex flex-row p-2">
      {Object.keys(QUICK_LINKS_ICONS).map((quickLink) => (
        <a key={quickLink} className="mt-1" href={t(`quickLinks_${quickLink}`)}>
          <div className="mr-2" aria-label={quickLink}>
            {QUICK_LINKS_ICONS[quickLink as keyof typeof QUICK_LINKS_ICONS]}
          </div>
        </a>
      ))}
      <LanguageSelector />
    </div>
  );
};

export default QuickLinks;