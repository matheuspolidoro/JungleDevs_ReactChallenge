import Image from "next/image";
import HeaderComponent from "../components/HeaderComponent";
import MainComponent from "../components/MainComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <MainComponent />

      <footer className={styles.footer}></footer>
    </div>
  );
}
