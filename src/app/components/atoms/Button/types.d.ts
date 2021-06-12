export interface ButtonProps {
  /** Component (or string) rendered inside the Button */
  children: JSX.Element | string;

  /** Custom onClick callback */
  onClick: () => void;

  /** Indicates if the Button is clickable or not */
  disabled?: boolean;

  /** A custom className applied on main container */
  className?: string;

  /** If true, no other styles will be applied on main container (useful for image only buttons) */
  noStyles?: boolean;

  /** Custom component id */
  id?: string;

  ariaLabel?: string;
}
