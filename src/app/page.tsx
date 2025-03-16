import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.general}>
        <div className={styles.test}>Test</div>
      </main>
      <footer className={styles.general}>
        <div>This is the footer</div>
      </footer>
    </>
  );
}
