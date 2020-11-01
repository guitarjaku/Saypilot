import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const Dashboard = () => {
  const [menu, setMenu] = useState(1);
  const [sortMenu, setSortMenu] = useState(false);

  const onChangeMenu = (props: any) => {
    // console.log(props);
    setMenu(props);
  };

  return (
    <div className="flex flex-grow flex-col">
      <div className="mx-auto mt-10 text-2xl">ภาพรวม</div>
      <span className="mx-auto text-2xl">รายได้รวม</span>
      <div className="mx-auto">
        <span className="text-2xl">฿</span>
        <span className="text-4xl">9,000.00</span>
      </div>
      <span className="inline-flex rounded-md mx-auto">
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-lg leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          บัญชีรายได้
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </span>
      <div className="relative border-opacity-20 border-gray-700 h-10 border-r w-1/2"></div>
      <span className="mx-auto text-4xl">0</span>
      <span className="mx-auto text-2xl">แบรน</span>
      <span className="mx-auto text-4xl">0</span>
      <span className="mx-auto text-2xl">งาน</span>
      <span className="inline-flex rounded-md mx-auto">
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-lg leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          งานของฉัน
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default Dashboard;
