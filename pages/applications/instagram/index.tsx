import { h } from "preact";
import { useState, useEffect } from "preact/hooks/";
import DataService from "../../../service/service";
import Select from "react-select";
//@ts-ignore
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

const Instagram = (props: any) => {
  const [seacrhForm, setSearchForm] = useState({
    youtubeAccount: false,
    contactDetail: false,
    influencerInfo: {
      gender: {},
      country: [],
      followerRange: { min: {}, max: {} },
      AVGViews: { min: {}, max: {} },
      language: [],
      engagementRate: {},
      interests: [],
    },
    targetAudienceInfo: {
      country: [],
      age: [],
      gender: {},
      language: [],
      interests: [],
    },
    byChannel: [],
    byRelevance: [],
    keyword: [],
  });

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
    { value: 1, label: "18-24" },
    { value: 2, label: "25-34" },
    { value: 3, label: "35-44" },
    { value: 4, label: "45+" },
  ];

  const getCountry = () => {
    DataService.getAll("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        // console.log(res.data);
        const dataCountry: any = [];
        const dataLanguage: any = [];
        res.data.forEach((el: any) => {
          dataCountry.push({ value: el.alpha2Code, label: el.name });
          el.languages.forEach((lang: any) => {
            dataLanguage.push({ value: lang.iso639_1, label: lang.name });
          });
        });
        // console.log(dataLanguage);
        setCountryStateOption(dataCountry);
        setLanguageStateOption(dataLanguage);
      })
      .catch((err) => console.log(err));
  };

  const onInputValueChange = (props: any) => (e: any) => {
    // console.log(e);
    setSearchForm({ ...seacrhForm, [props]: e?.target.value });
  };

  const onSelectValueChange = (props: any, multi: boolean) => (e: any) => {
    console.log(e);
    if (multi) {
      setSearchForm({ ...seacrhForm, [props]: e });
    } else {
      setSearchForm({ ...seacrhForm, [props]: e });
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      <div className="bg-white overflow-hidden shadow rounded-lg text-black">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
              <div className="flex items-center">
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    INFLUENCER INFO
                  </div>
                </div>
                <div className="flex-shrink-0 h-4 w-4">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                  >
                    <rect x="192" y="192" width="42.667" height="128" />
                    <path
                      d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"
                    />
                    <rect x="192" y="106.667" width="42.667" height="42.667" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <input
                    id="comments"
                    type="checkbox"
                    className="form-checkbox h-6 w-6 text-indigo-600 rounded-none transition duration-150 ease-in-out"
                  />
                </div>
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    has
                  </div>
                </div>
                <div className="flex-shrink-0 h-6 w-6 mr-2">
                  <svg
                    className="w-6 h-6"
                    height="511pt"
                    viewBox="0 -71 511.99912 511"
                    width="511pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m255.980469 370.492188c-.042969 0-.089844 0-.136719 0-15.449219-.105469-152.027344-1.351563-190.722656-11.816407-27.042969-7.269531-48.390625-28.59375-55.679688-55.640625-10.125-38.011718-9.4804685-111.195312-9.410156-117.039062-.0664062-5.816406-.71875-79.605469 9.378906-117.929688.011719-.035156.019532-.074218.03125-.109375 7.207032-26.738281 29.035156-48.722656 55.613282-56.011719.066406-.019531.136718-.035156.203124-.054687 38.257813-10.054687 175.105469-11.285156 190.585938-11.390625h.277344c15.488281.105469 152.429687 1.351562 190.769531 11.832031 26.972656 7.25 48.304687 28.546875 55.613281 55.558594 10.503906 38.351563 9.53125 112.300781 9.425782 118.542969.074218 6.148437.6875 78.675781-9.378907 116.878906-.007812.039062-.019531.074219-.027343.109375-7.292969 27.046875-28.636719 48.371094-55.710938 55.648437-.035156.011719-.074219.019532-.109375.03125-38.253906 10.050782-175.105469 11.28125-190.582031 11.390626-.046875 0-.09375 0-.140625 0zm-207.90625-292.167969c-8.890625 33.828125-8.050781 106.675781-8.042969 107.410156v.527344c-.265625 20.203125.667969 78.710937 8.046875 106.421875 3.578125 13.269531 14.105469 23.78125 27.457031 27.371094 28.550782 7.722656 139.789063 10.152343 180.445313 10.4375 40.761719-.285157 152.164062-2.648438 180.503906-10.0625 13.308594-3.601563 23.800781-14.078126 27.402344-27.363282 7.386719-28.117187 8.3125-86.339844 8.042969-106.414062 0-.210938 0-.421875.003906-.632813.367187-20.445312-.355469-79.636719-8.011719-107.570312-.007813-.027344-.015625-.054688-.019531-.082031-3.59375-13.328126-14.125-23.839844-27.476563-27.429688-28.273437-7.730469-139.691406-10.152344-180.445312-10.4375-40.734375.285156-152.027344 2.644531-180.453125 10.050781-13.097656 3.632813-23.863282 14.519531-27.453125 27.773438zm435.136719 219.894531h.011718zm-278.210938-31.726562v-161.996094l140 81zm0 0" />
                  </svg>
                </div>
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    YouTube account
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  <input
                    id="comments"
                    type="checkbox"
                    className="form-checkbox h-6 w-6 text-indigo-600 rounded-none transition duration-150 ease-in-out"
                  />
                </div>
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    has
                  </div>
                </div>
                <div className="flex-shrink-0 h-6 w-6 mr-2">
                  <svg
                    className="w-6 h-6"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="988px"
                    height="988px"
                    viewBox="0 0 988 988"
                  >
                    <path
                      d="M928,109.5H60c-33.1,0-60,26.9-60,60v649c0,33.1,26.9,60,60,60h868c33.1,0,60-26.9,60-60v-649
                        C988,136.4,961.1,109.5,928,109.5z M470.5,671.7c0,24.399-85.8,44.2-192.5,44.7C171.3,715.9,85.5,696.1,85.5,671.7v-93.2
                        c0-32.5,26.3-58.8,58.8-58.8h62.3c14,0,18.9-11.9,16.2-24.101c-3.2-14.399-16.3-23.199-25.6-33.6c-22.5-25.3-39.7-55.3-39.7-90
                        c0-66.5,53.9-120.4,120.4-120.4c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.2,0c66.5,0,120.4,53.9,120.4,120.4c0,34.7-17.2,64.7-39.7,90
                        c-9.3,10.4-22.5,19.3-25.6,33.6C330.7,507.9,335.5,519.7,349.6,519.7H411.9c32.5,0,58.8,26.3,58.8,58.8v93.2H470.5z M859.4,642.5
                        h-264c-22.101,0-40-17.9-40-40s17.899-40,40-40h264c22.1,0,40,17.9,40,40S881.5,642.5,859.4,642.5z M859.4,405.5h-264
                        c-22.101,0-40-17.9-40-40s17.899-40,40-40h264c22.1,0,40,17.9,40,40S881.5,405.5,859.4,405.5z"
                    />
                  </svg>
                </div>
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    Contact details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-11 gap-4 mt-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Location
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="countryState1"
                  name="countryState1"
                  className="my-3"
                  isMulti
                  value={seacrhForm.influencerInfo.country}
                  onChange={onSelectValueChange("country", true)}
                  options={countryStateOption}
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Followers
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="fmin"
                  name="fmin"
                  className="my-3"
                  value={seacrhForm.influencerInfo.followerRange.min}
                  onChange={onSelectValueChange("min", false)}
                  options={followerMinOption}
                  // styles=
                />
              </div>
            </div>
            <div className="col-span-1 mt-auto">
              <label className="block text-sm font-medium leading-5 text-gray-700"></label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="fmax"
                  name="fmax"
                  className="my-3"
                  value={seacrhForm.influencerInfo.followerRange.max}
                  onChange={onSelectValueChange("max", false)}
                  options={followerMaxOption}
                  // styles=
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Gender
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="gender1"
                  name="gender1"
                  className="my-3"
                  value={seacrhForm.influencerInfo.gender}
                  onChange={onSelectValueChange("gender", false)}
                  options={genderOption}
                  // styles=
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Language
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="languageState1"
                  name="languageState1"
                  className="my-3"
                  isMulti
                  value={seacrhForm.influencerInfo.language}
                  onChange={onSelectValueChange("language", false)}
                  options={languageStateOption}
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Interrests
              </label>
              <div className="relative rounded-none shadow-sm my-3">
                <ReactMultiSelectCheckboxes
                  id="interrests1"
                  name="interrests1"
                  value={seacrhForm.influencerInfo.interests}
                  nChange={onSelectValueChange("interests", false)}
                  width="100%"
                  options={interestsOption}
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                <div className="flex items-center">
                  <div className="mr-2">
                    <div className="text-sm leading-5 font-medium text-gray-900">
                      Engagement rate
                    </div>
                  </div>
                  <div className="flex-shrink-0 h-4 w-4">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 426.667 426.667"
                    >
                      <rect x="192" y="192" width="42.667" height="128" />
                      <path
                        d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"
                      />
                      <rect
                        x="192"
                        y="106.667"
                        width="42.667"
                        height="42.667"
                      />
                    </svg>
                  </div>
                </div>
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="enengagementRate1"
                  name="enengagementRate1"
                  className="my-3"
                  value={seacrhForm.influencerInfo.engagementRate}
                  onChange={onSelectValueChange("engagementRate", false)}
                  options={engagementRateOption}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-2">
              <div className="flex items-center">
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    TARGET AUDIENCE INFO
                  </div>
                </div>
                <div className="flex-shrink-0 h-4 w-4">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                  >
                    <rect x="192" y="192" width="42.667" height="128" />
                    <path
                      d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"
                    />
                    <rect x="192" y="106.667" width="42.667" height="42.667" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-4 mt-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Location
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="countryState2"
                  name="countryState2"
                  className="my-3"
                  isMulti
                  value={seacrhForm.targetAudienceInfo.country}
                  onChange={onSelectValueChange("country", true)}
                  options={countryStateOption}
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Age
              </label>
              <div className="my-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="age"
                  name="age"
                  width="100%"
                  value={seacrhForm.targetAudienceInfo.age}
                  onChange={onSelectValueChange("age", true)}
                  options={ageOption}
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Gender
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="gender2"
                  name="gender2"
                  className="my-3"
                  value={seacrhForm.targetAudienceInfo.gender}
                  onChange={onSelectValueChange("gender", false)}
                  options={genderOption}
                  // styles=
                />
              </div>
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Interrests
              </label>
              <div className="my-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="interrests2"
                  name="interrests2"
                  width="100%"
                  value={seacrhForm.targetAudienceInfo.interests}
                  onChange={onSelectValueChange("interests", true)}
                  options={interestsOption}
                />
              </div>
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Language
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="languageState2"
                  name="languageState2"
                  className="my-3"
                  isMulti
                  value={seacrhForm.targetAudienceInfo.language}
                  onChange={onSelectValueChange("language", true)}
                  options={languageStateOption}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-6">
              <div className="flex items-center">
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    SEARCH BY USERNAME
                  </div>
                </div>
                <div className="flex-shrink-0 h-4 w-4">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                  >
                    <rect x="192" y="192" width="42.667" height="128" />
                    <path
                      d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"
                    />
                    <rect x="192" y="106.667" width="42.667" height="42.667" />
                  </svg>
                </div>
              </div>
              <div className="mt-1 relative rounded-none shadow-sm">
                <input
                  id="username"
                  placeholder="@username"
                  value={seacrhForm.byChannel}
                  onChange={onInputValueChange("byChannel")}
                  className="mt-1 rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex items-center">
                <div className="mr-2">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                    SEARCH BY RELEVANCE
                  </div>
                </div>
                <div className="flex-shrink-0 h-4 w-4">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 426.667 426.667"
                  >
                    <rect x="192" y="192" width="42.667" height="128" />
                    <path
                      d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"
                    />
                    <rect x="192" y="106.667" width="42.667" height="42.667" />
                  </svg>
                </div>
              </div>
              <div className="mt-1 relative rounded-none shadow-sm ">
                <input
                  id="relevance"
                  placeholder="#hashtag"
                  value={seacrhForm.byRelevance}
                  className="mt-1 rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="col-span-3 mt-auto">
              <div>
                <label className="block text-sm font-medium leading-5 text-gray-700"></label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="keyword"
                    value={seacrhForm.keyword}
                    className="form-input rounded-none block w-full sm:text-sm sm:leading-5"
                    placeholder="Keywords"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instagram;
