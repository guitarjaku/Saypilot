import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Other from "./other";
import Property from "./property";

const Post = (props: any) => {
  const [menu, setMenu] = useState(1);

  const onChangeMenu = (props: any) => {
    // console.log(props);
    setMenu(props);
  };

  return (
    <div className="flex flex-grow flex-col">
      <div className="mt-10 text-center text-5xl">งานประกาศ</div>
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
            <option value="1">งานที่ตรงคุณสมบัติของฉัน</option>
            <option value="2">งานอื่นๆ</option>
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
                <span>งานที่ตรงคุณสมบัติของฉัน</span>
                {/* <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800">
                  32
                </span> */}
              </a>
              <a
                onClick={() => onChangeMenu(2)}
                className={`${
                  menu === 2 ? "border-indigo-500" : "border-transparent"
                } mr-auto group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm leading-5 text-gray-500 cursor-pointer hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300`}
              >
                <span>งานอื่นๆ</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      {menu === 1 && <Property onChangeMenu={onChangeMenu} />}
      {menu === 2 && <Other onChangeMenu={onChangeMenu} />}
    </div>
  );
};

export default Post;
