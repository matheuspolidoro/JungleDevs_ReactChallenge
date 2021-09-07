import Link from "next/link";
import styles from "../styles/FooterComponent.module.css";

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <h2>Become a nanny share host</h2>
      <p>Takes less than 5 minutes to get started</p>
      <button
        className="button"
        style={{ backgroundColor: "#5E20A4", color: "#FFFFFF" }}
      >
        Create Your Nanny Share
      </button>
      <Link href="/">
        <a className="a">Or browse local nanny-shares </a>
      </Link>
    </footer>
  );
}
