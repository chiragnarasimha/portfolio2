import React, { FC } from "react";
import styles from "./NavMenuButton.module.css";

type Props = {
  className: string;
};
const NavMenuButton: FC<Props> = ({ className }) => {
  return (
    <label
      htmlFor={"hamburger-icon"}
      className={`${styles.labelContainer} ${className}`}
    >
      <input
        type={"checkbox"}
        id={"hamburger-icon"}
        className={styles.input}
        aria-label="Menu toggle button"
      />
      <svg viewBox="0 0 100 100" className={styles.svg}>
        <path className={`${styles.line} ${styles.top}`} d="M 20,30 H 80" />
        <path className={`${styles.line} ${styles.middle}`} d="M 20,50 H 80" />
        <path className={`${styles.line} ${styles.bottom}`} d="M 20,70 H 80" />
      </svg>
    </label>
  );
};
export default NavMenuButton;
