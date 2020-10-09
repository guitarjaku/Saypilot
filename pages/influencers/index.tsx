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
  const [influencers, setInfluencers] = useState([]);
  const [cntShiped, setCntShipped] = useState(0);

  const handelChangeMenu = (props: number) => {
    setMenu(props);
  };

  const getInfluencerList = () => {
    DataService.getAll("/influencers").then((res) => {
      // console.log(res.data);
      let cnt = 0;
      res.data.forEach((influ: any) => {
        if (influ.ship_status) {
          cnt++;
        }
      });
      setCntShipped(cnt);
      setInfluencers(res.data);
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
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m467 211c-19.554688 0-36.226562 12.542969-42.421875 30h-34.417969c-2.886718-26-13.183594-49.792969-28.730468-69.214844l23.675781-23.675781c16.734375 7.972656 37.375 5.050781 51.207031-8.78125 17.542969-17.546875 17.542969-46.09375 0-63.640625-17.542969-17.542969-46.09375-17.546875-63.640625 0-13.828125 13.828125-16.746094 34.484375-8.78125 51.207031l-23.675781 23.675781c-19.421875-15.546874-43.214844-25.84375-69.214844-28.730468v-34.417969c17.460938-6.195313 30-22.867187 30-42.421875 0-24.8125-20.1875-45-45-45s-45 20.1875-45 45c0 19.554688 12.539062 36.226562 30 42.421875v34.417969c-26 2.886718-49.792969 13.183594-69.214844 28.730468l-23.675781-23.671874c7.964844-16.726563 5.042969-37.382813-8.78125-51.210938-17.546875-17.542969-46.09375-17.542969-63.640625 0-17.542969 17.546875-17.542969 46.09375 0 63.640625 8.773438 8.773437 20.296875 13.160156 31.820312 13.160156 6.636719 0 13.273438-1.464843 19.386719-4.378906l23.675781 23.675781c-15.546874 19.421875-25.84375 43.214844-28.730468 69.214844h-34.417969c-6.195313-17.457031-22.867187-30-42.421875-30-24.8125 0-45 20.1875-45 45s20.1875 45 45 45c19.554688 0 36.226562-12.542969 42.421875-30h34.417969c2.886718 26 13.183594 49.792969 28.730468 69.214844l-23.675781 23.675781c-16.722656-7.96875-37.378906-5.046875-51.207031 8.78125-17.542969 17.546875-17.542969 46.09375 0 63.640625 17.542969 17.542969 46.09375 17.542969 63.640625 0 13.828125-13.828125 16.746094-34.488281 8.78125-51.210938l23.675781-23.671874c19.964844 15.980468 43.875 25.917968 69.214844 28.730468v34.417969c-17.460938 6.195313-30 22.867187-30 42.421875 0 24.8125 20.1875 45 45 45s45-20.1875 45-45c0-19.554688-12.539062-36.226562-30-42.421875v-34.417969c25.371094-2.816406 49.277344-12.769531 69.214844-28.730468l23.675781 23.671874c-7.964844 16.726563-5.042969 37.382813 8.78125 51.210938 17.546875 17.542969 46.09375 17.546875 63.640625 0 17.542969-17.546875 17.542969-46.09375 0-63.640625-13.828125-13.824219-34.484375-16.75-51.207031-8.78125l-23.675781-23.671875c15.546874-19.425781 25.84375-43.21875 28.730468-69.21875h34.417969c6.195313 17.457031 22.867187 30 42.421875 30 24.8125 0 45-20.1875 45-45s-20.1875-45-45-45zm-73.113281-114.097656c5.859375-5.863282 15.351562-5.867188 21.210937 0 5.851563 5.847656 5.851563 15.363281.003906 21.210937-5.851562 5.851563-15.367187 5.851563-21.214843 0-5.863281-5.863281-5.863281-15.347656 0-21.210937zm-275.773438 21.210937c-5.847656 5.851563-15.367187 5.847657-21.210937 0-5.851563-5.847656-5.851563-15.363281-.003906-21.214843 5.863281-5.859376 15.351562-5.863282 21.214843 0 5.863281 5.867187 5.863281 15.351562 0 21.214843zm-73.113281 152.886719c-8.269531 0-15-6.730469-15-15s6.730469-15 15-15 15 6.730469 15 15-6.730469 15-15 15zm73.113281 144.097656c-5.859375 5.863282-15.351562 5.867188-21.210937 0-5.851563-5.847656-5.851563-15.363281 0-21.210937h-.003906c5.851562-5.851563 15.367187-5.847657 21.214843 0 5.863281 5.863281 5.863281 15.347656 0 21.210937zm137.886719-385.097656c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 452c-8.269531 0-15-6.730469-15-15s6.730469-15 15-15 15 6.730469 15 15-6.730469 15-15 15zm45-131.144531c-13.644531 6.5-28.90625 10.144531-45 10.144531s-31.355469-3.644531-45-10.144531v-4.855469c0-24.8125 20.1875-45 45-45s45 20.1875 45 45zm-75-109.855469c0-16.542969 13.457031-30 30-30s30 13.457031 30 30-13.457031 30-30 30-30-13.457031-30-30zm103.476562 89.929688c-3.992187-19.507813-15.585937-36.277344-31.535156-47.078126 11.132813-10.898437 18.058594-26.078124 18.058594-42.851562 0-33.085938-26.914062-60-60-60s-60 26.914062-60 60c0 16.773438 6.925781 31.953125 18.058594 42.851562-15.949219 10.800782-27.542969 27.570313-31.535156 47.078126-19.441407-19.070313-31.523438-45.613282-31.523438-74.929688 0-57.898438 47.101562-105 105-105s105 47.101562 105 105c0 29.316406-12.082031 55.859375-31.523438 74.929688zm64.410157 62.957031c5.847656-5.847657 15.363281-5.851563 21.210937 0 5.851563 5.847656 5.851563 15.363281.003906 21.214843-5.863281 5.859376-15.351562 5.863282-21.214843 0-5.863281-5.867187-5.863281-15.351562 0-21.214843zm73.113281-122.886719c-8.269531 0-15-6.730469-15-15s6.730469-15 15-15 15 6.730469 15 15-6.730469 15-15 15zm0 0" />
                    </svg>
                  </div>
                  <div className="mt-auto ml-4">
                    <div className="text-5xl leading-9 italic font-medium text-gray-900">
                      {influencers.length}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="96"
                      height="96"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                    >
                      <g
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline_43_"
                        fill="#233d91"
                      >
                        <path
                          d="m467.63 236.174-40.116-60.174h-85.854l5.596-36h-36.63c-3.777-38.123-36.026-68-75.125-68s-71.348 29.877-75.125 68h-92.876v15h92.875c3.777 38.123 36.026 68 75.125 68s71.348-29.877 75.125-68h19.119l-27.669 178h-140.107c-27.479-42.694-89.522-42.593-116.937 0h-45.031v45h34.411c3.753 34.807 33.301 62 69.089 62s65.336-27.193 69.089-62h142.822c3.753 34.807 33.301 62 69.089 62s65.336-27.193 69.089-62h58.411c0-13.771 0-82.162 0-93.5 0-25.353-19.552-46.224-44.37-48.326zm-232.13-28.174c-33.36 0-60.5-27.141-60.5-60.5s27.14-60.5 60.5-60.5 60.5 27.141 60.5 60.5-27.14 60.5-60.5 60.5zm-201.089 155h-19.411v-15h22.759c-1.644 4.789-2.788 9.807-3.348 15zm69.089 62c-30.051 0-54.5-24.448-54.5-54.5s24.449-54.5 54.5-54.5 54.5 24.448 54.5 54.5-24.449 54.5-54.5 54.5zm271.354-234h44.633l30 45h-82.133zm-59.443 172h-142.822c-.56-5.193-1.704-10.211-3.348-15h149.518c-1.644 4.789-2.788 9.807-3.348 15zm69.089 62c-30.051 0-54.5-24.448-54.5-54.5s24.449-54.5 54.5-54.5 54.5 24.448 54.5 54.5-24.449 54.5-54.5 54.5zm112.5-62h-43.411c-.56-5.193-1.704-10.211-3.348-15h46.759zm0-30h-54.032c-27.479-42.694-89.522-42.593-116.937 0h-8.776l22.072-142h20.318l-10 60h113.854c15.893 0 29.227 11.129 32.643 26h-26.642c-12.407 0-22.5 10.094-22.5 22.5s10.093 22.5 22.5 22.5h27.5zm0-26h-27.5c-9.926 0-9.916-15 0-15h27.5z"
                          fill="#000000"
                          data-original="#233d91"
                        />
                        <path
                          d="m15.5 178h15v15h-15z"
                          fill="#000000"
                          data-original="#233d91"
                        />
                        <path
                          d="m45.5 178h67v15h-67z"
                          fill="#000000"
                          data-original="#233d91"
                        />
                        <path
                          d="m46.5 214.5h15v15h-15z"
                          fill="#000000"
                          data-original="#233d91"
                        />
                        <path
                          d="m76.5 214.5h86v15h-86z"
                          fill="#000000"
                          data-original="#233d91"
                        />
                        <path
                          d="m31.5 251h86v15h-86z"
                          fill="#000000"
                          data-original="#233d91"
                        />
                        <path
                          d="m1.5 251h15v15h-15z"
                          fill="#000000"
                          data-original="#233d91"
                        />
                        <path
                          d="m103.5 348c-12.407 0-22.5 10.094-22.5 22.5s10.093 22.5 22.5 22.5 22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5zm-7.5 22.5c0-9.926 15-9.916 15 0 0 4.136-15 9.916-15 0z"
                          fill="#000000"
                          data-original="#233d91"
                        />
                        <path
                          d="m384.5 348c-12.407 0-22.5 10.094-22.5 22.5s10.093 22.5 22.5 22.5 22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5zm0 30c-9.926 0-9.916-15 0-15 9.926 0 9.916 15 0 15z"
                          fill="#000000"
                          data-original="#233d91"
                        />
                        <path
                          d="m244 104.5h-15v54.5h35.5v-15h-20.5z"
                          fill="#000000"
                          data-original="#233d91"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="mt-auto ml-4">
                    <div className="text-5xl leading-9 italic font-medium text-gray-900">
                      {cntShiped}/{influencers.length}
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
                  <div className="flex-shrink-0 h-20 w-20">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512,217.229c0-27.618-22.469-50.087-50.087-50.087H341.119l17.585-47.974c0.057-0.155,0.111-0.309,0.163-0.465
                          c8.475-25.422,6.342-52.096-6.17-77.145c-9.441-18.883-28.417-30.613-49.522-30.613h-5.868c-14.212,0-26.233,11.103-27.37,25.274
                          C267.951,61,257.322,84.472,240.009,102.32l-96.738,98.214h-9.706v-16.696c0-9.22-7.475-16.696-16.696-16.696H16.696
                          C7.475,167.142,0,174.618,0,183.838V484.36c0,9.22,7.475,16.696,16.696,16.696H116.87c9.22,0,16.696-7.475,16.696-16.696v-16.696
                          h278.261c27.618,0,50.087-22.469,50.087-50.087c0-8.924-2.344-17.309-6.452-24.573c13.911-8.909,23.148-24.5,23.148-42.21
                          c0-8.924-2.344-17.309-6.452-24.573c13.911-8.909,23.148-24.5,23.148-42.21c0-8.924-2.344-17.309-6.452-24.573
                          C502.763,250.531,512,234.939,512,217.229z M100.174,217.229v233.739v16.696H33.391v-267.13h66.783V217.229z M461.913,233.925
                          h-16.696h-33.391c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h33.391c9.206,0,16.696,7.49,16.696,16.696
                          s-7.49,16.696-16.696,16.696h-16.696H395.13c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h33.391
                          c9.206,0,16.696,7.49,16.696,16.696s-7.49,16.696-16.696,16.696h-16.696c-0.875,0-1.727,0.088-2.567,0.217h-31.933
                          c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h33.391c0.749,0,1.48-0.067,2.203-0.162
                          c8.696,0.568,15.602,7.804,15.602,16.64c0,9.206-7.49,16.696-16.696,16.696H133.565V233.924h16.696
                          c4.472,0,8.756-1.794,11.895-4.98l101.687-103.239c0.028-0.028,0.056-0.057,0.082-0.085
                          c21.459-22.098,35.096-50.784,38.752-81.286h0.498c8.375,0,15.908,4.658,19.653,12.15c8.553,17.121,10.043,34.424,4.433,51.436
                          l-25.72,70.171c-1.878,5.121-1.134,10.836,1.989,15.307c3.123,4.471,8.232,7.135,13.687,7.135h144.696
                          c9.206,0,16.696,7.49,16.696,16.696S471.119,233.925,461.913,233.925z"
                      />
                    </svg>
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
