import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Head from "next/head";
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import DataService from "../../service/service";
import LineChart from "./chart";
import CardPost from "./cardPost";
import ImageLoader from "../../components/ImageLoader";
import ChartLoader from "../../components/ChartLoader";

const PostsAndAnalytics = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [backupData, setBackupData] = useState([]);
  const [time, setTime] = useState(5);
  const [menu, setMenu] = useState(1);

  const getChartData = () => {
    DataService.getAll("/chartData")
      .then((res) => {
        // console.log(res.data);
        setBackupData(res.data);
        setChartData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const onChangeTime = (props: any) => {
    let data = [];
    setTime(props);
    if (props === 1) {
      data = backupData.slice(358);
      setChartData(data);
    } else if (props === 2) {
      data = backupData.slice(335);
      setChartData(data);
    } else if (props === 3) {
      data = backupData.slice(275);
      setChartData(data);
    } else if (props === 4) {
      data = backupData.slice(185);
      setChartData(data);
    } else if (props === 5) {
      data = backupData;
      setChartData(data);
    }
  };

  const onChangeMenu = (props: any) => {
    setMenu(props);
  };

  useEffect(() => {
    getChartData();
  }, []);

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
                        onClick={() => onChangeTime(1)}
                        className={`${
                          time === 1 ? "bg-indigo-400" : "bg-white"
                        } relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
                      >
                        1W
                      </button>
                      <button
                        type="button"
                        onClick={() => onChangeTime(2)}
                        className={`${
                          time === 2 ? "bg-indigo-400" : "bg-white"
                        } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
                      >
                        1M
                      </button>
                      <button
                        type="button"
                        onClick={() => onChangeTime(3)}
                        className={`${
                          time === 3 ? "bg-indigo-400" : "bg-white"
                        } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
                      >
                        3M
                      </button>
                      <button
                        type="button"
                        onClick={() => onChangeTime(4)}
                        className={`${
                          time === 4 ? "bg-indigo-400" : "bg-white"
                        } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
                      >
                        6M
                      </button>
                      <button
                        type="button"
                        onClick={() => onChangeTime(5)}
                        className={`${
                          time === 5 ? "bg-indigo-400" : "bg-white"
                        } relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
                      >
                        1Y
                      </button>
                    </span>
                  </div>
                  <div className="col-span-8">
                    {loading ? <ChartLoader /> : <LineChart data={chartData} />}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 px-3 border-b border-gray-400">
                  <div
                    onClick={() => onChangeMenu(1)}
                    className={`${
                      menu === 1 ? "border-indigo-400" : "border-white"
                    } flex items-center py-4 m-auto cursor-pointer border-b-4 hover:border-indigo-400`}
                  >
                    <div className="flex-shrink-0 h-24 w-24">
                      <div
                        className={`${
                          menu === 1
                            ? "bg-indigo-400 text-white"
                            : "bg-white border border-black"
                        } w-full h-full rounded-full flex items-center justify-center text-4xl font-bold`}
                      >
                        ALL
                      </div>
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
                  <div
                    onClick={() => onChangeMenu(2)}
                    className={`${
                      menu === 2 ? "border-indigo-400" : "border-white"
                    } flex items-center py-4 m-auto cursor-pointer border-b-4 hover:border-indigo-400`}
                  >
                    <div className="flex-shrink-0 h-24 w-24">
                      <div
                        className={`${
                          menu === 2
                            ? "bg-indigo-400 text-white"
                            : "bg-white border border-black"
                        } w-full h-full rounded-full flex items-center justify-center text-4xl font-bold`}
                      >
                        IMG
                      </div>
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
                  <div
                    onClick={() => onChangeMenu(3)}
                    className={`${
                      menu === 3 ? "border-indigo-400" : "border-white"
                    } flex items-center py-4 m-auto cursor-pointer border-b-4 hover:border-indigo-400`}
                  >
                    <div className="flex-shrink-0 h-24 w-24">
                      <div
                        className={`${
                          menu === 3
                            ? "bg-indigo-400 text-white"
                            : "bg-white border border-black"
                        } w-full h-full rounded-full flex items-center justify-center text-4xl font-bold`}
                      >
                        VDO
                      </div>
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
                  <div
                    onClick={() => onChangeMenu(4)}
                    className={`${
                      menu === 4 ? "border-indigo-400" : "border-white"
                    } flex items-center py-4 m-auto cursor-pointer border-b-4 hover:border-indigo-400`}
                  >
                    <div className="flex-shrink-0 h-24 w-24">
                      <div
                        className={`${
                          menu === 4
                            ? "bg-indigo-400 text-white"
                            : "bg-white border border-black"
                        } w-full h-full rounded-full flex items-center justify-center text-4xl font-bold`}
                      >
                        STY
                      </div>
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

                {loading ? (
                  <ImageLoader />
                ) : (
                  <div className="grid grid-cols-3 gap-6 p-8">
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
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default PostsAndAnalytics;
