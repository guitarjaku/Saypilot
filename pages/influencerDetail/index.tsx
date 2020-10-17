import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";
import Head from "next/head";
import InfluencerSideBar from "../../components/InfluencerSidebar";

const InfluencerDetail = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <div className="flex flex-row flex-1 overflow-hidden bg-white h-screen">
      <InfluencerSideBar />
      <main className="flex flex-grow relative z-0 overflow-y-auto focus:outline-none ">
        <Head>
          <title>Home | Saypilot</title>
          <meta property="og:title" content="Information about Genemator" />
          <meta
            property="og:description"
            content="In this page you can get detailed information about Genemator and his works & experiences."
          />
        </Head>
        <div className="flex flex-grow flex-col "></div>
      </main>
    </div>
  );
};

export default InfluencerDetail;
