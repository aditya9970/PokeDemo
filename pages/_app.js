import React from "react";
import Head from "next/head";

import { Header } from "../components/Layout";
import "../public/css/styles.scss";

const APP = ({ Component, PageProps }) => {
  //   const [header, setHeader] = {};

  return (
    <div style={{ minHeight: "200vh" }}>
      <Head>
        <meta charSet="UTF-8" />
        {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        /> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/ee39d5d744.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Header></Header>

      <Component {...PageProps} />
    </div>
  );
};

export default APP;
