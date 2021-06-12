import React from "react";

export const useAnimation = ({
  animationType = "fade",
  duration = 400,
  onClose = () => {},
}: {
  animationType?: string;
  duration?: number;
  onClose?: () => void;
}): [string, () => void] => {
  const [animation, setAnimation] = React.useState(
    `${animationType}-in-${duration}`
  );

  const onCloseCallback = () => {
    setAnimation(`${animationType}-out-${duration}`);
    setTimeout(() => {
      onClose && onClose();
      setAnimation(`${animationType}-in-${duration}`);
    }, duration);
  };
  return [animation, onCloseCallback];
};
