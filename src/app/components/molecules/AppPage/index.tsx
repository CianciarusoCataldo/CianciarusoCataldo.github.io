import { driveWithDarkMode } from "api/helpers/ui-helper";

import { Page } from "@cianciarusocataldo/modular-ui";

/** Custom Modular-app page */
const AppPage = ({
  children,
  orientation,
}: {
  children: JSX.Element | Element | string | (JSX.Element | Element | string)[];
  orientation?: "orizontal" | "vertical";
}) => {
  const CustomPage = driveWithDarkMode(Page);
  return <CustomPage orientation={orientation}>{children}</CustomPage>;
};

export default AppPage;
