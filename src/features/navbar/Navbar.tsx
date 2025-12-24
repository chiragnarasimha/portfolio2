import DarkModeToggle from "@/features/navbar/darkmode/DarkModeToggle";
import NavMenuButton from "@/features/navbar/menu/NavMenuButton";
import { ChiragLogo } from "@/lib/assets/images/SvgComponents";
import styles from "./Navbar.module.css";

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
