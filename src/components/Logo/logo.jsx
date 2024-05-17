import ReactCurvedText from "react-curved-text";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function Logo({ fontSize }) {
  const [small, setSmall] = useState(false);
  const [scroll, setScroll] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        // console.log(window.screenY )
        setSmall(window.scrollY > 600)
      );
    }
    
  }, []);

  return (
    <>
      <ReactCurvedText
        width="300"
        height="300"
        cx="150"
        cy="150"
        rx={100}
        ry="100"
        startOffset="90"
        reversed={false}
        text="hellooooo world photography & video"
        textProps={{ style: { fontSize: "24"} }}
        textPathProps={{ fill: "#ffffff" }}
        tspanProps={{ dy: "-10" }}
        // ellipseProps={{"style": "fill: #C2BAD4BA"}} 
        svgProps={{ className: `${styles.logo} ${small ? styles.small : ""}` }}
      />
    </>
  );
}
