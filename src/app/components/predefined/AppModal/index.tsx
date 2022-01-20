import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import MODALS from "app/modals";

import { Modal } from "@cianciarusocataldo/modular-ui";
import { useTranslation } from "react-i18next";
import {
  closeModal,
  driveWithDarkMode,
  geti18nConfig,
  getModalType,
  isModalVisible,
} from "@cianciarusocataldo/modular-engine";

/** Custom Modular-app modal */
const AppModal = () => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);
  const type = useSelector(getModalType);
  const isVisible = useSelector(isModalVisible);
  const I18N = useSelector(geti18nConfig);
  const ModalContent = type && MODALS[type] ? MODALS[type] : <div />;

  const { t } = useTranslation(I18N.MODALS_NAMESPACE || "modal-titles");

  const ModalComponent = driveWithDarkMode(Modal);

  return (
    <ModalComponent
      onClose={onClose}
      title={type ? t(type) : ""}
      hide={!isVisible}
    >
      {ModalContent}
    </ModalComponent>
  );
};

export default AppModal;
