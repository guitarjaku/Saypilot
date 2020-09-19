import { h } from "preact";
import { useState } from "preact/hooks/";

const InfluencerList = () => {
  return (
    <>
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
    </>
  );
};

export default InfluencerList;
 