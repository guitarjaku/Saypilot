import { url } from "inspector";
import { h } from "preact";
import { useState } from "preact/hooks/";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";

const { Handle, createSliderWithTooltip } = Slider;
const SliderWithTooltip = createSliderWithTooltip(Slider);

const handle = (props: any) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const Editcapaign = () => {
  const [credit, setCredit] = useState(1);
  const [discount, setDiscount] = useState(0);

  const calDiscount = () => {
    let discountSum = 100;
    if (credit > 20 && credit <= 40) {
      discountSum -= discountSum * 0.05;
      setDiscount(5);
    } else if (credit > 40 && credit <= 60) {
      discountSum -= discountSum * 0.1;
      setDiscount(10);
    } else if (credit > 60 && credit <= 80) {
      discountSum -= discountSum * 0.15;
      setDiscount(15);
    } else if (credit > 80) {
      discountSum -= discountSum * 0.2;
      setDiscount(20);
    } else {
      setDiscount(0);
    }

    return discountSum;
  };

  return (
    <>
      <div className="py-8 overflow-hidden">
        <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 ">
          <a
            href="/"
            className="absolute text-indigo-400 font-semibold rounded-none text-left leading-5 left-20"
          >
            <div className="flex items-center text-black">
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
        </div>
        <div className="mt-10 text-center text-5xl">
          <span>Add Credits to Accept Creators</span>
        </div>
        <div className="mt-2 mb-32 text-center text-xl px-64 mx-40">
          <span>
            No software free or contacts. These credits do not expire. Buy
            credits, get posts and content. We pay the creators ourselves so you
            don't have to worry about that
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10 mx-40">
          <div className="col-span-2 bg-blue-200 p-5">
            <div className="text-3xl font-bold">
              <span>Creator Credits</span>
            </div>
            <div className="mt-3">
              <span>
                1 credit = 1 custom photo of video & 1 post on Instagram
              </span>
            </div>
            <div className="mt-3">
              <span>
                Add 20+ credits and get a dedicated account manager and a free
                one-on-one strategy session with our head of customer success.
              </span>
            </div>
            <div className="my-16">
              <SliderWithTooltip
                min={0}
                max={100}
                value={credit}
                handle={handle}
                tipFormatter={(value) => `$${credit} in saving`}
                onChange={(value) => setCredit(value)}
                trackStyle={{
                  backgroundColor: "white",
                  height: "6px",
                  top: "22px",
                }}
                railStyle={{
                  backgroundColor: "black",
                  height: "6px",
                  top: "22px",
                }}
                handleStyle={{
                  height: "3rem",
                  width: "3rem",
                  border: "none",
                  backgroundColor: "#8da2fb",
                }}
              />
            </div>
            <div className="grid grid-cols-10">
              <div className="flex h-10 w-full">
                <div className="flex-1 text-left">0</div>
                <div className="flex-1 text-right">10</div>
              </div>
              <div className="h-10 w-full">
                <div className="flex-1 text-right">20</div>
              </div>
              <div className="h-10 w-full">
                <div className="flex-1 text-right">30</div>
              </div>
              <div className="h-10 w-full">
                <div className="flex-1 text-right">40</div>
              </div>
              <div className="h-10 w-full">
                <div className="flex-1 text-right">50</div>
              </div>
              <div className="h-10 w-full">
                <div className="flex-1 text-right">60</div>
              </div>
              <div className="h-10 w-full">
                <div className="flex-1 text-right">70</div>
              </div>
              <div className="h-10 w-full">
                <div className="flex-1 text-right">80</div>
              </div>
              <div className="h-10 w-full">
                <div className="flex-1 text-right">90</div>
              </div>
              <div className="h-10 w-full">
                <div className="flex-1 text-right">100</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-blue-200 p-5">
            <div className="relative flex bottom-24">
              <div className="rounded-full h-48 w-48 flex items-center justify-center  bg-blue-700 border-2 border-white m-auto">
                <div className="flex-col mb-8">
                  <p className="flex items-center justify-center text-6xl">
                    {credit}
                  </p>
                  <span className="flex items-center justify-center text-xl font-bold">
                    Creator Credits
                  </span>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-400 -mt-20">
              <div className="grid grid-cols-4 mb-4">
                <div className="col-span-3 font-semibold">
                  <div>Cost per credit</div>
                  <div>Credit discount</div>
                  <div>account manager + strategy session (20+)</div>
                </div>
                <div className="col-span-1 text-right">
                  <div>{"$" + calDiscount()}</div>
                  <div>{discount + "% Off"}</div>
                  <div>{discount > 0 ? "YES!" : "NO"}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 pt-4">
                <div className="col-span-1 font-semibold">
                  <div>Order total</div>
                </div>
                <div className="col-span-1 text-right">
                  <div>${credit * (100 - discount)}</div>
                </div>
                <div className="col-span-2">
                  <div className="py-4 flex items-center">
                    <span className="rounded-md shadow-sm m-auto">
                      <button
                        type="button"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold leading-6 font-medium rounded-md italic text-black bg-indigo-400 hover:bg-indigo-200 focus:outline-none focus:px-15 focus:py-5 focus:text-2xl focus:bg-indigo-200 transition ease-in-out duration-150"
                      >
                        Proceed to Checkout
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-span-2 text-center text-xs">
                  <span>
                    Saypilot is designed to help brands with phy sical products
                    and not brands with digital goods of services.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editcapaign;
