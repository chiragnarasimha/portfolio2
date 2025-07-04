import React from "react";
import styles from "./Navbar.module.css";
import { ChiragLogo } from "@/lib/assets/images/SvgComponents";
import DarkModeToggle from "@/lib/features/navbar/darkmode/DarkModeToggle";
import NavMenuButton from "@/lib/features/navbar/menu/NavMenuButton";

const Navbar = () => {
  return (
    <nav className={`${styles.container} glass-effect`}>
      <DarkModeToggle className={styles.item} />
      <ChiragLogo className={`${styles.item} ${styles.logo}`} />
      <NavMenuButton className={styles.item} />
    </nav>
  );
};
export default Navbar;
