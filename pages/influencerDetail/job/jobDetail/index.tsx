import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";

const JobDetail = (props: any) => {
  const router = useRouter();

  return (
    <div className="w-full text-center">
      <div className="md:px-20 xl:px-72">
        <div
          onClick={() => props.onChangeMenu(4)}
          className="hidden md:flex absolute top-10 left-0"
        >
          <svg
            className="h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="self-center">กลับ</span>
        </div>
        <div className="flex bg-white px-4 py-5 sm:px-6">
          <div className="flex-1 md:flex-shrink-0 text-left">
            <h3 className="text-lg font-medium text-gray-900">
              Saypilot - Welcome Job (10'Nov)
            </h3>
            <p>Saypilot</p>
            <p>จาก Saypilot</p>
          </div>
          <div className="flex-1 text-right">
            <p>ส่งงานภายในวันที่</p>
            <p>12 พ.ย. 2563</p>
          </div>
        </div>
      </div>

      <div className="py-10 px-5 md:px-20 xl:px-72 bg-indigo-300">
        <div className="flex mb-4">
          <div className="flex-1 md:flex-shrink-0 text-left">
            <h3 className="text-xl font-medium text-gray-900">1. งานใหม่</h3>
          </div>
          <div className="flex-1 text-right">
            <p>รับงานแล้ว</p>
          </div>
        </div>
        <div className="bg-white overflow-hidden sm:rounded-lg sm:shadow mb-5">
          <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-left text-lg leading-6 font-medium text-gray-900">
              Saypilot
            </h3>
          </div>
          <ul className="text-left" aria-disabled="true">
            <li>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  รูปแบบการรีวิว
                </h3>
                <div className="flex">
                  <div className="flex self-center text-gray-500">
                    <svg
                      className="h-10 w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex self-center">รีวิวจากคำสั่งงาน</div>
                </div>
              </div>
            </li>
            <li className="border-t border-gray-200">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  เป้าหมายของการรีวิวนี้
                </h3>
                <div className="grid grid-cols-3">
                  <div className="col-span-3 text-gray-500">สร้างการรับรู้</div>
                </div>
              </div>
            </li>
            <li className="border-t border-gray-200">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  คำสั่งงาน
                </h3>
                <div className="grid grid-cols-3">
                  <div className="col-span-3 text-gray-500">คำสั่งงาน:</div>
                  <div className="col-span-3 text-gray-500">-</div>
                  <div className="col-span-3 text-gray-500">
                    กลุ่มเป้าหมายของสินค้าหรือบริการ:
                  </div>
                  <div className="col-span-3">-</div>
                  <div className="col-span-3 text-gray-500">
                    ชื่อสินค้าหรือบริการที่ต้องการให้รีวิว:
                  </div>
                  <div className="col-span-3">-</div>
                  <div className="col-span-3 text-gray-500">
                    ความท้าทายของตลาดที่มีต่อสินค้าบริการ:
                  </div>
                  <div className="col-span-3">-</div>
                  <div className="col-span-3 text-gray-500">
                    จุดเด่นของสินค้าหรือบริการ ที่ต้องการให้ Influencer พูด:
                  </div>
                  <div className="col-span-3">-</div>
                  <div className="col-span-3 text-gray-500">
                    คำ ประโยคที่ห้ามพูด หรือข้อพึงระวัง:
                  </div>
                  <div className="col-span-3">-</div>
                  <div className="col-span-3 text-gray-500">
                    #Hashtag(s) ที่ต้องการให้ Influencer ใส่:
                  </div>
                  <div className="col-span-3">-</div>
                  <div className="col-span-3 text-gray-500">
                    ลิงก์ดาวน์โหลดไฟล์ประกอบคำสั่งงาน:
                  </div>
                  <div className="col-span-3">-</div>
                </div>
              </div>
            </li>
            <li className="border-t border-gray-200">
              <div className="px-4 py-5 sm:px-6">
                <span className="break-all text-lg font-medium text-gray-900 mb-4">
                  ชื่อแบรนด์สินค้าที่ขอห้ามไม่ให้ Influencer รับงานระหว่าง
                  <br /> 15 วันก่อนและหลังการรับงานนี้
                </span>
                <div className="grid grid-cols-3">
                  <div className="col-span-3 text-gray-500">-</div>
                </div>
              </div>
            </li>
            <li className="border-t border-gray-200">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  ตรวจสอบให้แน่ใจก่อนกด 'รับงาน'
                </h3>
                <div className="grid grid-cols-3">
                  <div className="col-span-3 text-gray-500">
                    เขียนข้อความรีวิวต้องไม่น้อยกว่า 100 ตัวอักษร ไม่รวม
                    #Hashtag(s)
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-yellow-50 shadow border text-left rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="flex flex-col text-lg font-medium text-gray-900">
              <svg
                className="h-14 w-14 text-yellow-400 mx-auto mb-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="w-full text-center mb-4">
                ระเบียบที่ต้องทราบ
              </span>
              <span className="mb-4">
                <span className="font-bold">1. กดรับงานแล้วควรส่งงาน: </span>
                กรุณาอ่านรายละเอียดงาน <br />
                ให้ครบถ้วนก่อนกด ‘รับงาน’ ทุกครั้ง กรณีกด ‘รับงาน’ <br /> แล้ว
                ไม่สามารถ ‘ส่งงาน’ ได้ภายในวันหมดเขตส่งงาน
                <br /> ระบบจำเป็นต้องพิจารณาหักคะแนน ลดราคาค่าตัว
                <br /> หรือระงับบัญชีผู้ใช้แล้ว แต่กรณี
                ทั้งนี้เพื่อรักษาสิทธิ์ของผู้จ้างงาน
              </span>
              <span className="mb-4">
                <span className="font-bold">2. การห้ามรับงานตรง: </span>
                เนื่องจาก Saypilot เป็นแพลตฟอร์มที่ช่วยให้
                <br />
                Influencer และ Brand ได้ทำงานร่วมกัน ดังนั้น <br />
                จึงจำเป็นต้องห้ามมิให้ Influencer <br />
                ติดต่อรับงาน จาก Brand ผู้จ้างงานโดยตรง <br /> หากพบ Saypilot
                ขอสงวนสิทธิ์พิจารณาระงับบัญชีผู้ใช้ <br /> Influencer ในทุกกรณี
              </span>
              <span className="mb-4">
                <span className="font-bold">3. การปกปิดความลับของ Brand: </span>
                Influencer ที่รับงาน <br /> หรือได้รับคำเชิญให้ทำงาน ถือเป็น
                'ผู้ถูกจ้าง' จึงต้องไม่เปิดเผย <br />
                ข้อมูลคำสั่ง งานของ 'ผู้จ้าง' หรือข้อมูลเกี่ยวกับผลิตภัณฑ์
                บริการ <br />
                หรือรูปแบบการทำงานต่างๆ (Client Confidentiality) <br />
                หากละเมิด Brand ผู้จ้างงานมีสิทธิ์เรียกร้องค่าเสียหายต่อ <br />
                Influencer อันเกิดจากความลับรั่วไหล
              </span>
            </div>
          </div>
        </div>
        <span className="relative z-0 inline-flex shadow-sm my-5">
          <button
            type="button"
            className="relative inline-flex items-center p-5 rounded-l-md border border-gray-300 bg-white text-xl leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Previous"
          >
            ปฏิเสธ
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center p-5 rounded-r-md border border-gray-300 bg-white text-xl leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Next"
          >
            รับงาน
          </button>
        </span>
        <div className="flex-col mb-4">
          <div className="flex">
            <div className="flex-1 md:flex-shrink-0 text-left">
              <h3 className="text-xl font-medium text-gray-900">2. ส่งงาน</h3>
            </div>
            <div className="flex-1 text-right">
              <p>ส่งงานภายในวันที่</p>
              <p>12 พ.ย. 2563</p>
            </div>
          </div>
          <div className="text-left px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              1. คัดลอกและใส่ Hashtag(s) นี้ลงบนโพสต์ของคุณ
            </h3>
            <div className="grid grid-cols-3 p-10 bg-white rounded-md">
              <div className="col-span-3 text-gray-900">
                #Saypilot #Influencers #Microinfluencer
              </div>
              <div className="col-span-3 text-center mt-5">
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    className="inline-flex items-center px-10 py-4 border border-transparent text-xl leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    คักลอก
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="text-left px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              2. หลังจากโพสต์แล้ว ให้นำลิงก์มาส่งงานที่นี่
            </h3>
            <textarea
              rows={3}
              className="p-4 text-gray-500 rounded-md resize-none w-full"
            >
              ใส่ลิ้งค์
            </textarea>
          </div>
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex items-center px-10 py-4 border border-transparent text-xl leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              ส่งงาน
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
