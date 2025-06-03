import React from "react";
import styles from "./GameContainer.module.css";

type Props = {
  children: React.ReactNode;
  id: string;
};
const GameContainer: React.FC<Props> = ({ children, id }) => {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  );
};
export default GameContainer;
