import React from "react";

import { useCommonTranslation } from "app/hooks/localization";

import LanguageSelector from "../LanguageSelector";
import { QUICK_LINKS_ICONS } from "assets/images";

const QuickLinks = () => {
  const t = useCommonTranslation();

  return (
    <div className="fixed z-10 top-0 right-1 left-1 border-b-2 rounded-lg bg-gray-600 flex flex-row">
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
