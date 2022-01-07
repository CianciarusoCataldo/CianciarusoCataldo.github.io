import { IMAGES, QUICK_LINKS_ICONS } from "assets/images";

import {
  useCommonTranslation,
  useInfoPageTranslation,
} from "app/hooks/localization";

import SongsList from "app/components/molecules/SongsList";
import { Card } from "@cianciarusocataldo/modular-ui";
import AppPage from "app/components/molecules/AppPage";

const InfoPage = () => {
  const t = useInfoPageTranslation();
  const tCommon = useCommonTranslation();

  return (
    <AppPage>
      <Card
        icon={IMAGES.PAGES.INFO}
        title={t("about", { context: "header" })}
        body={
          <div className="text-xl flex flex-col mt-2 p-2">
            <div className="flex flex-row m-auto">
              <div className="my-auto">{IMAGES.PROFILE.BIG}</div>
              <div className="m-auto ml-3">
                <p>{t("about", { context: "contacts" })}</p>
                {Object.keys(QUICK_LINKS_ICONS).map((quickLink) => (
                  <li className="mt-2" key={quickLink}>
                    <a
                      className="hover:text-blue-500"
                      href={tCommon("quickLinks", { context: quickLink })}
                    >
                      {quickLink.charAt(0).toUpperCase() + quickLink.slice(1)}
                    </a>
                  </li>
                ))}
              </div>
            </div>
            <div className="mt-3">{t("about", { context: "body" })}</div>
          </div>
        }
      />
      <Card
        icon={IMAGES.ICONS.MUSIC}
        title={t("songs", { context: "header" })}
        className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2"
        body={<SongsList />}
      />
    </AppPage>
  );
};

export default InfoPage;
