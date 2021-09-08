import Image from "next/image";
import Link from "next/link";
import hapuSymbol from "../../public/hapuSymbol.svg";
import hapuWord from "../../assets/hapuWord.svg";
import styles from "../styles/NotFoundComponent.module.css";

export default function NotFound() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <main>
        <div
          style={{
            display: "flex",
          }}
        >
          <Link href="/">
            <a
              className={styles.logoBackground}
              aria-label="Redirect to home page"
            >
              <div>
                <Image src={hapuSymbol} />
              </div>
            </a>
          </Link>
          <Link href="/">
            <div className={styles.textBackground}>
              <h3>Page not found. Redirect to home page</h3>
            </div>
          </Link>
        </div>
        <section style={{ margin: "32px 0" }}>
          <Image src={hapuWord} quality={100} />
        </section>
      </main>
    </section>
  );
}
