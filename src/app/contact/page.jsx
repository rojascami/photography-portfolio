import styles from "./style.module.scss";

import Circle from "../../components/Circle/circle";
import Footer from "../../components/Footer/footer";

export default function Home() {
  return (
    <main className={styles.body} id="contact">
    <Circle />
    <Footer></Footer>
    </main>
  );
}
