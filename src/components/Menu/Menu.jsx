import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/founders">Founders</Link>
    </div>
  );
}
