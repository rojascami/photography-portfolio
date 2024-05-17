"use client";
import { images } from "../../lib/landscapes-data";
import ImageNav from "../../components/ImageNav/imageNav";

export default function App() {
  return (
    <div id="landscapes">
      {/* <h2>landscapes</h2> */}
      <ImageNav title="landscapes" images={images}></ImageNav>
    </div>
  );
}
