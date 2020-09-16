/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { useEffect } from "preact/hooks/";
import Head from "next/head";
import Header from "../components/Header";
import { check } from "prettier";
// import Link from "next/link";

const ProgressLine = (label: string, percentage: number) => {
  const [widths, setWidths] = React.useState(0);

  useEffect(() => {
    requestAnimationFrame(() => setWidths(percentage));
  }, [percentage]);

  return (
    <section className="progress-line">
      <span className="progress-line__label">{label}</span>
      <div
        className="progress-line__outer"
        style={{
          background: "#efefef",
          height: `15px`,
        }}
      >
        <div
          className="progress-line__inner"
          style={{
            width: widths,
            background: "rgba(255, 82, 82, .7)",
            transition: "width 2s",
          }}
        />
      </div>
    </section>
  );
};

export default function Application() {
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
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-black">
            <div className="flex items-center flex-shrink-0 px-6 justify-center">
              <img
                className="h-4 w-auto"
                src={"/trend-logo.png"}
                alt="Workflow"
              />
            </div>

            <div className="h-0 flex-1 flex flex-col overflow-y-auto">
              <div className="mt-6 relative inline-block text-left">
                <nav className="mt-6">
                  <div className="mt-8">
                    {/* <!-- Secondary navigation --> */}
                    <h3
                      className="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider"
                      id="teams-headline"
                    >
                      My Campaigns
                    </h3>
                    <div
                      className="mt-1 space-y-1"
                      role="group"
                      aria-labelledby="teams-headline"
                    >
                      <a
                        href="/editCampaign"
                        className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-200 rounded-none border-r-4 border-black hover:text-gray-500 hover:bg-gray-700 hover:border-yellow-400 focus:outline-none focus:bg-gray-700 focus:border-yellow-400 transition ease-in-out duration-150"
                      >
                        <span className="w-10 h-10 mr-4 bg-indigo-500 rounded-none"></span>
                        <span className="truncate"></span>
                      </a>

                      <a
                        href="#"
                        className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-200 rounded-none border-r-4 border-black hover:text-gray-500 hover:bg-gray-700 hover:border-yellow-400 focus:outline-none focus:bg-gray-700 focus:border-yellow-400 transition ease-in-out duration-150"
                      >
                        <span className="w-10 h-10 mr-4 bg-teal-400 rounded-none"></span>
                        <span className="truncate">New Session, New Wine</span>
                      </a>

                      <a
                        href="#"
                        className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-200 rounded-none border-r-4 border-black hover:text-gray-500 hover:bg-gray-700 hover:border-yellow-400 focus:outline-none focus:bg-gray-700 focus:border-yellow-400 transition ease-in-out duration-150"
                      >
                        <span className="rounded-full h-10 w-10 flex items-center justify-center bg-yellow-400 text-4xl mr-4">
                          +
                        </span>
                        <span className="truncate">Create New Campaign</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

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
              <title>Applications | Saypilot</title>
              <meta property="og:title" content="Information about Genemator" />
              <meta
                property="og:description"
                content="In this page you can get detailed information about Genemator and his works & experiences."
              />
            </Head>
            <Header />
            <div className="grid grid-cols-8 gap-4 py-4 px-3">
              <select
                id="category"
                className=" form-select block w-full text-gray-500 rounded-full text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              >
                <option selected>Categories</option>
                <option>USA</option>
                <option>Canada</option>
                <option>EU</option>
              </select>

              <select
                id="location"
                className=" form-select block w-full text-gray-500 rounded-full text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              >
                <option selected>Location</option>
                <option>USA</option>
                <option>Canada</option>
                <option>EU</option>
              </select>

              <select
                id="creators"
                className=" form-select block w-full text-gray-500 rounded-full text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              >
                <option selected>All Creators</option>
                <option>USA</option>
                <option>Canada</option>
                <option>EU</option>
              </select>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div>
                <div className="relative flex items-center">
                  <div className="flex items-center ">
                    <input
                      id="comments"
                      type="checkbox"
                      className="form-checkbox h-8 w-8 text-indigo-600 rounded-none transition duration-150 ease-in-out"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-5">
                    <label className="font-medium text-gray-700 ">
                      Select Multiple
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className=" sm:block">
              <div className="align-middle inline-block min-w-full border-b border-gray-200 px-3">
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Influencer
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Age
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Date Applied
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Followers
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                likes/post
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                coms/post
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                engagement rate
                              </th>
                              <th className="px-6 py-3 bg-gray-50"></th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="cursor-pointer hover:bg-gray-100">
                              <td className="px-6 py-4 whitespace-no-wrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm leading-5 font-medium text-gray-900">
                                      @thebubblybionde
                                    </div>
                                    <div className="text-sm leading-5 text-gray-500">
                                      Arizona
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap">
                                <div className="text-sm leading-5 text-gray-900">
                                  25-31
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Mar 28
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                443.3k
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                1,504
                              </td>{" "}
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                21
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                0.34%
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium border-l border-gray-300">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-8 w-8">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      focusable="false"
                                      width="2rem"
                                      height="2rem"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <g fill="none">
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"
                                          fill="#9DCDE8"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21z"
                                          fill="#9DCDE8"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm leading-5 font-medium text-gray-900">
                                      PROFILE
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-8 w-8">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      focusable="false"
                                      width="2.1rem"
                                      height="2.1rem"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                                        fill="#E2D6B6"
                                      />
                                      <path
                                        d="M9.999 13.587L7.7 11.292l-1.412 1.416l3.713 3.705l6.706-6.706l-1.414-1.414z"
                                        fill="#E2D6B6"
                                      />
                                    </svg>
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm leading-5 font-medium text-gray-900">
                                      APPROVE
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-8 w-8">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      focusable="false"
                                      width="2.1rem"
                                      height="2.1rem"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 24 24"
                                    >
                                      <g fill="none">
                                        <path
                                          d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926l2.926-2.728z"
                                          fill="#FFC2C9"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18z"
                                          fill="#FFC2C9"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm leading-5 font-medium text-gray-900">
                                      REJECT
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Over side */}
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                {/* <!--
                  Background overlay, show/hide based on slide-over state.

                  Entering: "ease-in-out duration-500"
                    From: "opacity-0"
                    To: "opacity-100"
                  Leaving: "ease-in-out duration-500"
                    From: "opacity-100"
                    To: "opacity-0"
                --> */}
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                  {/* <!--
                    Slide-over panel, show/hide based on slide-over state.

                    Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                      From: "translate-x-full"
                      To: "translate-x-0"
                    Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                      From: "translate-x-0"
                      To: "translate-x-full"
                  --> */}
                  <div className="w-screen max-w-md">
                    <div className="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll">
                      <header className="px-4 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="h-7 flex items-center">
                            <button
                              aria-label="Close panel"
                              className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                            >
                              {/* <!-- Heroicon name: x --> */}
                              <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </header>
                      <div className="relative flex-1">
                        {/* <!-- Replace with your content --> */}
                        <div className="h-full text-black text-center">
                          <img
                            className="relative h-32 w-32 object-cover rounded-full m-auto mb-2"
                            src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"
                            alt=""
                          />
                          <div className="mb-1 px-4 sm:px-6">
                            @ashleyj_music
                          </div>
                          <div className="mb-2 px-4 sm:px-6">
                            Florida | Age: 25-31
                          </div>
                          <div className="grid grid-cols-2 gap-4 px-4 sm:px-6 mb-6">
                            <span className="inline-flex rounded-none shadow-sm ">
                              <button
                                type="button"
                                className="w-full items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                              >
                                Reject
                              </button>
                            </span>
                            <span className="inline-flex rounded-none shadow-sm ">
                              <button
                                type="button"
                                className=" w-full items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                              >
                                Accept
                              </button>
                            </span>
                          </div>
                          <div className="border-t border-b border-gray-200 p-10">
                            <p>Followers</p>
                            <p>27.9k</p>
                          </div>
                          <div className="grid grid-cols-2 text-left border-b border-gray-200">
                            <div className="p-4  border-r border-gray-200">
                              <p>LIKE / POST</p>
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-8 w-8">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    width="2.1rem"
                                    height="2.1rem"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                  >
                                    <g fill="none">
                                      <path
                                        d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926l2.926-2.728z"
                                        fill="#FFC2C9"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18z"
                                        fill="#FFC2C9"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                <div className="ml-4">
                                  <span className="text-sm leading-5 font-medium text-gray-900">
                                    324
                                  </span>
                                  <span>(0.00%)</span>
                                </div>
                              </div>
                            </div>
                            <div className="p-4">
                              <p>COMMENTS / POST</p>
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-8 w-8">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    width="2.1rem"
                                    height="2.1rem"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                  >
                                    <g fill="none">
                                      <path
                                        d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926l2.926-2.728z"
                                        fill="#FFC2C9"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18z"
                                        fill="#FFC2C9"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                <div className="ml-4">
                                  <span className="text-sm leading-5 font-medium text-gray-900">
                                    4
                                  </span>
                                  <span>(0.00%)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 border-b border-gray-200 mb-6">
                            <span>ENGAGEMENT RATE: 1.17%</span>
                          </div>
                          {/* <div style={{ display: "flex", margin: "15px auto" }}>
                            <ProgressLine
                              label="content quality"
                              percentage={95}
                            />
                          </div> */}
                        </div>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            {/* <!--
                              Background overlay, show/hide based on modal state.

                              Entering: "ease-out duration-300"
                                From: "opacity-0"
                                To: "opacity-100"
                              Leaving: "ease-in duration-200"
                                From: "opacity-100"
                                To: "opacity-0"
                            --> */}
                            <div className="fixed inset-0 transition-opacity">
                              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                            &#8203;
                            {/* <!--
                              Modal panel, show/hide based on modal state.

                              Entering: "ease-out duration-300"
                                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                To: "opacity-100 translate-y-0 sm:scale-100"
                              Leaving: "ease-in duration-200"
                                From: "opacity-100 translate-y-0 sm:scale-100"
                                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            --> */}
                            <div
                              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                              role="dialog"
                              aria-modal="true"
                              aria-labelledby="modal-headline"
                            >
                              <div>
                                <div className="text-left text-black">
                                  <h3
                                    className="text-lg leading-6 font-medium "
                                    id="modal-headline"
                                  >
                                    Are you sure you want to
                                  </h3>
                                  <div>approve this Influencer?</div>
                                  <div className="mt-2">
                                    <p className="text-sm leading-5 text-gray-500">
                                      approving an Influencer will cost you
                                      either 1 or 2 campaign credits per
                                      influencer. Review the summary below
                                      before confirming your approval.
                                    </p>
                                  </div>
                                  <div className="mt-2 border border-gray-300 text-center p-24">
                                    <h1>1</h1>
                                    <p>TOTAL CREATOR CREDITS</p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                  >
                                    Approve
                                  </button>
                                </span>
                                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:col-start-1">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                  >
                                    Cancel
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /End replace --> */}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
