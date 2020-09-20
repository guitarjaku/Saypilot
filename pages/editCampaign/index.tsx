import { h } from "preact";
import { useState, useEffect } from "preact/hooks/";
import DataService from "../../service/service";

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
  styleGuides: [];
  firstPostLooking: string;
  instagramStoryRequire: boolean;
  tragetStates: [];
  gender: string;
  instagramHandles: [];
  hashtags: [];
  vipcreator: boolean;
  productFolder: string;
}

const Editcapaign = () => {
  let queryString;
  if (typeof window !== "undefined") {
    queryString = window.location.search;
  }
  const urlParams = new URLSearchParams(queryString);
  const id: string = urlParams.get("id") || "";

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
    firstPostLooking: "",
    instagramStoryRequire: false,
    tragetStates: [],
    gender: "",
    instagramHandles: [],
    hashtags: [],
    vipcreator: false,
    productFolder: "",
  });

  const getCampiagn = () => {
    DataService.get("/campaigns", id).then((res) => {
      setCampaign(res.data);
      console.log(campaign);
    });
  };

  const onInputValueChange = (props: any) => (e: any) => {
    // console.log(e.target.value);
    setCampaign({ ...campaign, [props]: e?.target.value });
  };

  const onSubmit = () => {
    console.log(campaign);
  };

  useEffect(() => {
    getCampiagn();
  }, []);

  return (
    <>
      <div className="py-8 bg-black overflow-hidden md:py-20 lg:py-24">
        <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 ">
          <a
            href="/"
            className="absolute bg-black text-yellow-400 font-semibold rounded-none text-left leading-5 left-20"
          >
            <div className="flex items-center">
              <div className="fill-current w-8 h-8 mr-2">
                <img src={"/icons/return.svg"} alt="" />
                <span>Back</span>
              </div>
            </div>
          </a>
          <img
            className="w-auto m-auto"
            src={"/trend-logo.svg"}
            alt="Workflow"
          />
          <div className="mt-10 text-center">
            <span>Edit Campaign</span>
          </div>
          <div className="mt-10">
            <p>Name your campaign</p>
            <input
              className="p-3 w-full border-b border-white bg-black"
              type="text"
              value={campaign.name}
              onChange={onInputValueChange("name")}
            />
          </div>
          <div className="flex items-center" style={{ height: "300px" }}>
            <span
              className="bg-yellow-400 rounded-none m-auto"
              style={{ height: "200px", width: "80%" }}
            ></span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p>Product Website</p>
              <div className="py-4 text-yellow-400 border-b border-yellow-400">
                {campaign.productWebsite}
              </div>
            </div>
            <div>
              <p>Product value in dollars</p>
              <div className="py-4 text-yellow-400 border-b border-yellow-400">
                {campaign.productValue}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="py-4">
              <p>Product Category</p>
              <p>Select One</p>
              <input
                className="my-3 p-3 w-full bg-gray-900 text-yellow-400 border border-yellow-400"
                type="text"
                value={campaign.productCategory}
                onChange={onInputValueChange("productCategory")}
              />
            </div>
            <div className="py-4">
              <p>Product Category</p>
              <p>Brand must provide over $175 to warrant 2 posts</p>
              <input
                className="my-3 p-3 w-full bg-gray-900 text-yellow-400 border border-yellow-400"
                type="text"
                value={campaign.productCategoryValue}
                onChange={onInputValueChange("productCategoryValue")}
              />
            </div>
          </div>
          <div className="py-4">
            <p>General Post Guidelines</p>
            <p className="my-3">
              Give them a general undetstanding of what you're looking for and
              have faith in their creative minds to come up with content that
              connects with their audience. After all, there followers follow
              them for a reason!
            </p>
          </div>
          <div className="py-4">
            <p>Which product will you send the influencers?</p>
            <input
              className="my-3 p-3 w-full bg-gray-900 text-yellow-400 border border-yellow-400"
              type="text"
              value={campaign.productSend}
              onChange={onInputValueChange("productSend")}
            />
          </div>
          <div className="py-4">
            <p>
              What would you like the influencers to mention in thier caption
            </p>
            <textarea
              className="my-3 p-3 w-full bg-gray-900 text-yellow-400 border border-yellow-400"
              rows={6}
              value={campaign.productInfluencerCaption}
              onChange={onInputValueChange("productInfluencerCaption")}
            />
          </div>
          <div className="py-4">
            <p>What photo/video style are you looking for?</p>
            <textarea
              className="my-3 p-3 w-full bg-gray-900 text-yellow-400 border border-yellow-400"
              rows={6}
              value={campaign.productPostStyle}
              onChange={onInputValueChange("productPostStyle")}
            />
          </div>
          <div className="py-4">
            <p>Style Guide</p>
            <p>
              add images so the creators know what kind of content to create.
            </p>
            <div className="grid grid-cols-12 gap-32 py-4">
              {campaign.styleGuides.map((sg) => (
                <span
                  className="bg-yellow-400 rounded-none"
                  style={{ height: "100px", width: "100px" }}
                ></span>
              ))}
            </div>
          </div>
          <div className="py-4">
            <p>What are you looking for in your first post?</p>
            <span className="relative z-0 inline-flex shadow-sm rounded-md py-4 w-full">
              <button
                type="button"
                className="w-2/4 text-center relative  items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Image Post
              </button>
              <button
                type="button"
                className="w-2/4 text-center relative items-center px-4 py-2  border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Video Post
              </button>
            </span>
          </div>
          <div className="py-4">
            <p>Instagram Story Required?</p>
            <span className="relative z-0 inline-flex shadow-sm rounded-md py-4 w-full">
              <button
                type="button"
                className="w-2/4 text-center relative  items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                No
              </button>
              <button
                type="button"
                className="w-2/4 text-center relative items-center px-4 py-2  border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Yes
              </button>
            </span>
          </div>
          <div className="py-4">
            <p>Enter Traget States</p>
            <input
              className="my-3 p-3 w-full bg-gray-900 text-yellow-400 border border-yellow-400"
              type="text"
            />
          </div>
          <div className="py-4">
            <p>Gender</p>
            <input
              className="my-3 p-3 w-full bg-gray-900 text-yellow-400 border border-yellow-400"
              type="text"
              value={campaign.gender}
              onChange={onInputValueChange("productGender")}
            />
          </div>
          <div className="py-4">
            <p>Brand Tags and Hash Tags</p>
            <p className="my-3">
              Make influencers inclue youe brands Instagram handle with their
              posts. This way audience members will have a clear path to visit
              your page. add required hashtags to drive prople help your posts
              be discovered by people searching for specific themts (ex.
              #feelinggood, #newyearnewyou)
            </p>
          </div>
          <div className="py-4">
            <p>Required Instagram Handles</p>
            <p>Press "Enter" after each handle</p>
            <input
              className="p-3 w-full border-b border-white bg-black"
              placeholder="YourHandle"
              type="text"
            />
            <div className="grid grid-cols-12 gap-32 py-4">
              <span
                className="py-3 bg-yellow-400 rounded-sm text-center text-black"
                style={{ height: "50px", width: "150px" }}
              >
                @newshine x
              </span>
            </div>
          </div>
          <div className="py-4">
            <p>Required Hashtags (Max 5)</p>
            <p>Press "Enter" after each tag</p>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                #
              </div>
              <input
                className="p-3 pl-7 w-full border-b border-white bg-black"
                placeholder="YourHashtag"
                type="text"
              />
            </div>
            <div className="py-7">
              <span
                className="py-3 px-3 mr-3 bg-yellow-400 rounded-sm text-center text-black"
                style={{ height: "50px", width: "150px" }}
              >
                #TIMETOSHINE x
              </span>
              <span
                className="py-3 px-3 mr-3 bg-yellow-400 rounded-sm text-center text-black"
                style={{ height: "50px", width: "190px" }}
              >
                #NewShineWindes x
              </span>
              <span
                className="py-3 px-3 mr-3 bg-yellow-400 rounded-sm text-center text-black"
                style={{ height: "50px", width: "150px" }}
              >
                #WineforALl x
              </span>
              <span
                className="py-3 px-3 mr-3 bg-yellow-400 rounded-sm text-center text-black"
                style={{ height: "50px", width: "190px" }}
              >
                #isitfridayyet? x
              </span>
            </div>
          </div>
          <div className="py-4">
            <div className="grid grid-cols-2 gap-32 py-4">
              <div>
                <p>Show this listing to VIP influencers?</p>
                <p>(VIP creators cost 2 campaign credits)</p>
                <p className="my-3">
                  VIP Influencers are our best of the best influencers. They
                  have a combination of amazing content creation skills, avery
                  engaged audience, and a sizeable following. You can always add
                  more VIP influencers credits to your plan from the dashboard.
                </p>
              </div>
              <div className="flex flex-row-reverse">
                <span className="rounded-md py-4 w-1/4">
                  <button
                    type="button"
                    className="w-2/4 text-center relative  items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className="w-2/4 text-center relative items-center px-4 py-2  border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    Yes
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="py-4">
            <div className="grid grid-cols-2 gap-32 py-4">
              <div>
                <p>Connect to a Yotpo Product ID</p>
                <p className="my-3">
                  Enter a yotpo product ID to be able to automatically send your
                  content over a specific Folder in your Yotpo account.
                </p>
              </div>
              <div className="flex flex-row-reverse">
                <div className="rounded-full h-24 w-24 flex items-center justify-center bg-blue-700 border-2 border-white">
                  <p>Yot</p>
                  <p>po.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <p>Product Folder (optional)</p>
            <input
              className="my-3 p-3 w-1/4 bg-gray-900 text-yellow-400 border border-yellow-400"
              placeholder="Select a Product"
              type="text"
              value={campaign.productFolder}
            />
          </div>
          <div className="py-4 flex items-center">
            <span className="rounded-md shadow-sm m-auto">
              <button
                type="button"
                onClick={() => onSubmit()}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold leading-6 font-medium rounded-full text-black bg-yellow-400 hover:bg-yellow-200 focus:outline-none focus:px-15 focus:py-5 focus:text-2xl focus:bg-yellow-200 transition ease-in-out duration-150"
              >
                Save Campaign Edits
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editcapaign;
