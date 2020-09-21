import { h } from "preact";
import { useState } from "preact/hooks/";
import ModalApprove from "../modalApprove";

const OverSide = (props: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll">
                <header className="px-4 sm:px-6">
                  <div className="flex items-start justify-between space-x-3">
                    <div className="h-7 flex items-center">
                      <button
                        aria-label="Close panel"
                        onClick={() => props.onClose()}
                        className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                      >
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
                    <div className="mb-1 px-4 sm:px-6">@ashleyj_music</div>
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
                          onClick={() => onModalOpen()}
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
                      <div className="p-4 border-r border-gray-200">
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
                  </div>
                  {/* modal */}
                </div>
                {modalOpen && <ModalApprove onClose={onModalClose} />}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default OverSide;
