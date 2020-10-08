import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Head from "next/head";
import Header from "../../components/Header";
import DataService from "../../service/service";
import InfluencerList from "./influencerList";
import ShipmentsMade from "./shipmentsMade";
import PostApproval from "./postApproval";
import TableLoader from "./tableLoader/";
import SideBar from "../../components/Sidebar";

const Influencers = () => {
  const [menu, setMenu] = useState(1);
  const [loading, setLoading] = useState(true);

  const handelChangeMenu = (props: number) => {
    setMenu(props);
  };

  const getInfluencerList = () => {
    DataService.getAll("/campaigns").then((res) => {
      // console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getInfluencerList();
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
              <title>Influencers | Saypilot</title>
              <meta property="og:title" content="Information about Genemator" />
              <meta
                property="og:description"
                content="In this page you can get detailed information about Genemator and his works & experiences."
              />
            </Head>
            <Header />

            <div className=" sm:block">
              <div className="grid grid-cols-3 bg-gray-200 gap-4">
                <div
                  onClick={() => handelChangeMenu(1)}
                  className={`flex items-center py-4 m-auto cursor-pointer border-b-4 ${
                    menu === 1 ? "border-black" : "border-gray-200"
                  } hover:border-black`}
                >
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
                <div
                  onClick={() => handelChangeMenu(2)}
                  className={`flex items-center py-4 m-auto cursor-pointer border-b-4 ${
                    menu === 2 ? "border-black" : "border-gray-200"
                  } hover:border-black`}
                >
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
                <div
                  onClick={() => handelChangeMenu(3)}
                  className={`flex items-center py-4 m-auto cursor-pointer border-b-4 ${
                    menu === 3 ? "border-black" : "border-gray-200"
                  } hover:border-black`}
                >
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
                <div className="p-8">
                  {menu === 1 ? (
                    <div>{loading ? <TableLoader /> : <InfluencerList />}</div>
                  ) : menu === 2 ? (
                    <ShipmentsMade />
                  ) : (
                    <PostApproval />
                  )}
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
