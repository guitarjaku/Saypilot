import { h } from "preact";
import { useState } from "preact/hooks/";
import Head from "next/head";
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";

const Messages = () => {
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
              <title>Messages | Saypilot</title>
              <meta property="og:title" content="Information about Genemator" />
              <meta
                property="og:description"
                content="In this page you can get detailed information about Genemator and his works & experiences."
              />
            </Head>
            <Header />

            <div className=" sm:block">
              <div className="align-middle inline-block min-w-full  border-b border-gray-200">
                <div className="grid grid-cols-7 bg-gray-200 gap-4 py-4 px-3">
                  <div className="text-center">
                    <button className="py-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border  border-gray-400 rounded-none text-left leading-5">
                      <div className="flex items-center">
                        <div className="flex">
                          <img src={"/icons/bullhorn.png"} alt="" />
                        </div>
                        <div className="flex italic">
                          <span>GROUP MESSAGE</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <a href="/chat">
                  <div className="grid grid-cols-12 gap-4 text-black py-4 px-3 cursor-pointer hover:bg-gray-100">
                    <div className="col-span-1 h-24 w-24  ml-auto">
                      <img
                        className="h-24 w-24 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                        alt=""
                      />
                    </div>
                    <div className="col-span-2  m-auto">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        @thebubblybionde
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        Arizona
                      </div>
                    </div>
                    <div className="col-span-7 m-auto">
                      <span>your post looks amazing! thank you so much</span>
                    </div>
                    <div className="col-span-2  m-auto">a few seconds ago</div>
                  </div>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Messages;
