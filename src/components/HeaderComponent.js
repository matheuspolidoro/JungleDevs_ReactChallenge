import Image from "next/image";
import Link from "next/link";
import styles from "../styles/HeaderComponent.module.css";
import imageProfile from "../../assets/ProfileImage.png";
import imageHeader from "../../assets/ImageHeader.png";
import hapuSymbol from "../../public/hapuSymbol.svg";

export default function HeaderComponent() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.background} />
        <nav
          style={{
            display: "flex",
          }}
        >
          <Link href="/">
            <a
              className={styles.logoBackground}
              aria-label="Redirect to home page"
            >
              <Image src={hapuSymbol} />
            </a>
          </Link>
          <div className={styles.navigation}>
            <div className={styles.navigationLeft}>
              <menu>
                <li>
                  <Link href="/">
                    <a type="button" className="button">
                      Create Your Nanny Share
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a type="button" className="button">
                      Browse Shares
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a type="button" className="button">
                      Our Story
                    </a>
                  </Link>
                </li>
              </menu>
            </div>
            <div className={styles.navigationRight}>
              <ul>
                <li
                  type="button"
                  className="button"
                  style={{ backgroundColor: "#00C88C" }}
                >
                  <h5>Become a Nanny Share Host</h5>
                </li>
                <li type="button" className={"button displayNone"}>
                  <h5>Sign in</h5>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section
          style={{
            display: "grid",
            placeItems: "center",
            flexGrow: "1",
          }}
        >
          <div className={styles.highlight}>
            <div className={styles.highlightLeft}>
              <h1 className={styles.h1}>
                Easily create or join a local nanny share with Hapu
              </h1>
              <p>
                Hapu is Airbnb for nanny share. Share your home, nanny and costs
                and create new flexible, affordable solutions in childcare.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "48px 0",
                }}
              >
                <Link href="/">
                  <a style={{ display: "flex", alignItems: "center" }}>
                    <div type="button" className={styles.buttonCircle}>
                      ▶
                    </div>
                    See hapu in action (27 seconds)
                  </a>
                </Link>
              </div>
            </div>
            <aside style={{ flex: 1 }} className="displayNone">
              <Image src={imageHeader} />
            </aside>
          </div>
        </section>
      </header>
      <footer className={styles.footer}>
        <Image
          src={imageProfile}
          className={styles.imageProfile}
          alt="Picture of a nanny"
          width="56px"
          height="56px"
        />
        <Link href="/">
          <a className="a" style={{ margin: "0 8px" }}>
            Sarah’s day care available now in North Sydney
          </a>
        </Link>
        <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
      </footer>
    </>
  );
}
