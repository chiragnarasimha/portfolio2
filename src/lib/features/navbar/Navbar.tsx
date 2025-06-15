import React from "react";
import styles from "./Navbar.module.css";
import ChiragLogo from "@/lib/assets/images/SvgComponents";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ChiragLogo className={styles.logo} />
    </nav>
  );
};
export default Navbar;
