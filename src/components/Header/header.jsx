"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../Logo/logo"
import Nav from "../Nav/nav";
import Button from "../Button/button";
import styles from "./style.module.scss";



export default function Header() {
  const [isActive, setIsActive] = useState(false);

     

  return (
    <div className={styles.front}>
      <Logo></Logo>
    <div className={styles.header}>
      <motion.div 
        className={styles.menu}
        animate={{
          width: isActive ? '28rem' : '10rem',
          height: isActive ? '40rem' : '4rem',
          margin: isActive ? '0' : '1rem',
        }}
        initial = {{width: '10rem', height: '4rem', margin: '1rem'}}
        transition={{duration: 0.75, delay: isActive ? 0 : 0.25, ease: [0.76, 0, 0.24, 1]}}
        onClick={()=>{setIsActive(!isActive)}}
        >
          <AnimatePresence>
          { isActive && <Nav />}
          </AnimatePresence>
        
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive}/>
    </div>
    </div>

  );
}