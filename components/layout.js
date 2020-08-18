import About from "../components/about";
import Contact from "../components/contact";
import Resume from "../components/resume";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/home";
import Head from "next/head";
import React from "react";

function Layout() {
  return (
    <div className="app">
      <Head>
        <link rel="shortcut-icon" href="/public/favicon.ico" />
        <title>Furkan Portakal</title>

        <meta name="title1" content="Furkan Portakal" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="keyword"
          content="reactjs, react, javascript, js, nextjs, next,junior, jr, frontend, developer, frontend developer"
        />

        <meta
          name="description"
          content="I'm Furkan Portakal. I'm Jr. Frontend developer and BTU student."
        />
      </Head>

      <Header />
      <Home />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
