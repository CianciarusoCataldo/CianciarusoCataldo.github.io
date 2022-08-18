import { IMAGES } from "assets/images/custom";
import QUICK_LINKS from "constants/quick-links";
import { useInfoPageTranslation } from "hooks/localization";

import SongsList from "components/SongsList";
import { Card, Link, List } from "mobrix-ui";
import AppPage from "components/AppPage";

const InfoPage = () => {
  const t = useInfoPageTranslation();

  return (
    <AppPage>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row">
        <Card
          shadow
          icon={IMAGES.PAGES.INFO}
          header={t("about", { context: "header" })}
          body={
            <div className="flex flex-row m-auto">
              <div className="my-auto">{IMAGES.PROFILE.BIG}</div>
              <div className="m-auto ml-3">
                <p>{t("about", { context: "contacts" })}</p>
                <List
                  elements={Object.keys(QUICK_LINKS).map((quickLink) => (
                    <Link to={QUICK_LINKS[quickLink].link}>
                      {quickLink.charAt(0).toUpperCase() + quickLink.slice(1)}
                    </Link>
                  ))}
                />
              </div>
            </div>
          }
        />
        <div className="flex flex-col">
          <Card
            shadow
            icon={IMAGES.PAGES.INFO}
            header={t("about", { context: "header" })}
            body={<div className="mt-3">{t("about", { context: "body" })}</div>}
          />
          <Card
            shadow
            icon={IMAGES.ICONS.MUSIC}
            header={t("songs", { context: "header" })}
            className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 3xl:w-1/2"
            body={<SongsList />}
          />
        </div>
      </div>
    </AppPage>
  );
};

export default InfoPage;
