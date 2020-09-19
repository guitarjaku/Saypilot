import { h } from "preact";
import { useState } from "preact/hooks/";

const ModalApprove = (props: any) => {
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
            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <div className="text-left text-black">
                <h3
                  className="text-lg leading-6 font-medium "
                  id="modal-headline"
                >
                  Are you sure you want to
                </h3>
                <div>approve this Influencer?</div>
                <div className="mt-2">
                  <p className="text-sm leading-5 text-gray-500">
                    approving an Influencer will cost you either 1 or 2 campaign
                    credits per influencer. Review the summary below before
                    confirming your approval.
                  </p>
                </div>
                <div className="mt-2 border border-gray-300 text-center p-24">
                  <h1>1</h1>
                  <p>TOTAL CREATOR CREDITS</p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <span className="flex w-full rounded-md shadow-sm sm:col-start-2">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Approve
                </button>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:col-start-1">
                <button
                  type="button"
                  onClick={() => props.onClose()}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Cancel
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalApprove;