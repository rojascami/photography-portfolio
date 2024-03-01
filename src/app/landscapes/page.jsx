"use client";
import { motion, useScroll } from "framer-motion";
import { images } from '../../lib/landscapes-data'
import ImageNav from '../../components/ImageNav'

export default function App() {
  return (
    <>
        <ImageNav images={images}></ImageNav>
    </>
  );
}
