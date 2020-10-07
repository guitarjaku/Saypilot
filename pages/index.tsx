import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import DataService from "../service/service";
import Footer from "../components/Footer";
import ContentLoader from "react-content-loader";

interface CampaignI {
  id?: string;
  name: string;
  imageMain: string;
  productWebsite: string;
  productValue: string;
  productCategory: string;
  productCategoryValue: string;
  productSend: string;
  productInfluencerCaption: string;
  productPostStyle: string;
  styleGuides: Object[];
  firstPostLooking: string;
  instagramStoryRequire: boolean;
  targetStates: Object[];
  gender: Object[];
  instagramHandles: Object[];
  hashtags: Object[];
  vipCreator: boolean;
  productFolder: string;
}

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [campaign, setCampaign] = useState<CampaignI>({
    name: "",
    imageMain: "",
    productWebsite: "",
    productValue: "",
    productCategory: "",
    productCategoryValue: "",
    productSend: "",
    productInfluencerCaption: "",
    productPostStyle: "",
    styleGuides: [],
    firstPostLooking: "image",
    instagramStoryRequire: false,
    targetStates: [],
    gender: [],
    instagramHandles: [],
    hashtags: [],
    vipCreator: false,
    productFolder: "",
  });

  const getCampaig = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id: string = urlParams.get("id") || "";

    DataService.get("/campaigns", id)
      .then((res) => {
        console.log(res.data);
        setCampaign(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCampaig();
  }, []);

  return (
    <>
      {/* desktop */}

      <div className="flex flex-row flex-1 overflow-hidden bg-white h-screen">
        <SideBar />
        <main className="flex flex-grow relative z-0 overflow-y-auto focus:outline-none ">
          <Head>
            <title>Home | Saypilot</title>
            <meta property="og:title" content="Information about Genemator" />
            <meta
              property="og:description"
              content="In this page you can get detailed information about Genemator and his works & experiences."
            />
          </Head>
          <div className="flex flex-grow flex-col ">
            <Header />
            <div className=" sm:block flex-grow">
              {loading ? (
                <ContentLoader viewBox="0 0 800 400" height={400} width={800}>
                  <circle cx="472" cy="159" r="7" />
                  <rect x="487" y="154" rx="5" ry="5" width="220" height="10" />
                  <circle cx="472" cy="190" r="7" />
                  <rect x="487" y="184" rx="5" ry="5" width="220" height="10" />
                  <circle cx="472" cy="219" r="7" />
                  <rect x="487" y="214" rx="5" ry="5" width="220" height="10" />
                  <circle cx="472" cy="249" r="7" />
                  <rect x="487" y="244" rx="5" ry="5" width="220" height="10" />
                  <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />
                  <rect x="229" y="300" rx="0" ry="0" width="0" height="0" />
                  <rect x="111" y="340" rx="0" ry="0" width="0" height="0" />
                  <rect x="121" y="342" rx="0" ry="0" width="0" height="0" />
                  <rect x="10" y="20" rx="0" ry="0" width="40" height="44" />
                  <rect x="10" y="80" rx="0" ry="0" width="40" height="44" />
                  <rect x="10" y="140" rx="0" ry="0" width="40" height="44" />
                  <rect x="194" y="329" rx="0" ry="0" width="0" height="0" />
                  <rect x="192" y="323" rx="0" ry="0" width="0" height="0" />
                  <rect x="185" y="323" rx="0" ry="0" width="0" height="0" />
                  <rect x="10" y="200" rx="0" ry="0" width="40" height="44" />
                  <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
                  <rect x="470" y="58" rx="0" ry="0" width="300" height="6" />
                  <rect x="470" y="68" rx="0" ry="0" width="300" height="6" />
                  <rect x="470" y="78" rx="0" ry="0" width="300" height="6" />
                  <rect x="798" y="135" rx="0" ry="0" width="0" height="0" />
                  <rect x="731" y="132" rx="0" ry="0" width="0" height="0" />
                  <rect x="470" y="99" rx="0" ry="0" width="70" height="30" />
                  <rect x="560" y="99" rx="0" ry="0" width="70" height="30" />
                </ContentLoader>
              ) : (
                <div className="p-4 align-middle inline-block min-w-full border-gray-200">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 lg:col-span-2">
                      <div className="w-full h-48 bg-blue-200">
                        <img src="" alt="" />
                      </div>
                      <div className="flex flex-wrap border-b border-gray-400 text-black mt-3 p-2">
                        <div className="flex-auto p-3">
                          <p className="text-4xl italic">49</p>
                          <span className="text-sm font-medium text-gray-900">
                            INFLUENCERS
                          </span>
                        </div>
                        <div className="flex-auto p-3">
                          <p className="text-4xl italic">91/94</p>
                          <span className="text-sm font-medium text-gray-900">
                            LIVE POSTS
                          </span>
                        </div>
                        <div className="flex-auto p-3">
                          <p className="text-4xl italic">24,865</p>

                          <span className="text-sm font-medium text-gray-900">
                            LIKES
                          </span>
                        </div>
                        <div className="flex-auto p-3">
                          <p className="text-4xl italic">2,508</p>

                          <span className="text-sm font-medium text-gray-900">
                            COMMENTS
                          </span>
                        </div>
                        <div className="flex-auto p-3">
                          <p className="text-4xl italic">323,245</p>

                          <span className="text-sm font-medium text-gray-900">
                            IMMPESSION
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col text-black mt-8">
                        <div className="flex-1 text-3xl mb-6">
                          <span>Post Guildlines</span>
                        </div>
                        <div className="flex-1 text-xl text-bold mb-3">
                          <span>
                            Which product will you send the influencers?
                          </span>
                        </div>
                        <div className="flex-1 mb-6">
                          <span>{campaign.productSend}</span>
                        </div>
                        <div className="flex-1 text-xl text-bold mb-3">
                          <span>
                            What would you like the influencers to mention in
                            thier caption?
                          </span>
                        </div>
                        <div className="flex-1 mb-6">
                          <span>{campaign.productInfluencerCaption}</span>
                        </div>
                        <div className="flex-1 text-xl text-bold mb-3">
                          <span>
                            What photo/video style are you looking for?
                          </span>
                        </div>
                        <div className="flex-1 mb-6">
                          <span>{campaign.productPostStyle}</span>
                        </div>
                        <div className="flex-1 text-xl text-bold mb-3">
                          <span>Style Guide</span>
                        </div>
                        <div className="flex-1 mb-6">
                          {campaign.styleGuides?.map((sg) => (
                            <span
                              className="bg-yellow-400 rounded-none"
                              style={{ height: "100px", width: "100px" }}
                            ></span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="flex flex-col text-black divide-y divide-gray-400">
                        <div className="flex-1">
                          <table className="min-w-full">
                            <thead>
                              <tr>
                                <th className="px-6 py-3 text-left text-md font-bold leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                  Lastest Posts
                                </th>
                                <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                  Comments
                                </th>
                                <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                  Likes
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4 whitespace-no-wrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                      <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                        alt=""
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm leading-5 font-medium text-gray-900">
                                        Jane Cooper
                                      </div>
                                      <div className="text-sm leading-5 text-gray-500">
                                        jane.cooper@example.com
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap">
                                  <span className="text-sm leading-5 text-gray-900">
                                    18
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap">
                                  <span className="text-sm leading-5 text-gray-900">
                                    754
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="flex-1 flex-col ">
                          <div className="flex-1 my-3 text-2xl font-bold">
                            <span>Campaign Details</span>
                          </div>
                          <div className="flex-1 text-sm text-gray-500">
                            <span>WEBSITE</span>
                          </div>
                          <div className="flex-1 text-1xl font-bold mb-3">
                            <span>{campaign.productWebsite}</span>
                          </div>
                          <div className="flex-1 text-sm text-gray-500">
                            <span>PRODUCT VALUE</span>
                          </div>
                          <div className="flex-1 text-1xl font-bold mb-3">
                            <span>{campaign.productValue}</span>
                          </div>
                          <div className="flex-1 text-sm text-gray-500">
                            <span>PRODUCT CATEGORY</span>
                          </div>
                          <div className="flex-1 text-1xl font-bold mb-3">
                            <span>{campaign.productCategory}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex-1 my-3 text-2xl font-bold">
                            <span>Post Requirements</span>
                          </div>
                          <div className="flex-1 text-sm text-gray-500 mb-4">
                            <span>REQUIRE POSTS</span>
                          </div>
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 h-10 w-10">
                              <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M446.575,0H65.425C29.349,0,0,29.35,0,65.426v381.149C0,482.65,29.349,512,65.425,512h381.15
                                C482.651,512,512,482.65,512,446.574V65.426C512,29.35,482.651,0,446.575,0z M481.842,446.575
                                c0,19.447-15.821,35.267-35.267,35.267H65.425c-19.447,0-35.268-15.821-35.268-35.267v-55.007l99.255-84.451
                                c3.622-3.082,8.906-3.111,12.562-0.075l62.174,51.628c5.995,4.977,14.795,4.569,20.304-0.946L372.181,209.77
                                c2.67-2.675,5.783-2.935,7.408-2.852c1.62,0.083,4.695,0.661,7.078,3.596l95.176,117.19V446.575z M481.842,279.865l-71.766-88.366
                                c-7.117-8.764-17.666-14.122-28.942-14.701c-11.268-0.57-22.317,3.672-30.294,11.662L212.832,326.681l-51.59-42.839
                                c-14.959-12.422-36.563-12.293-51.373,0.308l-79.712,67.822V65.426c0-19.447,15.821-35.268,35.268-35.268h381.15
                                c19.447,0,35.267,15.821,35.267,35.268V279.865z"
                                />
                                <path d="M161.174,62.995c-40.095,0-72.713,32.62-72.713,72.713c0,40.094,32.619,72.713,72.713,72.713s72.713-32.619,72.713-72.713S201.269,62.995,161.174,62.995z M161.174,178.264c-23.466,0-42.556-19.091-42.556-42.556c0-23.466,19.09-42.556,42.556-42.556c23.466,0,42.556,19.091,42.556,42.556S184.64,178.264,161.174,178.264z" />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">
                                1 Image Post
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Footer id={campaign.id} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
