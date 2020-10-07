import { h } from "preact";
import { useState } from "preact/hooks/";

const ShippingDetailModal = (props: any) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="flex flex-col h-full  justify-between">
            <div className="grid grid-cols-2 h-20 border-b text-black">
              <span className="my-auto mr-auto ml-6">Shipping Details</span>
              <button
                type="button"
                className="ml-auto mr-6 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                onClick={() => props.close("")}
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
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
            <main className="p-4 flex-1 text-center">
              <button className="mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border  border-gray-400 rounded-none text-left leading-5">
                <div className="flex items-center">
                  <div className="">
                    <svg
                      className="fill-current w-6 h-6 mr-2"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512,298.333v-84.667l-69.42-13.675c-3.783-12.585-8.833-24.739-15.083-36.309l38.724-58.087L406.404,45.78
                                    l-58.086,38.724c-11.569-6.251-23.725-11.3-36.31-15.083L298.333,0h-84.666l-13.676,69.42
                                    c-12.584,3.783-24.739,8.832-36.31,15.083L105.596,45.78L45.78,105.596l38.724,58.087c-6.25,11.57-11.3,23.724-15.083,36.309
                                    L0,213.667v84.667l69.42,13.676c3.783,12.584,8.833,24.739,15.083,36.309l-38.724,58.087l59.816,59.816l58.086-38.724
                                    c11.57,6.251,23.726,11.3,36.31,15.083L213.667,512h84.666l13.676-69.42c12.585-3.783,24.739-8.832,36.31-15.083l58.086,38.724
                                    l59.816-59.816l-38.724-58.087c6.25-11.57,11.3-23.724,15.083-36.309L512,298.333z M427.617,402.582l-25.035,25.035
                                    l-53.278-35.519c-27.034,16.387-35.993,19.506-63.088,26.2L273.667,482h-35.334l-12.549-63.702
                                    c-30.833-7.617-39.367-11.822-63.088-26.2l-53.278,35.519l-25.035-25.035l35.519-53.278c-16.499-27.218-19.557-36.212-26.2-63.088
                                    L30,273.667v-35.333l63.701-12.549c6.552-26.51,9.554-35.628,26.2-63.088l-35.519-53.278l25.035-25.035l53.278,35.518
                                    c27.256-16.52,36.263-19.572,63.088-26.2L238.333,30h35.334l12.549,63.702c30.893,7.633,39.418,11.852,63.088,26.2l53.278-35.518
                                    l25.035,25.035l-35.519,53.278c16.354,26.979,19.49,35.938,26.2,63.088L482,238.333v35.333l-63.701,12.549
                                    c-7.636,30.894-11.833,39.386-26.2,63.088L427.617,402.582z"
                      />

                      <path
                        d="M256,151c-57.897,0-105,47.103-105,105c0,57.897,47.103,105,105,105c57.897,0,105-47.103,105-105
                                    C361,198.103,313.897,151,256,151z M256,331c-41.355,0-75-33.645-75-75c0-41.355,33.645-75,75-75s75,33.645,75,75
                                    S297.355,331,256,331z"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <span>Edit Tracking Number</span>
                  </div>
                </div>
              </button>
              <div className="mt-8 text-black">
                <span>11 Oklahoma Street, Asbury</span>
                <br />
                <span>Tue, Jan 28 2020</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-black">
                  <span>Date Shipped</span>
                  <br />
                  <span>New Jersey, 08802</span>
                </div>
                <div className="text-black">
                  <span>Delivered On</span>
                  <br />
                  <span>Sat, Feb 1 2020</span>
                </div>
              </div>

              <div className="mt-8 p-2 py-4 bg-gray-200">
                <div className="mb-4 relative flex items-center text-black">
                  <div className="flex items-center ">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      className="fill-current w-4 h-4 ml-2 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 490.661 490.661"
                    >
                      <path
                        d="M453.352,236.091L48.019,1.424c-3.285-1.899-7.36-1.899-10.688,0c-3.285,1.899-5.333,5.419-5.333,9.237v469.333
                                    c0,3.819,2.048,7.339,5.333,9.237c1.643,0.939,3.499,1.429,5.333,1.429c1.856,0,3.691-0.469,5.355-1.429l405.333-234.667
                                    c3.285-1.92,5.312-5.44,5.312-9.237S456.637,237.989,453.352,236.091z"
                      />
                    </svg>
                  </div>
                  <div className="ml-2 text-lg leading-5">
                    <label className="font-medium text-gray-700 ">
                      Tracking Details
                    </label>
                  </div>
                </div>

                <div className="relative flex items-center text-black">
                  <div className="flex items-center ">
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
                  <div className="ml-2 mb-2 text-lg leading-5 text-left">
                    <label className="font-medium text-gray-700 ">
                      Delivered
                    </label>
                    <br />
                    <span className="text-sm text-gray-400">
                      5:06 AM Sat, Feb 1 2020
                    </span>
                  </div>
                </div>
                <div className="relative flex items-center text-black">
                  <div className="flex items-center ">
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
                  <div className="ml-2 mb-2 text-lg leading-5 text-left">
                    <label className="font-medium text-gray-700 ">
                      On FedEx vehicle for delivery
                    </label>
                    <br />
                    <span className="text-sm text-gray-400">
                      10:21 PM Fri, Jan 31 2020
                    </span>
                  </div>
                </div>
              </div>
            </main>
            <footer className="h-20 p-5 border-t border-gray-400 text-right">
              <span className="w-24 h-10 rounded-md shadow-sm">
                <button
                  type="button"
                  className="w-24 h-10 items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  Update
                </button>
              </span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetailModal;
