"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../Logo/logo"
import Nav from "../Nav/nav";
import Button from "../Button/button";
import styles from "./style.module.scss";


export default function Header() {
  const [isActive, setIsActive] = useState(false);

  let variants = {}

  const isMobile = window.innerWidth < 768;
  if (!isMobile) {
    variants = {
      open: {
        width: 350,
        height: 500,
        top: "-20px",
        left: "1100px",
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      },
      closed: {
        width: 0,
        height: 0,
        top: "1.5px",
        left:"1350px",
        transition: { duration: 0.7, delay: 0.35, ease: [0.76, 0, 0.30, 0] },
      }
    };
  } else {
    variants = {
      open: {
        width: 350,
        height: 500,
        top: "-20px",
        left: "-45px",
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      },
      closed: {
        width: 0,
        height: 0,
        top: "1.5px",
        left:"210px",
        transition: { duration: 0.7, delay: 0.35, ease: [0.76, 0, 0.30, 0] },
      }
    };
  }

  return (
    <div className={styles.front}>
      <header className={styles.header}>
        <a href="/">
        <Logo></Logo>
        </a>
        <motion.div
          className={styles.menu}
          variants={variants}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence> {isActive && <Nav />} </AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </header>
    </div>
  );
}