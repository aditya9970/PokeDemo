import React, { useState } from "react";
import Head from "next/head";

import { Header } from "../components/Layout";
import "../public/css/styles.scss";
import "../public/css/animation.scss";
import { LoadingContext } from "../context/notifcation";
import { HeaderContext } from "../context/header";

const App = ({ Component, pageProps }) => {
  //   const [header, setHeader] = {};
  const [status, setStatus] = useState({ isLoading: false, message: "" });

  const [extendedHeader, setExtendedHeader] = useState({
    isActive: true,
    title: "PokeDemo",
  });
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
      <LoadingContext.Provider value={{ status: status, setStatus, setStatus }}>
        <HeaderContext.Provider
          value={{
            extendedHeader: extendedHeader,
            setExtendedHeader: setExtendedHeader,
          }}
        >
          <Header
            extendedHeader={extendedHeader}
            setExtendedHeader={setExtendedHeader}
          ></Header>
          <Component {...pageProps} />
        </HeaderContext.Provider>
      </LoadingContext.Provider>
    </div>
  );
};

export default App;
