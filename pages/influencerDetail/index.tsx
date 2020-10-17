import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";
import Head from "next/head";
import InfluencerSideBar from "../../components/InfluencerSidebar";

const InfluencerDetail = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(1);

  const onChangeMenu = (props: any) => {
    setMenu(props);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-row flex-1 overflow-hidden bg-white h-screen">
      <InfluencerSideBar />
      <main className="flex flex-grow relative z-0 overflow-y-auto focus:outline-none ">
        <Head>
          <title>Home | Saypilot</title>
          <meta property="og:title" content="Information about Genemator" />
          <meta
            property="og:description"
            content="In this page you can get detailed information about Genemator and his works & experiences."
          />
        </Head>
        <div className="flex flex-grow flex-col">
          <div className="mx-auto text-2xl">งานของฉัน</div>
          <div className="mx-auto mt-3 bg-indigo-300 rounded-full h-60 w-60 flex items-center justify-center">
            <div className="flex-col text-white">
              <div className="text-3xl text-center">รายได้</div>
              <div className="text-5xl text-center">9,000</div>
              <div className="text-xl text-center">THB</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 px-3 border-b border-gray-400">
            <div
              onClick={() => onChangeMenu(1)}
              className={`${
                menu === 1 ? "border-indigo-400" : "border-white"
              } flex items-center py-4 m-auto cursor-pointer border-b-4 hover:border-indigo-400`}
            >
              <div className="flex-shrink-0 h-24 w-24">
                <div
                  className={`${
                    menu === 1
                      ? "bg-indigo-400 text-white"
                      : "bg-white border border-black"
                  } w-full h-full rounded-full flex items-center justify-center text-4xl font-bold`}
                >
                  ALL
                </div>
              </div>
              <div className="mt-auto ml-4">
                <div className="text-5xl leading-9 font-bold text-gray-900">
                  91
                </div>
                <div className="text-sm leading-9 text-gray-500">ALL POSTS</div>
              </div>
            </div>
            <div
              onClick={() => onChangeMenu(2)}
              className={`${
                menu === 2 ? "border-indigo-400" : "border-white"
              } flex items-center py-4 m-auto cursor-pointer border-b-4 hover:border-indigo-400`}
            >
              <div className="flex-shrink-0 h-24 w-24">
                <div
                  className={`${
                    menu === 2
                      ? "bg-indigo-400 text-white"
                      : "bg-white border border-black"
                  } w-full h-full rounded-full flex items-center justify-center text-4xl font-bold`}
                >
                  IMG
                </div>
              </div>
              <div className="mt-auto ml-4">
                <div className="text-5xl leading-9 font-bold text-gray-900">
                  44
                </div>
                <div className="text-sm leading-9 text-gray-500">
                  IMAGE POSTS
                </div>
              </div>
            </div>
            <div
              onClick={() => onChangeMenu(3)}
              className={`${
                menu === 3 ? "border-indigo-400" : "border-white"
              } flex items-center py-4 m-auto cursor-pointer border-b-4 hover:border-indigo-400`}
            >
              <div className="flex-shrink-0 h-24 w-24">
                <div
                  className={`${
                    menu === 3
                      ? "bg-indigo-400 text-white"
                      : "bg-white border border-black"
                  } w-full h-full rounded-full flex items-center justify-center text-4xl font-bold`}
                >
                  VDO
                </div>
              </div>
              <div className="mt-auto ml-4">
                <div className="text-5xl leading-9 font-bold text-gray-900">
                  0
                </div>
                <div className="text-sm leading-9 text-gray-500">
                  VIDEO POSTS
                </div>
              </div>
            </div>
            <div
              onClick={() => onChangeMenu(4)}
              className={`${
                menu === 4 ? "border-indigo-400" : "border-white"
              } flex items-center py-4 m-auto cursor-pointer border-b-4 hover:border-indigo-400`}
            >
              <div className="flex-shrink-0 h-24 w-24">
                <div
                  className={`${
                    menu === 4
                      ? "bg-indigo-400 text-white"
                      : "bg-white border border-black"
                  } w-full h-full rounded-full flex items-center justify-center text-4xl font-bold`}
                >
                  STY
                </div>
              </div>
              <div className="mt-auto ml-4">
                <div className="text-5xl leading-9 font-bold text-gray-900">
                  47
                </div>
                <div className="text-sm leading-9 text-gray-500">
                  STORY POSTS
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfluencerDetail;
