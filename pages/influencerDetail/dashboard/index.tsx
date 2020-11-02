import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const Dashboard = (props: any) => {
  return (
    <div className="flex flex-grow flex-col">
      <div className="container mx-auto text-center">
        <div className="mt-10 text-center text-5xl">ภาพรวม</div>
        <span className="inline-block relative text-center mt-10">
          <div className="flex flex-col p-10 w-64 h-64 text-white rounded-full bg-indigo-600">
            <span className="text-2xl">รายได้คงเหลือ</span>
            <span className="text-5xl">0</span>
            <span className="text-2xl">จากทั้งมหด</span>
            <span className="text-2xl">0</span>
          </div>
          <span className="absolute top-0 right-0 block h-16 w-16 rounded-full text-white bg-green-400 ">
            <svg
              className="h-16 w-16 p-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          </span>
        </span>
        <br />
        <span className="inline-block relative text-center mt-10">
          <div className="flex flex-col p-10 w-64 h-64 text-white rounded-full bg-indigo-600">
            <span className="text-2xl">แบรนด์</span>
            <span className="text-5xl">0</span>
            <span className="text-2xl">งาน</span>
          </div>
          <span className="absolute top-0 right-0 block h-16 w-16 rounded-full text-white bg-green-400">
            <svg
              className="h-16 w-16 p-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                clipRule="evenodd"
              />
              <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
            </svg>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
