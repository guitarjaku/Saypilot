import { h } from "preact";
import { useState, useEffect } from "preact/hooks/";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
//@ts-ignore
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

const Instagram = (props: any) => {
  return (
    <>
      <div className="bg-white shadow rounded-lg text-black">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-12">
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
                    id="youtube-account"
                    type="checkbox"
                    onChange={() => {
                      props.setYoutubeAccount(!props.youtubeAccount);
                    }}
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
                    id="contact-detail"
                    type="checkbox"
                    onChange={() => {
                      props.setContactDetail(!props.contactDetail);
                    }}
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
              <div className="my-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="countryState1"
                  name="countryState1"
                  width="100%"
                  placeholderButtonLabel="Location"
                  onChange={(e: any) => {
                    props.setInfluencerInfo({
                      ...props.influencerInfo,
                      country: e,
                    });
                  }}
                  options={props.countryStateOption}
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
                  placeholder="From"
                  onChange={(e: any) => {
                    props.setFollowerRange({ ...props.followerRange, min: e });
                  }}
                  options={props.followerMinOption}
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
                  placeholder="To"
                  onChange={(e: any) => {
                    props.setFollowerRange({ ...props.followerRange, max: e });
                  }}
                  options={props.followerMaxOption}
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
                  placeholder="Gender"
                  onChange={(e: any) => {
                    props.setInfluencerInfo({
                      ...props.influencerInfo,
                      gender: e,
                    });
                  }}
                  options={props.genderOption}
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Language
              </label>
              <div className="my-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="languageState1"
                  name="languageState1"
                  width="100%"
                  placeholderButtonLabel="Language"
                  onChange={(e: any) => {
                    props.setInfluencerInfo({
                      ...props.influencerInfo,
                      language: e,
                    });
                  }}
                  options={props.languageStateOption}
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
                  placeholderButtonLabel="Interrests"
                  onChange={(e: any) => {
                    props.setInfluencerInfo({
                      ...props.influencerInfo,
                      interests: e,
                    });
                  }}
                  width="100%"
                  options={props.interestsOption}
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
                  placeholder="Engagement Rate"
                  onChange={(e: any) => {
                    props.setInfluencerInfo({
                      ...props.influencerInfo,
                      engagementRate: e,
                    });
                  }}
                  options={props.engagementRateOption}
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
              <div className="my-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="countryState2"
                  name="countryState2"
                  width="100%"
                  placeholderButtonLabel="Location"
                  onChange={(e: any) => {
                    props.setTargetAudienceInfo({
                      ...props.targetAudienceInfo,
                      country: e,
                    });
                  }}
                  options={props.countryStateOption}
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
                  placeholderButtonLabel="Age"
                  onChange={(e: any) => {
                    props.setTargetAudienceInfo({
                      ...props.targetAudienceInfo,
                      age: e,
                    });
                  }}
                  options={props.ageOption}
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
                  placeholder="Gender"
                  onChange={(e: any) => {
                    props.setTargetAudienceInfo({
                      ...props.targetAudienceInfo,
                      gender: e,
                    });
                  }}
                  options={props.genderOption}
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
                  placeholderButtonLabel="Interrests"
                  onChange={(e: any) => {
                    props.setTargetAudienceInfo({
                      ...props.targetAudienceInfo,
                      interests: e,
                    });
                  }}
                  options={props.interestsOption}
                />
              </div>
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Language
              </label>
              <div className="my-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="languageState2"
                  name="languageState2"
                  width="100%"
                  placeholderButtonLabel="Language"
                  onChange={(e: any) => {
                    props.setTargetAudienceInfo({
                      ...props.targetAudienceInfo,
                      language: e,
                    });
                  }}
                  options={props.languageStateOption}
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
                <ReactMultiSelectCheckboxes
                  id="username"
                  name="username"
                  width="100%"
                  placeholderButtonLabel="@username"
                  onChange={(e: any) => {
                    props.setByChannel(e);
                  }}
                  options={props.influencerListOption}
                />
                {/* <input
                  id="username"
                  placeholder="@username"
                  value={seacrhForm.byChannel}
                  onChange={onInputValueChange("byChannel")}
                  className="mt-1 rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                /> */}
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
              <div className="mt-1 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="hashtag"
                  name="hashtag"
                  width="100%"
                  placeholderButtonLabel="#hashtags"
                  onChange={(e: any) => {
                    props.setByRelevance(e);
                  }}
                  options={props.hashtags}
                />
                {/* <input
                  id="relevance"
                  placeholder="#hashtag"
                  value={seacrhForm.byRelevance}
                  className="mt-1 rounded-none block w-full pl-3 pr-10 py-2 text-base leading-6 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                /> */}
              </div>
            </div>
            <div className="col-span-3 mt-auto">
              <div>
                <label className="block text-sm font-medium leading-5 text-gray-700"></label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <CreatableSelect
                    id="keywords"
                    isMulti
                    placeholder="Keyword"
                    onChange={(e: any) => {
                      props.setKeywords(e);
                    }}
                  />
                  {/* <input
                    id="keyword"
                    //value={seacrhForm.keyword}
                    className="form-input rounded-none block w-full sm:text-sm sm:leading-5"
                    placeholder="Keywords"
                  /> */}
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
