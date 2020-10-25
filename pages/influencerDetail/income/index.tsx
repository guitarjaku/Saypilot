import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import IncomeDetail from "./incomeDetail";

const Income = () => {
  const [menu, setMenu] = useState(1);
  const [sortMenu, setSortMenu] = useState(false);

  const onChangeMenu = (props: any) => {
    // console.log(props);
    setMenu(props);
  };

  return (
    <div className="flex flex-grow flex-col">
      {/* <div className="mx-auto mt-10 text-2xl">งานของฉัน</div>
      <div className="mx-auto mt-3 bg-indigo-300 rounded-full h-40 w-40 sm:h-60 sm:w-60 flex items-center justify-center">
        <div className="flex-col text-white">
          <div className="text-2xl text-center sm:text-3xl">รายได้</div>
          <div className="text-4xl text-center sm:text-5xl">9,000</div>
          <div className="text-xl text-center">THB</div>
        </div>
      </div> */}
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
            <option value="1">ข้อมูลรายได้</option>
            <option value="2">ผูกบัญชีรายได้</option>
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
                <span>ข้อมูลรายได้</span>
              </a>
              <a
                onClick={() => onChangeMenu(2)}
                className={`${
                  menu === 2 ? "border-indigo-500" : "border-transparent"
                } ml-8 mr-auto group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm leading-5 text-gray-500 cursor-pointer hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300`}
              >
                <span>ผูกบัญชีรายได้</span>
              </a>
            </nav>
          </div>
        </div>
        {menu === 1 && <IncomeDetail />}
      </div>
    </div>
  );
};

export default Income;
