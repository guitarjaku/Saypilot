import { h } from "preact";
import { useState } from "preact/hooks/";

export const ShipmentsMade = () => {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="grid grid-cols-7 gap-4 py-4 px-3">
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
                          onClick={() => onOpenModal()}
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

      {openModal && (
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
                    onClick={() => onCloseModal()}
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
                      If you are shipping this product. add the tracking
                      information below for best result. This will let
                      Influencers know when to expect their package and will
                      help them plan their plan their post date.
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
                  <span className="w-24 h-10 rounded-md shadow-sm">
                    <button
                      type="button"
                      className="w-24 h-10 items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                    >
                      Close
                    </button>
                  </span>
                </footer>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
