import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";

const Profile = (props: any) => {
  const router = useRouter();

  return (
    <div className="flex flex-grow flex-col">
      <div className="container mx-auto text-center">
        <div className="mt-10 text-center text-5xl">บัญชีผู้ใช้</div>
        <div className="py-10 px-40">
          <div className="bg-white shadow overflow-hidden border text-left sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <div className="flex  text-lg leading-6 font-medium text-gray-900">
                <span className="w-full">ข้อมูลส่วนตัว</span>
                <svg
                  className="h-10 w-10 cursor-pointer"
                  onClick={() => router.push("/influencer")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-1 text-gray-500">ชื่อบัญชีผู้ใช้</div>
                <div className="col-span-2">{props.user.username}</div>
                <div className="col-span-1 text-gray-500">อีเมล</div>
                <div className="col-span-2">{props.user.email}</div>
                <div className="col-span-1 text-gray-500">
                  เบอร์โทรศัพท์มือถือ
                </div>
                <div className="col-span-2">{props.user.phone}</div>
                <div className="col-span-1 text-gray-500">เพศ</div>
                <div className="col-span-2">{props.user.gender}</div>
                <div className="col-span-1 text-gray-500">สัญชาติ</div>
                <div className="col-span-2">{props.user.country}</div>
                <div className="col-span-1 text-gray-500">วันเกิด</div>
                <div className="col-span-2">{props.user.birthday}</div>
              </div>
            </div>
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                ที่อยู่ปัจจุบัน
              </h3>
              <div className="grid grid-cols-3">
                <div className="col-span-1 text-gray-500">ชื่อ - นามสกุล</div>
                <div className="col-span-2">
                  {props.user.firstname + " " + props.user.lastname}
                </div>
                <div className="col-span-1 text-gray-500">ที่อยู่</div>
                <div className="col-span-2">{props.user.address}</div>
                <div className="col-span-1 text-gray-500">จังหวัด</div>
                <div className="col-span-2">{props.user.province}</div>
                <div className="col-span-1 text-gray-500">ประเทศ</div>
                <div className="col-span-2">{props.user.country}</div>
                <div className="col-span-1 text-gray-500">เบอร์โทรศัพท์</div>
                <div className="col-span-2">{props.user.phone}</div>
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
