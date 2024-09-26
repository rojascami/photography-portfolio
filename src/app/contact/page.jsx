import styles from "./style.module.scss";
import Circle from "../../components/Circle/circle";
import Footer from "../../components/Footer/Footer"; // Corrected import statement

export default function Home() {
  return (
    <main className={styles.body} id="contact">
    <Circle />
    <Footer />
    </main>
  );
}
