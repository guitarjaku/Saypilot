import { h } from "preact";
import { useState } from "preact/hooks/";

const PostApproval = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 py-4">
        <div className="col-span-2 text-1xl m-auto">
          <p className="font-bold">Awaiting Post - 8</p>
          <span>
            These Influencers have yet to post if you are looking for status on
            when they will post, feel free to message them at any point.
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="overflow-hidden rounded-none border border-gray-400">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      INFLUENCER
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      POST
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      COMMENTS
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      LIKES
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
                      <div className="flex-shrink-0 h-15 w-15">
                        <img
                          className="h-15 w-15 rounded-none"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-black">
                      <span>...</span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-black">
                      <span>...</span>
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 py-4 ">
        <div className="col-span-1 text-1xl font-bold">Approved Posts - 91</div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="overflow-hidden rounded-none border border-gray-400">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      INFLUENCER
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      POST
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      COMMENTS
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      LIKES
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
                      <div className="flex-shrink-0 h-15 w-15">
                        <img
                          className="h-15 w-15 rounded-none"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-black">
                      <span>18</span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-black">
                      <span>754</span>
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
                      <span className="rounded-md shadow-sm mr-2">
                        <button
                          type="button"
                          className="items-center px-5 py-5 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                        >
                          <svg
                            height="28px"
                            viewBox="-63 0 512 512"
                            width="28px"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                          >
                            <path d="m295.960938 217.144531h-185.015626c-4.175781 0-7.558593 3.382813-7.558593 7.554688 0 4.175781 3.382812 7.558593 7.558593 7.558593h185.015626c4.171874 0 7.554687-3.382812 7.554687-7.558593 0-4.171875-3.382813-7.554688-7.554687-7.554688zm0 0" />
                            <path d="m295.960938 170.410156h-185.015626c-4.175781 0-7.558593 3.382813-7.558593 7.558594 0 4.171875 3.382812 7.554688 7.558593 7.554688h185.015626c4.171874 0 7.554687-3.382813 7.554687-7.554688 0-4.175781-3.382813-7.558594-7.554687-7.558594zm0 0" />
                            <path d="m377.472656 270.976562c4.167969 0 7.558594-3.390624 7.558594-7.558593v-126.121094c0-2.433594-.011719-4.679687-.042969-6.792969.003907-.078125.011719-.15625.011719-.234375 0-.160156-.011719-.316406-.023438-.472656-.328124-18.042969-2.652343-25.464844-18.121093-42.230469l-11.730469-12.722656v-46.257812c0-15.761719-12.871094-28.585938-28.695312-28.585938h-297.734376c-15.824218 0-28.695312 12.824219-28.695312 28.585938v185.855468c0 4.175782 3.382812 7.558594 7.558594 7.558594 4.171875 0 7.554687-3.382812 7.554687-7.558594v-185.855468c0-7.429688 6.09375-13.472657 13.582031-13.472657h297.734376c7.488281 0 13.578124 6.042969 13.578124 13.472657v29.855468c-1.308593-1.425781-2.515624-2.765625-3.609374-3.996094-11.15625-12.425781-16.035157-16.726562-36.007813-16.726562h-229.707031c-15.386719 0-27.894532 12.507812-27.894532 27.875v348.175781h-14.09375c-7.488281 0-13.582031-6.042969-13.582031-13.472656v-151.25c0-4.175781-3.382812-7.558594-7.554687-7.558594-4.175782 0-7.558594 3.382813-7.558594 7.558594v151.25c0 15.761719 12.871094 28.585937 28.695312 28.585937h14.414063c2.039063 13.367188 13.621094 23.640626 27.574219 23.640626h76.792968l32.78125 42.089843c.039063.050781.082032.101563.121094.160157 9.054688 10.996093 21.484375 17.226562 34.28125 17.226562.4375 0 .878906-.011719 1.320313-.03125 12.40625-.410156 23.941406-6.785156 31.671875-17.503906l32.671875-41.941406h76.800781c15.386719 0 27.90625-12.496094 27.90625-27.851563v-123.652344c0-4.167969-3.390625-7.558593-7.558594-7.558593-4.167968 0-7.558594 3.390624-7.558594 7.558593v123.652344c0 7.015625-5.738281 12.734375-12.785156 12.734375h-65.027344l4.570313-5.859375c10.148437-13.015625 13.054687-28.511719 7.585937-40.417969-3.007812-6.570312-11.445312-17.746094-34.140624-18.867187-.121094-.011719-.25-.011719-.371094-.011719h-6.917969v-65.953125c0-9.640625-8.195313-17.488281-18.273437-17.488281h-61.316407c-10.078125 0-18.289062 7.847656-18.289062 17.488281v65.953125h-6.875c-.132813 0-.25 0-.371094.011719-22.707031 1.121093-31.144531 12.296875-34.152344 18.867187-5.457031 11.90625-2.546875 27.402344 7.589844 40.417969l4.558594 5.859375h-65.015625c-7.046875 0-12.789063-5.71875-12.789063-12.734375v-3.265625c0-.027344.003907-.054688.003907-.082031 0-.023438-.003907-.050781-.003907-.078125v-355.652344c0-7.027344 5.742188-12.757812 12.789063-12.757812h222.136718l-.050781 57.113281c0 15.371093 12.515625 27.878906 27.902344 27.878906h49.242187v125.589844c0 4.167969 3.390626 7.558593 7.558594 7.558593zm-234.40625 151.292969c-6.457031-8.296875-8.777344-18.285156-5.769531-24.84375 3.46875-7.578125 13.277344-9.65625 20.964844-10.058593h14.246093c4.179688 0 7.558594-3.386719 7.558594-7.554688v-73.515625c0-1.117187 1.359375-2.367187 3.167969-2.367187h61.316406c1.859375 0 3.160157 1.25 3.160157 2.367187v73.515625c0 4.167969 3.390624 7.554688 7.558593 7.554688h14.277344c7.695313.402343 17.503906 2.480468 20.972656 10.058593 3.011719 6.558594.691407 16.546875-5.765625 24.835938l-11.808594 15.144531-11.777343 15.117188-25.535157 32.773437c-.058593.078125-.117187.15625-.179687.238281-5.046875 7.046875-12.136719 11.066406-19.972656 11.328125-8.5.296875-17.015625-3.949219-23.367188-11.628906l-25.484375-32.710937-11.777344-15.117188zm164.820313-312.3125.050781-56.863281c7.578125.726562 9.890625 3.289062 17.214844 11.449219 1.261718 1.410156 2.640625 2.941406 4.179687 4.621093l26.414063 28.652344c10.085937 10.929688 12.988281 15.476563 13.824218 24.898438h-48.898437c-7.050781 0-12.785156-5.726563-12.785156-12.757813zm0 0" />
                            <path d="m110.945312 138.765625h117.714844c4.175782 0 7.558594-3.382813 7.558594-7.558594s-3.382812-7.558593-7.558594-7.558593h-117.714844c-4.175781 0-7.558593 3.382812-7.558593 7.558593 0 4.171875 3.382812 7.558594 7.558593 7.558594zm0 0" />
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

export default PostApproval;
