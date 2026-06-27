import styles from "./home.module.css";
import { HomePage } from "@/src/pages/home";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  );
}
