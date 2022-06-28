import React from "react";
import Head from "next/head";

import Router from "next/router";
import nProgress from "nprogress";

const Layout = ({ children, services }) => {
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
  });
  return (
    <>
      <Head>
        <title>Dr. Rajesh Kumar Ranjan: Best Urologist in Patna</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
