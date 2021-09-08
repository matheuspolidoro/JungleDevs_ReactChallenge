import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import imageSection from "../../assets/ImageSection1.png";
import imageSection3 from "../../assets/ImageSection3.png";
import imageSection4 from "../../assets/ImageSection4.png";
import imageSection5 from "../../assets/ImageSection5.png";
import styles from "../styles/MainComponent.module.css";

export default function MainComponent() {
  const [hasNewResponse, setHasNewResponse] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialResponseBody = {
    error: [],
    name: [],
    email: [],
    detail: [],
  };

  const [responseBody, setResponseBody] = useState(initialResponseBody);

  const subscribeNewsletter = async (event) => {
    event.preventDefault();
    setLoading(true);
    const userData = {
      name: event.target.name.value,
      email: event.target.email.value,
    };

    const response = await fetch(
      "https://api.jungledevs.com/api/v1/challenge-newsletter/",
      {
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    const result = await response.json();
    setTimeout(() => {
      setHasNewResponse(true);
      setResponseBody((prevState) => {
        return {
          ...prevState,
          name: result.name ? result.name : [],
          email: result.email ? result.email : [],
          error: result.error ? result.error : [],
          detail: result.detail ? result.detail : [],
        };
      });
      setLoading(false); //////        /;
    }, 3000);
  };
 
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

        <hr className="divider" />

        <section
          className={`${styles.sectionText}  ${styles.sectionLeft}`}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h3>Are you a parent without a nanny and looking to share?</h3>
          <p>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </p>
          <form className={styles.form} onSubmit={subscribeNewsletter}>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="simpleInput"
              style={
                responseBody.name.length > 0
                  ? { borderColor: "red" }
                  : { borderColor: "lightgray" }
              }
            />
            {responseBody.name.length > 0 ? (
              <label htmlFor="name" className={styles.label}>
                {responseBody.name[0]}
              </label>
            ) : null}

            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="simpleInput"
              style={
                responseBody.email.length > 0
                  ? { borderColor: "red" }
                  : { borderColor: "lightgray" }
              }
            />
            {responseBody.email.length > 0 ? (
              <label htmlFor="email" className={styles.label}>
                {responseBody.email[0]}
              </label>
            ) : null}

            <button
              type="submit"
              className="button"
              style={{ backgroundColor: "#00C88C", color: "#FFFFFF" }}
            >
              {loading ? <div className={styles.loader}></div> : "Send"}
            </button>
            {responseBody.error.length > 0 ? (
              <label className={styles.label}>{responseBody.error[0]}</label>
            ) : null}
            {responseBody.detail.length > 0 ? (
              <label className={styles.label}>
                Great. You're now subscribed!
              </label>
            ) : null}
          </form>
        </section>

        <hr className="divider" />

        <section className={styles.article}>
          <section className={`${styles.sectionText}  ${styles.sectionLeft}`}>
            <h2>Shared payments made simple</h2>
            <p>
              Sometimes it’s hard enough just sharing a restaurant bill. Try
              sharing that bill week in, week out and you might encounter more
              than a few snares. But not with Hapu. Simply set your rates and
              our automated payment system takes care of the rest. You need
              never talk money or who owes what.
            </p>
            <Link href="/awdas">
              <a className="a">
                Read how Bridget’s share (without Hapu) ended over $15
              </a>
            </Link>
          </section>
          <section className={`${styles.sectionText} ${styles.sectionLeft}`}>
            <Image
              src={imageSection3}
              alt="Table with simulation share in a laptop"
              quality={100}
            />
          </section>
        </section>

        <hr className="divider" />

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
              Read how Hapu’s tribal background defines our app
            </a>
          </Link>
          <aside className="displayNone" style={{ margin: "48px 0" }}>
            <Image
              src={imageSection4}
              alt="Demonstration list of paid billings from a nanny service"
              quality={100}
            />
          </aside>
        </section>

        <hr className="divider" />

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
