import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'focus-visible'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      {/* the favicon */}
      <link rel="icon" href="/stacks.svg" />
    </Head>
    <Container className="min-h-screen">
      <Header />
      <Component {...pageProps} />
    </Container>
    <Footer />
  </>);
}

export default MyApp;
