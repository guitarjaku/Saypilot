import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Head from "next/head";
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";

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
          <div className=" sm:block flex-grow">
            <div className="bg-indigo-500 w-full py-16 px-4 sm:py-16 sm:px-6 lg:px-8 ">
              <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
                <div className="max-w-xl mx-auto text-center">
                  <h2 className="text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
                    Influencer
                  </h2>
                  <p className="mt-5 text-xl leading-7 text-indigo-300">
                    นักรีวิว บล็อคเกอร์ และ Content Creator
                  </p>
                  <span className="mt-5 inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                    >
                      สมัคร
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterInfluencer;
