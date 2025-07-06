import React, { ForwardedRef, forwardRef } from "react";
import styles from "./StyledInput.module.css";
import clsx from "clsx";

type Props = {
  id: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const StyledInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      labelClassName,
      inputClassName,
      label,
      placeholder,
      disabled,
      onChange,
      className,
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={clsx(styles.container, className)}>
        <label htmlFor={id} className={`${styles.label} ${labelClassName}`}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`${styles.input} ${inputClassName}`}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    );
  }
);

StyledInput.displayName = "StyledInput";

export default StyledInput;
