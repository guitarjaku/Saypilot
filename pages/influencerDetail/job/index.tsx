import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import All from "./all";
import NewJob from "./newJob";
import InProgress from "./inProgress";
import EndJob from "./endJob";
import CancelJob from "./cancel";
import JobDetail from "./jobDetail";

const Job = (props: any) => {
  const [menu, setMenu] = useState(1);
  const [sortMenu, setSortMenu] = useState(false);

  const onChangeMenu = (props: any) => {
    // console.log(props);
    setMenu(props);
  };

  return (
    <div className="flex flex-grow flex-col">
      <div className="mt-10 text-center text-5xl">งานของฉัน</div>
      <div className="mx-auto mt-3 bg-indigo-300 rounded-full h-40 w-40 sm:h-60 sm:w-60 flex items-center justify-center">
        <div className="flex-col text-white">
          <div className="text-2xl text-center sm:text-3xl">รายได้</div>
          <div className="text-4xl text-center sm:text-5xl">
            {props.user?.income}
          </div>
          <div className="text-xl text-center">THB</div>
        </div>
      </div>
      <div>
        <div className="sm:hidden mt-3 mx-2">
          <select
            aria-label="Selected tab"
            className="form-select block w-full"
            onChange={(e: any) => {
              // console.log(e.target.value);
              onChangeMenu(+e.target.value);
            }}
          >
            <option value="1">ทั้งหมด</option>
            <option value="2">งานใหม่</option>
            <option value="3">กำลังดำเนินการ</option>
            <option value="4">งานจบ</option>
            <option value="5">ถูกยกเลิกงาน</option>
          </select>
        </div>
        <div className="hidden mt-3 sm:block">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <a
                onClick={() => onChangeMenu(1)}
                className={`${
                  menu === 1 ? "border-indigo-500" : "border-transparent"
                } group inline-flex items-center py-4 px-1 ml-auto border-b-2 font-medium text-sm leading-5 text-gray-500 cursor-pointer hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300`}
              >
                <span>ทั้งหมด</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800">
                  1
                </span>
              </a>
              <a
                onClick={() => onChangeMenu(2)}
                className={`${
                  menu === 2 ? "border-indigo-500" : "border-transparent"
                } ml-8 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm leading-5 text-gray-500 cursor-pointer hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300`}
              >
                <span>งานใหม่</span>
              </a>
              <a
                onClick={() => onChangeMenu(3)}
                className={`${
                  menu === 3 ? "border-indigo-500" : "border-transparent"
                } ml-8 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm leading-5 text-gray-500 cursor-pointer hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300`}
                aria-current="page"
              >
                <span>กำลังดำเนินการ</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800">
                  1
                </span>
              </a>
              <a
                onClick={() => onChangeMenu(4)}
                className={`${
                  menu === 4 ? "border-indigo-500" : "border-transparent"
                } ml-8 group inline-flex items-center py-4 px-1 border-b-2  font-medium text-sm leading-5 text-gray-500 cursor-pointer hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300`}
              >
                <span>งานจบ</span>
              </a>
              <a
                onClick={() => onChangeMenu(5)}
                className={`${
                  menu === 5 ? "border-indigo-500" : "border-transparent"
                } ml-8 group inline-flex items-center py-4 px-1 mr-auto border-b-2  font-medium text-sm leading-5 text-gray-500 cursor-pointer hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300`}
              >
                <span>ถูกยกเลิกงาน</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      {menu === 1 ? (
        <All menuChange={props.onChangeMenu} />
      ) : menu === 2 ? (
        <NewJob menuChange={props.onChangeMenu} />
      ) : menu === 3 ? (
        <InProgress menuChange={props.onChangeMenu} />
      ) : menu === 4 ? (
        <EndJob menuChange={props.onChangeMenu} />
      ) : menu === 5 ? (
        <CancelJob menuChange={props.onChangeMenu} />
      ) : menu === 6 ? (
        <JobDetail menuChange={props.onChangeMenu} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Job;
