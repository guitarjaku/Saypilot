import { h } from "preact";
import { useState } from "preact/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = useRouter().pathname;
  console.log(path);
  return (
    <div className="relative bg-white">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
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
            <ActiveLink activeClassName="bg-indigo-400 rounded-md" href="/">
              <a className="text-base p-4 leading-6 font-medium text-black hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Summarys
              </a>
            </ActiveLink>
            <ActiveLink
              activeClassName="bg-indigo-400 rounded-md"
              href="/applications"
            >
              <a className="text-base p-4 leading-6 font-medium text-black hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Applications
              </a>
            </ActiveLink>
            <ActiveLink
              activeClassName="bg-indigo-400 rounded-md"
              href="/influencers"
            >
              <a className="text-base p-4 leading-6 font-medium text-black hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Influencers
              </a>
            </ActiveLink>
            <ActiveLink
              activeClassName="bg-indigo-400 rounded-md"
              href="/messages"
            >
              <a className="text-base p-4 leading-6 font-medium text-black hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Messages
              </a>
            </ActiveLink>
            <ActiveLink
              activeClassName="bg-indigo-400 rounded-md"
              href="/postsAndAnalytics"
            >
              <a className="text-base p-4 leading-6 font-medium text-black hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Posts & Analytics
              </a>
            </ActiveLink>
          </nav>
          <div className="hidden lg:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <button
              className="bg-whitec text-sm hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border  border-gray-400 rounded-md text-left leading-5"
              onClick={() => {}}
            >
              <div className="flex items-center">
                <div className="fill-current w-8 h-8 mr-2">
                  <img src={"/icons/email.png"} alt="" />
                </div>
                <div className="flex-1 italic">
                  <span>Email</span>
                  <br />
                  <span>Analytics</span>
                </div>
              </div>
            </button>
            <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border  border-gray-400 rounded-md text-left leading-5">
              <div className="flex items-center">
                <div className="flex-1 ">
                  <svg
                    className="fill-current w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                </div>
                <div className="flex-1 italic ">
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
