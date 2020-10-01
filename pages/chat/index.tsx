import { h } from "preact";
import { useState } from "preact/hooks";
import Head from "next/head";
import SideBar from "../../components/Sidebar";

const Chat = () => {
  return (
    <>
      <div className="h-screen flex overflow-hidden bg-white">
        {/* desktop */}
        <SideBar />

        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
            <button
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 lg:hidden"
              aria-label="Open sidebar"
            ></button>
            <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label className="sr-only">Search</label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      ></svg>
                    </div>
                    <input
                      id="search_field"
                      className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center">
                <div className="ml-3 relative">
                  <div>
                    <button
                      className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <Head>
              <title>Home | Saypilot</title>
              <meta property="og:title" content="Information about Genemator" />
              <meta
                property="og:description"
                content="In this page you can get detailed information about Genemator and his works & experiences."
              />
            </Head>
            <div className="flex flex-col h-screen justify-between">
              <div className="grid grid-cols-12 px-10 h-24  sm:px-6 sm:py-4 lg:px-8 md:justify-start border-b">
                <a
                  href="/messages"
                  className="relative text-black font-semibold rounded-none ml-auto border-r border-gray-400"
                >
                  <div className="flex items-center pr-4">
                    <div className="fill-current w-8 h-8 mr-2">
                      <img src={"/icons/return-black.svg"} alt="" />
                      <span>Back</span>
                    </div>
                  </div>
                </a>
                <div className="col-span-2 my-auto  mr-auto pl-4">
                  <div className="text-3xl leading-5 font-medium text-gray-900 mb-3">
                    Ansley gordon
                  </div>
                  <div className="text-sm leading-5 text-yellow-500">
                    See Profile
                  </div>
                </div>
              </div>
              <main className="p-4 flex-1">
                <h1 className="text-5xl">Main</h1>
              </main>

              <footer className="h-32 border-t border-gray-400 p-10">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-11">
                    <input
                      className="p-3 w-full text-black text-2xl border border-white"
                      placeholder="Type a Massage..."
                      type="text"
                    />
                  </div>
                  <div className="col-span-1">
                    <span className="w-full h-full rounded-md shadow-sm">
                      <button
                        type="button"
                        className="w-full h-full items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                      >
                        SEND
                      </button>
                    </span>
                  </div>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Chat;
