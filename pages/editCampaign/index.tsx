import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks/";
import DataService from "../../service/service";
import Select from "react-select";
import { useRouter } from "next/router";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface CampaignI {
  id?: string;
  name: string;
  imageMain: string[];
  productWebsite: string;
  productValue: string;
  productCategory: string;
  productCategoryValue: string;
  productSend: string;
  productInfluencerCaption: string;
  productPostStyle: string;
  styleGuides: string[];
  firstPostLooking: string;
  instagramStoryRequire: boolean;
  targetStates: string[];
  gender: string[];
  instagramHandles: string[];
  hashtags: string[];
  vipCreator: boolean;
  productFolder: string;
}

const selectSingleStyles = {
  control: (styles: any) => ({
    ...styles,
    borderRadius: 0,
    border: "1px solid #8da2fb",
    padding: "0.75rem",
    backgroundColor: "white",
  }),
  option: (styles: any) => {
    const color = "white";
    return {
      ...styles,
      color: "black",
      backgroundColor: color,
      ":hover": {
        ...styles[":hover"],
        color: "black",
        cursor: "pointer",
        backgroundColor: "#8da2fb",
      },
      ":active": {
        ...styles[":active"],
        backgroundColor: "white",
      },
    };
  },
  singleValue: (styles: any) => ({ ...styles, color: "black" }),
};

const selectMultiStyles = {
  control: (styles: any) => ({
    ...styles,
    borderRadius: 0,
    border: "1px solid #8da2fb",
    padding: "0.75rem",
    backgroundColor: "white",
  }),
  option: (styles: any) => {
    const color = "#8da2fb";
    return {
      ...styles,
      color: "black",
      backgroundColor: "white",
      ":hover": {
        ...styles[":hover"],
        cursor: "pointer",
        backgroundColor: "#8da2fb",
      },
      ":active": {
        ...styles[":active"],
        backgroundColor: "white",
      },
    };
  },
  multiValue: (styles: any) => {
    const color = "#8da2fb";
    return {
      ...styles,
      padding: "0.3rem",
      backgroundColor: color,
      borderRadius: 2,
    };
  },
  multiValueLabel: (styles: any) => ({
    ...styles,
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: "black",
    ":hover": {
      color: "black",
      cursor: "pointer",
    },
  }),
};

