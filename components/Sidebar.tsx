import { h } from "preact";
import { useState } from "preact/hooks";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 pb-4 bg-black">
          <div className="flex items-start flex-shrink-0 pt-4 px-6 justify-center h-32">
            <img
              className="h-4 w-auto"
              src={"/trend-logo.png"}
              alt="Workflow"
            />
          </div>
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            <div className="flex pt-2 mx-auto text-5xl">67</div>
            <div className="flex py-2 mx-auto text-lg italic">
              Creator Credits
            </div>
            <div className="flex py-2 mx-auto text-xs text-center">
              <span>
                These credits do not expire, when you run out you can add more
                any time
              </span>
            </div>
            <div className="py-2 flex items-center">
              <span className="rounded-md shadow-sm m-auto">
                <button
                  type="button"
                  onClick={() => router.push("addCredits")}
                  className="inline-flex italic  font-bold items-center px-6 py-3 border border-transparent text-base font-bold leading-6 font-medium rounded-full text-black bg-yellow-400 hover:bg-yellow-200 focus:outline-none transition ease-in-out duration-150"
                >
                  Add Creator Credits
                </button>
              </span>
            </div>
            <div className="mt-6 relative inline-block text-left">
              <nav className="mt-6">
                {/* <!-- Secondary navigation --> */}
                <h3
                  className="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider"
                  id="teams-headline"
                >
                  My Campaigns
                </h3>
                <div
                  className="mt-1 space-y-1"
                  role="group"
                  aria-labelledby="teams-headline"
                >
                  <a
                    href="/editCampaign"
                    className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-200 rounded-none border-r-4 border-black hover:text-gray-500 hover:bg-gray-700 hover:border-yellow-400 focus:outline-none focus:bg-gray-700 focus:border-yellow-400 transition ease-in-out duration-150"
                  >
                    <span className="w-10 h-10 mr-4 bg-indigo-500 rounded-none"></span>
                    <span className="truncate"></span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-200 rounded-none border-r-4 border-black hover:text-gray-500 hover:bg-gray-700 hover:border-yellow-400 focus:outline-none focus:bg-gray-700 focus:border-yellow-400 transition ease-in-out duration-150"
                  >
                    <span className="w-10 h-10 mr-4 bg-teal-400 rounded-none"></span>
                    <span className="truncate">New Session, New Wine</span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-200 rounded-none border-r-4 border-black hover:text-gray-500 hover:bg-gray-700 hover:border-yellow-400 focus:outline-none focus:bg-gray-700 focus:border-yellow-400 transition ease-in-out duration-150"
                  >
                    <span className="rounded-full h-10 w-10 flex items-center justify-center bg-yellow-400 text-4xl mr-4">
                      +
                    </span>
                    <span className="truncate">Create New Campaign</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
