import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LeftArrowImage, BurgerIcon } from "assets/images";

import { HeaderProps } from "./types";

import { openDrawer } from "api/state-slices/ui/actions";
import { goBack } from "api/state-slices/router/actions";
import { isHomePage } from "api/state-slices/ui/selectors";

import Button from "app/components/atoms/Button";

const Header = ({ logo = <div /> }: HeaderProps) => {
  const dispatch = useDispatch();
  const backAction = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);

  const burgerAction = useCallback(() => {
    dispatch(openDrawer());
  }, [dispatch]);

  const hideBackButton = useSelector(isHomePage);

  return (
    <header className="fixed p-1 pt-10 pb-8 inset-x-0 top-0 z-10 bg-gray-700 border-b-2">
      <div className="mt-3 flex flex-row items-center text-center">
        <Button
          onClick={() => burgerAction()}
          ariaLabel="Drawer Button"
          noStyles
          className="inline-flex py-0 outline-none"
        >
          <div className="p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2">
            <BurgerIcon />
          </div>
        </Button>
        {!hideBackButton && (
          <Button
            onClick={() => {
              backAction();
            }}
            noStyles
            className="inline-flex py-0 ml-1 outline-none"
          >
            <LeftArrowImage />
          </Button>
        )}
        <div className="ml-1 mt-2 md:m-auto lg:m-auto xl:m-auto 2xl:m-auto flex flex-row text-white">
          <div className="m-auto mr-1 md:mr-2 lg:mr-2 xl:mr-2 2xl:mr-2 3xl:mr-2">
            {logo}
          </div>
          <div className="flex flex-col m-auto mb-3">
            <p className="text-xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
              Cataldo Cianciaruso
            </p>
            <p className="text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
              Portfolio page
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
