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

export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <div className="presentation">
          <h2 className={`scroll-text ${inter.className}`}>photography & video</h2>
          <h2 className={`scroll-text ${rubik.className}`}>
            photography & video
          </h2>
        </div>
        <div className="intro"></div>
      </div>
    </main>
  );
}
