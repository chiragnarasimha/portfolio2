import React from "react";
import styles from "./Navbar.module.css";
import { ChiragLogo } from "@/lib/assets/images/SvgComponents";
import DarkModeToggle from "@/lib/features/darkmode/DarkModeToggle";
import NavMenuButton from "@/lib/features/navbar/NavMenuButton";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <DarkModeToggle className={styles.item} />
      <ChiragLogo className={`${styles.item} ${styles.logo}`} />
      <NavMenuButton />
    </nav>
  );
};
export default Navbar;
