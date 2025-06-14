import React, { ForwardedRef, forwardRef } from "react";
import styles from "./StyledInput.module.css";

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
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.container}>
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