const Editcapaign = () => {
  let queryString;
  if (typeof window !== "undefined") {
    queryString = window.location.search;
  }
  const urlParams = new URLSearchParams(queryString);
  const id: string = urlParams.get("id") || "";

  const router = useRouter();
  const [files, setFiles] = useState([]);
  // const fileRef = useRef(null);

  const targetStateOption = [
    { value: "all", label: "All" },
    { value: "food", label: "Food" },
  ];

  const genderOption = [
    { value: "any", label: "Any" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const [campaign, setCampaign] = useState<CampaignI>({
    name: "",
    imageMain: [],
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

  const getCampiagn = () => {
    if (id) {
      DataService.get("/campaigns", id).then((res) => {
        setCampaign(res.data);
        // console.log(campaign);
      });
    }
  };

  const onInputValueChange = (props: any) => (e: any) => {
    // console.log(e);
    setCampaign({ ...campaign, [props]: e?.target.value });
  };

  const onSelectValueChange = (props: any, multi: boolean) => (e: any) => {
    console.log(e);
    if (multi) {
      setCampaign({ ...campaign, [props]: e });
    } else {
      setCampaign({ ...campaign, [props]: e });
    }
  };

  const onSubmit = () => {
    // console.log(campaign);
    if (campaign.id) {
      DataService.update(`campaigns`, campaign.id, JSON.stringify(campaign))
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      // console.log("create");
      campaign.id = (Math.random() * 10000000).toFixed(0);
      DataService.create("campaigns", JSON.stringify(campaign))
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    router.push("/");
  };

  useEffect(() => {
    getCampiagn();
  }, []);

  return (
    <>
      <div className="py-8 overflow-hidden md:py-20 lg:py-24">
        <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 ">
          <a
            href="/"
            className="absolute font-semibold rounded-none text-left leading-5 left-20"
          >
            <div className="flex items-center">
              <div className="fill-current w-8 h-8 mr-2">
                <img src={"/icons/return-black.svg"} alt="" />
                <span>Back</span>
              </div>
            </div>
          </a>
          <img
            className="w-auto m-auto h-10"
            src={"https://tailwindui.com/img/logos/workflow-logo-on-white.svg"}
            alt="Workflow"
          />
          <div className="mt-10 text-center text-3xl">
            <span>Edit Campaign</span>
          </div>
          <div className="mt-10">
            <p className="font-semibold">Name your campaign</p>
            <input
              className="mt-3 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
              type="text"
              value={campaign.name}
              onChange={onInputValueChange("name")}
            />
          </div>
          <div className="p-4">
            <FilePond
              // ref={fileRef}
              files={campaign.imageMain}
              allowReorder={true}
              allowMultiple={false}
              onupdatefiles={(fileItems) => {
                const data: any = [];
                fileItems.map((fileItem) => {
                  data.push(fileItem.file);
                });
                // console.log(data);
                setCampaign({ ...campaign, imageMain: data });
              }}
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
            {/* <span
              className="bg-indigo-400 rounded-none m-auto"
              style={{ height: "300px", width: "80%" }}
            ></span> */}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold">Product Website</p>
              <input
                className="my-3 p-3 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
                type="text"
                value={campaign.productWebsite}
                onChange={onInputValueChange("productWebsite")}
              />
            </div>
            <div className="font-semibold">
              <p className="font-semibold">Product value in dollars</p>
              <input
                className="my-3 p-3 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
                type="text"
                value={campaign.productValue}
                onChange={onInputValueChange("productValue")}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="py-4">
              <p className="font-semibold">Product Category</p>
              <p>Select One</p>
              <input
                className="my-3 p-3 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
                type="text"
                value={campaign.productCategory}
                onChange={onInputValueChange("productCategory")}
              />
            </div>
            <div className="py-4">
              <p className="font-semibold">Product Category</p>
              <p>Brand must provide over $175 to warrant 2 posts</p>
              <input
                className="my-3 p-3 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
                type="text"
                value={campaign.productCategoryValue}
                onChange={onInputValueChange("productCategoryValue")}
              />
            </div>
          </div>
          <div className="py-4">
            <p className="font-semibold">General Post Guidelines</p>
            <p className="my-3">
              Give them a general undetstanding of what you're looking for and
              have faith in their creative minds to come up with content that
              connects with their audience. After all, there followers follow
              them for a reason!
            </p>
          </div>
          <div className="py-4">
            <p className="font-semibold">
              Which product will you send the influencers?
            </p>
            <input
              className="my-3 p-3 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
              type="text"
              value={campaign.productSend}
              onChange={onInputValueChange("productSend")}
            />
          </div>
          <div className="py-4">
            <p className="font-semibold">
              What would you like the influencers to mention in thier caption
            </p>
            <textarea
              className="my-3 p-3 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
              rows={6}
              value={campaign.productInfluencerCaption}
              onChange={onInputValueChange("productInfluencerCaption")}
            />
          </div>
          <div className="py-4">
            <p className="font-semibold">
              What photo/video style are you looking for?
            </p>
            <textarea
              className="my-3 p-3 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
              rows={6}
              value={campaign.productPostStyle}
              onChange={onInputValueChange("productPostStyle")}
            />
          </div>
          <div className="py-4">
            <p className="font-semibold">Style Guide</p>
            <p>
              add images so the creators know what kind of content to create.
            </p>
            {/* <div className="App"> */}
            <FilePond
              // ref={fileRef}
              files={files}
              allowReorder={true}
              allowMultiple={true}
              onupdatefiles={(fileItems) => {
                const data: any = [];
                fileItems.map((fileItem) => {
                  data.push(fileItem.file);
                });
                // console.log(data);
                setFiles(data);
              }}
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
            {/* </div> */}
            {/* <div className="grid grid-cols-12 gap-32 py-4">
              {campaign.styleGuides.map((sg, key) => (
                <span
                  key={key}
                  className="bg-yellow-400 rounded-none"
                  style={{ height: "100px", width: "100px" }}
                ></span>
              ))}
            </div> */}
          </div>
          <div className="py-4">
            <p className="font-semibold">
              What are you looking for in your first post?
            </p>
            <span className="relative z-0 inline-flex shadow-sm rounded-md py-4 w-full">
              <button
                id="image-post"
                type="button"
                onClick={(e) => {
                  setCampaign({ ...campaign, firstPostLooking: "image" });
                }}
                className="w-2/4 active:bg-black text-center relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 transition ease-in-out duration-150"
              >
                Image Post
              </button>
              <button
                id="video-post"
                type="button"
                onClick={(e) => {
                  setCampaign({ ...campaign, firstPostLooking: "video" });
                }}
                className="w-2/4 text-center relative items-center px-4 py-2  border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Video Post
              </button>
            </span>
          </div>
          <div className="py-4">
            <p className="font-semibold">Instagram Story Required?</p>
            <span className="relative z-0 inline-flex shadow-sm rounded-md py-4 w-full">
              <button
                id="insta-no"
                type="button"
                onClick={(e) => {
                  setCampaign({ ...campaign, instagramStoryRequire: false });
                }}
                className="w-2/4 text-center relative  items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                No
              </button>
              <button
                id="insta-yes"
                type="button"
                onClick={(e) => {
                  setCampaign({ ...campaign, instagramStoryRequire: true });
                }}
                className="w-2/4 text-center relative items-center px-4 py-2  border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Yes
              </button>
            </span>
          </div>
          <div className="py-4">
            <p className="font-semibold">Enter Target States</p>
            <Select
              id="targetState"
              name="targetState"
              className="my-3"
              isMulti
              value={campaign.targetStates}
              onChange={onSelectValueChange("targetStates", true)}
              options={targetStateOption}
              styles={selectMultiStyles}
            />
          </div>
          <div className="py-4">
            <p className="font-semibold">Gender</p>
            <Select
              id="gender"
              name="gender"
              className="my-3"
              value={campaign.gender}
              onChange={onSelectValueChange("gender", false)}
              options={genderOption}
              styles={selectSingleStyles}
            />
          </div>
          <div className="py-4">
            <p className="font-semibold">Brand Tags and Hash Tags</p>
            <p className="my-3">
              Make influencers inclue youe brands Instagram handle with their
              posts. This way audience members will have a clear path to visit
              your page. add required hashtags to drive prople help your posts
              be discovered by people searching for specific themts (ex.
              #feelinggood, #newyearnewyou)
            </p>
          </div>
          <div className="py-4">
            <p className="font-semibold">Required Instagram Handles</p>
            <p>Press "Enter" after each handle</p>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                @
              </div>
              <input
                className="my-3 p-3 pl-7 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
                placeholder="YourHandle"
                type="text"
                onKeyDown={(e: any) => {
                  const copyHandle = [...campaign.instagramHandles];
                  if (e.key === "Enter") {
                    if (e.target.value !== "") {
                      copyHandle.push(`@${e.target.value}`);
                      e.target.value = "";
                    }
                  }
                  setCampaign({
                    ...campaign,
                    instagramHandles: copyHandle,
                  });
                }}
              />
            </div>
            <div className="flex flex-wrap my-4">
              {campaign.instagramHandles.map((handle, i) => (
                <div
                  key={i}
                  className="text-black text-center rounded-sm bg-indigo-400 px-4 py-2 m-2"
                >
                  <div className="flex items-center">
                    <div className="mr-2">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {handle}
                      </div>
                    </div>
                    <div
                      className="flex cursor-pointer"
                      onClick={() => {
                        const copyHandle = [...campaign.instagramHandles];
                        copyHandle.splice(i, 1);
                        setCampaign({
                          ...campaign,
                          instagramHandles: copyHandle,
                        });
                      }}
                    >
                      <span className="font-bold">x</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-4">
            <p className="font-semibold">Required Hashtags (Max 5)</p>
            <p>Press "Enter" after each tag</p>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                #
              </div>
              <input
                className="my-3 p-3 pl-7 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
                placeholder="YourHashtag"
                type="text"
                onKeyDown={(e: any) => {
                  const copyHashtag = [...campaign.hashtags];
                  if (e.key === "Enter") {
                    if (e.target.value !== "") {
                      if (copyHashtag.length < 5) {
                        copyHashtag.push(`@${e.target.value}`);
                        e.target.value = "";
                      }
                    }
                  }
                  setCampaign({
                    ...campaign,
                    hashtags: copyHashtag,
                  });
                }}
              />
            </div>
            <div className="flex flex-wrap my-4">
              {campaign.hashtags.map((hashtag, i) => (
                <div
                  key={i}
                  className="flex text-black text-center rounded-sm bg-indigo-400 px-4 py-2 m-2"
                >
                  <div className="flex items-center">
                    <div className="mr-2">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {hashtag}
                      </div>
                    </div>
                    <div
                      className="flex cursor-pointer"
                      onClick={() => {
                        const copyHashtag = [...campaign.hashtags];
                        copyHashtag.splice(i, 1);

                        setCampaign({
                          ...campaign,
                          hashtags: copyHashtag,
                        });
                      }}
                    >
                      <span className="font-bold">x</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-4">
            <div className="grid grid-cols-2 gap-32 py-4">
              <div>
                <p className="font-semibold">
                  Show this listing to VIP influencers?
                </p>
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
                    id="vip-no"
                    type="button"
                    onClick={(e) => {
                      const vip_no = document.getElementById("vip-no");
                      const vip_yes = document.getElementById("vip-yes");

                      vip_no?.classList.remove("bg-white", "text-gray-700");
                      vip_no?.classList.add("text-white");

                      vip_yes?.classList.add("bg-white", "text-gray-700");
                      vip_yes?.classList.remove("text-white");
                      setCampaign({ ...campaign, vipCreator: false });
                    }}
                    className="w-2/4 text-center relative  items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    No
                  </button>
                  <button
                    id="vip-yes"
                    type="button"
                    onClick={(e) => {
                      const vip_no = document.getElementById("vip-no");
                      const vip_yes = document.getElementById("vip-yes");

                      vip_yes?.classList.remove("bg-white", "text-gray-700");
                      vip_yes?.classList.add("text-white");

                      vip_no?.classList.add("bg-white", "text-gray-700");
                      vip_no?.classList.remove("text-white");
                      setCampaign({ ...campaign, vipCreator: true });
                    }}
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
                <p className="font-semibold">Connect to a Yotpo Product ID</p>
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
            <p className="font-semibold">Product Folder (optional)</p>
            <input
              className="my-3 p-3 w-1/4 form-input block transition duration-150 ease-in-out sm:text-sm sm:leading-5k"
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold leading-6 font-medium rounded-md text-black bg-indigo-400 hover:bg-indigo-200 focus:outline-none focus:px-15 focus:py-5 focus:text-2xl focus:bg-indigo-200 transition ease-in-out duration-150"
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
