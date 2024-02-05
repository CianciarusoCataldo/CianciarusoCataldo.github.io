
import { useSelector } from "react-redux";

import {
  closeDrawer,
  isDrawerOpen,
  isInDarkMode,
} from "mobrix-engine-plugins";

import { Drawer } from "mobrix-ui";

import { MoBrixEngineStore } from "mobrix-engine-types";
import { DrawerContent } from "../../contents/drawer";

const DrawerComponent = ({
  store,
}: {
  store?: MoBrixEngineStore;
  creatorConfig?: any;
}) => {
  const dark: boolean = useSelector(isInDarkMode);
  const drawerVisible = useSelector(isDrawerOpen);

  return (
    <Drawer
      hide={!drawerVisible}
      onClose={() => store?.dispatch(closeDrawer())}
      dark={dark}
    >
      <DrawerContent />
    </Drawer>
  );
};

export default DrawerComponent;
