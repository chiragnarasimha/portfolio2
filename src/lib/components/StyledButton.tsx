import React, { ForwardedRef, forwardRef } from "react";
import styles from "./StyledButton.module.css";
type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "outline" | "cancel";
  disabled?: boolean;
  className?: string;
  onPointerDown?: React.PointerEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

const StyledButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      variant = "primary",
      disabled = false,
      className = "",
      onPointerDown,
      type = "button",
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onPointerDown={onPointerDown}
        className={`${styles.button} ${styles[variant]} ${className} ${disabled && "element-disabled"}`}
      >
        {children}
      </button>
    );
  }
);

StyledButton.displayName = "StyledButton";

export default StyledButton;
