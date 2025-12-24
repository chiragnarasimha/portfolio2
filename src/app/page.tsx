import GuessGame from "@/features/games/guessTheLetterGame/GuessGame";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.pageContainer}>
      <GuessGame />
    </main>
  );
}
