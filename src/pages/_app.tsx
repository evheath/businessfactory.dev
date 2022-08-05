import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'focus-visible'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Head from 'next/head'
import { CSSProperties } from "react";

function MyApp({ Component, pageProps }: AppProps) {

  let shadow = '';
  const w = typeof window !== "undefined" ? window.screen.width : 1920;
  const h = typeof window !== "undefined" ? window.screen.height : 1080;
  console.log(w, h);
  const count = Math.floor(Math.sqrt(w * h) / 14);
  for (let index = 0; index < count; index++) {
    shadow += `${Math.random() * w}px ${Math.random() * h}px #fff, `;
  }
  let stars = shadow.slice(0, shadow.length - 2);
  console.log(stars);
  const styleObj: CSSProperties = {
    boxShadow: `${stars}`
  }
  return (<>
    <Head>
      {/* the favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='star' style={styleObj}>Hello app</div>
    <Container >
      <Header />
      {/* <Breadcrumb /> */}
    </Container>
    <Component {...pageProps} />
    <Footer />
  </>);
}

export default MyApp;
