import Image from "next/image";
import Link from "next/link";
import imageSection from "../../assets/ImageSection1.png";
import imageSection3 from "../../assets/ImageSection3.png";
import imageSection4 from "../../assets/ImageSection4.png";
import imageSection5 from "../../assets/ImageSection5.png";
import styles from "../styles/MainComponent.module.css";

export default function MainComponent() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article className={styles.article}>
          <section className={styles.sectionRight}>
            <Image
              src={imageSection}
              alt="Table with simulation share in a laptop"
              quality={100}
            />
          </section>
          <section className={`${styles.sectionText} ${styles.sectionLeft}`}>
            <h2>Share your home,</h2>
            <h2>nanny and costs</h2>
            <p>
              You have a fantastic home, a fantastic nanny and wouldn’t cutting
              your costs in half be, well, fantastic?! If only it was easy to
              connect with other parents to share your costs? Well now it is,
              with Hapu. Hapu means tribe and it’s our foundational 3 tribal
              principles that empowers you to create and manage your own tribe.
              A tribe that together has the power to create new affordable
              solutions in childcare that work for you and your community.
            </p>
            <Link href="/">
              <a className="a">Ready to get started?</a>
            </Link>
          </section>
        </article>

        <hr className={styles.divider} />

        <section
          className={`${styles.sectionText}  ${styles.sectionLeft}`}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h3>Are you a parent without a nanny and looking to share?</h3>
          <p>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </p>
          <form className={styles.form}>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <button type="submit">Send</button>
          </form>
        </section>

        <hr className={styles.divider} />

        <section
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <section className={styles.sectionLeft}>
            <Image
              src={imageSection3}
              alt="Table with simulation share in a laptop"
              quality={100}
            />
          </section>
          <section className={`${styles.sectionText}  ${styles.sectionRight}`}>
            <h2>Shared payments made simple</h2>
            <p>
              Sometimes it’s hard enough just sharing a restaurant bill. Try
              sharing that bill week in, week out and you might encounter more
              than a few snares. But not with Hapu. Simply set your rates and
              our automated payment system takes care of the rest. You need
              never talk money or who owes what.
            </p>
            <Link href="/">
              <a className="a">
                Read how Bridget’s share (without Hapu) ended over $15
              </a>
            </Link>
          </section>
        </section>

        <hr className={styles.divider} />

        <section
          className={`${styles.sectionText}  ${styles.sectionLeft}`}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h2>A framework built for the long term</h2>
          <p style={{ textAlign: "center" }}>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>
          <Link href="/">
            <a className="a">
              Read how Hapu’s tribal background defines our app{" "}
            </a>
          </Link>
          <aside className={`${styles.sectionImage}  ${styles.sectionRight}`}>
            <Image
              src={imageSection4}
              alt="Demonstration list of paid billings from a nanny service"
              quality={100}
            />
          </aside>
        </section>

        <hr className={styles.divider} />

        <footer
          className={`${styles.sectionText}  ${styles.sectionLeft}`}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <section style={{ marginBottom: "48px" }}>
            <Image
              src={imageSection5}
              alt="Demonstration list of paid billings from a nanny service"
              quality={100}
            />
          </section>
          <h2>Coming soon: Nanny Share Daily Diary!</h2>
          <p style={{ textAlign: "center" }}>
            With the Hapu daily diary your nanny will be able to update you and
            your sharers with photos and commentary of the day. You and sharers
            will receive notifications and you’ll be able to login to view the
            daily adventures fo your little ones. We can’t wait!
          </p>
        </footer>
      </main>
    </div>
  );
}
