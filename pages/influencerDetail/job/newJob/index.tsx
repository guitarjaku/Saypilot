import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const NewJob = () => {
  const [sortMenu, setSortMenu] = useState(false);

  const handleSortMenu = () => {
    setSortMenu(!sortMenu);
  };

  return (
    <div className="bg-white lg:min-w-0 lg:flex-1 mt-4">
      <div className="flex flex-col justify-between space-x-4">
        {/* <!-- Repo name and link --> */}
        <div className="px-2 sm:px-60">
          <div className="flex bg-indigo-300 h-32 w-full sm:mx-auto sm:w-1/2 shadow sm:rounded-lg">
            <div className="self-center w-full px-4 py-5 sm:p-6 text-center h-30">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                <span>
                  ยังไม่มีงานที่ตรงกับคุณในขณะนี้
                  กรุณากลับมาที่หน้านี้อีกครั้งเร็วๆ นี้
                </span>
              </h3>
            </div>
          </div>
          {/* <div
            // onClick={() => props.menuChange(7)}
            className="bg-white w-full sm:mx-auto sm:w-1/2 cursor-pointer shadow mt-4 sm:rounded-lg"
          >
            <div className="flex bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
              <div className="flex-shrink-0">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Saypilot - Welcome Job (10'Nov)
                </h3>
                <p>Saypilot</p>
                <p>จาก Saypilot</p>
              </div>
              <div className="flex-1 text-right">
                <p>ส่งงานภายในงันที่</p>
                <p>12 พ.ย. 2563</p>
              </div>
            </div>
            <div className="px-4 py-4 sm:px-6 bg-purple-200">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <img
                    className="flex-1 h-16 w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="self-center ml-2">
                    <p>Influencer Name</p>
                    <p>Facebook Profile</p>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <p className="text-lg">เขียนรีวิวและถ่ายภาพ</p>
                  <span>THB</span>
                  <span className="text-4xl">50</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewJob;
