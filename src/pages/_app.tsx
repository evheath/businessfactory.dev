import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "focus-visible";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Head from "next/head";
import Stars from "@/components/Stars";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toaster position="top-center" />
      <Stars />
      <Container>
        <Header />
      </Container>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
