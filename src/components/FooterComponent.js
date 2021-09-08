import Link from "next/link";
import Image from "next/image";
import styles from "../styles/FooterComponent.module.css";
import hapuWord from "../../assets/hapuWord.svg";

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <h2>Become a nanny share host</h2>
        <p>Takes less than 5 minutes to get started</p>
        <button
          className="button"
          style={{
            backgroundColor: "#5E20A4",
            color: "#FFFFFF",
            margin: "32px 0",
          }}
        >
          Create Your Nanny Share
        </button>
        <Link href="/">
          <a className="a">Or browse local nanny-shares </a>
        </Link>
      </section>

      <section style={{ margin: "32px 0" }}>
        <Image src={hapuWord} quality={100} alt="Hapu name" />
      </section>
      <p style={{ fontSize: "12px", color: "gray" }}>
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </footer>
  );
}
