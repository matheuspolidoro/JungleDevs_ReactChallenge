import Head from "next/head";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import MainComponent from "../components/MainComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hapu</title>
        <meta name="description" content="Hapu Nanny Services" />
        <link rel="icon" href="/hapuSymbol.svg" />
      </Head>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}
