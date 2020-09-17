import { h } from "preact";
import { useState } from "preact/hooks";
import Head from "next/head";
import Header from "../components/Header";

const Influencers = () => {
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
              <title>Influencers | Saypilot</title>
              <meta property="og:title" content="Information about Genemator" />
              <meta
                property="og:description"
                content="In this page you can get detailed information about Genemator and his works & experiences."
              />
            </Head>
            <Header />

            <div className=" sm:block">
              <div className="h-5 text-black">Influencer list</div>
              <div className="grid grid-cols-3 bg-gray-200 gap-4  px-3">
                <div className="flex items-center py-4 m-auto cursor-pointer  border-b-4 border-gray-200 hover:border-black">
                  <div className="flex-shrink-0 h-24 w-24">
                    <img
                      className="h-24 w-24 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                      alt=""
                    />
                  </div>
                  <div className="mt-auto ml-4">
                    <div className="text-5xl leading-9 italic font-medium text-gray-900">
                      46
                    </div>
                    <div className="text-sm leading-9 text-gray-500">
                      INFLUENCER LIST
                    </div>
                  </div>
                </div>
                <div className="flex items-center py-4 m-auto cursor-pointer border-b-4 border-gray-200 hover:border-black">
                  <div className="flex-shrink-0 h-24 w-24">
                    <img
                      className="h-24 w-24 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                      alt=""
                    />
                  </div>
                  <div className="mt-auto ml-4">
                    <div className="text-5xl leading-9 italic font-medium text-gray-900">
                      41/46
                    </div>
                    <div className="text-sm leading-9 text-gray-500">
                      SHIPMENTS MADE
                    </div>
                  </div>
                </div>
                <div className="flex items-center py-4 m-auto cursor-pointer border-b-4 border-gray-200 hover:border-black">
                  <div className="flex-shrink-0 h-24 w-24">
                    <img
                      className="h-24 w-24 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                      alt=""
                    />
                  </div>
                  <div className="mt-auto ml-4">
                    <div className="text-5xl leading-9 italic font-medium text-gray-900">
                      85/90
                    </div>
                    <div className="text-sm leading-9 text-gray-500">
                      POST APPROVAL
                    </div>
                  </div>
                </div>
              </div>
              <div className="align-middle inline-block min-w-full ">
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                INFLUENCER
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                LOCATION
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                AGE RANGE
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                GENDER
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                CATEGORY
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
                                <div className="flex items-center">
                                  <div className="ml-auto">
                                    <div className="text-sm  text-right leading-5 font-medium text-gray-900">
                                      8839 Wall St.309 Los Angeles,
                                    </div>
                                    <div className="text-sm  text-right leading-5 text-gray-500">
                                      California 91604
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500">
                                25-31
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500">
                                Female
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500">
                                <span>Fashion</span>
                                <br />
                                <span>Food</span>
                                <br />
                                <span>Other</span>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium border-l border-gray-300">
                                <span className="rounded-md shadow-sm mr-2">
                                  <button
                                    type="button"
                                    className="items-center px-5 py-5 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                  >
                                    <svg
                                      height="28px"
                                      viewBox="-21 -47 682.66669 682"
                                      width="28px"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="white"
                                    >
                                      <path d="m552.011719-1.332031h-464.023438c-48.515625 0-87.988281 39.464843-87.988281 87.988281v283.972656c0 48.414063 39.300781 87.816406 87.675781 87.988282v128.863281l185.191407-128.863281h279.144531c48.515625 0 87.988281-39.472657 87.988281-87.988282v-283.972656c0-48.523438-39.472656-87.988281-87.988281-87.988281zm50.488281 371.960937c0 27.835938-22.648438 50.488282-50.488281 50.488282h-290.910157l-135.925781 94.585937v-94.585937h-37.1875c-27.839843 0-50.488281-22.652344-50.488281-50.488282v-283.972656c0-27.84375 22.648438-50.488281 50.488281-50.488281h464.023438c27.839843 0 50.488281 22.644531 50.488281 50.488281zm0 0" />
                                      <path d="m171.292969 131.171875h297.414062v37.5h-297.414062zm0 0" />
                                      <path d="m171.292969 211.171875h297.414062v37.5h-297.414062zm0 0" />
                                      <path d="m171.292969 291.171875h297.414062v37.5h-297.414062zm0 0" />
                                    </svg>
                                  </button>
                                </span>
                                <span className="rounded-md shadow-sm">
                                  <button
                                    type="button"
                                    className="items-center px-5 py-5 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                  >
                                    <svg
                                      id="Capa_1"
                                      enable-background="new 0 0 515.555 515.555"
                                      height="28px"
                                      viewBox="0 0 515.555 515.555"
                                      width="28px"
                                      fill="white"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" />
                                      <path d="m303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" />
                                      <path d="m110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" />
                                    </svg>
                                  </button>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-5 text-black">Shipments made</div>

                <div className="grid grid-cols-7 bg-gray-200 gap-4 py-4 px-3">
                  <div className="col-span-1 text-1xl text-black m-auto">
                    Needs to be shipped 6
                  </div>
                  <div className="text-center">
                    <button className="py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border  border-gray-400 rounded-none text-left leading-5">
                      <div className="flex items-center">
                        <div className="flex">
                          <span>CSV DOWNLOAD</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                INFLUENCER
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                ADDRESS
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
                                <div className="flex items-center">
                                  <div className="mr-auto">
                                    <div className="text-sm  text-left leading-5 font-medium text-gray-900">
                                      8839 Wall St.309 Los Angeles,
                                    </div>
                                    <div className="text-sm  text-left leading-5 text-gray-500">
                                      California 91604
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium border-l border-gray-300">
                                <span className="rounded-md shadow-sm">
                                  <button
                                    type="button"
                                    className="items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                  >
                                    MARK AS SHIPPED
                                  </button>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-7 bg-gray-200 gap-4 py-4 px-3">
                  <div className="col-span-1 text-1xl text-black m-auto">
                    Shipped - 41
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                INFLUENCER
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                ADDRESS
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
                                <div className="flex items-center">
                                  <div className="mr-auto">
                                    <div className="text-sm  text-left leading-5 font-medium text-gray-900">
                                      8839 Wall St.309 Los Angeles,
                                    </div>
                                    <div className="text-sm  text-left leading-5 text-gray-500">
                                      California 91604
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium border-l border-gray-300">
                                <span className="rounded-md shadow-sm">
                                  <button
                                    type="button"
                                    className="items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                  >
                                    SHIPPING DETAILS
                                  </button>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-5 text-black">Post approval</div>
                <div className="grid grid-cols-7 bg-gray-200 gap-4 py-4 px-3">
                  <div className="col-span-2 text-1xl text-black m-auto">
                    <p>Awaiting Post - 8</p>
                    <span>
                      These Influencers have yet to post if you are looking for
                      status on when they will post, feel free to message them
                      at any point.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                INFLUENCER
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                POST
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                COMMENTS
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                LIKES
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
                                <div className="flex-shrink-0 h-15 w-15">
                                  <img
                                    className="h-15 w-15 rounded-none"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-black">
                                <span>...</span>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-black">
                                <span>...</span>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium border-l border-gray-300">
                                <span className="rounded-md shadow-sm mr-2">
                                  <button
                                    type="button"
                                    className="items-center px-5 py-5 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                  >
                                    <svg
                                      height="28px"
                                      viewBox="-21 -47 682.66669 682"
                                      width="28px"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="white"
                                    >
                                      <path d="m552.011719-1.332031h-464.023438c-48.515625 0-87.988281 39.464843-87.988281 87.988281v283.972656c0 48.414063 39.300781 87.816406 87.675781 87.988282v128.863281l185.191407-128.863281h279.144531c48.515625 0 87.988281-39.472657 87.988281-87.988282v-283.972656c0-48.523438-39.472656-87.988281-87.988281-87.988281zm50.488281 371.960937c0 27.835938-22.648438 50.488282-50.488281 50.488282h-290.910157l-135.925781 94.585937v-94.585937h-37.1875c-27.839843 0-50.488281-22.652344-50.488281-50.488282v-283.972656c0-27.84375 22.648438-50.488281 50.488281-50.488281h464.023438c27.839843 0 50.488281 22.644531 50.488281 50.488281zm0 0" />
                                      <path d="m171.292969 131.171875h297.414062v37.5h-297.414062zm0 0" />
                                      <path d="m171.292969 211.171875h297.414062v37.5h-297.414062zm0 0" />
                                      <path d="m171.292969 291.171875h297.414062v37.5h-297.414062zm0 0" />
                                    </svg>
                                  </button>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-7 bg-gray-200 gap-4 py-4 px-3">
                  <div className="col-span-1 text-1xl text-black m-auto">
                    Approved Posts - 91
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                INFLUENCER
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                POST
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                COMMENTS
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                LIKES
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
                                <div className="flex-shrink-0 h-15 w-15">
                                  <img
                                    className="h-15 w-15 rounded-none"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-black">
                                <span>18</span>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-black">
                                <span>754</span>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium border-l border-gray-300">
                                <span className="rounded-md shadow-sm mr-2">
                                  <button
                                    type="button"
                                    className="items-center px-5 py-5 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                  >
                                    <svg
                                      height="28px"
                                      viewBox="-21 -47 682.66669 682"
                                      width="28px"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="white"
                                    >
                                      <path d="m552.011719-1.332031h-464.023438c-48.515625 0-87.988281 39.464843-87.988281 87.988281v283.972656c0 48.414063 39.300781 87.816406 87.675781 87.988282v128.863281l185.191407-128.863281h279.144531c48.515625 0 87.988281-39.472657 87.988281-87.988282v-283.972656c0-48.523438-39.472656-87.988281-87.988281-87.988281zm50.488281 371.960937c0 27.835938-22.648438 50.488282-50.488281 50.488282h-290.910157l-135.925781 94.585937v-94.585937h-37.1875c-27.839843 0-50.488281-22.652344-50.488281-50.488282v-283.972656c0-27.84375 22.648438-50.488281 50.488281-50.488281h464.023438c27.839843 0 50.488281 22.644531 50.488281 50.488281zm0 0" />
                                      <path d="m171.292969 131.171875h297.414062v37.5h-297.414062zm0 0" />
                                      <path d="m171.292969 211.171875h297.414062v37.5h-297.414062zm0 0" />
                                      <path d="m171.292969 291.171875h297.414062v37.5h-297.414062zm0 0" />
                                    </svg>
                                  </button>
                                </span>
                                <span className="rounded-md shadow-sm mr-2">
                                  <button
                                    type="button"
                                    className="items-center px-5 py-5 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                                  >
                                    <svg
                                      height="28px"
                                      viewBox="-63 0 512 512"
                                      width="28px"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="white"
                                    >
                                      <path d="m295.960938 217.144531h-185.015626c-4.175781 0-7.558593 3.382813-7.558593 7.554688 0 4.175781 3.382812 7.558593 7.558593 7.558593h185.015626c4.171874 0 7.554687-3.382812 7.554687-7.558593 0-4.171875-3.382813-7.554688-7.554687-7.554688zm0 0" />
                                      <path d="m295.960938 170.410156h-185.015626c-4.175781 0-7.558593 3.382813-7.558593 7.558594 0 4.171875 3.382812 7.554688 7.558593 7.554688h185.015626c4.171874 0 7.554687-3.382813 7.554687-7.554688 0-4.175781-3.382813-7.558594-7.554687-7.558594zm0 0" />
                                      <path d="m377.472656 270.976562c4.167969 0 7.558594-3.390624 7.558594-7.558593v-126.121094c0-2.433594-.011719-4.679687-.042969-6.792969.003907-.078125.011719-.15625.011719-.234375 0-.160156-.011719-.316406-.023438-.472656-.328124-18.042969-2.652343-25.464844-18.121093-42.230469l-11.730469-12.722656v-46.257812c0-15.761719-12.871094-28.585938-28.695312-28.585938h-297.734376c-15.824218 0-28.695312 12.824219-28.695312 28.585938v185.855468c0 4.175782 3.382812 7.558594 7.558594 7.558594 4.171875 0 7.554687-3.382812 7.554687-7.558594v-185.855468c0-7.429688 6.09375-13.472657 13.582031-13.472657h297.734376c7.488281 0 13.578124 6.042969 13.578124 13.472657v29.855468c-1.308593-1.425781-2.515624-2.765625-3.609374-3.996094-11.15625-12.425781-16.035157-16.726562-36.007813-16.726562h-229.707031c-15.386719 0-27.894532 12.507812-27.894532 27.875v348.175781h-14.09375c-7.488281 0-13.582031-6.042969-13.582031-13.472656v-151.25c0-4.175781-3.382812-7.558594-7.554687-7.558594-4.175782 0-7.558594 3.382813-7.558594 7.558594v151.25c0 15.761719 12.871094 28.585937 28.695312 28.585937h14.414063c2.039063 13.367188 13.621094 23.640626 27.574219 23.640626h76.792968l32.78125 42.089843c.039063.050781.082032.101563.121094.160157 9.054688 10.996093 21.484375 17.226562 34.28125 17.226562.4375 0 .878906-.011719 1.320313-.03125 12.40625-.410156 23.941406-6.785156 31.671875-17.503906l32.671875-41.941406h76.800781c15.386719 0 27.90625-12.496094 27.90625-27.851563v-123.652344c0-4.167969-3.390625-7.558593-7.558594-7.558593-4.167968 0-7.558594 3.390624-7.558594 7.558593v123.652344c0 7.015625-5.738281 12.734375-12.785156 12.734375h-65.027344l4.570313-5.859375c10.148437-13.015625 13.054687-28.511719 7.585937-40.417969-3.007812-6.570312-11.445312-17.746094-34.140624-18.867187-.121094-.011719-.25-.011719-.371094-.011719h-6.917969v-65.953125c0-9.640625-8.195313-17.488281-18.273437-17.488281h-61.316407c-10.078125 0-18.289062 7.847656-18.289062 17.488281v65.953125h-6.875c-.132813 0-.25 0-.371094.011719-22.707031 1.121093-31.144531 12.296875-34.152344 18.867187-5.457031 11.90625-2.546875 27.402344 7.589844 40.417969l4.558594 5.859375h-65.015625c-7.046875 0-12.789063-5.71875-12.789063-12.734375v-3.265625c0-.027344.003907-.054688.003907-.082031 0-.023438-.003907-.050781-.003907-.078125v-355.652344c0-7.027344 5.742188-12.757812 12.789063-12.757812h222.136718l-.050781 57.113281c0 15.371093 12.515625 27.878906 27.902344 27.878906h49.242187v125.589844c0 4.167969 3.390626 7.558593 7.558594 7.558593zm-234.40625 151.292969c-6.457031-8.296875-8.777344-18.285156-5.769531-24.84375 3.46875-7.578125 13.277344-9.65625 20.964844-10.058593h14.246093c4.179688 0 7.558594-3.386719 7.558594-7.554688v-73.515625c0-1.117187 1.359375-2.367187 3.167969-2.367187h61.316406c1.859375 0 3.160157 1.25 3.160157 2.367187v73.515625c0 4.167969 3.390624 7.554688 7.558593 7.554688h14.277344c7.695313.402343 17.503906 2.480468 20.972656 10.058593 3.011719 6.558594.691407 16.546875-5.765625 24.835938l-11.808594 15.144531-11.777343 15.117188-25.535157 32.773437c-.058593.078125-.117187.15625-.179687.238281-5.046875 7.046875-12.136719 11.066406-19.972656 11.328125-8.5.296875-17.015625-3.949219-23.367188-11.628906l-25.484375-32.710937-11.777344-15.117188zm164.820313-312.3125.050781-56.863281c7.578125.726562 9.890625 3.289062 17.214844 11.449219 1.261718 1.410156 2.640625 2.941406 4.179687 4.621093l26.414063 28.652344c10.085937 10.929688 12.988281 15.476563 13.824218 24.898438h-48.898437c-7.050781 0-12.785156-5.726563-12.785156-12.757813zm0 0" />
                                      <path d="m110.945312 138.765625h117.714844c4.175782 0 7.558594-3.382813 7.558594-7.558594s-3.382812-7.558593-7.558594-7.558593h-117.714844c-4.175781 0-7.558593 3.382812-7.558593 7.558593 0 4.171875 3.382812 7.558594 7.558593 7.558594zm0 0" />
                                    </svg>
                                  </button>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* modal */}
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
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="flex flex-col h-64 justify-between">
                      <div className="grid grid-cols-12 px-10 h-24  sm:px-6 sm:py-4 lg:px-8 md:justify-start border-b"></div>
                      <main className="p-4 h-24 flex-1">
                        <h1 className="text-5xl">Main</h1>
                      </main>

                      <footer className="h-24 border-t border-gray-400 p-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="col-span-1 text-right">
                            <span className="w-full h-full rounded-md shadow-sm">
                              <button
                                type="button"
                                className="w-24 h-full items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                              >
                                SEND
                              </button>
                            </span>
                          </div>
                        </div>
                      </footer>
                    </div>
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

export default Influencers;
