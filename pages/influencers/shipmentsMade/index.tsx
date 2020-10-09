import { h } from "preact";
import { useState, useEffect } from "preact/hooks/";
import MarkShippedModal from "./markShippedModal";
import ShippingDetailModal from "./shippingDetailModal";
import DataService from "../../../service/service";

const ShipmentsMade = (props: any) => {
  const [openMarkModal, setOpenMarkModal] = useState(false);
  const [openShippingModal, setOpenShippingModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [influencers, setInfluencers] = useState([]);
  const [cntShiped, setCntShipped] = useState(0);

  const getInfluencerList = () => {
    DataService.getAll("/influencers").then((res) => {
      // console.log(res.data);
      let cnt = 0;
      res.data.forEach((influ: any) => {
        if (influ.ship_status) {
          cnt++;
        }
      });
      setCntShipped(cnt);
      setInfluencers(res.data);
      setLoading(false);
    });
  };

  const onOpenMarkModal = (props: any) => {
    if (props === "mark") {
      setOpenMarkModal(true);
    } else {
      setOpenShippingModal(true);
    }
  };

  const onCloseModal = (props: any) => {
    if (props === "mark") {
      setOpenMarkModal(false);
    } else {
      setOpenShippingModal(false);
    }
  };

  useEffect(() => {
    getInfluencerList();
  }, []);

  return (
    <>
      <div className="grid grid-cols-6 gap-2 py-4">
        <div className="col-span-1 text-1xl text-black m-auto">
          Needs to be shipped {influencers.length - cntShiped}
        </div>
        <div className="text-center">
          <button className="py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border  border-gray-400 rounded-md text-left leading-5">
            <div className="flex items-center">
              <div className="flex">
                <span>CSV DOWNLOAD</span>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full ">
            <div className="overflow-hidden rounded-none border border-gray-400">
              <table className="w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      INFLUENCER
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      ADDRESS
                    </th>
                    <th className="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {influencers.map(
                    (influ: any) =>
                      !influ.ship_status && (
                        <tr className="hover:bg-gray-100">
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
                                  @{influ.username}
                                </div>
                                <div className="text-sm leading-5 text-gray-500">
                                  {influ.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="flex items-center">
                              <div className="mr-auto">
                                <div className="text-sm  text-left leading-5 font-medium text-gray-900">
                                  {influ.address}
                                </div>
                                <div className="text-sm  text-left leading-5 text-gray-500">
                                  {influ.country} {influ.zipcode}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium border-l border-gray-300">
                            <span className="rounded-md shadow-sm">
                              <button
                                type="button"
                                onClick={() => onOpenMarkModal("mark")}
                                className="items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                              >
                                MARK AS SHIPPED
                              </button>
                            </span>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 py-4">
        <div className="col-span-1 text-1xl text-black">
          Shipped - {cntShiped}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full ">
            <div className="overflow-hidden rounded-none border border-gray-400">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      INFLUENCER
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      ADDRESS
                    </th>
                    <th className="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {influencers.map(
                    (influ: any) =>
                      influ.ship_status && (
                        <tr className="hover:bg-gray-100">
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
                                  @{influ.username}
                                </div>
                                <div className="text-sm leading-5 text-gray-500">
                                  {influ.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="flex items-center">
                              <div className="mr-auto">
                                <div className="text-sm  text-left leading-5 font-medium text-gray-900">
                                  {influ.address}
                                </div>
                                <div className="text-sm  text-left leading-5 text-gray-500">
                                  {influ.country} {influ.zipcode}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium border-l border-gray-300">
                            <span className="rounded-md shadow-sm">
                              <button
                                type="button"
                                onClick={() => onOpenMarkModal("")}
                                className="items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                              >
                                SHIPPING DETAILS
                              </button>
                            </span>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {openMarkModal && <MarkShippedModal close={onCloseModal} />}
      {openShippingModal && <ShippingDetailModal close={onCloseModal} />}
    </>
  );
};

export default ShipmentsMade;
