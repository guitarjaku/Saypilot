import React from "react";
import Link from "next/link";

const Footer = (props: any) => {
  return (
    <div
      className={
        props.simple
          ? undefined
          : "bg-transparent border-t border-b border-gray-200"
      }
    >
      <div className="max-w-screen-xl mx-2 py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-start">
          <div className="px-5 py-2 text-black">
            <a
              href={`editCampaign/?id=${props.id}`}
              className="text-base leading-6 text-black hover:text-gray-200 border  border-gray-400 rounded-md p-4"
            >
              EDIT CAMPAIGN
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://t.me/bsba_bot"
              className="text-base leading-6 text-black hover:text-gray-200 border  border-gray-400 rounded-md p-4"
            >
              STOP ACCEPTING APPLICATIONS
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://t.me/bsba_bot"
              className="text-base leading-6 text-black hover:text-gray-200 border  border-gray-400 rounded-md p-4"
            >
              ARCHIVE CAMPAIGN
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
