import Image from "next/image";
import Link from "next/link";
import imageSection from "../../assets/ImageSection1.png";
import styles from "../styles/MainComponent.module.css";

export default function MainComponent() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article className={styles.article}>
          <section className={styles.sectionImage}>
            <Image
              src={imageSection}
              alt="Table with simulation share in a laptop"
            />
          </section>
          <section className={styles.sectionText}>
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
              <a>Ready to get started?</a>
            </Link>
          </section>
        </article>
        <hr className={styles.divider} />
      </main>
    </div>
  );
}
