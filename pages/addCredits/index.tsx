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
    if (credit > 20) {
      discountSum -= discountSum * 0.05;
    } else if (credit > 40) {
      discountSum -= discountSum * 0.1;
    } else if (credit > 60) {
      discountSum -= discountSum * 0.15;
    } else if (credit > 80) {
      discountSum -= discountSum * 0.2;
    }

    return discountSum;
  };

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
        <div className="grid grid-cols-3 gap-4 px-64 mt-10 mx-40">
          <div className="col-span-2 bg-gray-500 p-5">
            <div>
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
              />
            </div>
          </div>
          <div className="col-span-1 bg-gray-500 p-5">
            <div className="relative flex bottom-24">
              <div className="rounded-full h-48 w-48 flex items-center justify-center  bg-blue-700 border-2 border-white m-auto">
                <div className="flex-col mb-8">
                  <p className="flex items-center justify-center text-6xl">
                    {credit}
                  </p>
                  <span className="flex items-center justify-center text-xs">
                    Creator Credits
                  </span>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-400 -mt-20">
              <div className="grid grid-cols-4 mb-4">
                <div className="col-span-3">
                  <div>Cost per credit</div>
                  <div>Credit discount</div>
                  <div>account manager + strategy session (20+)</div>
                </div>
                <div className="col-span-1 text-right">
                  <div>{"$" + calDiscount()}</div>
                  <div>{discount + "% Off"}</div>
                  <div>NO</div>
                </div>
              </div>
              <div className="grid grid-cols-2 pt-4">
                <div className="col-span-1">
                  <div>Order total</div>
                </div>
                <div className="col-span-1 text-right">
                  <div>$500</div>
                </div>
                <div className="col-span-2">
                  <div className="py-4 flex items-center">
                    <span className="rounded-md shadow-sm m-auto">
                      <button
                        type="button"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold leading-6 font-medium rounded-none italic text-black bg-yellow-400 hover:bg-yellow-200 focus:outline-none focus:px-15 focus:py-5 focus:text-2xl focus:bg-yellow-200 transition ease-in-out duration-150"
                      >
                        Proceed to Checkout
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-span-2 text-center text-xs">
                  <span>
                    Trend is designed to help brands with phy sical products and
                    not brands with digital goods of services.
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
