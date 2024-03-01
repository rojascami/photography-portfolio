"use client";
import styles from "./style.module.scss";
import Logo from "../Logo/logo";

export default function Circle() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <div className={styles.logo}>

        </div>

        <h3 className={styles.text}>Let's work together!</h3>
        <p className={styles.mail}>hello@email.com</p>
      </div>
    </div>
  );
}
