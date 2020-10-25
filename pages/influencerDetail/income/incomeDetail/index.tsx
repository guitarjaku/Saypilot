import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const IncomeDetail = (props: any) => {
  return (
    <div className="p-4">
      <div className="mt-5 grid gap-5 grid-cols-3 text-center">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                รายได้ทั้งหมด
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                0
              </dd>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                THB
              </dt>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                ถอนแล้ว
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                0
              </dd>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                THB
              </dt>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                คงเหลือ
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                0
              </dd>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                THB
              </dt>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeDetail;
