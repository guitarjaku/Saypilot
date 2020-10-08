import { h } from "preact";
import { useState, useEffect } from "preact/hooks/";
import DataService from "../../../service/service";
import Youtube from "../youtube";
import Instagram from "../instagram";
import Tiktok from "../tiktok";

const ModalSearch = (props: any) => {
  const [sniperMenu, setSniperMenu] = useState(1);

  // init state
  const [youtubeAccount, setYoutubeAccount] = useState(false);
  const [contactDetail, setContactDetail] = useState(false);
  const [byChannel, setByChannel] = useState([]);
  const [byRelevance, setByRelevance] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [influencerInfo, setInfluencerInfo] = useState({
    gender: {},
    country: [],
    language: [],
    engagementRate: {},
    interests: [],
  });
  const [targetAudienceInfo, setTargetAudienceInfo] = useState({
    country: [],
    age: [],
    gender: {},
    language: [],
    interests: [],
  });
  const [followerRange, setFollowerRange] = useState({
    min: {},
    max: {},
  });
  const [AVGViews, setAVGViews] = useState({
    min: {},
    max: {},
  });

  // option state
  const [countryStateOption, setCountryStateOption] = useState([]);
  const [languageStateOption, setLanguageStateOption] = useState([]);

  const genderOption = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const followerMinOption = [
    { value: "1000", label: "1,000" },
    { value: "5000", label: "5,000" },
    { value: "10000", label: "10,000" },
    { value: "15000", label: "15,000" },
    { value: "25000", label: "25,000" },
    { value: "50000", label: "50,000" },
    { value: "100000", label: "100,000" },
    { value: "250000", label: "250,000" },
    { value: "500000", label: "500,000" },
    { value: "1000000", label: "1,000,000" },
  ];
  const followerMaxOption = [
    { value: "5000", label: "5,000" },
    { value: "10000", label: "10,000" },
    { value: "15000", label: "15,000" },
    { value: "25000", label: "25,000" },
    { value: "50000", label: "50,000" },
    { value: "100000", label: "100,000" },
    { value: "250000", label: "250,000" },
    { value: "500000", label: "500,000" },
    { value: "1000000", label: "1,000,000" },
    { value: "1000000+", label: "1,000,000+" },
  ];

  const interestsOption = [
    { value: 1, label: "Televiion & Film" },
    { value: 2, label: "Music" },
    { value: 3, label: "Shoping & Retail" },
    { value: 4, label: "Coffee, Tea & Beverages" },
    { value: 5, label: "Camera & Photography" },
    { value: 6, label: "Clothes, Shoes, Handags & Accessries" },
    { value: 7, label: "Beer, Wine & Spirits" },
    { value: 8, label: "Sports" },
    { value: 9, label: "Electronics & Computers" },
    { value: 10, label: "Gaming" },
    { value: 11, label: "Activewear" },
    { value: 12, label: "Art & Design" },
    { value: 13, label: "Travel, Tourism & Aviation" },
    { value: 14, label: "Business & Careers" },
    { value: 15, label: "Beauty & Cosmetics" },
    { value: 16, label: "Healhcare & Meicine" },
    { value: 17, label: "Jewellery & Watches" },
    { value: 18, label: "Restaurants, Food & Grocery" },
    { value: 19, label: "Toys, Children & Baby" },
    { value: 20, label: "Fitness & Yoga" },
    { value: 21, label: "Wedding" },
    { value: 22, label: "Tobacco & Smoking" },
    { value: 23, label: "Pets" },
    { value: 24, label: "Healthy Liftstyle" },
    { value: 25, label: "Luxury Goods" },
    { value: 26, label: "Home Decor, Furniture & Garden" },
    { value: 27, label: "Friends, Familys & Relationships" },
    { value: 28, label: "Cars & Motorbies" },
  ];

  const engagementRateOption = [
    { value: ">=1%", label: ">=1%" },
    { value: ">=2%", label: ">=2%" },
    { value: ">=3%", label: ">=3%" },
    { value: ">=4%", label: ">=4%" },
    { value: ">=5%", label: ">=5%" },
    { value: ">=6%", label: ">=6%" },
    { value: ">=7%", label: ">=7%" },
    { value: ">=8%", label: ">=8%" },
    { value: ">=9%", label: ">=9%" },
    { value: ">=10%", label: ">=10%" },
    { value: ">=11%", label: ">=11%" },
    { value: ">=12%", label: ">=12%" },
    { value: ">=13%", label: ">=13%" },
    { value: ">=14%", label: ">=14%" },
    { value: ">=15%", label: ">=15%" },
    { value: ">=16%", label: ">=16%" },
    { value: ">=17%", label: ">=17%" },
    { value: ">=18%", label: ">=18%" },
    { value: ">=19%", label: ">=19%" },
    { value: ">=20%", label: ">=20%" },
  ];

  const ageOption = [
    { value: 1, label: "18 - 24" },
    { value: 2, label: "25 - 34" },
    { value: 3, label: "35 - 44" },
    { value: 4, label: "45 +" },
  ];

  const getCountry = () => {
    DataService.getAll("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        // console.log(res.data);
        const dataCountry: any = [];
        let dataLanguage: any = [];
        res.data.forEach((el: any) => {
          dataCountry.push({ value: el.alpha2Code, label: el.name });
          el.languages.forEach((lang: any) => {
            // console.log(lang);
            dataLanguage.push({ value: lang.iso639_1, label: lang.name });
          });
        });
        dataLanguage.sort((a: any, b: any) => {
          if (a.label < b.label) {
            return -1;
          }
          if (a.label > b.label) {
            return 1;
          }
          return 0;
        });

        dataLanguage = dataLanguage.filter(
          (v: any, i: any, a: any) =>
            a.findIndex((t: any) => t.label == v.label) == i
        );
        setCountryStateOption(dataCountry);
        setLanguageStateOption(dataLanguage);
      })
      .catch((err) => console.log(err));
  };

  const onSniperChange = (props: number) => {
    setSniperMenu(props);
  };

  const onSubmit = () => {
    const data = {};
    Object.assign(data, {
      youtubeAccount: youtubeAccount,
      contactDetail: contactDetail,
      byChannel: byChannel,
      byRelevance: byRelevance,
      influencerInfo: influencerInfo,
      targetAudienceInfo: targetAudienceInfo,
      followerRange: followerRange,
      AVGViews: AVGViews,
      keywords: keywords,
    });
    props.searchSubmit(data);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          <div
            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <button
                  type="button"
                  onClick={() => onSniperChange(1)}
                  className={`${
                    sniperMenu === 1 ? "bg-indigo-400" : "bg-white"
                  } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
                >
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      <svg
                        className="w-4 h-4"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
                            C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
                            H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
                            V363.272z"
                        />
                        <path
                          d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
			                      c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"
                        />
                        <circle cx="396" cy="116" r="20" />
                      </svg>
                    </div>
                    <div className="flex">
                      <span>Instagram</span>
                    </div>
                  </div>
                </button>
                {/* <button
              type="button"
              onClick={() => onSniperChange(2)}
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              <div className="flex items-center">
                <div className="flex mr-2">
                  <svg
                    className="w-4 h-4"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48,0L16,96v352h128v64h64l64-64h96l128-136.32V0H48z M464,288l-89.6,96H260.928L192,434.144V384H80V32h384V288z" />
                    <rect x="240" y="128" width="32" height="128" />
                    <rect x="336" y="128" width="32" height="128" />
                  </svg>
                </div>
                <div className="flex">
                  <span>Twitch</span>
                </div>
              </div>
            </button> */}

                <button
                  type="button"
                  onClick={() => onSniperChange(3)}
                  className={`${
                    sniperMenu === 3 ? "bg-indigo-400" : "bg-white"
                  } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
                >
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      <svg
                        className="w-4 h-4"
                        height="682pt"
                        viewBox="-21 -117 682.66672 682"
                        width="682pt"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0" />
                      </svg>
                    </div>
                    <div className="flex">
                      <span>Youtube</span>
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => onSniperChange(4)}
                  className={`${
                    sniperMenu === 4 ? "bg-indigo-400" : "bg-white"
                  } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
                >
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      <svg
                        className="w-4 h-4"
                        id="Capa_1"
                        enable-background="new 0 0 512 512"
                        height="512"
                        viewBox="0 0 512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m480.32 128.39c-29.22 0-56.18-9.68-77.83-26.01-24.83-18.72-42.67-46.18-48.97-77.83-1.56-7.82-2.4-15.89-2.48-24.16h-83.47v228.08l-.1 124.93c0 33.4-21.75 61.72-51.9 71.68-8.75 2.89-18.2 4.26-28.04 3.72-12.56-.69-24.33-4.48-34.56-10.6-21.77-13.02-36.53-36.64-36.93-63.66-.63-42.23 33.51-76.66 75.71-76.66 8.33 0 16.33 1.36 23.82 3.83v-62.34-22.41c-7.9-1.17-15.94-1.78-24.07-1.78-46.19 0-89.39 19.2-120.27 53.79-23.34 26.14-37.34 59.49-39.5 94.46-2.83 45.94 13.98 89.61 46.58 121.83 4.79 4.73 9.82 9.12 15.08 13.17 27.95 21.51 62.12 33.17 98.11 33.17 8.13 0 16.17-.6 24.07-1.77 33.62-4.98 64.64-20.37 89.12-44.57 30.08-29.73 46.7-69.2 46.88-111.21l-.43-186.56c14.35 11.07 30.04 20.23 46.88 27.34 26.19 11.05 53.96 16.65 82.54 16.64v-60.61-22.49c.02.02-.22.02-.24.02z" />
                      </svg>
                    </div>
                    <div className="flex">
                      <span>Tiktok</span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-span-1 text-right">
                <button
                  type="button"
                  className="ml-auto mr-6 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                  onClick={() => props.onClose()}
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full">
              <div className="border border-gray-300 my-4">
                {sniperMenu === 1 ? (
                  <Instagram
                    youtubeAccount={youtubeAccount}
                    contactDetail={contactDetail}
                    byChannel={byChannel}
                    byRelevance={byRelevance}
                    influencerInfo={influencerInfo}
                    targetAudienceInfo={targetAudienceInfo}
                    followerRange={followerRange}
                    AVGViews={AVGViews}
                    keywords={keywords}
                    setYoutubeAccount={setYoutubeAccount}
                    setContactDetail={setContactDetail}
                    setByChannel={setByChannel}
                    setByRelevance={setByRelevance}
                    setInfluencerInfo={setInfluencerInfo}
                    setTargetAudienceInfo={setTargetAudienceInfo}
                    setFollowerRange={setFollowerRange}
                    setAVGViews={setAVGViews}
                    setKeywords={setKeywords}
                    countryStateOption={countryStateOption}
                    languageStateOption={languageStateOption}
                    genderOption={genderOption}
                    followerMinOption={followerMinOption}
                    followerMaxOption={followerMaxOption}
                    interestsOption={interestsOption}
                    engagementRateOption={engagementRateOption}
                    ageOption={ageOption}
                  />
                ) : sniperMenu === 2 ? (
                  ""
                ) : sniperMenu === 3 ? (
                  <Youtube
                    byChannel={byChannel}
                    byRelevance={byRelevance}
                    influencerInfo={influencerInfo}
                    targetAudienceInfo={targetAudienceInfo}
                    followerRange={followerRange}
                    AVGViews={AVGViews}
                    keywords={keywords}
                    setYoutubeAccount={setYoutubeAccount}
                    setContactDetail={setContactDetail}
                    setByChannel={setByChannel}
                    setByRelevance={setByRelevance}
                    setInfluencerInfo={setInfluencerInfo}
                    setTargetAudienceInfo={setTargetAudienceInfo}
                    setFollowerRange={setFollowerRange}
                    setAVGViews={setAVGViews}
                    setKeywords={setKeywords}
                    countryStateOption={countryStateOption}
                    languageStateOption={languageStateOption}
                    genderOption={genderOption}
                    followerMinOption={followerMinOption}
                    followerMaxOption={followerMaxOption}
                    interestsOption={interestsOption}
                    engagementRateOption={engagementRateOption}
                    ageOption={ageOption}
                  />
                ) : (
                  <Tiktok
                    byChannel={byChannel}
                    byRelevance={byRelevance}
                    influencerInfo={influencerInfo}
                    targetAudienceInfo={targetAudienceInfo}
                    followerRange={followerRange}
                    AVGViews={AVGViews}
                    keywords={keywords}
                    setYoutubeAccount={setYoutubeAccount}
                    setContactDetail={setContactDetail}
                    setByChannel={setByChannel}
                    setByRelevance={setByRelevance}
                    setInfluencerInfo={setInfluencerInfo}
                    setTargetAudienceInfo={setTargetAudienceInfo}
                    setFollowerRange={setFollowerRange}
                    setAVGViews={setAVGViews}
                    setKeywords={setKeywords}
                    countryStateOption={countryStateOption}
                    languageStateOption={languageStateOption}
                    genderOption={genderOption}
                    followerMinOption={followerMinOption}
                    followerMaxOption={followerMaxOption}
                    interestsOption={interestsOption}
                    engagementRateOption={engagementRateOption}
                    ageOption={ageOption}
                  />
                )}
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <span className="flex flex-row-reverse w-full rounded-md sm:col-start-2">
                <button
                  type="button"
                  onClick={() => onSubmit()}
                  className="inline-flex justify-center w-1/10 rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSearch;
