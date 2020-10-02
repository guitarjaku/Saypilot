import { h } from "preact";
import { useState } from "preact/hooks/";

const CardPost = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={"/images/pic1.jpg"}
        alt="Sunset in the mountains"
        height="300"
      />
      <div className="px-6 py-4">
        <div className="flex items-center py-4 m-auto">
          <div className="flex-shrink-0 h-16 w-16">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
              alt=""
            />
          </div>
          <div className="mt-auto ml-4">
            <div className="text-xl leading-9 font-bold text-gray-900">
              @vintagemixmatch
            </div>
            <div className="text-sm leading-9 text-gray-500">Callifornia</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 px-2">
        <div className="flex py-4">
          <div className="ml-2">
            <div className="text-xl leading-9 font-bold italic text-gray-900">
              792
            </div>
            <div className="text-sm leading-9 text-gray-500">LIKES</div>
          </div>
        </div>
        <div className="flex py-4">
          <div className="ml-2">
            <div className="text-xl leading-9 font-bold italic text-gray-900">
              70
            </div>
            <div className="text-sm leading-9 text-gray-500">COMMENTS</div>
          </div>
        </div>
        <div className="flex py-4">
          <div className="ml-2">
            <div className="text-xl leading-9 font-bold italic text-gray-900">
              10,296
            </div>
            <div className="text-sm leading-9 text-gray-500">IMPRESSTIONS</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border  border-gray-400 rounded-none leading-5">
          <div className="flex items-center">
            <div className="flex-1 ml-4">
              <span>DOWNLOAD</span>
            </div>
            <svg
              className="flex-1 fill-current w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
          </div>
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border  border-gray-400 rounded-none leading-5">
          <div className="flex items-center">
            <div className="flex-1">
              <span>SEND TO</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardPost;
