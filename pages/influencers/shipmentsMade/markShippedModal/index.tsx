import { h } from "preact";
import { useState } from "preact/hooks/";

const MarkShippedModal = (props: any) => {
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
                onClick={() => props.close("mark")}
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
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border  border-gray-400 rounded-none text-left leading-5">
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
                        d="M362.937,0h-294c-16.542,0-30,13.458-30,30v102c0,5.523,4.478,10,10,10s10-4.477,10-10V30c0-5.514,4.486-10,10-10h294
                                    c5.514,0,10,4.486,10,10v372c0,5.514-4.486,10-10,10h-294c-5.514,0-10-4.486-10-10V216.333c0-5.523-4.478-10-10-10
                                    s-10,4.477-10,10V402c0,16.542,13.458,30,30,30h294c16.542,0,30-13.458,30-30V30C392.937,13.458,379.479,0,362.937,0z"
                      />
                      <path
                        d="M56.006,169.7c-1.859-1.86-4.439-2.92-7.069-2.92s-5.21,1.06-7.07,2.92c-1.861,1.87-2.93,4.45-2.93,7.07
                                    c0,2.64,1.07,5.21,2.93,7.08c1.86,1.86,4.44,2.93,7.07,2.93c2.629,0,5.209-1.07,7.069-2.93c1.861-1.86,2.931-4.44,2.931-7.08
                                    C58.937,174.14,57.866,171.57,56.006,169.7z"
                      />
                      <path
                        d="M96.066,454.99c-1.86-1.86-4.429-2.93-7.07-2.93c-2.63,0-5.21,1.07-7.069,2.93c-1.861,1.86-2.931,4.44-2.931,7.07
                                    c0,2.64,1.071,5.21,2.931,7.07c1.859,1.87,4.439,2.93,7.069,2.93c2.641,0,5.21-1.06,7.07-2.93c1.861-1.86,2.93-4.43,2.93-7.07
                                    C98.996,459.43,97.926,456.85,96.066,454.99z"
                      />
                      <path
                        d="M423,40.063c-5.522,0-10,4.477-10,10v392c0,5.514-4.486,10-10,10H129c-5.522,0-10,4.477-10,10s4.478,10,10,10h274
			                              c16.542,0,30-13.458,30-30v-392C433,44.54,428.522,40.063,423,40.063z"
                      />
                      <path
                        d="M463.063,80c-5.522,0-10,4.477-10,10v392c0,5.514-4.486,10-10,10h-314c-5.522,0-10,4.477-10,10s4.478,10,10,10h314
			                              c16.542,0,30-13.458,30-30V90C473.063,84.477,468.585,80,463.063,80z"
                      />
                      <path
                        d="M200.937,74h-96c-5.522,0-10,4.477-10,10v96c0,5.523,4.478,10,10,10h96c5.522,0,10-4.477,10-10V84
			                              C210.937,78.477,206.459,74,200.937,74z M190.937,170h-76V94h76V170z"
                      />
                      <path
                        d="M168.761,235.402c-3.906-3.904-10.236-3.905-14.143,0l-26.583,26.583l-12.36-12.361c-3.905-3.905-10.235-3.904-14.143,0
			                              c-3.905,3.905-3.905,10.237,0,14.142l19.432,19.432c1.876,1.875,4.419,2.929,7.071,2.929c2.653,0,5.195-1.054,7.072-2.929
			                              l33.654-33.654C172.666,245.639,172.666,239.307,168.761,235.402z"
                      />
                      <path d="M332.604,249H215.937c-5.522,0-10,4.477-10,10s4.478,10,10,10h116.667c5.522,0,10-4.477,10-10S338.126,249,332.604,249z" />
                      <path d="M326.937,74h-70c-5.522,0-10,4.477-10,10s4.478,10,10,10h70c5.522,0,10-4.477,10-10S332.459,74,326.937,74z" />
                      <path d="M326.937,122h-70c-5.522,0-10,4.477-10,10s4.478,10,10,10h70c5.522,0,10-4.477,10-10S332.459,122,326.937,122z" />
                      <path d="M326.937,170h-70c-5.522,0-10,4.477-10,10s4.478,10,10,10h70c5.522,0,10-4.477,10-10S332.459,170,326.937,170z" />
                      <path
                        d="M168.761,311.769c-3.906-3.904-10.236-3.905-14.143,0l-26.583,26.583l-12.36-12.361c-3.905-3.905-10.235-3.904-14.143,0
			                              c-3.905,3.905-3.905,10.237,0,14.142l19.432,19.432c1.876,1.875,4.419,2.929,7.071,2.929c2.653,0,5.195-1.054,7.072-2.929
			                              l33.654-33.654C172.666,322.006,172.666,315.674,168.761,311.769z"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <span>Show Tracking Details</span>
                  </div>
                </div>
              </button>
              <div className="mt-8 p-2 py-4 bg-gray-200">
                <div className="relative flex items-center">
                  <div className="flex items-center ">
                    <input
                      id="comments"
                      type="checkbox"
                      className="form-checkbox h-6 w-6 text-indigo-600 rounded-none transition duration-150 ease-in-out"
                    />
                  </div>
                  <div className="ml-2 text-sm leading-5">
                    <label className="font-medium text-gray-700 ">
                      Product dose not need shipping (promo/coupon code.)
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-black text-left">
                <span>
                  If you are shipping this product. add the tracking information
                  below for best result. This will let Influencers know when to
                  expect their package and will help them plan their plan their
                  post date.
                </span>
              </div>
              <div className="mt-8 text-black text-left">
                <label className="block text-sm leading-5 font-medium text-gray-700">
                  <span>*</span> Carrier Code:
                </label>
                <select
                  id="location"
                  className="mt-3 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>Shipping Carrier</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
              <div className="mt-8 text-black text-left">
                <label className="block text-sm leading-5 font-medium text-gray-700">
                  <span>*</span> Tracking Number:
                </label>
                <input
                  className="mt-3 p-2 w-full text-black text-md border border-gray-300 rounded-md"
                  placeholder="000000"
                  type="text"
                />
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

export default MarkShippedModal;
