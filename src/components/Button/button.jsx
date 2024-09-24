import styles from "./style.module.scss";
import { motion } from 'framer-motion'

export default function Header({ isActive, setIsActive }) {
  return (
   <div className={styles.button} onClick={() =>{setIsActive(!isActive)}}>
    
    <motion.div 
      className={styles.slider}
      animate={{top: isActive ? "-100%" : "0"}}
      transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
      >
      <div className={styles.el}>
        <PerspectiveText text="Menu"/>
        </div>
      <div className={styles.el}>
        <PerspectiveText text="Close" />
        </div>
    </motion.div>
    
   
   </div>
  );
}


function PerspectiveText ({text}) {
    return (
        <div className={styles.perspectiveText}>
            <p>{text}</p>
            <p>{text}</p>
        </div>
    )
}