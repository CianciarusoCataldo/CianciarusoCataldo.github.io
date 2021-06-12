import React from "react";
import { ButtonProps } from "./types";

/**
 * @param disabled Indicates if the Button is activable or not
 * @param children Component (or string) rendered inside the Button
 * @param className A custom className applied on main container
 * @param noStyles If true, no other styles will be applied on main container (useful for image only buttons)
 * @param id Custom component id
 * @param onClick Custom onClick callback
 *
 */
const Button = ({
  disabled = false,
  children,
  onClick,
  className: parentClassName,
  noStyles,
  id,
  ariaLabel,
}: ButtonProps) => {
  const buttonClassName = disabled
    ? "bg-gray-600 text-white text-center font-extrabold py-2 px-4 rounded inline-flex items-center text-sm outline-none focus:outline-none opacity-50"
    : "bg-gray-600 text-white text-center font-extrabold py-2 px-4 rounded inline-flex items-center text-sm outline-none focus:outline-none transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-700";

  return (
    <div className={parentClassName}>
      <button
        aria-label={ariaLabel}
        data-id={id}
        disabled={disabled}
        onClick={!disabled ? onClick : () => {}}
        className={
          noStyles
            ? "text-sm text-center outline-none focus:outline-none"
            : buttonClassName
        }
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
