import Head from "next/head";
import { ReactElement } from "react";
import FooterSection from "./footersection";
import Header from "./header";

const Layout: React.FC<{ children: ReactElement }> = (props) => {
  return (
    <>
      <Head>
        <title>My Travel App</title>
        <meta name="description" content="Travel with us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <FooterSection />
    </>
  );
};

export default Layout;
