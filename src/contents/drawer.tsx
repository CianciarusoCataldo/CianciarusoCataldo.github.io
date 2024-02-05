import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button, Divider } from "mobrix-ui";

import {
  closeDrawer,
  getLocalizationConfig,
  getRoutes,
  goTo,
  isInDarkMode,
} from "mobrix-engine-plugins";

export const DrawerContent = () => {
  const dispatch = useDispatch();
  const PATHS: Record<string, any> = useSelector(getRoutes);
  const i18n = useSelector(getLocalizationConfig);
  const dark: boolean = useSelector(isInDarkMode);

  const { t } = useTranslation(i18n.titlesNamespace || i18n.defaultNamespace);

  return (
    <div className="mx-5 my-6">
      {Object.keys(PATHS).map((route, index) => {
        return (
          <div className="mt-1 mb-3" key={`drawer_app_element_${index}`}>
            <Button
              dark={dark}
              background={false}
              shadow={false}
              onClick={() => {
                dispatch(closeDrawer());
                dispatch(goTo(PATHS[route]));
              }}
              className="text-xl"
            >
              {t(route)}
            </Button>
            <Divider dark={dark} />
          </div>
        );
      })}
    </div>
  );
};
