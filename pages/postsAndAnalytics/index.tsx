import { h } from "preact";
import { useState } from "preact/hooks";
import Head from "next/head";
import Header from "../../components/Header";
import CardPost from "../../components/cardPost";
import SideBar from "../../components/Sidebar";

const PostsAndAnalytics = () => {
  return (
    <>
      <div className="h-screen flex overflow-hidden bg-white">
        <div className="lg:hidden">
          <div className="fixed inset-0 flex z-40">
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>

            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                <button
                  className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  ></svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src={"/trend-logo.svg"}
                  alt="Workflow"
                />
              </div>

              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2">
                  <div className="space-y-1">
                    <a
                      href="#"
                      className="group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none transition ease-in-out duration-150"
                    >
                      <svg
                        className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      ></svg>
                      Home
                    </a>

                    <a
                      href="#"
                      className="group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition ease-in-out duration-150"
                    >
                      <svg
                        className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      ></svg>
                      My tasks
                    </a>

                    <a
                      href="#"
                      className="group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition ease-in-out duration-150"
                    >
                      <svg
                        className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      ></svg>
                      Recent
                    </a>
                  </div>
                  <div className="mt-8">
                    <h3
                      className="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider"
                      id="teams-headline"
                    >
                      Teams
                    </h3>
                    <div
                      className="mt-1 space-y-1"
                      role="group"
                      aria-labelledby="teams-headline"
                    >
                      <a
                        href="#"
                        className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                        <span className="truncate">Engineering</span>
                      </a>

                      <a
                        href="#"
                        className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <span className="w-2.5 h-2.5 mr-4 bg-teal-400 rounded-full"></span>
                        <span className="truncate">Human Resources</span>
                      </a>

                      <a
                        href="#"
                        className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <span className="w-2.5 h-2.5 mr-4 bg-orange-500 rounded-full"></span>
                        <span className="truncate">Customer Success</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="flex-shrink-0 w-14"></div>
          </div>
        </div>

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
              <title>Posts & Analytics | Saypilot</title>
              <meta property="og:title" content="Information about Genemator" />
              <meta
                property="og:description"
                content="In this page you can get detailed information about Genemator and his works & experiences."
              />
            </Head>
            <Header />

            <div className=" sm:block">
              <div className="align-middle inline-block min-w-full border-b border-gray-200">
                <div className="grid grid-cols-8 gap-4 py-4 px-3">
                  <div className="col-span-1 p-4 text-black">
                    <p>91</p>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        LIVE POSTS
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 p-4 text-black">
                    <p>24,865</p>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        LIKES
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 p-4 text-black">
                    <p>2,508</p>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        COMMENTS
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 p-4 text-black">
                    <p>323,245</p>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        IMPRESSIONS
                      </span>
                    </div>
                  </div>
                  <div className="col-span-4 p-4 text-black text-right">
                    <span className="relative z-0 inline-flex shadow-sm rounded-md">
                      <button
                        type="button"
                        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                      >
                        1W
                      </button>
                      <button
                        type="button"
                        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                      >
                        1M
                      </button>
                      <button
                        type="button"
                        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                      >
                        6M
                      </button>
                      <button
                        type="button"
                        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                      >
                        1Y
                      </button>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 px-3 border-b border-gray-400">
                  <div className="flex items-center py-4 m-auto cursor-pointer  border-b-4 border-white hover:border-black">
                    <div className="flex-shrink-0 h-24 w-24">
                      <img
                        className="h-24 w-24 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                        alt=""
                      />
                    </div>
                    <div className="mt-auto ml-4">
                      <div className="text-5xl leading-9 font-bold text-gray-900">
                        91
                      </div>
                      <div className="text-sm leading-9 text-gray-500">
                        ALL POSTS
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center py-4 m-auto cursor-pointer border-b-4 border-white hover:border-black">
                    <div className="flex-shrink-0 h-24 w-24">
                      <img
                        className="h-24 w-24 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                        alt=""
                      />
                    </div>
                    <div className="mt-auto ml-4">
                      <div className="text-5xl leading-9 font-bold text-gray-900">
                        44
                      </div>
                      <div className="text-sm leading-9 text-gray-500">
                        IMAGE POSTS
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center py-4 m-auto cursor-pointer border-b-4 border-white hover:border-black">
                    <div className="flex-shrink-0 h-24 w-24">
                      <img
                        className="h-24 w-24 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                        alt=""
                      />
                    </div>
                    <div className="mt-auto ml-4">
                      <div className="text-5xl leading-9 font-bold text-gray-900">
                        0
                      </div>
                      <div className="text-sm leading-9 text-gray-500">
                        VIDEO POSTS
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center py-4 m-auto cursor-pointer border-b-4 border-white hover:border-black">
                    <div className="flex-shrink-0 h-24 w-24">
                      <img
                        className="h-24 w-24 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                        alt=""
                      />
                    </div>
                    <div className="mt-auto ml-4">
                      <div className="text-5xl leading-9 font-bold text-gray-900">
                        47
                      </div>
                      <div className="text-sm leading-9 text-gray-500">
                        STORY POSTS
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-4 p-5">
                  <div className="col-span-1 m-auto">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 mr-3">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 360.49 360.49"
                          >
                            <path
                              d="M96.653,0H13.061C7.29,0,2.612,4.678,2.612,10.449v83.592c0,5.771,4.678,10.449,10.449,10.449h83.592
				                      c5.771,0,10.449-4.678,10.449-10.449V10.449C107.102,4.678,102.424,0,96.653,0z"
                            />
                            <path
                              d="M222.041,0h-83.592C132.678,0,128,4.678,128,10.449v83.592c0,5.771,4.678,10.449,10.449,10.449h83.592
				                      c5.771,0,10.449-4.678,10.449-10.449V10.449C232.49,4.678,227.812,0,222.041,0z"
                            />
                            <path
                              d="M96.653,125.388H13.061c-5.771,0-10.449,4.678-10.449,10.449v83.592c0,5.771,4.678,10.449,10.449,10.449h83.592
				                      c5.771,0,10.449-4.678,10.449-10.449v-83.592C107.102,130.066,102.424,125.388,96.653,125.388z"
                            />
                            <path
                              d="M222.041,125.388h-83.592c-5.771,0-10.449,4.678-10.449,10.449v83.592c0,5.771,4.678,10.449,10.449,10.449h83.592
				                      c5.771,0,10.449-4.678,10.449-10.449v-83.592C232.49,130.066,227.812,125.388,222.041,125.388z"
                            />
                            <path
                              d="M347.429,0h-83.592c-5.771,0-10.449,4.678-10.449,10.449v83.592c0,5.771,4.678,10.449,10.449,10.449h83.592
				                      c5.771,0,10.449-4.678,10.449-10.449V10.449C357.878,4.678,353.199,0,347.429,0z"
                            />
                            <path
                              d="M347.429,125.388h-83.592c-5.771,0-10.449,4.678-10.449,10.449v83.592c0,5.771,4.678,10.449,10.449,10.449h83.592
				                      c5.771,0,10.449-4.678,10.449-10.449v-83.592C357.878,130.066,353.199,125.388,347.429,125.388z"
                            />
                            <path
                              d="M96.653,256H13.061c-5.771,0-10.449,4.678-10.449,10.449v83.592c0,5.771,4.678,10.449,10.449,10.449h83.592
				                      c5.771,0,10.449-4.678,10.449-10.449v-83.592C107.102,260.678,102.424,256,96.653,256z"
                            />
                            <path
                              d="M222.041,256h-83.592c-5.771,0-10.449,4.678-10.449,10.449v83.592c0,5.771,4.678,10.449,10.449,10.449h83.592
			                        c5.771,0,10.449-4.678,10.449-10.449v-83.592C232.49,260.678,227.812,256,222.041,256z"
                            />
                            <path
                              d="M347.429,256h-83.592c-5.771,0-10.449,4.678-10.449,10.449v83.592c0,5.771,4.678,10.449,10.449,10.449h83.592
				                      c5.771,0,10.449-4.678,10.449-10.449v-83.592C357.878,260.678,353.199,256,347.429,256z"
                            />
                          </svg>
                        </div>
                        <div className="m-auto">
                          <div className="text-sm font-medium text-gray-900">
                            Grid
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 mr-3">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 343.5 343.5"
                          >
                            <path
                              d="M322.05,161.8h-182.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h182.6c5.5,0,10-4.5,10-10C332.05,166.3,327.65,161.8,322.05,161.8
			                        z"
                            />
                            <path
                              d="M57.95,125.3c-25.7,0-46.5,20.8-46.5,46.5s20.8,46.5,46.5,46.5s46.5-20.8,46.5-46.5S83.65,125.3,57.95,125.3z
			                        M57.95,198.3c-14.7,0-26.5-11.9-26.5-26.5c0-14.7,11.9-26.5,26.5-26.5c14.6,0,26.5,11.9,26.5,26.5S72.55,198.3,57.95,198.3z"
                            />
                            <path d="M322.05,36.8h-182.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h182.6c5.5,0,10-4.5,10-10C332.05,41.3,327.65,36.8,322.05,36.8z" />
                            <path
                              d="M57.95,0c-25.7,0-46.5,20.8-46.5,46.5c0,25.7,20.8,46.5,46.5,46.5s46.5-20.8,46.5-46.5C104.45,20.9,83.65,0.1,57.95,0z
                              M57.95,73.1c-14.7,0-26.5-11.9-26.5-26.5c0-14.6,11.9-26.5,26.5-26.5c14.7,0,26.5,11.9,26.5,26.5
                              C84.45,61.2,72.55,73.1,57.95,73.1z"
                            />
                            <path d="M322.05,286.8h-182.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h182.6c5.5,0,10-4.5,10-10S327.65,286.8,322.05,286.8z" />
                            <path
                              d="M57.95,250.5c-25.7,0-46.5,20.8-46.5,46.5c0,25.7,20.8,46.5,46.5,46.5s46.5-20.8,46.5-46.5
                              C104.45,271.4,83.65,250.5,57.95,250.5z M57.95,323.6c-14.7,0-26.5-11.9-26.5-26.5c0-14.7,11.9-26.5,26.5-26.5
                              c14.7,0,26.5,11.9,26.5,26.5S72.55,323.6,57.95,323.6z"
                            />
                          </svg>
                        </div>
                        <div className="m-auto">
                          <div className="text-sm font-medium text-gray-900">
                            List
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 text-right">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 mr-4 border  border-gray-400 rounded-none text-left leading-5">
                      <div className="flex items-center">
                        <div className="">
                          <span>SEND CONTENT TO</span>
                        </div>
                      </div>
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border  border-gray-400 rounded-none text-left leading-5">
                      <div className="flex items-center">
                        <div className="">
                          <span>DOWNLOAD HD CREATIVE</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 px-8">
                  <div className="m-auto">
                    <CardPost />
                  </div>
                  <div className="m-auto">
                    <CardPost />
                  </div>
                  <div className="m-auto">
                    <CardPost />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default PostsAndAnalytics;
