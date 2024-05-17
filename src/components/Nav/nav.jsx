'use client'
import styles from './style.module.scss';
import { Poppins } from "next/font/google";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { links } from "./data";
import { motion } from 'framer-motion';

const perspective  = {
    initial: {
        opacity: 0
    },
    enter: (index) => ({
        opacity: 1,
        transition: {delay: 0.5 + (index * 0.1)}
    }),
    exit: {
        opacity: 0
    },

}

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
    style: "normal",
  });

export default function Nav () {

    const pathname = usePathname()


    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {links.map((link, index) => (
                    <motion.div key={index} custom={index} variants={perspective} animate="enter" exit="exit" initial="initial">
                        <Link className={pathname === link.href ? styles.active : "" } href={`#${link.href}`}>{link.title}</Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}