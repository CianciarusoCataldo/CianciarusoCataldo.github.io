import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { DarkModeIcon, LightModeIcon } from "assets/images";
import { isInDarkMode, setDarkMode } from "@cianciarusocataldo/modular-engine";
import { Toggle } from "@cianciarusocataldo/modular-ui";

const DarkModeSwitcher = () => {
  const dispatch = useDispatch();

  const dark = useSelector(isInDarkMode);
  const darkModeSwitch = useCallback(() => {
    dispatch(setDarkMode(!dark));
  }, [dispatch, dark]);

  return (
    <Toggle
      onIcon={LightModeIcon}
      offIcon={DarkModeIcon}
      shadow
      dark={dark}
      value={!dark}
      onChange={darkModeSwitch}
      className="mx-1"
    />
  );
};

export default DarkModeSwitcher;
