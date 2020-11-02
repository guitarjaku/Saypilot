import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const Profile = () => {
  return (
    <div className="flex flex-grow flex-col">
      <div className="container mx-auto text-center">
        <div className="mt-10 text-center text-5xl">บัญชีผู้ใช้</div>
        <div className="py-10 px-40">
          <div className="bg-white shadow overflow-hidden border text-left sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                ข้อมูลส่วนตัว
              </h3>
              <div className="grid grid-cols-3">
                <div className="col-span-1 text-gray-500">ชื่อบัญชีผู้ใช้</div>
                <div className="col-span-2">Influencer Name</div>
                <div className="col-span-1 text-gray-500">อีเมล</div>
                <div className="col-span-2">influ@saypilot.com</div>
                <div className="col-span-1 text-gray-500">
                  เบอร์โทรศัพท์มือถือ
                </div>
                <div className="col-span-2">08-xxx-xxxx</div>
                <div className="col-span-1 text-gray-500">เพศ</div>
                <div className="col-span-2">ชาย</div>
                <div className="col-span-1 text-gray-500">สัญชาติ</div>
                <div className="col-span-2">ไทย</div>
                <div className="col-span-1 text-gray-500">วันเกิด</div>
                <div className="col-span-2">xx xx xxxx</div>
              </div>
            </div>
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                ที่อยู่ปัจจุบัน
              </h3>
              <div className="grid grid-cols-3">
                <div className="col-span-1 text-gray-500">ชื่อ - นามสกุล</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">ที่อยู่</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">จังหวัด</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">ประเทศ</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">เบอร์โทรศัพท์</div>
                <div className="col-span-2">-</div>
              </div>
            </div>
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                ที่อยู่การจัดส่งผลิตภัณฑ์
              </h3>
              <div className="grid grid-cols-3">
                <div className="col-span-1 text-gray-500">ชื่อ - นามสกุล</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">ที่อยู่</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">จังหวัด</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">ประเทศ</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">เบอร์โทรศัพท์</div>
                <div className="col-span-2">-</div>
              </div>
            </div>
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                ที่อยู่สำหรับออกใบหักภาษี ณ ที่จ่าย
              </h3>
              <div className="grid grid-cols-3">
                <div className="col-span-1 text-gray-500">ประเภท</div>
                <div className="col-span-2">บุคคล</div>
                <div className="col-span-1 text-gray-500">
                  เลขประจำตัวประชาชน
                </div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">ชื่อ - นามสกุล</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">ที่อยู่</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">จังหวัด</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">ประเทศ</div>
                <div className="col-span-2">-</div>
                <div className="col-span-1 text-gray-500">เบอร์โทรศัพท์</div>
                <div className="col-span-2">-</div>
              </div>
            </div>
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                เอกสารประกอบการออกใบหักภาษี ณ ที่จ่าย
              </h3>
              <div className="grid grid-cols-3">
                <div className="col-span-1 text-gray-500">
                  สำเนาบัตรประจำตัวประชาชน
                </div>
                <div className="col-span-2">-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
