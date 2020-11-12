import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";
import DataService from "../service/service";

const InfluencerSideBar = (props: any) => {
  const router = useRouter();
  const [getJob, setGetJob] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <div className="hidden lg:flex">
        <div className="flex flex-col w-full border-r border-gray-200 pb-4 bg-indigo-800 text-white">
          <div className="flex items-start flex-shrink-0 pt-4 px-6 justify-center">
            <img
              className="h-10 w-auto"
              src="https://tailwindui.com/img/logos/v1/easywire-logo-on-brand.svg"
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
          <div className="flex pt-2 text-sm">
            <div className="flex-1 text-white text-center px-4 py-2">
              <div
                onClick={() => {
                  props.onChangeMenu(1);
                }}
                className={`p-4 rounded-full ${
                  props.menu === 1
                    ? "bg-white text-indigo-800"
                    : "bg-indigo-800 text-white"
                } border border-whiter cursor-pointer hover:bg-white hover:text-indigo-800`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <span>ภาพรวม</span>
            </div>
            <div className="flex-1 text-white text-center px-4 py-2">
              <div
                onClick={() => {
                  props.onChangeMenu(2);
                }}
                className={`p-4 rounded-full ${
                  props.menu === 2
                    ? "bg-white text-indigo-800"
                    : "bg-indigo-800 text-white"
                } border border-whiter cursor-pointer hover:bg-white hover:text-indigo-800`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>บัญชีผู้ใช้</span>
            </div>
            <div className="flex-1 text-white text-center px-4 py-2">
              <div
                onClick={() => {
                  props.onChangeMenu(3);
                }}
                className={`p-4 rounded-full ${
                  props.menu === 3
                    ? "bg-white text-indigo-800"
                    : "bg-indigo-800 text-white"
                } border border-whiter cursor-pointer hover:bg-white hover:text-indigo-800`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>บัญชีรายได้</span>
            </div>
          </div>
          <div className="flex text-sm">
            <div className="flex-1 text-white text-center px-4 py-2">
              <div
                onClick={() => {
                  props.onChangeMenu(4);
                }}
                className={`p-4 rounded-full ${
                  props.menu === 4 || props.menu === 7
                    ? "bg-white text-indigo-800"
                    : "bg-indigo-800 text-white"
                } border border-whiter cursor-pointer hover:bg-white hover:text-indigo-800`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clipRule="evenodd"
                  />
                  <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                </svg>
              </div>
              <span>งานของฉัน</span>
            </div>
            <div className="flex-1 text-white text-center px-4 py-2">
              <div
                onClick={() => {
                  props.onChangeMenu(5);
                }}
                className={`p-4 rounded-full ${
                  props.menu === 5
                    ? "bg-white text-indigo-800"
                    : "bg-indigo-800 text-white"
                } border border-whiter cursor-pointer hover:bg-white hover:text-indigo-800`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <span>งานประกาศ</span>
            </div>
            <div className="flex-1 text-white text-center px-4 py-2">
              <div
                onClick={() => {
                  props.onChangeMenu(6);
                }}
                className={`p-4 rounded-full ${
                  props.menu === 6
                    ? "bg-white text-indigo-800"
                    : "bg-indigo-800 text-white"
                } border border-whiter cursor-pointer hover:bg-white hover:text-indigo-800`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>เพิ่มรายได้</span>
            </div>
          </div>
          <div className="flex text-sm">
            <a
              onClick={() => {
                router.push("/login");
              }}
              className="cursor-pointer self-center ml-auto"
            >
              ออกจากระบบ
            </a>
            <svg
              className="h-8 w-10 mr-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerSideBar;
