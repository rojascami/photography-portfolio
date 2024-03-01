import ReactCurvedText from "react-curved-text";
import styles from "./style.module.scss";

export default function Logo({ fontSize }) {
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
        text="hello world photography & video"
        textProps={{ style: { fontSize: "20"} }}
        textPathProps={{ fill: "#000000" }}
        tspanProps={{ dy: "-10" }}
        ellipseProps={{"style": "fill: #C2BAD4BA"}}
        svgProps={{ className: styles.logo }}
      />
    </>
  );
}
