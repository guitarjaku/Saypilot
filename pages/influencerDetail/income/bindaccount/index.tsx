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
                <br />
                <div className="mt-2">
                  <section>
                    <h3 className="title-with-border">
                      1. การยอมรับข้อกำหนดการใช้งาน
                    </h3>
                    <br />
                    <div className="text-sm">
                      <p>
                        ข้อกำหนดการใช้งานของระบบปฏิบัติการของเซย์ไพรอท&nbsp;
                        <strong>(“Saypilot Platform”)</strong>&nbsp;รวมถึง
                        เอกสารใดๆ ที่ใช้ประกอบกันโดยการอ้างอิง&nbsp;
                        <strong>(“ข้อกำหนดการใช้งาน”)</strong>
                        &nbsp;ก่อให้เกิดความผูกพันตามกฎหมายระหว่าง บริษัท
                        เซย์ไพรอท จำกัด
                        ซึ่งเป็นบริษัทที่จัดตั้งขึ้นภายใต้กฎหมายแห่งประเทศไทย&nbsp;
                        <strong>(“บริษัท”)</strong>&nbsp;กับ ตัวท่าน ในฐานะ
                        Influencer (ตามที่จำกัดความไว้ด้านล่างนี้)
                        ซึ่งประสงค์จะให้บริการแก่ Marketer
                        (ตามที่จำกัดความไว้ด้านล่าง) เพื่อโฆษณา
                        ประชาสัมพันธ์ตราสินค้า และสินค้าของ Marketer
                        ให้เป็นที่รู้จักในวงกว้าง ผ่านทาง Saypilot Platform
                        โดยข้อกำหนดการใช้งานฉบับนี้
                        มีขึ้นเพื่อบังคับใช้กับการที่ Influencer
                        เข้าถึงและการใช้ Saypilot Platform
                      </p>
                      <br />
                      <p>
                        โปรดอ่านข้อกำหนดการใช้งานนี้อย่างรอบคอบก่อนที่ท่านจะเริ่มใช้
                        Saypilot Platform ในการใช้ Saypilot Platform นั้น
                        Influencer ต้องยอมรับและตกลงที่จะผูกพัน
                        และถูกบังคับตามข้อกำหนดการใช้งานและนโยบายการเก็บรวบรวม
                        ใช้ และเปิดเผยข้อมูลส่วนบุคคล โดย Influencer
                        จะต้องลงทะเบียนและกดยอมรับหรือตกลงให้ใช้บังคับข้อกำหนดการใช้งานนี้
                        ทันทีที่ตัวเลือกนี้ได้แสดงให้ประจักษ์แก่ Influencer
                        ในกรณีที่ Influencer
                        ไม่ประสงค์จะยอมรับข้อกำหนดการใช้งานและนโยบายนี้
                        Influencer จะต้องไม่เข้าระบบหรือใช้ Saypilot Platform
                      </p>
                      <br />
                      <p>
                        ในการใช้ Saypilot Platform Influencer
                        ให้คำรับรองและรับประกันว่า Influencer มีสิทธิ อำนาจ
                        และความสามารถตามกฎหมายในการเข้าผูกพันตามข้อกำหนดการใช้งานนี้
                        โดยเป็นผู้ที่มีความสามารถทำสัญญาที่ผูกพันกับบริษัทได้
                        หาก Influencer ขาดคุณสมบัติข้อใดข้อหนึ่งข้างต้น
                        Influencer จะต้องไม่เข้าระบบหรือใช้ Saypilot Platform
                      </p>
                      <br />
                      <p>
                        ในกรณีที่ Saypilot Platform ดำเนินการโดยบริษัทใดๆ
                        ที่มีสถานะเป็นบริษัทในเครือของบริษัท&nbsp;
                        <strong>(“บริษัทในเครือ”)</strong>
                        &nbsp;ให้ข้อกำหนดการใช้งานนี้
                        มีผลผูกพันตามกฎหมายระหว่างบริษัทในเครือนั้น กับ
                        Influencer โดยบริษัทในเครือจะมีสถานะเป็นคู่สัญญา
                        ซึ่งมีหน้าที่ในการดำเนินการและให้บริการ Saypilot
                        Platform ให้เป็นไปตามข้อกำหนดการใช้งาน ทั้งนี้
                        การอ้างอิงถึง “บริษัท” ในข้อกำหนดการใช้งานนั้น
                        จะถือว่าเป็นการอ้างอิงถึงทั้ง บริษัท
                        และ/หรือบริษัทในเครือ แล้วแต่กรณี
                      </p>
                    </div>
                  </section>
                  <br />
                  <section>
                    <h3 className="title-with-border">2. คำจำกัดความ</h3>
                    <br />
                    <div className="text-sm">
                      <ul className="list-bullet-gray">
                        <li>
                          <strong>“บริษัท”</strong> หมายถึง บริษัท เซย์ไพรอท
                          จำกัด ที่จัดตั้งขึ้นตามกฎหมายแห่งประเทศไทย
                          โดยมีสำนักงานจดทะเบียนตั้งอยู่ห้อง 1701 ชั้น 17
                          อาคารจัตุรัสจามจุรี 319 ถนนพญาไท แขวงปทุมวัน
                          เขตปทุมวัน กรุงเทพมหานคร 10330 ประเทศไทย
                        </li>
                        <br />
                        <li>
                          <strong>“บริษัทในเครือ”</strong> หมายถึง บริษัทจำกัด
                          หรือบริษัทมหาชนจำกัด ที่บริษัทถือหุ้นไม่น้อยกว่าร้อยละ
                          25 ของทุนจดทะเบียน หรืออยู่ภายใต้อำนาจควบคุมของบริษัท
                          ไม่ว่าจะตั้งอยู่ในประเทศหรือต่างประเทศ
                        </li>
                        <br />
                        <li>
                          <strong>“Saypilot Platform”</strong> หมายถึง
                          บริการที่เชื่อมต่อผ่านระบบเครือข่ายทางคอมพิวเตอร์
                          (online) ที่อาจเข้าถึงได้โดยผ่านทาง www.Saypilot.com
                          หรือบริการที่ไม่เชื่อมต่อผ่านระบบเครือข่ายทางคอมพิวเตอร์
                          (offline) หรือช่องทางเนื้อหา ซอฟแวร์ โปรแกรม
                          รหัสคอมพิวเตอร์ โปรแกรมบนโทรศัพท์มือถือ ช่องทางโฆษณา
                          หรือช่องทางบริการอื่นๆ ซึ่งรวมถึง เนื้อหา เครื่องมือ
                          หรือบริการอื่นใดๆ
                          ที่นำเสนอบริการผ่านแพลตฟอร์มของบริษัท ที่ช่วยให้
                          Marketer สามารถสืบค้นหา ติดต่อ มอบหมาย และทำธุรกรรมกับ
                          Influencer ในรูปแบบแพ็คเกจบริการ
                          เพื่อส่งเสริมตราสินค้า สินค้า หรือบริการของ Marketer
                        </li>
                        <br />
                        <li>
                          <strong>“หุ้นส่วนทางธุรกิจ”</strong> หมายถึง บุคคลใดๆ
                          ที่ดำเนินธุรกิจเกี่ยวข้องกับ Saypilot Platform ทั้งนี้
                          รวมถึงผู้รับอนุญาต
                          หรือผู้ให้บริการที่ดำเนินกิจการในนาม
                          หรือภายใต้การอนุญาตของบริษัท
                        </li>
                        <br />
                        <li>
                          <strong>“Influencer”</strong> หมายถึง ท่าน Influencer
                          รายอื่นๆ ผู้ให้บริการ หรือผู้ขายที่เกี่ยวข้อง
                          หรือมีความเหมาะสมกับตราสินค้า และสินค้าของ Marketer
                          และสามารถช่วยเหลือ ให้คำปรึกษา
                          หรือสร้างตราสินค้าหรือสินค้าของ Marketer
                          โดยแบ่งปันเรื่องราวของตราสินค้า ผ่านทางเครือข่ายของ
                          Influencer หรือด้วยวิธีใดๆ
                          โดยต้องเป็นผู้ที่มีบัญชีสมาชิกที่สามารถเข้าระบบของ
                          Saypilot Platform
                        </li>
                        <br />
                        <li>
                          <strong>“เนื้อหาของ Influencer”</strong> หมายถึง
                          ข้อความ รูปภาพ การเชื่อมต่อ (link) วิดีโอ กระทู้
                          หน้าเว็บไซต์หรือบัญชีส่วนตัว กระดานสนทนา กระดานข่าว
                          และลักษณะพิเศษที่ทำงานระหว่างกัน (interactive
                          features) ที่ Influencer สามารถประกาศ ส่ง เผยแพร่ แสดง
                          หรือเผยแพร่ เนื้อหาของแพ็คเกจบริการบน หรือผ่าน
                          Saypilot Platform
                        </li>
                        <br />
                        <li>
                          <strong>“ค่าบริการของ Influencer”</strong> หมายถึง
                          ค่าตอบแทนที่จ่ายให้แก่ Influencer
                          เนื่องจากแพ็คเกจบริการที่ได้รับมอบหมายจาก Marketer
                        </li>
                        <br />
                        <li>
                          <strong>“Marketer”</strong> หมายถึง บุคคลธรรมดา
                          หรือนิติบุคคลที่เป็น Marketer เจ้าของตราสินค้า
                          หรือผู้ซื้อ ที่ต้องการค้นหา ติดต่อ เข้าผูกพัน
                          และทำธุรกรรมอันเกี่ยวกับแพ็คเกจบริการของ Influencer
                          เพื่อส่งเสริม ประชาสัมพันธ์
                          และขยายฐานการตลาดสำหรับตราสินค้าหรือสินค้าของ Marketer
                          โดยต้องเป็นผู้ที่มีบัญชีสมาชิกที่สามารถเข้าระบบของ
                          Saypilot Platform
                        </li>
                        <br />
                        <li>
                          <strong>“เนื้อหาของ Marketer”</strong> หมายถึง ข้อความ
                          รูปภาพ การเชื่อมต่อ (link) วิดีโอ กระทู้ หน้าเว็บไซต์
                          หรือบัญชีส่วนตัว กระดานสนทนา กระดานข่าว
                          และลักษณะพิเศษที่ทำงานระหว่างกัน (interactive
                          features) ที่ทำให้ Marketer สามารถประกาศ ส่ง เผยแพร่
                          แสดง หรือเผยแพร่เนื้อหาใดๆ
                          เพื่อการเข้าทำธุรกรรมผูกพันแพ็คเกจบริการของ Influencer
                          บน หรือ ผ่านทาง Saypilot Platform
                        </li>
                        <br />
                        <li>
                          <strong>“ข้อมูลส่วนบุคคล”</strong> หมายถึง ข้อมูลใดๆ
                          ซึ่งทำให้สามารถระบุตัวตนของบุคคลใดๆ
                          ไม่ว่าทางตรงหรือทางอ้อม รวมถึงชื่อ ที่อยู่อีเมล
                          เบอร์โทรศัพท์ วิธีการชำระเงิน เครือข่ายสังคมออนไลน์
                          (social media account) ซึ่งรวมถึงแต่ไม่จำกัดเพียง
                          เฟสบุ๊ค (Facebook) ทวิตเตอร์ (Twitter) อินสตาแกรม
                          (Instagram)
                          ตามที่กำหนดไว้ในพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
                          พ.ศ. 2562
                        </li>
                        <br />
                        <li>
                          <strong>“คะแนน”</strong> ใช้แทนมูลค่าของอัตราคะแนน
                          ที่ประเมินและคำนวณโดยบริษัท เพื่อสะท้อนถึงผลงาน บริการ
                          และคุณสมบัติของ Influencer
                        </li>
                        <br />
                        <li>
                          <strong>“แพ็คเกจบริการ”</strong> หมายถึง ขอบเขตงาน
                          และบริการของ Influencer
                        </li>
                        <br />
                        <li>
                          <strong>“ข้อกำหนดการใช้งาน”</strong> หมายถึง
                          ข้อกำหนดการใช้งานนี้
                        </li>
                        <br />
                        <li>
                          <strong>
                            “นโยบายการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล”
                          </strong>
                          หมายถึง นโยบายการเก็บรวบรวม ใช้
                          และเปิดเผยข้อมูลส่วนบุคคลของ Saypilot Platform
                          ซึ่งเป็นไปตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
                          พ.ศ.2562
                        </li>
                        <br />
                      </ul>
                    </div>
                  </section>
                  <br />
                  <section>
                    <h3 className="title-with-border"> 3. การลงทะเบียน</h3>
                    <br />
                    <div className="text-sm">
                      <ul className="list-bullet-gray">
                        <li>
                          เพื่อที่จะเริ่มการใช้งาน Saypilot Platform Influencer
                          ต้องลงทะเบียนบัญชีสมาชิกกับ Saypilot Platform ก่อน
                          โดยระหว่างกระบวนการลงทะเบียน Influencer
                          จะถูกร้องขอให้แจ้งข้อมูลส่วนบุคคลให้แก่บริษัทผ่าน
                          Saypilot Platform
                        </li>
                        <br />
                        <li>
                          Influencer ยินยอมให้ข้อมูลส่วนบุคคลของตนต่อบริษัท
                          และรับรองและรับประกันว่า ข้อมูลทั้งหมดที่แจ้งใน
                          Saypilot Platform นั้นถูกต้องเป็นปัจจุบัน
                          และไม่ทำให้เข้าใจผิด โดย Influencer
                          จะแจ้งการเปลี่ยนแปลงในข้อมูลใดๆ ที่ Influencer
                          ได้เคยแจ้งต่อบริษัทผ่าน Saypilot Platform หาก
                          Influencer
                          ไม่แจ้งการเปลี่ยนแปลงของข้อมูลที่ตนได้เคยแจ้งต่อบริษัทผ่านทาง
                          Saypilot Platform ภายในระยะเวลาอันสมควร
                          หรือข้อมูลที่เคยแจ้งไว้ไม่ถูกต้อง หรือไม่เป็นความจริง
                          หรือทำให้เข้าใจผิด บริษัทอาจใช้ดุลยพินิจระงับ และ/หรือ
                          ยกเลิกการให้บริการทั้งหมดหรือบางส่วนตามข้อกำหนดการใช้งานนี้
                          โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                        </li>
                        <br />
                        <li>
                          บริษัทสามารถใช้ดุลยพินิจที่จะอนุมัติ
                          หรือไม่อนุมัติคำขอใช้ Saypilot Platform
                          แต่เพียงผู้เดียว
                          โดยไม่มีหน้าที่ในการเปิดเผยกระบวนการพิจารณาคำขอให้แก่
                          Influencer ทราบ และไม่ต้องรับผิดต่อความสูญเสีย
                          หรือความเสียหายใดๆ
                          ที่เกิดขึ้นต่อข้อมูลส่วนบุคคลก่อนการอนุมัติคำขอ
                          หรือการไม่ผ่านกระบวนการพิจารณาคำขอ
                        </li>
                        <br />
                        <li>
                          เมื่อการลงทะเบียนได้เสร็จสิ้นลง
                          และบริษัทได้อนุมัติให้ใช้ Saypilot Platform
                          เป็นที่เรียบร้อยแล้ว Influencer จะสามารถใช้ Saypilot
                          Platform ได้ทันที
                        </li>
                        <br />
                        <li>
                          เว้นแต่กรณีที่ระบุข้างล่างนี้ หรือเป็นการเปิดเผยต่อ
                          Marketer เพื่อการนำเสนองานแก่ Influencer
                          บริษัทจะไม่แบ่งปันข้อมูลส่วนบุคคลให้แก่บุคคลภายนอก
                          <ul className="list-bullet-text">
                            <br />
                            <li>
                              <span className="bullet-text">(1)</span>
                              ให้แก่หน่วยงานราชการ บริษัทในเครือ
                              หุ้นส่วนทางธุรกิจ พันธมิตรทางธุรกิจ คู่ค้า ลูกค้า
                              บริษัทด้านการจัดการ Influencer ผู้จัดการ
                              Influencer บริษัทด้านเทคโนโลยี,
                              การสื่อสารโทรคมนาคม, พัฒนาซอฟต์แวร์
                              บริษัทด้านความปลอดภัยทางเทคโนโลยีสารสนเทศ
                              บริษัทด้านการสื่อสารหรือโฆษณาประชาสัมพันธ์
                              บริษัทโลจิสติกส์ และ/หรือผู้ให้บริการ Saypilot
                              Platform
                              ที่ได้รับมอบหมายจากบริษัทซึ่งเข้าทำสัญญาการให้และ/หรือรับบริการจากบริษัท
                              ไม่ว่าจะตั้งอยู่ในประเทศหรือต่างประเทศ
                              โดยหน่วยงานดังกล่าวยอมรับที่จะปฏิบัติตามข้อกำหนดการใช้งานนี้
                            </li>
                            <br />
                            <li>
                              <span className="bullet-text">(2)</span>
                              เพื่อประชาสัมพันธ์ Influencer และ/หรือ Saypilot
                              Platform แก่บุคคลภายนอกที่ให้ความสนใจใน Saypilot
                              Platform
                            </li>
                            <br />
                            <li>
                              <span className="bullet-text">(3)</span>
                              ตามที่กำหนดไว้ในบทบัญญัติของกฎหมาย
                            </li>
                            <br />
                            <li>
                              <span className="bullet-text">(4)</span>
                              เมื่อบริษัทพิจารณาว่ามีความจำเป็นที่จะต้องดำเนินการ
                              เพื่อคุ้มครองสิทธิ หรือความปลอดภัยของ Influencer
                              หรือผู้ใด หรือเพื่อสืบสวน และ/หรือป้องกันการฉ้อฉล
                              หรือการฝ่าฝืนการรักษาความปลอดภัย
                            </li>
                            <br />
                            <li>
                              <span className="bullet-text">(5)</span>
                              กรณีอื่นนอกเหนือจาก (1)-(4)
                              ที่บริษัทได้รับความยินยอมจากท่านแล้ว
                            </li>
                            <br />
                          </ul>
                        </li>
                        <li>
                          Influencer รับทราบและตกลงว่า
                          ในกรณีที่บริษัทได้เปิดเผยข้อมูลส่วนบุคคลของ Marketer
                          (Marketer เป็นบุคคลธรรมดา) ต่อ Influencer
                          เพื่อประโยชน์ในการใช้งาน Saypilot Platform Influencer
                          ตกลงจะปฏิบัติตามนโยบายการเก็บรวบรวม ใช้
                          และเปิดเผยข้อมูลส่วนบุคคลโดยเคร่งครัด ทั้งนี้ในกรณีที่
                          Marketer
                          ได้ใช้สิทธิในการร้องขอให้ลบหรือระงับการใช้ข้อมูลส่วนบุคคลของ
                          Marketer ต่อบริษัทนั้น
                          บริษัทจำเป็นต้องดำเนินการตามคำร้องขอดังกล่าวและ
                          Influencer
                          ตกลงที่จะให้ความร่วมมือและปฏิบัติตามคำร้องขอดังกล่าวเช่นกัน
                        </li>
                        <br />
                      </ul>
                    </div>
                  </section>
                  <br />
                  <section>
                    <h3 className="title-with-border">
                      4. การเปลี่ยนแปลงข้อกำหนดการใช้งาน
                    </h3>
                    <br />
                    <div className="text-sm">
                      <p>
                        บริษัทอาจใช้ดุลยพินิจในการแก้ไข
                        หรือปรับปรุงข้อกำหนดการใช้งานนี้เป็นครั้งคราว
                        การเปลี่ยนแปลงจะมีผลบังคับใช้ทันทีเมื่อบริษัทได้ทำการเผยแพร่การเปลี่ยนแปลงบน
                        Saypilot Platform อย่างไรก็ตาม การเปลี่ยนแปลงใดๆ
                        ที่เกี่ยวกับการระงับข้อพิพาทที่ระบุไว้ในหัวข้อกฎหมายที่ใช้บังคับและเขตอำนาจศาล
                        จะไม่มีผลบังคับกับข้อพิพาทที่คู่สัญญาทั้งสองฝ่ายได้ส่งคำบอกกล่าวต่อกันแล้วในวันที่
                        หรือก่อนวันที่จะได้เผยแพร่การเปลี่ยนแปลงบน Saypilot
                        Platform
                      </p>
                      <br />
                      <p>
                        การที่ Influencer ยังคงใช้ Saypilot Platform
                        ภายหลังจากการเผยแพร่ข้อกำหนดการใช้งานที่แก้ไขแล้ว
                        ให้ถือว่า Influencer ยอมรับและตกลงในการเปลี่ยนแปลงนั้น
                        Influencer จะต้องตรวจสอบหน้าเว็บไซต์นี้ทุกครั้งที่
                        Influencer เข้าระบบ Saypilot Platform เพื่อที่
                        Influencer จะได้ทราบถึงการเปลี่ยนแปลงใดๆ ที่มีผลผูกพัน
                        Influencer
                      </p>
                    </div>
                  </section>
                  <br />
                  <section>
                    <h3 className="title-with-border">
                      5. การเข้าถึง Saypilot Platform
                      และการรักษาความปลอดภัยของบัญชี
                    </h3>
                    <br />
                    <div className="text-sm">
                      <p>
                        บริษัทขอสงวนสิทธิในการใช้ดุลยพินิจในการยกเลิกหรือแก้ไข
                        Saypilot Platform รวมถึงบริการ หรือเนื้อหาใดๆ
                        ที่บริษัทได้เผยแพร่บน Saypilot Platform
                        โดยไม่ต้องมีการบอกกล่าว บริษัทจะไม่ต้องรับผิดจากเหตุที่
                        Saypilot Platform
                        ไม่สามารถให้บริการได้ไม่ว่าทั้งหมดหรือบางส่วน
                        และไม่ว่าจะเป็นเวลาใดหรือช่วงเวลาใด ในบางครั้งบางคราว
                        บริษัทอาจระงับมิให้ผู้ใช้งาน
                        รวมถึงผู้ใช้งานที่ได้ลงทะเบียนไว้แล้ว เข้าระบบ Saypilot
                        Platform ทั้งหมดหรือบางส่วนก็ได้
                      </p>
                      <br />
                      <p>Influencer มีหน้าที่ในเรื่องต่างๆ ดังนี้</p>
                      <ul className="list-bullet-gray">
                        <li>
                          ดำเนินการเรื่องต่างๆ ทั้งหมด เพื่อให้ Influencer
                          สามารถเข้าระบบ Saypilot Platform ได้
                        </li>
                        <li>
                          ทำให้มั่นใจได้ว่า ทุกคนที่เข้าระบบ Saypilot Platform
                          โดยผ่านทางระบบอินเทอร์เน็ตของ Influencer
                          หรือการเชื่อมต่อบนเครือข่ายใดๆ
                          ทราบและปฏิบัติตามถึงข้อกำหนดการใช้งานนี้
                        </li>
                      </ul>
                      <br />
                      <p>
                        เพื่อที่จะใช้ลักษณะพิเศษของ Saypilot Platform Influencer
                        ต้องแจ้งรายละเอียดและให้ข้อมูลอื่นๆ
                        ตามที่บริษัทกำหนดในขณะลงทะเบียนให้ครบถ้วน
                        บริษัทถือว่าข้อมูลทั้งหมดที่ Influencer ได้แจ้งผ่าน
                        Saypilot Platform จะต้องถูกต้อง เป็นข้อมูลปัจจุบัน
                        และสมบูรณ์ อันเป็นเงื่อนไขสำคัญในการที่ Influencer
                        จะสามารถใช้ Saypilot Platform ได้ Influencer
                        ตกลงว่าข้อมูลทั้งหมดที่ตนได้แจ้งในการลงทะเบียนผ่าน
                        Saypilot Platform หรือด้วยวิธีการอื่นใด
                        ซึ่งรวมถึงแต่ไม่จำกัดเพียง
                        การให้ข้อมูลผ่านการเชื่อมต่อเพื่อใช้งานลักษณะพิเศษของ
                        Saypilot Platform นั้น เป็นไปตามนโยบายการเก็บรวบรวม ใช้
                        และเปิดเผยข้อมูลส่วนบุคคล และ Influencer
                        ยินยอมให้บริษัทดำเนินการด้วยประการใดๆ
                        อันเกี่ยวกับข้อมูลส่วนตัวของตนได้ตราบเท่าที่เป็นไปตามแนวนโยบายการเก็บรวบรวม
                        ใช้ และเปิดเผยข้อมูลส่วนบุคคล
                      </p>
                      <br />
                      <p>
                        หาก Influencer เลือก หรือได้รับ ชื่อผู้ใช้ (user name)
                        และ/หรือ รหัสผ่าน (password) หรือข้อมูลส่วนใดๆ
                        ซึ่งเป็นส่วนหนึ่งของกระบวนการรักษาความปลอดภัย Influencer
                        ต้องเก็บรักษาข้อมูลนั้นเป็นความลับ และ Influencer
                        ต้องไม่เปิดเผยข้อมูลนั้นแก่บุคคลหรือองค์กรอื่นใด
                        นอกจากนี้ Influencer รับทราบว่า
                        บัญชีสมาชิกเป็นสิทธิเฉพาะตัวของ Influencer
                        และตกลงจะไม่ให้บุคคลอื่นใดเข้าระบบ Saypilot Platform
                        หรือส่วนใดส่วนหนึ่งของระบบ Saypilot Platform
                        โดยการใช้ชื่อผู้ใช้ (user name) หรือ รหัสผ่าน (password)
                        หรือข้อมูลการรักษาความปลอดภัยของ Influencer ทั้งนี้
                        Influencer
                        ตกลงจะแจ้งให้บริษัททราบทันทีที่มีการใช้ชื่อผู้ใช้ (user
                        name) รหัสผ่าน (password) โดยไม่ได้รับอนุญาต
                        หรือมีการฝ่าฝืนการรักษาความปลอดภัย นอกจากนี้ Influencer
                        ตกลงว่า Influencer จะออกจาก
                        หรือลงชื่อออกจากบัญชีสมาชิกทุกครั้งที่สิ้นสุดการใช้งาน
                        ทั้งนี้ Influencer
                        จะใช้ความระมัดระวังเมื่อเข้าสู่ระบบบัญชีสมาชิกจากที่สาธารณะ
                        หรือคอมพิวเตอร์ที่มีการใช้งานร่วมกัน
                        เพื่อมิให้ผู้อื่นสามารถเห็น หรือบันทึกรหัสผ่าน
                        (password) หรือข้อมูลส่วนบุคคลอื่นๆได้
                        บริษัทจะไม่รับผิดในความสูญเสีย หรือความเสียหายใดๆ
                        จากการที่ Influencer ไม่ปฏิบัติตามข้อกำหนดข้างต้น
                      </p>
                      <br />
                      <p>
                        บริษัทมีสิทธิที่จะระงับการใช้ชื่อผู้ใช้ (user name)
                        รหัสผ่าน (password) หรือการระบุตัวตนอื่น
                        ไม่ว่าจะเกิดจากการร้องขอของ Influencer เอง
                        หรือจากการใช้ดุลยพินิจของบริษัท ไม่ว่าในเวลาใด
                        และไม่ว่าจะด้วยเหตุใด หรือไม่มีเหตุก็ตาม
                        รวมถึงกรณีที่บริษัทเห็นว่า Influencer
                        ได้ฝ่าฝืนข้อกำหนดข้อใดข้อหนึ่งของข้อกำหนดการใช้งานนี้
                      </p>
                      <br />
                      <p>
                        บริษัทจะไม่กล่าวอ้างว่า Saypilot Platform
                        หรือเนื้อหาส่วนใดๆ นั้น สามารถเข้าถึงได้
                        หรือเหมาะสมต่อการใช้งานนอกพื้นที่ประเทศไทย การเข้าระบบ
                        Saypilot Platform
                        นั้นอาจจะไม่ชอบด้วยกฎหมายสำหรับบางบุคคลหรือบางประเทศ ถ้า
                        Influencer เข้าระบบ Saypilot Platform
                        จากนอกพื้นที่ประเทศไทย ให้ถือว่า Influencer
                        เป็นผู้ดำเนินการด้วยตนเอง
                        และต้องรับผิดชอบต่อการปฏิบัติตามกฎหมายท้องถิ่นนั้นด้วยตนเอง
                      </p>
                    </div>
                  </section>
                  <br />
                  <section>
                    <h3 className="title-with-border">6. คะแนน</h3>
                    <br />
                    <div className="text-sm">
                      <ul className="list-bullet-gray">
                        <li>
                          เมื่อการลงทะเบียนได้เสร็จสิ้นลง
                          และบริษัทได้อนุมัติให้ใช้ Saypilot Platform
                          เป็นที่เรียบร้อยแล้ว บริษัทจะแจ้งให้ Influencer
                          ทราบถึงผลการประเมินคะแนนผ่าน Saypilot Platform
                        </li>
                        <br />
                        <li>
                          บริษัทจะให้คะแนน Influencer ตามวิธีที่กำหนดโดยบริษัท
                          บริษัทจะพิจารณากำหนดมูลค่าและเงื่อนไขต่างๆ ของคะแนน
                          และจะประกาศไว้บน Saypilot Platform ทั้งนี้
                          บริษัทอาจใช้ดุลพินิจที่จะเปลี่ยนแปลง และ/หรือ
                          แก้ไขมูลค่าของคะแนน
                          หรือเงื่อนไขที่เกี่ยวกับคะแนนได้ทั้งหมดหรือบางส่วน
                          ภายใต้ข้อกำหนดการใช้งานนี้โดยไม่ต้องบอกกล่าวล่วงหน้า
                        </li>
                        <br />
                        <li>
                          มูลค่าของคะแนนนั้นไม่สามารถแลกเปลี่ยน
                          หรือใช้เพื่อวัตถุประสงค์อื่นใดๆ
                          นอกเหนือจากวัตถุประสงค์ของ Saypilot Platform นอกจากนี้
                          คะแนนไม่สามารถนำไปใช้ต่อหรือใช้ร่วมกับอุปกรณ์ซึ่งทำงานบนระบบปฏิบัติการที่แตกต่างกันได้
                        </li>
                      </ul>
                    </div>
                  </section>
                  <br />
                  <section>
                    <h3 className="title-with-border">
                      7. สิทธิในทรัพย์สินทางปัญญา
                    </h3>
                    <div className="text-sm">
                      <p>
                        Saypilot Platform และเนื้อหา ลักษณะพิเศษ
                        และโปรแกรมการทำงานทั้งหมดที่เกี่ยวกับ Saypilot Platform
                        (รวมถึงแต่ไม่จำกัดเพียงข้อมูล ซอฟต์แวร์ การส่งข้อความ
                        การแสดง ภาพลักษณ์ วิดีโอภาพ และเสียง และการออกแบบ
                        การคัดเลือก และการดำเนินการเกี่ยวกับ Saypilot Platform)
                        เป็นของบริษัท ผู้อนุญาตให้ใช้สิทธิของบริษัท
                        หรือผู้จัดหาสิ่งที่กล่าวมาข้างต้นรายอื่น
                        โดยจะได้รับความคุ้มครองจากลิขสิทธิ์ เครื่องหมายการค้า
                        สิทธิบัตร ความลับทางการค้า และทรัพย์สินทางปัญญาอื่น
                        หรือกฎหมายว่าด้วยสิทธิในความเป็นเจ้าของ
                      </p>
                      <br />
                      <p>
                        ข้อกำหนดการใช้งานนี้อนุญาตให้ Influencer ใช้ Saypilot
                        Platform เพื่อการใช้งานหรือบริการส่วนบุคคลเท่านั้น โดย
                        Influencer จะต้องไม่ทำซ้ำ แจกจ่าย แก้ไข คัดลอก
                        สร้างสรรค์งานต่อยอด เผยแพร่ต่อสาธารณะ แสดงแก่สาธารณะ
                        เผยแพร่ซ้ำ ดาวน์โหลด จัดเก็บ หรือส่งต่อสาระสำคัญใดๆ
                        ที่อยู่บน Saypilot Platform เว้นแต่กรณีดังต่อไปนี้
                      </p>
                      <br />
                      <ul className="list-bullet-gray">
                        <li>
                          คอมพิวเตอร์ของ Influencer
                          อาจเก็บรักษาสำเนาของรายละเอียดไว้เป็นการชั่วคราวบนหน่วยความจำชั่วคราว
                          (RAM) อันสืบเนื่องจากการที่ Influencer
                          ได้เข้าระบบและการดูรายละเอียดเหล่านั้น
                        </li>
                        <li>
                          Influencer
                          อาจเก็บรักษาไฟล์ที่ถูกบันทึกในหน่วยความจำชั่วคราว
                          (cached) โดยอัตโนมัติ
                          โดยโปรแกรมคอมพิวเตอร์ที่ใช้เปิดดูเว็บของ Influencer
                          เพื่อการแสดงความก้าวหน้าของการทำงาน
                        </li>
                        <li>
                          Influencer อาจสั่งพิมพ์
                          หรือดาวน์โหลดสำเนาหนึ่งชุดในจำนวนหน้าที่เหมาะสมจาก
                          Saypilot Platform
                          เพื่อการใช้งานหรือบริการส่วนบุคคลเท่านั้น
                          โดยจะต้องไม่ทำซ้ำ แก้ไข สร้างสรรค์ เผยแพร่
                          หรือแจกจ่ายต่อไปอีก
                        </li>
                      </ul>
                      <p>
                        หากบริษัทจัดให้มีโปรแกรมสำหรับดาวน์โหลดไปยังคอมพิวเตอร์
                        โทรศัพท์มือถือ หรืออุปกรณ์อื่น Influencer
                        อาจดาวน์โหลดสำเนาหนึ่งชุดไปยังคอมพิวเตอร์
                        หรืออุปกรณ์เคลื่อนที่ของ Influencer
                        เพียงเพื่อการใช้งานหรือบริการส่วนบุคคลเท่านั้น โดย
                        Influencer
                        ตกลงที่จะผูกพันตามสัญญาอนุญาตให้ใช้สิทธิสำหรับผู้ใช้ขั้นสุดท้าย
                        (end user license agreement) สำหรับการใช้โปรแกรมดังกล่าว
                      </p>
                      <br />
                      <p>Influencer จะต้องไม่</p>
                      <ul className="list-bullet-gray">
                        <li>
                          ทำการเปลี่ยนแปลงสำเนาของสาระสำคัญใดๆ
                          ที่ได้จากเว็บไซต์นี้
                        </li>
                        <br />
                        <li>
                          ใช้ภาพแสดงประกอบ รูปถ่าย วีดีโอหรือเสียงที่เป็นลำดับ
                          หรือกราฟฟิคใดๆ แยกต่างหากจากข้อความ
                        </li>
                        <br />
                        <li>
                          ลบทิ้ง หรือเปลี่ยนแปลงการบอกกล่าวถึงลิขสิทธิ์
                          เครื่องหมายการค้า หรือสิทธิในความเป็นเจ้าของอื่นๆ
                          จากสำเนาของข้อมูลสาระสำคัญจากเว็บไซต์นี้
                        </li>
                        <br />
                      </ul>
                      <br />
                      <p>
                        หาก Influencer สั่งพิมพ์ ทำสำเนา เปลี่ยนแปลง ดาวน์โหลด
                        หรือใช้งานโดยประการอื่น หรือจัดหาให้แก่บุคคลใดๆ
                        ให้เข้าถึงส่วนหนึ่งส่วนใดของ Saypilot Platform
                        โดยฝ่าฝืนต่อข้อกำหนดการใช้งานนี้ สิทธิในการใช้ Saypilot
                        Platform ของ Influencer จะถูกระงับลงโดยทันที
                        และบริษัทอาจสั่งให้ Influencer ส่งคืน
                        หรือทำลายสำเนาข้อมูลสาระสำคัญที่ Influencer ได้ทำขึ้น
                        สิทธิ กรรมสิทธิ์ หรือส่วนได้เสียในหรือที่มีต่อ Saypilot
                        Platform หรือเนื้อหาใดๆ บน Saypilot Platform
                        จะไม่ถูกโอนให้แก่ Influencer
                        โดยสิทธิทั้งหมดที่ไม่ได้มอบให้ไว้โดยชัดแจ้งนั้นจะถูกสงวนไว้โดยบริษัท
                        ทั้งนี้ การใช้งาน Saypilot Platform
                        โดยไม่ได้รับอนุญาตโดยชัดแจ้งตามข้อกำหนดการใช้งานนี้
                        ถือเป็นการฝ่าฝืนข้อกำหนดการใช้งานนี้
                        และอาจฝ่าฝืนต่อลิขสิทธิ์ เครื่องหมายการค้า
                        และกฎหมายอื่นๆ ด้วย
                      </p>
                      <br />
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
