import { h } from "preact";
import { useState, useEffect } from "preact/hooks/";
import Head from "next/head";
import Header from "../../components/Header";
import OverSide from "./overSide";
import ModalSearch from "./modalSearch";
import SideBar from "../../components/Sidebar";
import DataService from "../../service/service";
import TableLoader from "../../components/TableLoader";

export default function Application() {
  const [loading, setLoading] = useState(true);
  const [overSideOpen, setOverSideOpen] = useState(false);
  const [modalSearchOpen, setModalSearchOpen] = useState(false);
  const [influencers, setInfluencers] = useState([]);

  const getInfluencer = () => {
    DataService.get("/influencers", "1")
      .then((res) => {
        // @ts-ignore
        setInfluencers([res.data]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getInfluencers = () => {
    DataService.getAll("/influencers")
      .then((res) => {
        // @ts-ignore
        setInfluencers(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const onOverSideOpen = () => {
    setOverSideOpen(true);
  };

  const onOverSideClose = () => {
    setOverSideOpen(false);
  };

  const onModalSearchOpen = () => {
    setModalSearchOpen(true);
  };

  const onModalSearchClose = () => {
    setModalSearchOpen(false);
  };

  const onSearchSubmit = (props: any) => {
    console.log(props);
    getInfluencers();
  };

  useEffect(() => {
    getInfluencer();
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
              <title>Applications | Saypilot</title>
              <meta property="og:title" content="Information about Genemator" />
              <meta property="og:description" content="" />
            </Head>
            <Header />
            <div className="p-4">
              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                <button
                  type="button"
                  onClick={() => onModalSearchOpen()}
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                >
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      <svg
                        id="Capa_1"
                        enable-background="new 0 0 515.558 515.558"
                        height="16"
                        viewBox="0 0 515.558 515.558"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z" />
                      </svg>
                    </div>
                    <div className="flex">
                      <span>Search</span>
                    </div>
                  </div>
                </button>
              </span>
            </div>
            <div className=" sm:block mb-3">
              <div className="align-middle inline-block min-w-full">
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto ">
                    <div className="py-2 px-4 align-middle inline-block min-w-full">
                      {loading ? (
                        <TableLoader />
                      ) : (
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
                              {influencers.map(
                                (influencer: any, index: any) => (
                                  <tr
                                    key={index}
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
                                            @{influencer.username}
                                          </div>
                                          <div className="text-sm leading-5 text-gray-500">
                                            {influencer.name}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                      <div className="text-sm leading-5 text-gray-900">
                                        {influencer.age}
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Mar 28
                                      </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                      {(influencer.followers / 1000).toFixed(1)}
                                      k
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                      {influencer.like_post}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                      {influencer.com_post}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                      {influencer.engagement_rate}%
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
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Over side */}
            {overSideOpen && <OverSide onClose={onOverSideClose} />}
            {/* Modal Search */}
            {modalSearchOpen && (
              <ModalSearch
                onClose={onModalSearchClose}
                searchSubmit={onSearchSubmit}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
}
