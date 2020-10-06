import { h } from "preact";
import { useState } from "preact/hooks/";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
//@ts-ignore
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

const Youtube = (props: any) => {
  return (
    <>
      <div className="bg-white shadow rounded-lg text-black">
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
          </div>
          <div className="grid grid-cols-10 gap-4 mt-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Location by country
              </label>
              <div className="mt-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="countryState1"
                  name="countryState1"
                  width="100%"
                  placeholderButtonLabel="Location"
                  value={props.influencerInfo.country}
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
                Subsribers
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="fmin"
                  name="fmin"
                  className="my-3"
                  placeholder="From"
                  value={props.followerRange.min}
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
                  value={props.followerRange.max}
                  onChange={(e: any) => {
                    props.setFollowerRange({ ...props.followerRange, max: e });
                  }}
                  options={props.followerMaxOption}
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Avg.Views
              </label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="avg-min"
                  name="avg-min"
                  className="my-3"
                  placeholder="To"
                  value={props.AVGViews.min}
                  onChange={(e: any) => {
                    props.setAVGViews({ ...props.AVGViews, min: e });
                  }}
                  options={props.followerMinOption}
                />
              </div>
            </div>
            <div className="col-span-1 mt-auto">
              <label className="block text-sm font-medium leading-5 text-gray-700"></label>
              <div className="mt-1 relative rounded-none shadow-sm">
                <Select
                  id="avg-max"
                  name="avg-max"
                  className="my-3"
                  placeholder="To"
                  value={props.AVGViews.max}
                  onChange={(e: any) => {
                    props.setAVGViews({ ...props.AVGViews, max: e });
                  }}
                  options={props.followerMaxOption}
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Language
              </label>
              <div className="mt-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="languageState1"
                  name="languageState1"
                  width="100%"
                  placeholderButtonLabel="Language"
                  value={props.influencerInfo.language}
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
                  value={props.influencerInfo.engagementRate}
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
          <div className="grid grid-cols-8 gap-4 mt-4">
            <div className="col-span-3">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Location by country
              </label>
              <div className="mt-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="countryState2"
                  name="countryState2"
                  width="100%"
                  placeholderButtonLabel="Location"
                  value={props.targetAudienceInfo.country}
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
              <div className="mt-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="age"
                  name="age"
                  width="100%"
                  placeholderButtonLabel="Age"
                  value={props.targetAudienceInfo.age}
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
                  value={props.targetAudienceInfo.gender}
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
                Language
              </label>
              <div className="mt-3 relative rounded-none shadow-sm">
                <ReactMultiSelectCheckboxes
                  id="languageState2"
                  name="languageState2"
                  width="100%"
                  placeholderButtonLabel="Language"
                  value={props.targetAudienceInfo.language}
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
                    SEARCH BY CHANNEL
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
                  value={props.byChannel}
                  onChange={(e: any) => {
                    props.setByChannel(e);
                  }}
                  options={props.languageStateOption}
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
                <ReactMultiSelectCheckboxes
                  id="hashtag"
                  name="hashtag"
                  width="100%"
                  placeholderButtonLabel="#hashtags"
                  value={props.byRelevance}
                  onChange={(e: any) => {
                    props.setByRelevance(e);
                  }}
                  options={props.languageStateOption}
                />
              </div>
            </div>
            <div className="col-span-3 mt-auto">
              <div>
                <label className="block text-sm font-medium leading-5 text-gray-700"></label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <CreatableSelect
                    id="keywords"
                    value={props.keywords}
                    isMulti
                    placeholder="Keyword"
                    onChange={(e: any) => {
                      props.setKeywords(e);
                    }}
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

export default Youtube;
