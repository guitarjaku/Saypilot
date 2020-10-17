import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";
import DataService from "../service/service";
import { get } from "https";

const InfluencerSideBar = () => {
  const router = useRouter();
  const [getJob, setGetJob] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 pb-4 bg-indigo-800 text-white">
          <div className="flex items-start flex-shrink-0 pt-4 px-6 justify-center">
            <img
              className="h-10 w-auto"
              src={
                "https://tailwindui.com/img/logos/workflow-logo-on-brand.svg"
              }
              alt="Workflow"
            />
          </div>
          <div className="flex pt-2 mx-auto text-5xl">
            <img
              className="inline-block h-14 w-14 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="flex py-2 mx-auto text-lg italic">
            Influencer Name
          </div>
          <div className="flex py-2 mx-auto text-xs text-center">
            <span className="self-center mr-3">ฉันพร้อมีรับงานวันนี้</span>
            <span
              role="checkbox"
              tabIndex={0}
              aria-checked="false"
              onClick={() => setGetJob(!getJob)}
              className={`${
                getJob ? "bg-indigo-400" : "bg-gray-200"
              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
            >
              {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
              <span
                aria-hidden="true"
                className={`${
                  getJob ? "translate-x-5" : "translate-x-0"
                } inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
              ></span>
            </span>
          </div>
          <div className="flex py-2 mx-auto text-sm">รายได้</div>
          <div className="flex py-2 mx-auto text-sm">
            <span className="text-sm self-end">THB</span>
            <span className="text-3xl self-end">9,000</span>
          </div>
          <div className="flex py-2 text-sm">
            <div className="flex-1 text-gray-700 text-center bg-indigo-400 px-4 py-2"></div>
            <div className="flex-1 text-gray-700 text-center bg-indigo-400 px-4 py-2"></div>
            <div className="flex-1 text-gray-700 text-center bg-indigo-400 px-4 py-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerSideBar;
