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
      <div className="sm:hidden">
        <select aria-label="Selected tab" className="form-select block w-full">
          <option>My Account</option>
          <option>Company</option>
          <option selected>Team Members</option>
          <option>Billing</option>
        </select>
      </div>
      <div className="hidden sm:block">
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
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5 text-gray-700"
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
        </div>
      </div>
    </div>
  );
};

export default BindAccount;
