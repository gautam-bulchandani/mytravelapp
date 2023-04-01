import "@/styles/globals.css";

import "@/assets/vendor/bootstrap/css/bootstrap.min.css";
import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/assets/vendor/fontawesome-free/css/all.min.css";
import "@/assets/vendor/aos/aos.css";
import "@/assets/vendor/glightbox/css/glightbox.min.css";
import "@/assets/vendor/swiper/swiper-bundle.min.css";
import "@/assets/css/main.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
