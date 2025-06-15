import GuessGame from "@/lib/features/games/guessTheLetterGame/GuessGame";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <GuessGame />
    </main>
  );
}
