import { h } from "preact";
import { useState } from "preact/hooks/";

const Youtube = (props: any) => {
  return (
    <>
      <div className="bg-white overflow-hidden shadow rounded-lg text-black">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
              <div className="flex items-center">
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    INFLUENCER INFO
                  </div>
                </div>
                <div className="flex-shrink-0 h-4 w-4">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                  >
                    <rect x="192" y="192" width="42.667" height="128" />
                    <path
                      d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"
                    />
                    <rect x="192" y="106.667" width="42.667" height="42.667" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-4 mt-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Location by country
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="Locaition"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>Location</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Subsribers
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="From"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>From</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div className="col-span-1 mt-auto">
              <label className="block text-sm font-medium leading-5 text-gray-700"></label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="To"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>To</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Avg.Views
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="From"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>From</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div className="col-span-1 mt-auto">
              <label className="block text-sm font-medium leading-5 text-gray-700"></label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="To"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>To</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Language
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="To"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>Language</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                <div className="flex items-center">
                  <div className="mr-2">
                    <div className="text-sm leading-5 font-medium text-gray-900">
                      Engagement rate
                    </div>
                  </div>
                  <div className="flex-shrink-0 h-4 w-4">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 426.667 426.667"
                    >
                      <rect x="192" y="192" width="42.667" height="128" />
                      <path
                        d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"
                      />
                      <rect
                        x="192"
                        y="106.667"
                        width="42.667"
                        height="42.667"
                      />
                    </svg>
                  </div>
                </div>
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="To"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>Interrests</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-2">
              <div className="flex items-center">
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    TARGET AUDIENCE INFO
                  </div>
                </div>
                <div className="flex-shrink-0 h-4 w-4">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                  >
                    <rect x="192" y="192" width="42.667" height="128" />
                    <path
                      d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"
                    />
                    <rect x="192" y="106.667" width="42.667" height="42.667" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <div className="col-span-3">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Location by country
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="Locaition"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>Location</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Age
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="To"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>Age</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Gender
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="To"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>Gender</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Language
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <select
                  id="location"
                  placeholder="To"
                  className="mt-1 form-select rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                >
                  <option>Language</option>
                  <option>Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-6">
              <div className="flex items-center">
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    SEARCH BY CHANNEL
                  </div>
                </div>
                <div className="flex-shrink-0 h-4 w-4">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                  >
                    <rect x="192" y="192" width="42.667" height="128" />
                    <path
                      d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"
                    />
                    <rect x="192" y="106.667" width="42.667" height="42.667" />
                  </svg>
                </div>
              </div>
              <div className="mt-1 relative rounded-none shadow-sm">
                <input
                  id="location"
                  placeholder="Youtube profile URL, user or channel ID or channel name"
                  className="mt-1 rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex items-center">
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    SEARCH BY RELEVANCE
                  </div>
                </div>
                <div className="flex-shrink-0 h-4 w-4">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                  >
                    <rect x="192" y="192" width="42.667" height="128" />
                    <path
                      d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"
                    />
                    <rect x="192" y="106.667" width="42.667" height="42.667" />
                  </svg>
                </div>
              </div>
              <div className="mt-1 relative rounded-none shadow-sm ">
                <input
                  id="location"
                  placeholder="@#hashtag"
                  className="mt-1 rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="col-span-3 mt-auto">
              <div>
                <label className="block text-sm font-medium leading-5 text-gray-700"></label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    className="form-input rounded-none block w-full sm:text-sm sm:leading-5"
                    placeholder="Keywords"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
