"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./DarkModeToggle.module.css";
import { MoonIcon, SunIcon } from "@/lib/assets/images/SvgComponents";

type Props = {
  className: string;
};

const DarkModeToggle: FC<Props> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    // Check dark mode preference on client side
    const prefersDarkMode = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    // Update body class when dark mode changes
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <label htmlFor="dark-mode-toggle" className={styles.labelContainer}>
        <input
          className={`${styles.checkbox}`}
          type={"checkbox"}
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
          id="dark-mode-toggle"
          aria-label="Toggle dark mode"
        />
        <div className={`${styles.iconContainer} ${className}`}>
          <MoonIcon className={styles.moonIcon} />
          <SunIcon className={styles.sunIcon} />
          <div className={styles.toggleContainer}>
            <div className={styles.toggle} />
          </div>
        </div>
      </label>
    </>
  );
};
export default DarkModeToggle;
