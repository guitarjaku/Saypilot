import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";
import DataService from "../service/service";

const SideBar = () => {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState([]);

  const getCampaigns = () => {
    DataService.getAll("/campaigns").then((res) => {
      // console.log(res.data);
      setCampaigns(res.data);
    });
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <>
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 pb-4 bg-indigo-800 text-white">
          <div className="flex items-start flex-shrink-0 pt-4 px-6 justify-center h-32">
            <img
              className="h-10 w-auto"
              src={
                "https://tailwindui.com/img/logos/workflow-logo-on-brand.svg"
              }
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
                  className="inline-flex italic  font-bold items-center px-6 py-3 border border-transparent text-base font-bold leading-6 font-medium rounded-md text-black bg-indigo-400 hover:bg-indigo-200 focus:outline-none transition ease-in-out duration-150"
                >
                  Add Creator Credits
                </button>
              </span>
            </div>
            <div className="mt-6 relative inline-block text-left">
              <nav className="mt-6">
                {/* <!-- Secondary navigation --> */}
                <h3
                  className="px-3 text-xs leading-4 font-semibold uppercase tracking-wider"
                  id="teams-headline"
                >
                  My Campaigns
                </h3>
                <div
                  className="mt-1 space-y-1"
                  role="group"
                  aria-labelledby="teams-headline"
                >
                  {campaigns.map((campaign: any) => (
                    <a
                      href={`/?id=${campaign.id}`}
                      className="group flex items-center px-3 py-2 text-sm leading-5 font-medium rounded-none hover:text-gray-500 hover:bg-indigo-900 hover:border-indigo-400 focus:outline-none focus:bg-indigo-900 focus:border-indigo-400 transition ease-in-out duration-150"
                    >
                      <span className="w-10 h-10 mr-4 bg-indigo-500 rounded-none"></span>
                      <span className="truncate">{campaign.name}</span>
                    </a>
                  ))}
                  <a
                    href="/editCampaign/?id="
                    className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-200 rounded-none hover:text-gray-500 hover:bg-indigo-900 hover:border-indigo-400 focus:outline-none focus:bg-indigo-900 focus:border-indigo-400 transition ease-in-out duration-150"
                  >
                    <span className="rounded-full h-10 w-10 flex items-center justify-center text-4xl mr-4">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns={"http://www.w3.org/2000/svg"}
                        x="0px"
                        y="0px"
                        width="438.533px"
                        height="438.533px"
                        viewBox="0 0 438.533 438.533"
                        fill="white"
                      >
                        <path
                          d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0
		                        c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267
                            c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407
                            s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062
                            C438.533,179.485,428.732,142.795,409.133,109.203z M347.179,237.539c0,4.948-1.811,9.236-5.428,12.847
                            c-3.62,3.614-7.901,5.428-12.847,5.428h-73.091v73.084c0,4.948-1.813,9.232-5.428,12.854c-3.613,3.613-7.897,5.421-12.847,5.421
                            h-36.543c-4.948,0-9.231-1.808-12.847-5.421c-3.617-3.621-5.426-7.905-5.426-12.854v-73.084h-73.089
                            c-4.948,0-9.229-1.813-12.847-5.428c-3.616-3.61-5.424-7.898-5.424-12.847v-36.547c0-4.948,1.809-9.231,5.424-12.847
                            c3.617-3.617,7.898-5.426,12.847-5.426h73.092v-73.089c0-4.949,1.809-9.229,5.426-12.847c3.616-3.616,7.898-5.424,12.847-5.424
                            h36.547c4.948,0,9.233,1.809,12.847,5.424c3.614,3.617,5.428,7.898,5.428,12.847v73.089h73.084c4.948,0,9.232,1.809,12.847,5.426
                            c3.617,3.615,5.428,7.898,5.428,12.847V237.539z"
                        />
                      </svg>
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
