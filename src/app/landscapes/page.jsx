"use client";
import { images } from "../../lib/landscapes-data";
import ImageNav from "../../components/ImageNav/imageNav";
import './landscapes.scss'

export default function App() {
  return (
    <div id="landscapes">
      <ImageNav title="landscapes" images={images}></ImageNav>
    </div>
  );
}
