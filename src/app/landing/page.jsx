'use client'
import styles from './styles.module.scss'
import { Rubik_Scribble, Inter } from "next/font/google";

const rubik = Rubik_Scribble({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "800",
  style: "normal",
});

export default function Landing() {


  
  return (
    
    <main className={styles.body} id="home">
      <div className={styles.background}>

</div>
      <div className={styles.wrapper}>
      
        <div className={styles.presentation}>
          <h2 className={`${styles.scrollText} ${inter.className}`}>photography & video</h2>
          <h2 className={`${styles.scrollText}  ${rubik.className}`}>
            photography & video
          </h2>
        </div>
        <div className={styles.intro}></div>
      </div>

    </main>
  );
}
