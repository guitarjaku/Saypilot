/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { useState, useEffect } from "preact/hooks/";
import Head from "next/head";
import Header from "../../components/Header";
import OverSide from "./overSide";
import Instagram from "./instagram";
import Youtube from "./youtube";
import Tiktok from "./tiktok";
import SideBar from "../../components/Sidebar";

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
  const [overSideOpen, setOverSideOpen] = useState(false);
  const [sniperMenu, setSniperMenu] = useState(1);

  const onOverSideOpen = () => {
    setOverSideOpen(true);
  };

  const onOverSideClose = () => {
    setOverSideOpen(false);
  };

  const onSniperChange = (props: number) => {
    setSniperMenu(props);
  };

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
              <title>Applications | Saypilot</title>
              <meta property="og:title" content="Information about Genemator" />
              <meta
                property="og:description"
                content="In this page you can get detailed information about Genemator and his works & experiences."
              />
            </Head>
            <Header />
            <div className="p-4">
              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                <button
                  type="button"
                  onClick={() => onSniperChange(1)}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                >
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      <svg
                        className="w-4 h-4"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
                            C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
                            H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
                            V363.272z"
                        />
                        <path
                          d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
			                      c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"
                        />
                        <circle cx="396" cy="116" r="20" />
                      </svg>
                    </div>
                    <div className="flex">
                      <span>Instagram</span>
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => onSniperChange(2)}
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                >
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      <svg
                        className="w-4 h-4"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                      >
                        <path d="M48,0L16,96v352h128v64h64l64-64h96l128-136.32V0H48z M464,288l-89.6,96H260.928L192,434.144V384H80V32h384V288z" />
                        <rect x="240" y="128" width="32" height="128" />
                        <rect x="336" y="128" width="32" height="128" />
                      </svg>
                    </div>
                    <div className="flex">
                      <span>Twitch</span>
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => onSniperChange(3)}
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                >
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      <svg
                        className="w-4 h-4"
                        height="682pt"
                        viewBox="-21 -117 682.66672 682"
                        width="682pt"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0" />
                      </svg>
                    </div>
                    <div className="flex">
                      <span>Youtube</span>
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => onSniperChange(4)}
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                >
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      <svg
                        className="w-4 h-4"
                        id="Capa_1"
                        enable-background="new 0 0 512 512"
                        height="512"
                        viewBox="0 0 512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m480.32 128.39c-29.22 0-56.18-9.68-77.83-26.01-24.83-18.72-42.67-46.18-48.97-77.83-1.56-7.82-2.4-15.89-2.48-24.16h-83.47v228.08l-.1 124.93c0 33.4-21.75 61.72-51.9 71.68-8.75 2.89-18.2 4.26-28.04 3.72-12.56-.69-24.33-4.48-34.56-10.6-21.77-13.02-36.53-36.64-36.93-63.66-.63-42.23 33.51-76.66 75.71-76.66 8.33 0 16.33 1.36 23.82 3.83v-62.34-22.41c-7.9-1.17-15.94-1.78-24.07-1.78-46.19 0-89.39 19.2-120.27 53.79-23.34 26.14-37.34 59.49-39.5 94.46-2.83 45.94 13.98 89.61 46.58 121.83 4.79 4.73 9.82 9.12 15.08 13.17 27.95 21.51 62.12 33.17 98.11 33.17 8.13 0 16.17-.6 24.07-1.77 33.62-4.98 64.64-20.37 89.12-44.57 30.08-29.73 46.7-69.2 46.88-111.21l-.43-186.56c14.35 11.07 30.04 20.23 46.88 27.34 26.19 11.05 53.96 16.65 82.54 16.64v-60.61-22.49c.02.02-.22.02-.24.02z" />
                      </svg>
                    </div>
                    <div className="flex">
                      <span>Tiktok</span>
                    </div>
                  </div>
                </button>
              </span>
            </div>
            <div className="border border-gray-300 m-4">
              {sniperMenu === 1 ? (
                <Instagram />
              ) : sniperMenu === 2 ? (
                ""
              ) : sniperMenu === 3 ? (
                <Youtube />
              ) : (
                <Tiktok />
              )}
            </div>
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
                  <div className="flex items-center mr-2">
                    <input
                      id="comments"
                      type="checkbox"
                      className="form-checkbox h-8 w-8 text-indigo-600 rounded-none transition duration-150 ease-in-out"
                    />
                  </div>
                  <div className=" text-sm leading-5">
                    <label className="font-medium text-gray-700 ">
                      Select Multiple
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className=" sm:block">
              <div className="align-middle inline-block min-w-full border-b border-gray-200">
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto ">
                    <div className="py-2 align-middle inline-block min-w-full">
                      <div className="overflow-hidden rounded-none border border-gray-400">
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
                            <tr
                              className="cursor-pointer hover:bg-gray-100"
                              onClick={() => onOverSideOpen()}
                            >
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
            {overSideOpen && <OverSide onClose={onOverSideClose} />}
          </main>
        </div>
      </div>
    </>
  );
}
