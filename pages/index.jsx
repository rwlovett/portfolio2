import Head from "next/head";
import Image from "next/image";
import Header from "@components/Header.jsx";
import Footer from "@components/Footer.jsx";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ryan Lovett Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ryan Lovett Portfolio" />
        <hr />
        <p className="description">
        </p>
      </main>
      <Footer />
    </div>
  );
}
