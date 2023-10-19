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
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
      </main>
      <Footer />
    </div>
  );
}
