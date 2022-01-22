import { IMAGES } from "assets/images/custom";
import QUICK_LINKS from "app/constants/quick-links";
import { useInfoPageTranslation } from "app/hooks/localization";

import SongsList from "app/components/molecules/SongsList";
import { Card, Link } from "@cianciarusocataldo/modular-ui";
import AppPage from "api/predefined/components/AppPage";

const InfoPage = () => {
  const t = useInfoPageTranslation();

  return (
    <AppPage>
      <Card
        shadow
        icon={IMAGES.PAGES.INFO}
        header={t("about", { context: "header" })}
        body={
          <div className="text-xl flex flex-col mt-2 p-2">
            <div className="flex flex-row m-auto">
              <div className="my-auto">{IMAGES.PROFILE.BIG}</div>
              <div className="m-auto ml-3">
                <p>{t("about", { context: "contacts" })}</p>
                {Object.keys(QUICK_LINKS).map((quickLink) => (
                  <li className="mt-2" key={quickLink}>
                    <Link
                      //className="hover:text-blue-500"
                      to={QUICK_LINKS[quickLink].link}
                    >
                      {quickLink.charAt(0).toUpperCase() + quickLink.slice(1)}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
            <div className="mt-3">{t("about", { context: "body" })}</div>
          </div>
        }
      />
      <Card
        shadow
        icon={IMAGES.ICONS.MUSIC}
        header={t("songs", { context: "header" })}
        className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2"
        body={<SongsList />}
      />
    </AppPage>
  );
};

export default InfoPage;
