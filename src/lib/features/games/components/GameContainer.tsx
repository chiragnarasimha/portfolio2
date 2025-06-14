import React from "react";
import styles from "./GameContainer.module.css";

type Props = {
  children: React.ReactNode;
  id: string;
  className?: string;
};
const GameContainer: React.FC<Props> = ({ children, id, className }) => {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      {children}
    </section>
  );
};
export default GameContainer;
