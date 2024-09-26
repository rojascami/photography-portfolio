'use client'
import styles from './styles.module.scss'
import { Rubik_Scribble, Inter } from "next/font/google";

const rubik = Rubik_Scribble({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: 'swap',
  adjustFontFallback: false
});
const inter = Inter({
  subsets: ["latin"],
  weight: "800",
  style: "normal",
});

export default function Landing() {

 
  return (
    
      <div className={styles.wrapper}>

          <h2 className={`${styles.scrollText} ${inter.className}`}>photography & video</h2>
          <h2 className={`${styles.scrollText}  ${rubik.className}`}>
            photography & video
          </h2>
          </div>


  );
}
