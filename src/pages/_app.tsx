import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'focus-visible'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Head from 'next/head'
import Breadcrumb from "@/components/Breadcrump";

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      {/* the favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container >
      <Header />
      {/* <Breadcrumb /> */}
    </Container>
    <Component {...pageProps} />
    <Footer />
  </>);
}

export default MyApp;
