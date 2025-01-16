import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "focus-visible";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Head from "next/head";
import Stars from "@/components/Stars";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          {path ? `${capitalize(path)} - Business Factory` : "Business Factory"}
        </title>
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
