import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const BindAccount = () => {
  const bankList = [
    { label: "กสิกรไทย", logo: "" },
    { label: "กรุงเทพ", logo: "" },
    { label: "กรุงไทย", logo: "" },
    { label: "ทหารไทย", logo: "" },
  ];

  return (
    <div className="mt-5">
      {/* <div className="sm:hidden">
        <select aria-label="Selected tab" className="form-select block w-full">
          <option>My Account</option>
          <option>Company</option>
          <option selected>Team Members</option>
          <option>Billing</option>
        </select>
      </div> */}
      <div className="px-4">
        <nav className="flex">
          {bankList.map((bl, i) => (
            <a
              href="#"
              className={`${i === 0 && "ml-auto"} ${
                i + 1 === bankList.length && "mr-auto"
              } px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-indigo-600 focus:bg-indigo-50`}
            >
              {bl.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col mx-auto sm:max-w-md">
          <div className="sm:px-10">
            <label
              htmlFor="email"
              className="block text-sm mt-4 font-medium leading-5 text-gray-700"
            >
              เลขบัญชี
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="email"
                type="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
            <label
              htmlFor="email"
              className="block text-sm mt-4 font-medium leading-5 text-gray-700"
            >
              ชื่อบัญชี
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="email"
                type="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
            <div className="mt-2">
              โปรดระบุอักษรภาษาอังกฤษ (aA-zZ) และตัวเลข (0-9) เท่านั้น
            </div>
          </div>
          <div className="mt-5 sm:px-4">
            <div className="rounded-lg shadow-lg">
              <div className="rounded-lg shadow-xs overflow-hidden">
                <div className="relative text-center grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <p>
                    ข้อมูลบัญชีธนาคารี่คุณระบุในแบบฟอร์มนี้
                    จะนำมาใช้เพื่อโอนเงินค่าจ้างที่ได้จากการทำงานบนระบบเซย์ไพลอต
                    เข้าบัญชีธนาคารธนาคารของคุณ
                  </p>
                  <p>อ่านรายละเอียด</p>
                  <p>
                    <a href="">ข้อกำหนดการใช้งาน</a>&nbsp; และ &nbsp;
                    <a href="">นโยบายความเป็นส่วนตัว</a>
                  </p>
                </div>
                <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                  <div className="relative flex items-center mx-auto">
                    <div className="flex items-center h-5">
                      <input
                        id="check-cf"
                        type="checkbox"
                        className="form-checkbox h-8 w-8 text-indigo-600 transition duration-150 ease-in-out"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-5">
                      <label
                        htmlFor="check-cf"
                        className="font-medium text-gray-700"
                      >
                        ฉันยินยอมให้เซย์ไพลอตเข้าถึงข้อมูลข้องฉัน
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:px-4 ">
            <span className="flex">
              <button
                type="button"
                className="px-4 py-2 mx-auto border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                ถัดไป
              </button>
            </span>
          </div>
          <div className="mt-5 sm-px4">
            <div className="flex-1 mt-2">
              <p className="text-lg leading-2 text-gray-500 mb-2">
                บริการการจ่ายเงิน
              </p>
              <ul>
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BindAccount;
