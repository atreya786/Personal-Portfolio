import Navbar from "../components/Navbar";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Atreya Chandan</title>
        <meta
          name="description"
          content="This is my personal portfolio built in Next.js and Tailwincss"
        />
        <meta name="keywords" content="Next.js,Tailwincss, React, SEO" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
