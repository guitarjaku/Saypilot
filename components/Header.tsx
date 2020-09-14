/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import { h } from "preact";
import { useState } from "preact/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
// import Transition from "./Transition";

const Header = ({ subtitle }: { subtitle: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const path = useRouter().pathname;

  const homeDetectMenu = () => {
    if (path !== "/") {
      return (
        <Link href="/">
          <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
            Home
          </a>
        </Link>
      );
    }
  };

  // const homeDetectResponsive = () => {
  //   if (path !== "/") {
  //     return (
  //       <Link href="/">
  //         <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
  //           <svg
  //             className="flex-shrink-0 h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  //             />
  //           </svg>
  //           <div className="text-base leading-6 font-medium">Home</div>
  //         </a>
  //       </Link>
  //     );
  //   }
  // };

  return (
    <div className="relative bg-white">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {homeDetectMenu()}
            <Link href="/posts">
              <a className="text-base leading-6 font-medium text-black hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Summarys
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base leading-6 font-medium text-black hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Applications
              </a>
            </Link>
            <Link href="/quotes">
              <a className="text-base leading-6 font-medium text-black hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Influencers
              </a>
            </Link>
            <Link href="/x">
              <a className="text-base leading-6 font-medium text-black hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Messages
              </a>
            </Link>
            <Link href="/socials">
              <a className="text-base leading-6 font-medium text-black hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Posts & Analytics
              </a>
            </Link>
          </nav>
          <div className="md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border  border-gray-400 rounded-none text-left leading-5">
              <div className="flex items-center">
                <div className="flex-1 ">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <div className="flex-1 ">
                  <span>Email</span>
                  <br />
                  <span>Analytics</span>
                </div>
              </div>
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border  border-gray-400 rounded-none text-left leading-5">
              <div className="flex items-center">
                <div className="flex-1 ">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                </div>
                <div className="flex-1 ">
                  <span>Download</span>
                  <br />
                  <span>Analytics</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
