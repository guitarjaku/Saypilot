import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Head from "next/head";
import Header from "../../../components/Header";
import SideBar from "../../../components/Sidebar";

const RegisterInfluencer = () => {
  return (
    <div className="flex flex-row flex-1 overflow-hidden bg-white h-screen">
      <SideBar />
      <main className="flex flex-grow relative z-0 overflow-y-auto focus:outline-none ">
        <Head>
          <title>Home | Saypilot</title>
          <meta property="og:title" content="Saypolot" />
          <meta property="og:description" content="" />
        </Head>
        <div className="flex flex-grow flex-col ">
          <div className=" sm:block flex-grow"></div>
        </div>
      </main>
    </div>
  );
};

export default RegisterInfluencer;
