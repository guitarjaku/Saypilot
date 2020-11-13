import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const IncomeDetail = (props: any) => {
  // console.log(props);
  return (
    <div className="p-4">
      <div className="mt-5 grid gap-5 grid-cols-3 text-center">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                รายได้ทั้งหมด
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                {props.user?.income}
              </dd>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                THB
              </dt>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                ถอนแล้ว
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                {props.user?.withdraw}
              </dd>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                THB
              </dt>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-4 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                คงเหลือ
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                {props.user?.balance}
              </dd>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                THB
              </dt>
            </dl>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="flex-1 text-center">
          <p>เพื่อให้คุณสามารถรับเงินได้</p>
          <span>กรุณาผูกบัญชีธนาคารเข้ากับระบบของ Saypilot</span>
        </div>
        <div className="flex-1 mt-2">
          <p className="text-lg leading-2 text-gray-500 mb-2">
            บริการการจ่ายเงิน
          </p>
          <ul>
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>
              Cras cras lobortis vitae vivamus ultricies facilisis tempus.
            </li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IncomeDetail;
