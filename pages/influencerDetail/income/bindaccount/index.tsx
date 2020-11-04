import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const BindAccount = () => {
  const bankList = [
    { label: "กสิกรไทย", logo: "" },
    { label: "กรุงเทพ", logo: "" },
    { label: "กรุงไทย", logo: "" },
    { label: "ทหารไทย", logo: "" },
  ];

  return (
    <>
      <div className="mt-5">
        {/* <div className="sm:hidden">
        <select aria-label="Selected tab" className="form-select block w-full">
          <option>My Account</option>
          <option>Company</option>
          <option selected>Team Members</option>
          <option>Billing</option>
        </select>
      </div> */}
        <div className="px-4">
          <nav className="flex">
            {bankList.map((bl, i) => (
              <a
                href="#"
                className={`${i === 0 && "ml-auto"} ${
                  i + 1 === bankList.length && "mr-auto"
                } px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-indigo-600 focus:bg-indigo-50`}
              >
                {bl.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col mx-auto sm:max-w-md">
            <div className="sm:px-10">
              <label
                htmlFor="account-number"
                className="block text-sm mt-4 font-medium leading-5 text-gray-700"
              >
                เลขบัญชี
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="account-number"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <label
                htmlFor="account-name"
                className="block text-sm mt-4 font-medium leading-5 text-gray-700"
              >
                ชื่อบัญชี
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="account-name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <div className="mt-2">
                โปรดระบุอักษรภาษาอังกฤษ (aA-zZ) และตัวเลข (0-9) เท่านั้น
              </div>
            </div>
            <div className="mt-5 sm:px-4">
              <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs overflow-hidden">
                  <div className="relative text-center grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <p>
                      ข้อมูลบัญชีธนาคารี่คุณระบุในแบบฟอร์มนี้
                      จะนำมาใช้เพื่อโอนเงินค่าจ้างที่ได้จากการทำงานบนระบบเซย์ไพลอต
                      เข้าบัญชีธนาคารธนาคารของคุณ
                    </p>
                    <p>อ่านรายละเอียด</p>
                    <p>
                      <a href="">ข้อกำหนดการใช้งาน</a>&nbsp; และ &nbsp;
                      <a href="">นโยบายความเป็นส่วนตัว</a>
                    </p>
                  </div>
                  <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div className="relative flex items-center mx-auto">
                      <div className="flex items-center h-5">
                        <input
                          id="check-cf"
                          type="checkbox"
                          className="form-checkbox h-8 w-8 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-5">
                        <label
                          htmlFor="check-cf"
                          className="font-medium text-gray-700"
                        >
                          ฉันยินยอมให้เซย์ไพลอตเข้าถึงข้อมูลข้องฉัน
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:px-4 ">
              <span className="flex">
                <button
                  type="button"
                  className="px-4 py-2 mx-auto border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  ถัดไป
                </button>
              </span>
            </div>
            <div className="mt-5 sm-px4">
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
        </div>
      </div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* <!--
        Background overlay, show/hide based on modal state.
  
        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          {/* <!--
        Modal panel, show/hide based on modal state.
  
        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
          <div
            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                aria-label="Close"
              >
                {/* <!-- Heroicon name: x --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-2xl leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  ข้อกำหนดการใช้งาน
                </h3>
                <div className="mt-2">
                  <section>
                    <h3 className="title-with-border">
                      1. การยอมรับข้อกำหนดการใช้งาน
                    </h3>{" "}
                    <div className="_f-system">
                      <p>
                        ข้อกำหนดการใช้งานของระบบปฏิบัติการของเทลสกอร์&nbsp;
                        <strong>(“Tellscore Platform”)</strong>&nbsp;รวมถึง
                        เอกสารใดๆ ที่ใช้ประกอบกันโดยการอ้างอิง&nbsp;
                        <strong>(“ข้อกำหนดการใช้งาน”)</strong>
                        &nbsp;ก่อให้เกิดความผูกพันตามกฎหมายระหว่าง บริษัท
                        เทลสกอร์ จำกัด
                        ซึ่งเป็นบริษัทที่จัดตั้งขึ้นภายใต้กฎหมายแห่งประเทศไทย&nbsp;
                        <strong>(“บริษัท”)</strong>&nbsp;กับ ตัวท่าน ในฐานะ
                        Influencer (ตามที่จำกัดความไว้ด้านล่างนี้)
                        ซึ่งประสงค์จะให้บริการแก่ Marketer
                        (ตามที่จำกัดความไว้ด้านล่าง) เพื่อโฆษณา
                        ประชาสัมพันธ์ตราสินค้า และสินค้าของ Marketer
                        ให้เป็นที่รู้จักในวงกว้าง ผ่านทาง Tellscore Platform
                        โดยข้อกำหนดการใช้งานฉบับนี้
                        มีขึ้นเพื่อบังคับใช้กับการที่ Influencer
                        เข้าถึงและการใช้ Tellscore Platform
                      </p>{" "}
                      <p>
                        โปรดอ่านข้อกำหนดการใช้งานนี้อย่างรอบคอบก่อนที่ท่านจะเริ่มใช้
                        Tellscore Platform ในการใช้ Tellscore Platform นั้น
                        Influencer ต้องยอมรับและตกลงที่จะผูกพัน
                        และถูกบังคับตามข้อกำหนดการใช้งานและนโยบายการเก็บรวบรวม
                        ใช้ และเปิดเผยข้อมูลส่วนบุคคล โดย Influencer
                        จะต้องลงทะเบียนและกดยอมรับหรือตกลงให้ใช้บังคับข้อกำหนดการใช้งานนี้
                        ทันทีที่ตัวเลือกนี้ได้แสดงให้ประจักษ์แก่ Influencer
                        ในกรณีที่ Influencer
                        ไม่ประสงค์จะยอมรับข้อกำหนดการใช้งานและนโยบายนี้
                        Influencer จะต้องไม่เข้าระบบหรือใช้ Tellscore Platform
                      </p>{" "}
                      <p>
                        ในการใช้ Tellscore Platform Influencer
                        ให้คำรับรองและรับประกันว่า Influencer มีสิทธิ อำนาจ
                        และความสามารถตามกฎหมายในการเข้าผูกพันตามข้อกำหนดการใช้งานนี้
                        โดยเป็นผู้ที่มีความสามารถทำสัญญาที่ผูกพันกับบริษัทได้
                        หาก Influencer ขาดคุณสมบัติข้อใดข้อหนึ่งข้างต้น
                        Influencer จะต้องไม่เข้าระบบหรือใช้ Tellscore Platform
                      </p>{" "}
                      <p>
                        ในกรณีที่ Tellscore Platform ดำเนินการโดยบริษัทใดๆ
                        ที่มีสถานะเป็นบริษัทในเครือของบริษัท&nbsp;
                        <strong>(“บริษัทในเครือ”)</strong>
                        &nbsp;ให้ข้อกำหนดการใช้งานนี้
                        มีผลผูกพันตามกฎหมายระหว่างบริษัทในเครือนั้น กับ
                        Influencer โดยบริษัทในเครือจะมีสถานะเป็นคู่สัญญา
                        ซึ่งมีหน้าที่ในการดำเนินการและให้บริการ Tellscore
                        Platform ให้เป็นไปตามข้อกำหนดการใช้งาน ทั้งนี้
                        การอ้างอิงถึง “บริษัท” ในข้อกำหนดการใช้งานนั้น
                        จะถือว่าเป็นการอ้างอิงถึงทั้ง บริษัท
                        และ/หรือบริษัทในเครือ แล้วแต่กรณี
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BindAccount;
