"use client";
import { motion, useScroll } from "framer-motion";
import { images } from '../../lib/sports-data'
import ImageNav from '../../components/ImageNav/imageNav'
import './sports.scss'
export default function App() {
  return (
    <div id="sports">
    <ImageNav title="sports" images={images}></ImageNav>
</div>
  );
}
