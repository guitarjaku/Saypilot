import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const BindAccount = (props: any) => {
  const bankList = [
    { label: "กสิกรไทย", logo: "" },
    { label: "กรุงเทพ", logo: "" },
    { label: "กรุงไทย", logo: "" },
    { label: "ทหารไทย", logo: "" },
  ];
  const [spec, setSpec] = useState(false);
  const [policy, setPolicy] = useState(false);

  const handleModal = (props: any) => {
    if (props === 1) {
      setPolicy(!policy);
    } else {
      setSpec(!spec);
    }
  };

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
                      <a
                        onClick={() => handleModal(1)}
                        className="cursor-pointer"
                      >
                        ข้อกำหนดการใช้งาน
                      </a>
                      &nbsp; และ &nbsp;
                      <a
                        onClick={() => handleModal(2)}
                        className="cursor-pointer"
                      >
                        นโยบายความเป็นส่วนตัว
                      </a>
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
      {policy && (
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
                  onClick={() => handleModal(1)}
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
                            หรือบริษัทมหาชนจำกัด
                            ที่บริษัทถือหุ้นไม่น้อยกว่าร้อยละ 25 ของทุนจดทะเบียน
                            หรืออยู่ภายใต้อำนาจควบคุมของบริษัท
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
                            Marketer สามารถสืบค้นหา ติดต่อ มอบหมาย
                            และทำธุรกรรมกับ Influencer ในรูปแบบแพ็คเกจบริการ
                            เพื่อส่งเสริมตราสินค้า สินค้า หรือบริการของ Marketer
                          </li>
                          <br />
                          <li>
                            <strong>“หุ้นส่วนทางธุรกิจ”</strong> หมายถึง
                            บุคคลใดๆ ที่ดำเนินธุรกิจเกี่ยวข้องกับ Saypilot
                            Platform ทั้งนี้ รวมถึงผู้รับอนุญาต
                            หรือผู้ให้บริการที่ดำเนินกิจการในนาม
                            หรือภายใต้การอนุญาตของบริษัท
                          </li>
                          <br />
                          <li>
                            <strong>“Influencer”</strong> หมายถึง ท่าน
                            Influencer รายอื่นๆ ผู้ให้บริการ
                            หรือผู้ขายที่เกี่ยวข้อง
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
                            features) ที่ Influencer สามารถประกาศ ส่ง เผยแพร่
                            แสดง หรือเผยแพร่ เนื้อหาของแพ็คเกจบริการบน หรือผ่าน
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
                            และขยายฐานการตลาดสำหรับตราสินค้าหรือสินค้าของ
                            Marketer
                            โดยต้องเป็นผู้ที่มีบัญชีสมาชิกที่สามารถเข้าระบบของ
                            Saypilot Platform
                          </li>
                          <br />
                          <li>
                            <strong>“เนื้อหาของ Marketer”</strong> หมายถึง
                            ข้อความ รูปภาพ การเชื่อมต่อ (link) วิดีโอ กระทู้
                            หน้าเว็บไซต์ หรือบัญชีส่วนตัว กระดานสนทนา กระดานข่าว
                            และลักษณะพิเศษที่ทำงานระหว่างกัน (interactive
                            features) ที่ทำให้ Marketer สามารถประกาศ ส่ง เผยแพร่
                            แสดง หรือเผยแพร่เนื้อหาใดๆ
                            เพื่อการเข้าทำธุรกรรมผูกพันแพ็คเกจบริการของ
                            Influencer บน หรือ ผ่านทาง Saypilot Platform
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
                            ที่ประเมินและคำนวณโดยบริษัท เพื่อสะท้อนถึงผลงาน
                            บริการ และคุณสมบัติของ Influencer
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
                              “นโยบายการเก็บรวบรวม ใช้
                              และเปิดเผยข้อมูลส่วนบุคคล”
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
                            เพื่อที่จะเริ่มการใช้งาน Saypilot Platform
                            Influencer ต้องลงทะเบียนบัญชีสมาชิกกับ Saypilot
                            Platform ก่อน โดยระหว่างกระบวนการลงทะเบียน
                            Influencer
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
                            หรือข้อมูลที่เคยแจ้งไว้ไม่ถูกต้อง
                            หรือไม่เป็นความจริง หรือทำให้เข้าใจผิด
                            บริษัทอาจใช้ดุลยพินิจระงับ และ/หรือ
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
                                หุ้นส่วนทางธุรกิจ พันธมิตรทางธุรกิจ คู่ค้า
                                ลูกค้า บริษัทด้านการจัดการ Influencer ผู้จัดการ
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
                                หรือผู้ใด หรือเพื่อสืบสวน
                                และ/หรือป้องกันการฉ้อฉล
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
                            เพื่อประโยชน์ในการใช้งาน Saypilot Platform
                            Influencer ตกลงจะปฏิบัติตามนโยบายการเก็บรวบรวม ใช้
                            และเปิดเผยข้อมูลส่วนบุคคลโดยเคร่งครัด
                            ทั้งนี้ในกรณีที่ Marketer
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
                          โดยไม่ต้องมีการบอกกล่าว
                          บริษัทจะไม่ต้องรับผิดจากเหตุที่ Saypilot Platform
                          ไม่สามารถให้บริการได้ไม่ว่าทั้งหมดหรือบางส่วน
                          และไม่ว่าจะเป็นเวลาใดหรือช่วงเวลาใด ในบางครั้งบางคราว
                          บริษัทอาจระงับมิให้ผู้ใช้งาน
                          รวมถึงผู้ใช้งานที่ได้ลงทะเบียนไว้แล้ว เข้าระบบ
                          Saypilot Platform ทั้งหมดหรือบางส่วนก็ได้
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
                          เพื่อที่จะใช้ลักษณะพิเศษของ Saypilot Platform
                          Influencer ต้องแจ้งรายละเอียดและให้ข้อมูลอื่นๆ
                          ตามที่บริษัทกำหนดในขณะลงทะเบียนให้ครบถ้วน
                          บริษัทถือว่าข้อมูลทั้งหมดที่ Influencer ได้แจ้งผ่าน
                          Saypilot Platform จะต้องถูกต้อง เป็นข้อมูลปัจจุบัน
                          และสมบูรณ์ อันเป็นเงื่อนไขสำคัญในการที่ Influencer
                          จะสามารถใช้ Saypilot Platform ได้ Influencer
                          ตกลงว่าข้อมูลทั้งหมดที่ตนได้แจ้งในการลงทะเบียนผ่าน
                          Saypilot Platform หรือด้วยวิธีการอื่นใด
                          ซึ่งรวมถึงแต่ไม่จำกัดเพียง
                          การให้ข้อมูลผ่านการเชื่อมต่อเพื่อใช้งานลักษณะพิเศษของ
                          Saypilot Platform นั้น เป็นไปตามนโยบายการเก็บรวบรวม
                          ใช้ และเปิดเผยข้อมูลส่วนบุคคล และ Influencer
                          ยินยอมให้บริษัทดำเนินการด้วยประการใดๆ
                          อันเกี่ยวกับข้อมูลส่วนตัวของตนได้ตราบเท่าที่เป็นไปตามแนวนโยบายการเก็บรวบรวม
                          ใช้ และเปิดเผยข้อมูลส่วนบุคคล
                        </p>
                        <br />
                        <p>
                          หาก Influencer เลือก หรือได้รับ ชื่อผู้ใช้ (user name)
                          และ/หรือ รหัสผ่าน (password) หรือข้อมูลส่วนใดๆ
                          ซึ่งเป็นส่วนหนึ่งของกระบวนการรักษาความปลอดภัย
                          Influencer ต้องเก็บรักษาข้อมูลนั้นเป็นความลับ และ
                          Influencer
                          ต้องไม่เปิดเผยข้อมูลนั้นแก่บุคคลหรือองค์กรอื่นใด
                          นอกจากนี้ Influencer รับทราบว่า
                          บัญชีสมาชิกเป็นสิทธิเฉพาะตัวของ Influencer
                          และตกลงจะไม่ให้บุคคลอื่นใดเข้าระบบ Saypilot Platform
                          หรือส่วนใดส่วนหนึ่งของระบบ Saypilot Platform
                          โดยการใช้ชื่อผู้ใช้ (user name) หรือ รหัสผ่าน
                          (password) หรือข้อมูลการรักษาความปลอดภัยของ Influencer
                          ทั้งนี้ Influencer
                          ตกลงจะแจ้งให้บริษัททราบทันทีที่มีการใช้ชื่อผู้ใช้
                          (user name) รหัสผ่าน (password) โดยไม่ได้รับอนุญาต
                          หรือมีการฝ่าฝืนการรักษาความปลอดภัย นอกจากนี้
                          Influencer ตกลงว่า Influencer จะออกจาก
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
                          นั้นอาจจะไม่ชอบด้วยกฎหมายสำหรับบางบุคคลหรือบางประเทศ
                          ถ้า Influencer เข้าระบบ Saypilot Platform
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
                            นอกเหนือจากวัตถุประสงค์ของ Saypilot Platform
                            นอกจากนี้
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
                          และโปรแกรมการทำงานทั้งหมดที่เกี่ยวกับ Saypilot
                          Platform (รวมถึงแต่ไม่จำกัดเพียงข้อมูล ซอฟต์แวร์
                          การส่งข้อความ การแสดง ภาพลักษณ์ วิดีโอภาพ และเสียง
                          และการออกแบบ การคัดเลือก และการดำเนินการเกี่ยวกับ
                          Saypilot Platform) เป็นของบริษัท
                          ผู้อนุญาตให้ใช้สิทธิของบริษัท
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
                          (end user license agreement)
                          สำหรับการใช้โปรแกรมดังกล่าว
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
                          โดยฝ่าฝืนต่อข้อกำหนดการใช้งานนี้ สิทธิในการใช้
                          Saypilot Platform ของ Influencer จะถูกระงับลงโดยทันที
                          และบริษัทอาจสั่งให้ Influencer ส่งคืน
                          หรือทำลายสำเนาข้อมูลสาระสำคัญที่ Influencer ได้ทำขึ้น
                          สิทธิ กรรมสิทธิ์ หรือส่วนได้เสียในหรือที่มีต่อ
                          Saypilot Platform หรือเนื้อหาใดๆ บน Saypilot Platform
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
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        8. เครื่องหมายการค้า
                      </h3>
                      <div className="text-sm">
                        <p>
                          ชื่อบริษัท สิ่งอื่นใดทั้งหมดที่เกี่ยวกับชื่อ ตราโลโก้
                          ชื่อสินค้าและบริการ การออกแบบ และคำขวัญ (slogan)
                          เป็นเครื่องหมายการค้าของบริษัท หรือบริษัทในเครือ
                          หรือผู้อนุญาตให้ใช้สิทธิ Influencer
                          ต้องไม่ใช้เครื่องหมายดังกล่าวโดยปราศจากการได้รับอนุญาตล่วงหน้าเป็นลายลักษณ์อักษรจากบริษัท
                          ทั้งนี้ ชื่อ ตราโลโก้ ชื่อสินค้าและบริการ การออกแบบ
                          และคำขวัญ (slogan) ทั้งหมดที่ปรากฏบน Saypilot Platform
                          นั้น เป็นเครื่องหมายการค้าของเจ้าของที่เกี่ยวข้อง
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        9. การใช้ที่ต้องห้าม
                      </h3>
                      <br />
                      <div className="_f-system">
                        <p>
                          Influencer จะใช้ Saypilot Platform
                          ได้ก็แต่เฉพาะเพื่อวัตถุประสงค์อันชอบด้วยกฎหมาย
                          และเป็นไปตามข้อกำหนดการใช้งานนี้เท่านั้น Influencer
                          ตกลงจะไม่ใช้ Saypilot Platform ด้วยวิธีการใดๆ
                          อันเป็นการฝ่าฝืนต่อกฎหมาย และกฎระเบียบ
                        </p>
                        <br />
                        <ul className="list-bullet-gray">
                          <li>
                            เพื่อส่ง รับมา โอนถ่าย (Upload) รับโอนถ่าย
                            (Download) ใช้ หรือนำมาใช้ซ้ำ ซึ่งสาระสำคัญใด
                            ที่ไม่เป็นไปตามมาตรฐานของเนื้อหาที่ระบุไว้ในข้อกำหนดการใช้งานนี้
                          </li>
                          <br />
                          <li>
                            เพื่อแจกจ่าย ส่งต่อ หรือจัดให้มีการส่ง
                            ซึ่งข้อมูลสาระสำคัญสำหรับโฆษณา
                            หรือการส่งเสริมการขายใดๆ ซึ่งรวมถึง “จดหมายขยะ (junk
                            mail)” “จดหมายลูกโซ่” (chain letter) หรือ
                            “ข้อความขยะ (spam)” หรือการชักชวนอื่นๆ ที่คล้ายกัน
                          </li>
                          <br />
                          <li>
                            เพื่อเลียนแบบ หรือพยายามที่จะเลียนแบบบริษัท
                            ลูกจ้างของบริษัท ผู้ใช้งานรายอื่น
                            หรือบุคคลหรือองค์อื่นใดๆ (รวมถึง แต่ไม่จำกัดเพียง
                            การใช้ที่อยู่อีเมล หรือชื่อที่ปรากฏบนหน้าจอ
                            บัญชีสื่อสังคมออนไลน์ หรือส่วนที่เกี่ยวโยงกับสิ่งใดๆ
                            ที่กล่าวมาข้างต้น)
                          </li>
                          <br />
                          <li>
                            เพื่อเข้าผูกพันในการดำเนินการอื่นใดๆ ที่เป็นการห้าม
                            หรือยับยั้งการใช้ หรือการหาประโยชน์จาก Saypilot
                            Platform ของบุคคลใด หรือที่ซึ่งบริษัทเห็นว่า
                            อาจเป็นอันตรายต่อบริษัท หรือผู้ใช้งาน Saypilot
                            Platform หรือก่อให้เกิดความรับผิดแก่บุคคลดังกล่าว
                          </li>
                        </ul>
                        <br />
                        <p>นอกจากนี้ Influencer ตกลงว่าจะไม่</p>
                        <ul className="list-bullet-gray">
                          <li>
                            ใช้ Saypilot Platform
                            ด้วยวิธีการใดอันทำให้เว็บไซต์ไม่สามารถใช้งานได้
                            สร้างภาระส่วนเกิน เสียหาย หรือเสื่อมเสียแก่เว็บไซต์
                            หรือแทรกแซงการใช้ Saypilot Platform ของบุคคลอื่น
                            รวมถึง รบกวนความสามารถในการใช้งาน Saypilot Platform
                            ของบุคคลอื่น
                          </li>
                          <br />
                          <li>
                            ใช้โปรแกรมค้นหาข้อมูลจำพวกโรบอท (robot) สไปเดอร์
                            (spider) หรืออุปกรณ์ กระบวนการ
                            หรือวิธีการทำงานอื่นที่ทำงานแบบอัตโนมัติในการเข้าถึง
                            Saypilot Platform เพื่อวัตถุประสงค์ใดๆ
                            รวมถึงการติดตาม หรือการคัดลอกข้อมูลสาระสำคัญใดๆ
                            ที่อยู่บน Saypilot Platform
                          </li>
                          <br />
                          <li>
                            นำไวรัส โปรแกรมโทรจันฮอร์ส (trojan horses) เวิร์ม
                            (worms) ลอจิก บอมบ์ (logic bombs) หรือเครื่องมืออื่น
                            ซึ่งเป็นผลเสีย
                            หรือเป็นอันตรายในเชิงเทคโนโลยีเข้าสู่ระบบ
                          </li>
                          <br />
                          <li>
                            พยายามเข้าระบบโดยไม่ได้รับอนุญาต เข้าแทรกแซง
                            ทำให้เสียหาย หรือรบกวนส่วนหนึ่งส่วนใดของ Saypilot
                            Platform เซิร์ฟเวอร์ ซึ่งเป็นที่จัดเก็บรักษาของ
                            Saypilot Platform หรือเซร์ฟเวอร์ คอมพิวเตอร์
                            หรือฐานข้อมูลใดๆ ที่เชื่อมต่อกับ Saypilot Platform
                          </li>
                          <br />
                          <li>
                            พยายามโดยประการอื่น
                            ในการเข้าแทรกแซงการทำงานตามปกติของ Saypilot Platform
                          </li>
                          <br />
                          <li>
                            เปิดเผยข้อมูลใดๆ ของ Marketer บริษัท บริษัทในเครือ
                            และหุ้นส่วนทางธุรกิจ ที่ Influencer ได้รับผ่านทาง
                            Saypilot Platform แก่บุคคลภายนอก
                          </li>
                        </ul>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        10. เนื้อหาของ Influencer
                      </h3>
                      <br />
                      <div className="_f-system">
                        <p>
                          เนื้อหาของ Influencer
                          ทั้งหมดต้องเป็นไปตามมาตรฐานของเนื้อหาที่ระบุไว้ในข้อกำหนดการใช้งานนี้
                        </p>
                        <br />
                        <p>
                          เนื้อหาของ Influencer ใดๆ ที่ Influencer ได้ลงประกาศบน
                          Saypilot Platform จะถือว่าไม่ใช่ข้อมูลอันเป็นความลับ
                          และไม่มีผู้เป็นเจ้าของ ทั้งนี้ เนื้อหาของ Influencer
                          ที่ถูกนำมาลงบน Saypilot Platform นั้น Influencer
                          ได้มอบสิทธิในการใช้ ทำซ้ำ เปลี่ยนแปลง ปฏิบัติงาน แสดง
                          แจกจ่าย
                          และเปิดเผยโดยประการอื่นแก่บุคคลภายนอกซึ่งข้อมูลสาระสำคัญ
                          ให้แก่บริษัท และผู้รับอนุญาตให้ใช้สิทธิ ผู้สืบสิทธิ
                          และผู้รับโอนสิทธิที่เกี่ยวข้อง
                        </p>
                        <br />
                        <p>Influencer รับรอง และรับประกันว่า</p>
                        <br />
                        <ul className="list-bullet-gray">
                          <li>
                            Influencer เป็นผู้คิด
                            สร้างเนื้อหาและรับผิดชอบต่อความถูกต้อง
                            (ทั้งตามกฎหมายและภายใต้ข้อกำหนดการใช้งาน) สมบูรณ์
                            เป็นปัจจุบันของเนื้อหาและภายหลังจากเนื้อหาของ
                            Influencer ได้ประกาศผ่าน Saypilot Platform แล้ว
                            บริษัทจะเป็นเจ้าของกรรมสิทธิ์และ/
                            หรือควบคุมสิทธิทั้งหมดที่มีในเนื้อหาของ Influencer
                            นั้นและมีสิทธิในการอนุญาตให้ใช้สิทธิดังกล่าวข้างต้นแก่ผู้รับอนุญาตให้ใช้สิทธิ
                            ผู้สืบสิทธิ และผู้รับโอนสิทธิที่เกี่ยวข้องได้
                            ทั้งนี้ บริษัทยินยอมให้ Influencer
                            แก้ไขเปลี่ยนแปลงเนื้อหาดังกล่าวได้ตลอดเวลา
                            เว้นแต่จะได้รับแจ้งจากบริษัทเป็นอย่างอื่น
                          </li>
                          <br />
                          <li>
                            เนื้อหาของ Influencer ทั้งหมดต้องเป็นไปตาม
                            และจะปฏิบัติตามข้อกำหนดการใช้งานนี้
                            และกฎหมายที่เกี่ยวข้อง
                          </li>
                          <br />
                          <li>
                            ไม่ว่าเวลาใด เนื้อหาของ Influencer นั้นถูกต้อง
                            เป็นปัจจุบัน และสมบูรณ์ และใหม่ล่าสุด
                          </li>
                        </ul>
                        <p>
                          Influencer ต้องแจ้งบริษัทถึงการเปลี่ยนแปลงใดๆ
                          ที่มีต่อเนื้อหาของ Influencer หาก Influencer
                          ไม่แจ้งการเปลี่ยนแปลงในเนื้อหาของ Influencer
                          ให้บริษัททราบภายในระยะเวลาอันสมควร หรือเนื้อหาของ
                          Influencer นั้นไม่ถูกต้อง หรือไม่เป็นความจริง
                          บริษัทอาจทำการระงับ
                          และ/หรือยุติการให้บริการทั้งหมดหรือบางส่วนของ Saypilot
                          Platform โดยไม่ต้องแจ้งให้ Influencer ทราบล่วงหน้า
                        </p>
                        <br />
                        <p>
                          Influencer เข้าใจและรับทราบว่า Influencer
                          มีความรับผิดชอบต่อเนื้อหาของ Influencer ทั้งนี้
                          รวมถึงความชอบด้วยกฎหมาย ความน่าเชื่อถือ
                          ความถูกต้องครบถ้วน และความเหมาะสม
                        </p>
                        <br />
                        <p>
                          บริษัทจะไม่รับผิดชอบ หรือรับผิดต่อบุคคลภายนอก
                          สำหรับเนื้อหา หรือความถูกต้องครบถ้วนของเนื้อหาของ
                          Influencer ที่ Influencer หรือผู้ใช้รายอื่นใด
                          ได้ลงประกาศบน Saypilot Platform
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">11. การติดตามดูแล</h3>
                      <br />
                      <div className="text-sm">
                        <p>บริษัทมีสิทธิที่จะ</p>
                        <br />
                        <ul className="list-bullet-gray">
                          <li>
                            ใช้ดุลยพินิจในการลบ หรือปฏิเสธการประกาศเนื้อหาของ
                            Influencer ไม่ว่าด้วยเหตุใด หรือปราศจากเหตุผล
                          </li>
                          <br />
                          <li>
                            ใช้ดุลยพินิจในการดำเนินการใดๆ เกี่ยวกับเนื้อหาของ
                            Influencer ที่บริษัทเห็นว่าจำเป็น หรือเหมาะสม
                            รวมถึงกรณีที่บริษัทเชื่อว่า เนื้อหาของ Influencer
                            นั้น ฝ่าฝืนข้อกำหนดการใช้งาน รวมถึงมาตรฐานของเนื้อหา
                            ละเมิดต่อสิทธิในทรัพย์สินทางปัญญา
                            หรือสิทธิของบุคคลหรือองค์กรใดๆ
                            หรือมีลักษณะเป็นการคุกคามต่อความปลอดภัยส่วนตัวของผู้ใช้งานท่านอื่น
                            Saypilot Platform หรือต่อสาธารณะ
                            หรืออาจก่อให้เกิดความรับผิดแก่บริษัทได้
                          </li>
                          <br />
                          <li>
                            เปิดเผยตัวตนของ Influencer หรือข้อมูลอื่นใดของ
                            Influencer ให้แก่ Marketer หรือบุคคลภายนอกที่อ้างว่า
                            รายละเอียดที่ลงประกาศโดย Influencer นั้น ละเมิดสิทธิ
                            หรือทรัพย์สินทางปัญญา หรือสิทธิส่วนบุคคลของพวกเขา
                          </li>
                          <br />
                          <li>
                            ดำเนินการทางกฎหมายที่เหมาะสม รวมถึงแต่ไม่จำกัดเพียง
                            การดำเนินการเพื่อบังคับตามกฎหมาย ต่อการใช้ Saypilot
                            Platform โดยผิดกฎหมาย หรือไม่ได้รับอนุญาต
                          </li>
                          <br />
                          <li>
                            ปิดกั้น สั่งห้าม ยับยั้ง ยกเลิก ระงับ
                            หรือดำเนินการใดๆ เป็นการชั่วคราว/ถาวร
                            ต่อบัญชีสมาชิกของ Influencer ใน Saypilot Platform
                            โดยไม่ต้องแจ้งล่วงหน้า หากบริษัทเชื่อว่า Marketer
                            และ Influencer ทำข้อผูกพันกัน
                            และ/หรือติดต่อกันเกี่ยวกับแพ็คเกจบริการ
                            และวัตถุประสงค์ที่เกี่ยวข้องดังกล่าวโดยตรง
                            โดยไม่ได้ใช้ Saypilot Platform
                            อันเป็นผลให้เนื้อหาของ Influencer หรือการใช้
                            Saypilot Platform
                            ฝ่าฝืนต่อข้อกำหนดการใช้งานนี้ทั้งหมดหรือบางส่วน
                          </li>
                        </ul>
                        <br />
                        <p>
                          โดยไม่จำกัดเพียงที่กล่าวมาข้างต้น
                          บริษัทมีสิทธิที่จะให้ความร่วมมืออย่างเต็มที่กับหน่วยงานบังคับใช้กฎหมาย
                          หรือคำสั่งศาล ที่ร้องขอ หรือสั่งให้มีการเปิดเผยตัวตน
                          หรือข้อมูลอื่นใดของบุคคลที่ประกาศข้อความลงบน
                          หรือผ่านทาง Saypilot Platform โดย Influencer
                          ได้สละสิทธิ์ และจะไม่ทำให้บริษัท บริษัทในเครือ
                          และผู้รับอนุญาตให้ใช้สิทธิและผู้ให้บริการของบริษัท
                          ได้รับความเสียหายจากข้อเรียกร้องอันเนื่องมาจากการกระทำใดๆ
                          ที่ดำเนินการโดยบริษัท บุคคลใดๆ ที่ได้กล่าวข้างต้น
                          ในระหว่างหรืออันเป็นผลมาจากการสืบสวน
                          และเนื่องจากการกระทำใดๆ
                          ที่ดำเนินการไปซึ่งเป็นผลของการสืบสวน
                          ไม่ว่าโดยบริษัท/ฝ่ายต่างๆดังกล่าว
                          หรือหน่วยงานบังคับใช้กฎหมาย
                        </p>
                        <br />
                        <p>
                          อย่างไรก็ตาม
                          บริษัทไม่มีหน้าในการตรวจทานข้อความก่อนที่จะมีการลงประกาศบน
                          Saypilot Platform
                          บริษัทจึงไม่อาจรับรองว่าจะสามารถลบข้อความที่ไม่พึงประสงค์ได้อย่างทันท่วงทีภายหลังจากที่ถูกประกาศไปแล้ว
                          ดังนั้น บริษัทไม่ต้องรับผิดต่อการกระทำ
                          หรือการไม่กระทำการใดๆ เกี่ยวกับการส่งต่อ
                          การติดต่อสื่อสารหรือเนื้อหาที่จัดหาให้โดยผู้ใช้งาน
                          หรือบุคคลภายนอกใดๆ บริษัทไม่มีความรับผิด
                          หรือความรับผิดชอบต่อบุคคลใดๆ ในการปฏิบัติ
                          หรือไม่ปฏิบัติซึ่งกิจกรรมใดๆ ที่ระบุไว้ในหัวข้อนี้
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        12. มาตรฐานของเนื้อหา
                      </h3>
                      <br />
                      <div className="text-sm">
                        <p>
                          มาตรฐานของเนื้อหาเหล่านี้ ใช้บังคับกับเนื้อหาของ
                          Influencer ทั้งหมดหรือบางส่วน เนื้อหาของ Influencer
                          ทั้งหมดจะต้องเป็นไปตามกฎหมาย และระเบียบทุกฉบับ ทั้งนี้
                          โดยไม่จำกัดเพียงที่กล่าวมาข้างต้น เนื้อหาของ
                          Influencer จะต้องไม่
                        </p>
                        <br />
                        <ul className="list-bullet-gray">
                          <li>
                            ประกอบไปด้วยข้อความซึ่งมีลักษณะเป็นการใส่ความ ลามก
                            อนาจาร ละเมิด โจมตีให้ร้าย คุกคาม รุนแรง
                            เป็นที่เกลียดชัง ปลุกปั่น
                            หรือมีลักษณะไม่พึงประสงค์โดยประการอื่น
                          </li>
                          <br />
                          <li>
                            ส่งเสริมข้อความเนื้อหาที่เกี่ยวกับเพศ
                            หรือภาพลามกอนาจารอย่างชัดเจน ความรุนแรง
                            หรือการเลือกปฏิบัติอย่างไม่เป็นธรรมบนพื้นฐานของเชื้อชาติ
                            เพศ ศาสนา สัญชาติ ความพิการ รสนิยมทางเพศ หรืออายุ
                          </li>
                          <br />
                          <li>
                            ละเมิดสิทธิบัตร เครื่องหมายการค้า ความลับทางการค้า
                            ลิขสิทธิ์ หรือทรัพย์สินทางปัญญาอื่น
                            หรือสิทธิอื่นของบุคคลอื่นใดๆ
                          </li>
                          <br />
                          <li>
                            ฝ่าฝืนสิทธิตามกฎหมาย (รวมถึงสิทธิในการเผยแพร่
                            และสิทธิส่วนบุคคล) ของบุคคลอื่น
                            หรือที่ประกอบไปด้วยข้อความใดๆ
                            ที่อาจทำให้เกิดความรับผิดทางแพ่ง
                            หรือทางอาญาภายใต้กฎหมาย หรือระเบียบที่เกี่ยวข้อง
                            หรือ อาจขัดแย้งโดยประการอื่นกับข้อกำหนดการใช้งานนี้
                            และนโยบายความเป็นส่วนตัวของบริษัท
                          </li>
                          <br />
                          <li>มีลักษณะเป็นการหลอกลวงบุคคลอื่น</li>
                          <br />
                          <li>
                            ยื่นข้อเรียกร้องโดยไม่ชอบเกี่ยวกับสินค้า
                            หรือบริการที่ Marketer จัดหามา
                          </li>
                          <br />
                          <li>
                            ส่งเสริมกิจกรรมที่ผิดกฎหมาย หรือสนับสนุน ส่งเสริม
                            หรือช่วยเหลือการกระทำที่ผิดกฎหมาย
                          </li>
                          <br />
                          <li>
                            ก่อให้เกิดความรำคาญ ความไม่สะดวก
                            หรือความวิตกกังวลที่ไม่จำเป็น
                            หรือน่าจะรบกวนต่อสภาพจิตใจ ทำให้เกิดความอับอาย
                            ตื่นตระหนก หรือสร้างความรำคาญแก่บุคคลอื่น
                          </li>
                          <br />
                          <li>
                            เลียนแบบบุคคลอื่น
                            หรือทำให้หลงผิดเกี่ยวกับความเป็นตัวตนของ Influencer
                            หรือการเข้าร่วมกับบุคคล หรือองค์กรอื่น
                          </li>
                          <br />
                          <li>
                            ทำให้เชื่อว่าเนื้อหาถูกส่งมาจาก
                            หรือได้รับการรับรองโดยบริษัท หรือบุคคล
                            หรือองค์กรอื่นใดๆ ซึ่งไม่เป็นความจริง
                          </li>
                        </ul>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        13. ความรับผิดชอบของ Influencer
                      </h3>
                      <br />
                      <div className="text-sm">
                        <ul className="list-bullet-gray">
                          <li>
                            โดยไม่คำนึงถึงภาระหน้าที่และความรับผิดชอบที่มีต่อ
                            Influencer เนื้อหาของ Influencer
                            และบุคคลอื่นที่ได้กล่าวไปก่อนหน้านี้
                            บริษัทไม่ต้องรับผิดชอบในการแก้ไข
                            หรือป้องกันการฝ่าฝืนใดๆ ที่กระทำโดย Influencer
                            หรือบุคคลอื่น ภายใต้ข้อกำหนดการใช้งาน
                          </li>
                          <br />
                          <li>
                            บริษัทอาจดำเนินมาตรการที่บริษัทเห็นว่าจำเป็นและเหมาะสม
                            หากบริษัททราบว่า Influencer ใช้ Saypilot Platform
                            ในลักษณะเป็นการฝ่าฝืนต่อข้อกำหนดการใช้งาน
                          </li>
                          <br />
                          <li>
                            กรณีที่บริษัทได้รับความสูญเสีย ความเสียหาย
                            หรือถูกเรียกเก็บค่าใช้จ่ายทั้งทางตรงหรือทางอ้อม
                            อันเนื่องจากการที่ Influencer
                            ฝ่าฝืนกฎหมายที่เกี่ยวข้อง หรือข้อกำหนดการใช้งาน
                            ระหว่างที่ใช้ Saypilot Platform Influencer
                            จะต้องชดใช้ค่าเสียหายให้แก่บริษัททันทีที่ได้รับการเรียกร้องจากบริษัท
                          </li>
                          <br />
                          <li>
                            ในกรณีที่ Influencer
                            ไม่ดำเนินการตามแพ็คเกจบริการตามที่ได้ตกลงไว้กับ
                            Marketer Influencer
                            จะต้องรับผิดชอบโดยตรงสำหรับความสูญเสีย
                            ความเสียหายของ Marketer รวมถึงไม่จำกัดเฉพาะ
                            การคืนสินค้าที่ Influencer ได้รับจาก Marketer
                            ภายใต้แพ็คเกจบริการ ถ้า Influencer
                            ไม่คืนสินค้าให้แก่ Marketer
                            บริษัทอาจคิดค่าปรับเท่ากับมูลค่าของสินค้า และยุติ
                            ระงับ หรือดำเนินใดๆ หรือพักการใช้บัญชีสมาชิกของ
                            Influencer ใน Saypilot Platform
                            เป็นการชั่วคราวหรือถาวร
                            โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                          </li>
                        </ul>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        14. ความเชื่อถือต่อข้อมูลที่ประกาศ
                      </h3>
                      <br />
                      <div className="text-sm">
                        <p>
                          ข้อมูลที่ถูกนำเสนอบนหรือผ่านทาง Saypilot Platform
                          มีไว้เพื่อเป็นข้อมูลทั่วไปแต่เพียงอย่างเดียวเท่านั้น
                          ทั้งนี้ บริษัทไม่รับประกันถึงความถูกต้อง ความครบถ้วน
                          หรือความเป็นประโยชน์ของข้อมูลนี้ ความเชื่อถือใดๆ ที่
                          Influencer มีต่อข้อมูลดังกล่าวนั้นเป็นความเสี่ยงของ
                          Influencer เองทั้งสิ้น บริษัทขอปฏิเสธความรับผิด
                          และความรับผิดชอบที่เกิดขึ้นจากความเชื่อถือของ
                          Influencer หรือผู้เยี่ยมชม Saypilot Platform
                          หรือโดยบุคคลใดซึ่งอาจได้รับข้อมูลดังกล่าว
                        </p>
                        <br />
                        <p>
                          Saypilot Platform
                          ประกอบไปด้วยเนื้อหาที่ได้รับจากบุคคลภายนอก
                          ซึ่งรวมถึงข้อมูลที่จัดหาให้โดย Marketer ผู้ใช้อื่น
                          เจ้าของบล็อก (bloggers) และบุคคลภายนอก
                          ซึ่งเป็นผู้ได้รับอนุญาตให้ใช้สิทธิ สมาชิกสมาคม
                          ผู้รวบรวม และ/หรือผู้ให้บริการด้านการรายงาน
                          โดยถ้อยคำและ/หรือความคิดเห็นทั้งหมดที่แสดงออกในข้อมูล
                          บทความ การตอบคำถาม และเนื้อหาอื่น
                          นอกเหนือจากเนื้อหาที่จัดให้มีโดยบริษัทนั้น
                          เป็นความคิดเห็นและความรับผิดชอบของบุคคล
                          หรือองค์กรที่ให้มีข้อมูลดังกล่าวเหล่านั้น
                          ซึ่งข้อมูลรายละเอียดเหล่านี้
                          อาจไม่ได้สะท้อนถึงความคิดเห็นของบริษัท ทั้งนี้
                          บริษัทไม่ต้องรับผิดชอบ หรือรับผิดต่อ Influencer
                          หรือบุคคลภายนอกใดๆ สำหรับเนื้อหา
                          หรือความถูกต้องครบถ้วนของข้อมูลที่ให้ไว้โดยบุคคลภายนอกเหล่านั้น
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        15. นโยบายการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล
                      </h3>
                      <br />
                      <div className="text-sm">
                        <p>
                          ข้อมูลทั้งหมดบน Saypilot Platform
                          นั้นอยู่ภายใต้นโยบายการเก็บรวบรวม ใช้
                          และเปิดเผยข้อมูลส่วนบุคคล ในการใช้ Saypilot Platform
                          Influencer ยินยอมให้บริษัทดำเนินการใดๆ
                          อันเกี่ยวกับข้อมูลของ Influencer
                          ได้ตามนโยบายการเก็บรวบรวม ใช้
                          และเปิดเผยข้อมูลส่วนบุคคล
                        </p>
                        <br />
                        <p>
                          เว้นแต่
                          บริษัทมีหน้าที่ต้องปฏิบัติตามที่กฎหมายกำหนดไว้เป็นการเฉพาะ
                          Influencer สามารถลบข้อมูลส่วนตัวของ Influencer จาก
                          Saypilot Platform โดยการเข้าไปที่บัญชีของ Influencer
                          และเลือกคำว่า “แก้ไข” และเลือกคำว่า “ปิดบัญชีผู้ใช้”
                          ตามลำดับ อย่างไรก็ตาม Influencer
                          ยังคงมีหน้าที่จะต้องอ่านนโยบายการเก็บรวบรวม ใช้
                          และเปิดเผยข้อมูลส่วนบุคคลด้วยความระมัดระวัง
                          เนื่องจากเมื่อ Influencer ใช้สิทธิลบข้อมูลแล้ว
                          Influencer
                          และบริษัทจะไม่สามารถเรียกคืนข้อมูลดังกล่าวได้อีกต่อไป
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        16. ค่าธรรมเนียม และข้อกำหนดการชำระเงิน
                      </h3>
                      <br />
                      <div className="_f-system">
                        <u>ค่าบริการของ Influencer</u>
                        <br />
                        <ul className="list-bullet-gray">
                          <li>
                            เมื่อมีการเข้าผูกพันกันตามแพ็คเกจบริการระหว่าง
                            Influencer กับ Marketer ผ่านทาง Saypilot Platform
                            Influencer มีสิทธิได้รับค่าบริการของ Influencer
                            ตามเงื่อนไขและข้อกำหนดของข้อกำหนดการใช้งานนี้
                            บริษัทจะโอนค่าบริการของ Influencer ผ่านทาง Saypilot
                            Platform ไปยังบัญชีธนาคารที่กำหนดโดย Influencer
                            หรือโดยการชำระเงินด้วยวิธีการอื่น
                          </li>
                          <br />
                          <li>
                            ค่าบริการของ Influencer จะถูกโอนให้แก่ Influencer
                            โดยวิธีการที่กำหนดโดยบริษัท
                            รวมถึงแต่ไม่จำกัดเพียงวิธีการ และหน่วยการชำระ
                            ทั้งนี้ เพื่อมิให้เกิดข้อสงสัย มูลค่า
                            และอัตราค่าบริการของ Influencer จะถูกกำหนดโดยบริษัท
                            และแสดงอยู่บน Saypilot Platform
                            บริษัทอาจใช้ดุลยพินิจของตนแต่เพียงผู้เดียว
                            ที่จะเปลี่ยนแปลง และ/หรือแก้ไขค่าบริการของ
                            Influencer
                            หรือข้อกำหนดการชำระเงินไม่ว่าทั้งหมดหรือแต่บางส่วน
                            ภายใต้ข้อกำหนดการใช้งาน โดยไม่ต้องแจ้ง Influencer
                            ล่วงหน้า
                          </li>
                          <br />
                          <li>
                            หาก Influencer ยุติการใช้ หรือลบบัญชีสมาชิกของ
                            Influencer ใน Saypilot Platform ด้วยตนเอง
                            บริษัทตกลงจะชำระค่าบริการของ Influencer
                            ที่ค้างชำระอยู่ (ถ้ามี)
                            ที่บริษัทมีหน้าที่จะต้องชำระให้แก่ Influencer
                            ภายใต้บทบังคับของข้อกำหนดการใช้งานนี้
                            ในรอบการชำระเงินครั้งถัดไป
                          </li>
                        </ul>
                        <br />
                        <u>ค่าบริการการใช้ Saypilot Platform</u>
                        <br />
                        <ul className="list-bullet-gray">
                          <li>
                            ในบางครั้งบางคราว บริษัทอาจเปลี่ยนแปลงค่าบริการใดๆ
                            และ/หรือ แจ้งค่าบริการใหม่ที่เกี่ยวกับการใช้
                            Saypilot Platform โดยการประกาศอัตราค่าบริการใหม่บน
                            Saypilot Platform การกำหนดอัตราค่าบริการการใช้
                            Saypilot Platform ใหม่ จะพิจารณาจากการใช้ Saypilot
                            Platform ของ Influencer
                            ธุรกรรมการซื้อทั้งหมดที่ดำเนินการผ่าน Saypilot
                            Platform หรือธุรกรรมอื่นสำหรับการบริการที่ทำผ่าน
                            Saypilot Platform หรือผลการเข้าเยี่ยมชมของ
                            Influencer
                          </li>
                          <br />
                          <li>
                            ข้อกำหนดและเงื่อนไขเพิ่มเติม
                            อาจใช้บังคับกับบางส่วนของ Saypilot Platform
                            เป็นการเฉพาะเจาะจง รวมถึงบริการ หรือลักษณะพิเศษของ
                            Saypilot Platform ทั้งนี้
                            ข้อกำหนดและเงื่อนไขเพิ่มเติมทั้งหมด
                            เป็นส่วนหนึ่งของข้อกำหนดการใช้งานนี้
                            ส่วนการชำระหนี้และการโอนเงินนั้นจะดำเนินการผ่านสถาบันการเงินหรือธนาคารที่บริษัทจะได้กำหนดในแต่คราว
                          </li>
                        </ul>
                        <br />
                        <u>ภาษี, ค่าใช้จ่าย และสกุลเงิน</u>
                        <br />
                        <ul className="list-bullet-gray">
                          <li>
                            Influencer ต้องรับผิดชอบต่อค่าใช้จ่ายและภาษี
                            ที่เกิดขึ้นจากค่าบริการของ Influencer
                            และค่าบริการการใช้ Saypilot Platform
                            ตามข้อกำหนดการใช้งานนี้ เพื่อมิให้เป็นข้อสงสัย
                            บริษัทจะหักภาษี ณ ที่จ่าย
                            และค่าธรรมเนียมการโอนเงินค่าบริการของ Influencer
                            หรือค่าใช้จ่ายอื่นๆ ที่ต้องชำระสำหรับค่าบริการของ
                            Influencer
                            ตามที่กฎหมายที่เกี่ยวข้องกำหนดไว้จากค่าบริการของ
                            Influencer
                          </li>
                          <br />
                          <li>
                            ค่าบริการของ Influencer และค่าบริการการใช้ Saypilot
                            Platform ที่ต้องชำระภายใต้ข้อกำหนดนี้ จะใช้สกุลเงิน
                            อัตราแลกเปลี่ยนที่ใช้ในการคำนวณ ณ
                            วันที่มีการชำระเงิน
                            ซึ่งจะถูกกำหนดไว้ในเงื่อนไขการชำระเงินที่ได้มีการตกลงกันระหว่างคู่สัญญาทั้งสองฝ่ายตามเขตดินแดน
                            และเป็นจำนวนที่ได้รวมภาษีมูลค่าเพิ่ม หรือภาษีการขาย
                            หรือภาษีผู้บริโภคที่ใช้บังคับอยู่
                          </li>
                          <br />
                          <li>
                            บริษัทจะไม่รับผิดสำหรับผลกระทบ ความเสี่ยง
                            หรือความสูญเสียหรือความเสียหายที่เกิดขึ้นจากการเปลี่ยนแปลงของอัตราแลกเปลี่ยน
                            หรือค่าใช้จ่าย หรือภาษีของ Influencer
                          </li>
                        </ul>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        17. การเชื่อมต่อจาก Saypilot Platform
                      </h3>
                      <br />
                      <div className="text-sm">
                        <p>
                          หาก Saypilot Platform เชื่อมต่อไปยังเว็บไซต์
                          หรือแหล่งอื่น ที่ให้ไว้โดยบุคคลภายนอก
                          การเชื่อมต่อเหล่านั้นมีไว้เพื่ออำนวยความสะดวกแก่
                          Influencer เท่านั้น การเชื่อมต่อที่กล่าวถึงนี้ รวมถึง
                          การเชื่อมต่อที่มีลักษณะเป็นการโฆษณาโดยเจ้าของตราสินค้า
                          (banner advertisements)
                          และการเชื่อมต่อของผู้ให้การสนับสนุน (sponsored links)
                          บริษัทไม่มีการควบคุมเนื้อหาของเว็บไซต์
                          และแหล่งที่มาเหล่านั้น และไม่รับผิดชอบสำหรับรายการใดๆ
                          ดังกล่าวเหล่านั้น ในความสูญเสียหรือความเสียหาย
                          ที่อาจเกิดขึ้นจากการเชื่อมต่อดังกล่าว ทั้งนี้ หาก
                          Influencer ตัดสินใจเข้าถึงเว็บไซต์ของบุคคลภายนอก
                          ที่เชื่อมต่อมายัง Saypilot Platform Influencer
                          ได้ตัดสินใจดำเนินการบนความเสี่ยงของ Influencer เอง โดย
                          Influencer
                          จะต้องอยู่ภายใต้ข้อกำหนดและเงื่อนไขในการใช้เว็บไซต์นั้น
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">18. การสิ้นสุด</h3>
                      <br />
                      <div className="text-sm">
                        <u>ข้อกำหนดเกี่ยวกับการสิ้นสุด</u>
                        <br />
                        <p>
                          บริษัทมีสิทธิที่จะบอกเลิก หรือระงับการเข้าถึง Saypilot
                          Platform ของ Influencer ทั้งหมดหรือบางส่วน
                          ไม่ว่าด้วยเหตุใด หรือโดยไม่มีเหตุ
                          ซึ่งรวมถึงแต่ไม่จำกัดเพียงการฝ่าฝืนข้อกำหนดการใช้งานนี้
                        </p>
                        <br />
                        <p>
                          เมื่อข้อกำหนดการใช้งานสิ้นสุดลง หรือในเวลาใดๆ
                          ภายหลังการสิ้นสุดดังกล่าว Influencer
                          จะชำระเงินจำนวนทั้งหมดที่ Influencer
                          ค้างชำระให้แก่บริษัทโดยทันที
                          โดยบริษัทจะไม่มีความรับผิดใดๆ ต่อ Influencer
                          สำหรับการสิ้นสุดของข้อกำหนดการใช้งานนี้
                          รวมถึงสำหรับการสิ้นสุดของบัญชีสมาชิกของ Influencer
                          หรือการลบเนื้อหาของ Influencer
                        </p>
                        <br />
                        <p>
                          บริษัทสงวนสิทธิในการแก้ไขเปลี่ยนแปลง
                          หรือหยุดการให้บริการส่วนใดส่วนหนึ่งหรือทั้งหมดของบริการ
                          โดยบริษัทอาจแจ้งแก่ Influencer หรือไม่ก็ได้ ทั้งนี้
                          บริษัทจะไม่ต้องรับผิดต่อ Influencer
                          หรือบุคคลภายนอกสำหรับการสิ้นสุดของบริการ
                        </p>
                        <br />
                        <u>ผลของการสิ้นสุด</u>
                        <br />
                        <ul className="list-bullet-gray">
                          <li>
                            <u>ข้อกำหนดที่มีผลบังคับต่อไป</u>:
                            ข้อกำหนดที่จะยังคงบังคับใช้ต่อไป คือ ข้อที่ 7, 8, 9,
                            10, 11, 12, 13, 14, 15, 17, 19, 20, 21, 22 และ 23
                          </li>
                        </ul>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        19. การปฏิเสธการรับประกัน
                      </h3>
                      <br />
                      <div className="text-sm">
                        <p>
                          Influencer เข้าใจว่าบริษัทไม่สามารถ และไม่รับรอง
                          หรือรับประกันว่าไฟล์ที่ให้ดาวน์โหลดจากอินเทอร์เน็ต
                          หรือจาก Saypilot Platform นั้นจะปราศจากไวรัส
                          หรือรหัสที่เป็นอันตรายอื่น Influencer ต้องใช้กระบวนการ
                          และการรักษาความปลอดภัยที่เพียงพอครบถ้วนตามข้อกำหนด
                          เพื่อป้องกันไวรัสและความถูกต้องของฐานข้อมูลขาเข้าและขาออก
                          รวมทั้ง
                          มีการดูแลรักษาช่องทางภายนอกซึ่งเข้าสู่เว็บไซต์ของบริษัทในการประกอบฐานข้อมูลที่หายไปขึ้นใหม่
                        </p>
                        <br />
                        <p>
                          บริษัทจะไม่รับผิดต่อความสูญเสียหรือความเสียหาย
                          ที่เกิดขึ้นจากการโจมตีด้วยโปรแกรมขัดขวางการให้บริการ
                          (DDoS) ไวรัส หรือสิ่งที่เป็นอันตรายอื่นในทางเทคโนโลยี
                          ซึ่งอาจจะเป็นการป้อนไฟล์อันตรายเข้าสู่อุปกรณ์คอมพิวเตอร์
                          โปรแกรมคอมพิวเตอร์ ฐานข้อมูลของ Influencer
                          หรือข้อมูลอื่นที่มีเจ้าของ ข้อมูลส่วนบุคคล
                          และเนื้อหาของ Influencer อันเนื่องมาจากการใช้ Saypilot
                          Platform หรือบริการใดๆ โดย Influencer
                          หรือรายการใดๆที่ได้มาโดยผ่าน Saypilot Platform
                          หรือการดาวน์โหลดของ Influencer ซึ่งข้อความใดๆ
                          ที่ประกาศลงบน Saypilot Platform หรือเว็บไซต์ใดๆ
                          ที่เชื่อมต่อกับ Saypilot Platform
                        </p>
                        <br />
                        <p>
                          ในการใช้ Saypilot Platform เนื้อหา และบริการ
                          หรือรายการใดๆ ของ Saypilot Platform ที่ได้รับผ่านทาง
                          Saypilot Platform นั้น เป็นความเสี่ยงของ Influencer
                          เอง โดย Saypilot Platform เนื้อหา และบริการ
                          หรือรายการใดๆของ Saypilot Platform
                          ที่ได้รับมาโดยผ่านทาง Saypilot Platform นั้น
                          ถูกจัดหาให้ “ตามที่เป็น” และ “ตามที่มี”
                          โดยไม่มีการรับประกันไม่ว่าประการใด
                          ไม่ว่าโดยชัดแจ้งหรือโดยปริยาย ทั้งนี้
                          บริษัทหรือบุคคลที่เกี่ยวข้องกับบริษัท
                          ไม่ได้ให้การรับประกัน
                          หรือการรับรองเกี่ยวกับความสมบูรณ์ ความปลอดภัย
                          ความน่าเชื่อถือ คุณภาพ ความถูกต้อง หรือการมีอยู่ของ
                          Saypilot Platform และโดยไม่จำกัดเพียงที่กล่าวมาข้างต้น
                          บริษัทหรือบุคคลใดที่เกี่ยวข้องกับบริษัทนั้น
                          ไม่รับรองหรือรับประกันว่า Saypilot Platform
                          เนื้อหาและบริการ หรือรายการใดๆ ของ Saypilot Platform
                          ที่ได้รับมาโดยผ่านทาง Saypilot Platform จะถูกต้อง
                          เชื่อถือได้ ปราศจากความผิดพลาด หรือไม่ถูกรบกวน
                          หรือซึ่งความชำรุดบกพร่องจะได้รับการแก้ไข หรือเว็บไซต์
                          หรือเซอร์เวอร์ของบริษัทที่มีอยู่นั้นจะปราศจากไวรัส
                          หรือส่วนประกอบอื่นที่เป็นอันตราย หรือ Saypilot
                          Platform หรือบริการ หรือรายการใดๆ ที่ได้รับมาผ่านทาง
                          Saypilot Platform เป็นไปตามความต้องการ
                          หรือความคาดหวังของ Influencer
                        </p>
                        <br />
                        <p>
                          บริษัทขอปฏิเสธการรับประกันทั้งหมดไม่ว่าประการใด
                          ไม่ว่าจะโดยชัดแจ้งหรือโดยปริยาย โดยกฎหมาย
                          หรือโดยประการอื่น ซึ่งรวมถึงแต่ไม่จำกัดเพียง
                          การรับประกันใดๆ เกี่ยวกับสภาพความเหมาะสมในเชิงพาณิชย์
                          การปราศจากการละเมิด
                          และความเหมาะสมสำหรับวัตถุประสงค์ใดๆ นอกจากนี้
                          บริษัทไม่รับประกันว่า Influencer จะได้รับข้อเสนอ
                          หรือการชำระเงินใดๆ จากการใช้บริการ Saypilot Platform
                          หรือบริการอื่นของบริษัท
                        </p>
                        <br />
                        <p>
                          ข้อความข้างต้นไม่กระทบต่อการรับประกันใดๆ
                          ที่ไม่สามารถยกเว้น หรือจำกัดได้ตามกฎหมาย
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        20. ข้อจำกัดความรับผิด
                      </h3>
                      <br />
                      <div className="text-sm">
                        <p>
                          ไม่ว่ากรณีใด บริษัท บริษัทในเครือ
                          หรือผู้อนุญาตให้ใช้สิทธิ ผู้ให้บริการ ลูกจ้าง ตัวแทน
                          เจ้าหน้าที่ หรือกรรมการของบริษัท
                          จะไม่ต้องรับผิดต่อความเสียหายไม่ว่าประเภทใดที่เกิดขึ้นจาก
                          หรือเกี่ยวข้องกับการใช้งานของ Influencer
                          หรือการไม่สามารถใช้งาน Saypilot Platform เว็บไซต์
                          หรือบริการเครือข่ายสังคมออนไลน์ที่เชื่อมต่อไปยัง
                          Saypilot Platform เนื้อหาใดๆ บน Saypilot Platform
                          หรือเว็บไซต์อื่นดังกล่าว หรือบริการ หรือรายการใดๆ
                          ที่ได้รับผ่านทาง Saypilot Platform
                          หรือเว็บไซต์อื่นดังกล่าว รวมถึงความเสียหายโดยอ้อม
                          ความเสียหายพิเศษ ความเสียหายที่แท้จริงตามธรรมดา
                          ความเสียหายอันเป็นผลสืบเนื่อง หรือความเสียหายเชิงลงโทษ
                          ซึ่งรวมถึงแต่ไม่จำกัดเพียง การบาดเจ็บของบุคคล
                          ความเจ็บปวด และความทุกข์ทรมาน ความกดดันทางอารมณ์
                          การสูญเสียรายได้ การสูญเสียกำไร ความสูญเสียทางธุรกิจ
                          หรือจำนวนเงินที่คาดหมาย ความสูญเสียจากการใช้งาน
                          ความสูญเสียในค่าความนิยม การสูญเสียในฐานข้อมูล
                          และไม่ว่าเกิดขึ้นจากการละเมิด
                          (รวมถึงความประมาทเลินเล่อ) การผิดสัญญา
                          หรือโดยประการอื่น แม้ว่าจะคาดหมายได้อยู่ก่อนแล้ว
                        </p>
                        <br />
                        <p>
                          ไม่ว่ากรณีใดความรับผิดร่วมกันของบริษัท
                          และบริษัทในเครือ รวมถึงผู้อนุญาตให้ใช้สิทธิ
                          ผู้ให้บริการ ลูกจ้าง ตัวแทน เจ้าหน้าที่
                          และกรรมการของบริษัท ที่มีต่อฝ่ายใดๆ
                          (โดยไม่คำนึงถึงรูปแบบของการกระทำ ไม่ว่าจะโดยสัญญา
                          การละเมิด หรือโดยประการอื่น)
                          จะไม่เกินไปกว่าจำนวนเงินที่ Influencer
                          ได้ชำระให้แก่บริษัทสำหรับบริการที่เกี่ยวข้องในรอบระยะเวลาหนึ่งเดือนสุดท้ายที่เกิดความรับผิดขึ้น
                        </p>
                        <br />
                        <p>
                          Influencer ต้องใช้สิทธิเรียกความเสียหาย
                          อันเกิดจากต้นเหตุใดๆ แห่งการกระทำที่เกิดขึ้นจาก
                          หรือที่เกี่ยวข้องกับข้อกำหนดการใช้งานนี้ หรือ Saypilot
                          Platform ภายในหนึ่ง (1) ปี
                          นับแต่ต้นเหตุแห่งการกระทำนั้นได้เกิดขึ้น มิฉะนั้นแล้ว
                          ให้ถือว่า Influencer
                          ไม่ประสงค์จะใช้สิทธิเรียกร้องอีกต่อไป
                        </p>
                        <br />
                        <p>
                          ข้อความข้างต้นจะไม่กระทบต่อความรับผิดที่ไม่สามารถยกเว้น
                          หรือจำกัดได้ตามกฎหมาย
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">21. ค่าสินไหมทดแทน</h3>
                      <br />
                      <div className="text-sm">
                        <p>
                          Influencer ตกลงที่จะต่อสู้ ชดใช้ค่าสินไหมทดแทน
                          และไม่ทำให้บริษัท บริษัทในเครือ ผู้อนุญาตให้ใช้สิทธิ
                          และผู้ให้บริการ รวมถึงผู้ที่เกี่ยวข้องกับบุคคลข้างต้น
                          กล่าวคือ เจ้าหน้าที่ กรรมการ ลูกจ้าง ผู้รับเหมา ตัวแทน
                          ผู้อนุญาตให้ใช้สิทธิ ผู้จัดหา ผู้สืบสิทธิ
                          และผู้รับโอนต้องเสียหายจาก และเนื่องด้วยข้อเรียกร้อง
                          ความรับผิด ความเสียหาย คำตัดสิน คำชี้ขาด ความสูญเสีย
                          ต้นทุน ค่าใช้จ่าย หรือค่าธรรมเนียม
                          (รวมถึงค่าทนายความตามสมควร) ซึ่งเกิดจาก
                          หรือที่เกี่ยวกับการที่ Influencer
                          ฝ่าฝืนข้อกำหนดการใช้งานนี้ หรือการใช้ Saypilot
                          Platform ซึ่งรวมถึง แต่ไม่จำกัดเพียง เนื้อหาของ
                          Influencer การใช้ใดๆ ซึ่งเนื้อหาของ Saypilot Platform
                          บริการ
                          และสินค้านอกเหนือจากที่ได้รับอนุญาตโดยชัดแจ้งในข้อกำหนดการใช้นี้
                          หรือการที่ Influencer ใช้ข้อมูลที่ได้รับมาจาก Saypilot
                          Platform
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        22. การสละสิทธิ์ และการแยกต่างหากจากกัน
                      </h3>
                      <br />
                      <div className="text-sm">
                        <p>
                          การงดเว้น
                          หรือความล่าช้าจากฝ่ายบริษัทในการใช้สิทธิส่วนใดส่วนหนึ่งภายใต้ข้อกำหนดการใช้งาน
                          จะไม่ถือว่าเป็นการสละสิทธิ์
                        </p>
                        <br />
                        <p>
                          หากข้อกำหนดการใช้งานนั้นถูกตัดสินโดยศาลหรือองค์คณะอื่นใดที่มีเขตอำนาจ
                          ว่าไม่สมบูรณ์ ขัดต่อกฎหมาย
                          หรือไม่สามารถบังคับได้ไม่ว่าด้วยเหตุผลใด
                          ให้ข้อกำหนดดังกล่าวถูกตัดออกไป
                          หรือจำกัดขอบเขตการใช้ให้น้อยที่สุด
                          โดยข้อกำหนดการใช้งานที่เหลืออยู่นั้น
                          ยังคงมีผลบังคับโดยสมบูรณ์ต่อไป
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        23. กฎหมายที่ใช้บังคับ และเขตอำนาจศาล
                      </h3>
                      <br />
                      <div className="text-sm">
                        <p>
                          ทั้งสองฝ่ายตกลงกัน (โดยจะไม่เพิกถอน)
                          ว่าให้ข้อกำหนดการใช้งานนี้อยู่ภายใต้บังคับของกฎหมาย
                          และกฎระเบียบของประเทศไทย
                          และให้อยู่ภายใต้เขตอำนาจของศาลในประเทศไทย
                        </p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        24. ความเห็น และข้อเสนอแนะของ Influencer
                      </h3>
                      <br />
                      <div className="_f-system">
                        <p>
                          Saypilot Platform นี้ ดำเนินการโดย บริษัท เซย์ไพรอท
                          จำกัด
                        </p>
                        <br />
                        <p>
                          หาก Influencer มีผลตอบรับ ความเห็น
                          การร้องขอสำหรับการสนับสนุนทางเทคนิค
                          และการติดต่อสื่อสารอื่นๆ ที่เกี่ยวข้องกับ Saypilot
                          Platform นั้น Influencer
                          ควรส่งเรื่องราวเหล่านั้นทางอีเมล์ดังต่อไปนี้ :
                          <a
                            href="mailto:contact@Saypilot.com"
                            className="_c-black"
                          >
                            <u>contact@Saypilot.com</u>
                          </a>
                        </p>
                        <p>ขอบคุณสำหรับการเยี่ยมชม Saypilot Platform</p>
                      </div>
                    </section>
                    <br />
                    <section>
                      <h3 className="title-with-border">
                        25. รายการสินค้า และบริการต้องห้าม
                      </h3>
                      <br />
                      <div className="_f-system">
                        <p>
                          รายการสินค้า และบริการต้องห้าม รวมถึงรายการต่างๆ
                          ดังต่อไปนี้:
                        </p>
                        <br />
                        <ul className="list-bullet-gray">
                          <li>
                            เครื่องดื่มแอลกอฮอล์ สุราทุกประเภท
                            (สำหรับประเทศที่มีการประกาศให้การโฆษณา
                            ประชาสัมพันธ์สินค้าประเภทนี้
                            เป็นการกระทำความผิดตามกฎหมาย)
                          </li>
                          <br />
                          <li>
                            ยาสูบ ซิการ์ และสินค้าทั้งหมดที่เกี่ยวข้องกับการสูบ
                            (สำหรับประเทศที่มีการประกาศให้การโฆษณา
                            ประชาสัมพันธ์สินค้าประเภทนี้
                            เป็นการกระทำความผิดตามกฎหมาย)
                          </li>
                          <br />
                          <li>
                            อาวุธปืน และสินค้าทั้งหมดที่เกี่ยวข้องกับอาวุธ
                          </li>
                          <br />
                          <li>
                            สินค้าประเภทสัตว์ และสัตว์ป่า
                            ซึ่งรวมถึงแต่ไม่จำกัดเพียง สัตว์ที่มีชีวิต
                            ตัวอย่างสัตว์ ครีบฉลาม และงาช้าง
                          </li>
                          <br />
                          <li>
                            ยา อุปกรณ์ ชุดรักษาสุขภาพทางการแพทย์
                            ซึ่งรวมถึงแต่ไม่จำกัดเพียง ใบสั่งยา
                            อุปกรณ์ควบคุมจังหวะหัวใจ
                            และเครื่องมือสำหรับการผ่าตัด
                          </li>
                          <br />
                          <li>ทรัพย์สินที่ได้มาโดยการลักขโมย</li>
                          <br />
                          <li>บริการค้าประเวณี หรือค้ามนุษย์</li>
                          <br />
                          <li>สินค้าปลอม</li>
                          <br />
                          <li>
                            การพนัน หรือการให้บริการใดๆ
                            ที่เกี่ยวกับสิ่งลามกอนาจาร หรือขายเหล้า อาวุธปืน
                            บุหรี่ และยาเสพติด หรือขาย
                            และ/หรือให้บริการที่เกี่ยวกับซอฟท์แวร์
                            โปรแกรมคอมพิวเตอร์ เพลง ภาพยนตร์
                            (ซึ่งผู้ค้าไม่ได้เป็นเจ้าของลิขสิทธิ์
                            หรือไม่มีสิทธิโดยชอบที่จะดำเนินการ)
                            หรือสินค้าและ/หรือบริการใดๆ
                            ในอนาคตที่อาจฝ่าฝืนต่อกฎหมาย
                            และศีลธรรมอันดีของประชาชน
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {spec && (
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
                  onClick={() => handleModal(2)}
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
                    นโยบายคุ้มครองข้อมูลส่วนบุคคล
                  </h3>
                  <br />
                  <div className="mt-2">
                    <div
                      className="wrapper-scroll do-nicescroll left-align page-term"
                      tabIndex={5000}
                      // style="overflow: hidden; outline: none; cursor: -webkit-grab;"
                    >
                      <section>
                        <h3 className="title-with-border">1. บทนำ</h3>
                        <div className="_f-system">
                          <p>
                            บริษัทคือ บริษัท เทลสกอร์ จำกัด เป็นสื่อกลางระหว่าง
                            Influencer กับ Marketer
                            ที่ต้องการสร้างปรากฏการณ์การสื่อสารแบบใหม่ที่ทรงประสิทธิภาพ
                          </p>
                          <br />
                          <p>
                            บริษัทเชื่อว่า
                            การสร้างการรับรู้จากประสบการณ์ของผู้ใช้งานควบคู่กับการมีส่วนร่วมจากแบรนด์
                            คือ สิ่งสำคัญที่จะทำให้การสื่อสารมีความหมาย
                            น่าจดจำและไปได้ไกลกว่าการโฆษณาทั่วไป
                            ซึ่งจะทำให้เกิดเป็นปรากฏการณ์การสื่อสารแบบใหม่
                            ที่ทรงประสิทธิภาพและวัดผลได้แม่นยำกว่า
                          </p>
                          <br />
                          <p>
                            สืบเนื่องจากการเป็นสื่อกลางระหว่าง Influencer หรือ
                            Marketer
                            ทำให้บริษัทจำเป็นต้องเก็บรวบรวมข้อมูลของท่าน
                            เพื่อนำมาใช้และ/หรือถ่ายทอดให้แก่บุคคลที่มีความสนใจที่เข้าร่วมในระบบปฏิบัติการของเทลสกอร์
                            (“Saypilot Platform”) ทั้งนี้ บริษัท เทลสกอร์ จำกัด
                            มีฐานะเป็นผู้ควบคุมข้อมูลส่วนบุคคล
                            ตามความในพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.
                            2562
                          </p>
                          <br />
                          <p>
                            ด้วยความเคารพในความเป็นส่วนตัวของท่านทั้งหลายที่ให้เกียรติเข้าร่วมเป็นส่วนหนึ่งในการสร้างปรากฏการณ์การสื่อสารแบบใหม่
                            เราจึงได้กำหนดนโยบายการเก็บรวบรวม
                            ใช้และเปิดเผยข้อมูลส่วนบุคคล (นโยบาย) ฉบับนี้ขึ้น
                            เพื่อแจ้งให้ท่านทั้งหลาย ทั้งที่มีสถานะเป็น
                            Influencer และ/หรือ Marketer ทราบถึงเรื่องต่างๆ
                            ดังนี้
                          </p>
                          <br />
                          <ul className="list-bullet-gray">
                            <li>บทนำ</li>
                            <li>บริษัทคือใคร</li>
                            <li>
                              บริษัทเก็บรวบรวมข้อมูลของท่าน
                              เพื่อวัตถุประสงค์อะไร
                            </li>
                            <li>
                              บริษัทเก็บรวบรวมข้อมูลอะไร เพื่อนำไปใช้
                              หรือถ่ายทอดต่อ
                            </li>
                            <li>
                              บริษัทอนุญาตให้ใครเข้าถึงข้อมูลของท่านได้บ้าง
                            </li>
                            <li>
                              บริษัทคำนึงถึงสิทธิของท่านผู้เป็นเจ้าของข้อมูลอย่างไร
                            </li>
                            <li>การใช้งาน การดูแลรักษา การป้องกัน</li>
                            <li>การเปลี่ยนแปลงนโยบาย</li>
                          </ul>
                          <br />
                          <p>
                            นโยบายฉบับนี้จะใช้กับข้อมูลที่บริษัทได้รวบรวมจาก :
                          </p>
                          <br />
                          <ul className="list-bullet-gray">
                            <li>Saypilot Platform</li>
                            <li>
                              อีเมล์ ข้อความ
                              และข้อความอิเล็กทรอนิกส์อื่นที่ท่านได้สื่อสารกับ
                              Saypilot Platform
                            </li>
                            <li>
                              แอปพลิเคชันบนโทรศัพท์มือถือ และบนคอมพิวเตอร์
                              ที่ท่านดาวน์โหลดจาก Saypilot Platform
                              ที่มีระบบปฏิบัติการระหว่างกันได้โดยลำพังแบบไม่ต้องผ่านเบราเซอร์
                              (non-browser-based interaction) ระหว่างท่าน และ
                              Saypilot Platform นี้
                            </li>
                          </ul>
                          <br />
                          <p>นโยบายนี้ไม่ใช้กับข้อมูลที่ได้รับจาก :</p>
                          <br />
                          <ul className="list-bullet-gray">
                            <li>
                              ช่องทางแบบออฟไลน์ของบริษัท
                              หรือผ่านทางวิธีการอื่นใดที่ดำเนินการโดยบริษัท
                              หรือบุคคลภายนอกใดๆ (รวมถึงบริษัทในเครือ
                              และบริษัทย่อย) หรือ
                            </li>
                            <li>
                              บุคคลภายนอกใดๆ (รวมถึงบริษัทในเครือ และบริษัทย่อย)
                              ซึ่งรวมถึงช่องทางผ่านทางแอปพลิเคชัน หรือเนื้อหาใดๆ
                              (รวมถึงโฆษณา) ซึ่งอาจเชื่อมต่อไปยัง
                              หรือสามารถเข้าถึงได้จากหรือบน Saypilot Platform
                            </li>
                          </ul>
                          <br />
                          <p>
                            บริษัทขอให้ท่านโปรดอ่านนโยบายฉบับนี้อย่างละเอียด
                            เพื่อให้เข้าใจถึงนโยบาย
                            แนวทางและวิธีปฏิบัติของบริษัทเกี่ยวกับข้อมูลของท่าน
                            หากท่านเห็นว่านโยบาย
                            แนวทางและวิธีปฏิบัติของบริษัทไม่ตรงตามความประสงค์ของท่าน
                            ท่านสามารถเลือกที่จะไม่ใช้งาน Saypilot Platform ได้
                            อย่างไรก็ดี หากท่านเห็นว่า
                            ท่านได้รับความคุ้มครองอย่างเหมาะสมจากนโยบาย
                            แนวทางและวิธีปฏิบัติของเราเกี่ยวกับข้อมูลของท่านและท่านประสงค์จะให้ความยินยอมแก่บริษัทในการเก็บรวบรวม
                            ใช้ และเปิดเผยข้อมูลของท่านแล้ว
                            บริษัทใคร่ขอให้ท่านยืนยันการรับทราบ
                            ยินยอมและยอมรับนโยบายฉบับนี้
                            โดยการกดเครื่องหมาย&nbsp;
                            <strong>“ยอมรับ”</strong>
                            &nbsp;หรือ&nbsp;
                            <strong>“Accept”</strong>
                            &nbsp;ที่แสดงบนหน้าจอของท่าน ก่อนเริ่มการใช้
                            Saypilot Platform
                          </p>
                          <br />
                          <p>
                            บริษัทใคร่ขอแจ้งให้ท่านทราบ ณ ที่นี้ว่า
                            นโยบายความฉบับนี้อาจถูกแก้ไข เปลี่ยนแปลง
                            เพื่อให้สอดคล้องกับสถานการณ์ กฎ ระเบียบ ประกาศ
                            หรือกฎหมายที่จะเกิดขึ้นในอนาคต (โปรดอ่านหัวข้อ
                            การเปลี่ยนแปลงของนโยบาย) ทั้งนี้
                            บริษัทจะพยายามอย่างดีที่สุดที่จะแจ้งให้ท่านทราบถึงการเปลี่ยนแปลงดังกล่าว
                            (โดยไม่ถือเป็นหน้าที่ของบริษัท) ในกรณีเช่นว่านั้น
                            บริษัทใคร่รบกวนให้ท่านโปรดอ่านนโยบายเป็นระยะๆ
                            เพื่อให้เข้าใจถึงนโยบาย
                            แนวทางและวิธีปฏิบัติของเราเกี่ยวกับข้อมูลของท่าน
                            ในกรณีที่ Saypilot Platform
                            ได้แจ้งให้ทราบถึงการเปลี่ยนแปลงนโยบาย
                            และท่านยังคงเห็นว่า
                            ท่านได้รับความคุ้มครองอย่างเหมาะสมจากนโยบายที่เปลี่ยนแปลงไปนั้น
                            บริษัทใคร่ขอให้ท่านยันการยอมรับนโยบายนี้ (ฉบับแก้ไข)
                            โดยการกดเครื่องหมาย “ยอมรับ” หรือ “Accept”
                            ที่แสดงบนหน้าจอของท่าน ก่อนเริ่มการใช้ Saypilot
                            Platform ต่อไป
                          </p>
                          <br />
                          <p>
                            ในกรณีที่ท่านเป็นบุคคลที่มีอายุต่ำกว่า 20 ปีบริบูรณ์
                            บริษัทขอเรียนให้ท่านทราบว่าภายหลังท่านกดเครื่องหมาย
                            “ยอมรับ” หรือ “Accept” แล้ว
                            บริษัทอาจมีขั้นตอนการดำเนินการเพิ่มเติมสำหรับท่าน
                            ซึ่งบริษัทจะแจ้งให้ท่านทราบตามช่องทางการติดต่อที่ท่านระบุไว้
                          </p>
                          <br />
                          <p>
                            อย่างไรก็ตาม ท่านสามารถถอนยินยอมในการเก็บรวบรวม ใช้
                            และเปิดเผยข้อมูลส่วนบุคคลของท่านที่ได้ให้ไว้กับบริษัทได้ตลอดเวลาโดยวิธีการและช่องทางที่บริษัทกำหนดไว้ในหัวข้อที่
                            2
                            ซึ่งการถอนความยินยอมดังกล่าวจะไม่มีผลกระทบต่อการดำเนินการของบริษัทที่ได้กระทำไปก่อนจะได้รับการแจ้งถอนความยินยอมจากท่าน
                          </p>
                          <br />
                        </div>
                      </section>
                      <section>
                        <h3 className="title-with-border">2. บริษัทคือใคร</h3>
                        <div className="_f-system">
                          <p>
                            บริษัท เทลสกอร์ จำกัด
                            จดทะเบียนเป็นนิติบุคคลประเภทบริษัทจำกัดตามกฎหมายไทย
                            เมื่อวันที่ 14 กันยายน 2559
                            เพื่อประกอบกิจการให้บริการด้านการตลาดผ่านสื่อออนไลน์
                            โดยมีสำนักงานแห่งใหญ่ตั้งอยู่ห้อง 1701 ชั้น 17
                            อาคารจัตุรัสจามจุรี 319 ถนนพญาไท แขวงปทุมวัน
                            เขตปทุมวัน กรุงเทพมหานคร 10330
                          </p>
                          <br />
                          <p>
                            ท่านสามารถติดต่อบริษัทในฐานะของผู้ควบคุมข้อมูล
                            เพื่อสอบถามข้อมูลเพิ่มเติมเกี่ยวกับนโยบาย
                            และแนวทางปฏิบัติของบริษัทในส่วนที่เกี่ยวกับคุ้มครองข้อมูลส่วนบุคคลหรือแจ้งความประสงค์หรือร้องขอให้บริษัทดำเนินการใด
                            ๆ ผ่านอีเมล์ :
                            <a href="mailto:contact@Saypilot.com">
                              contact@Saypilot.com
                            </a>
                          </p>
                          <br />
                        </div>
                      </section>
                      <section>
                        <h3 className="title-with-border">
                          3. บริษัทเก็บรวบรวมข้อมูลของท่าน เพื่อวัตถุประสงค์อะไร
                        </h3>
                        <div className="_f-system">
                          <p>
                            บริษัทเก็บรวบรวมข้อมูลของท่าน
                            เพื่อนำข้อมูลของท่านไปใช้ตามวัตถุประสงค์ต่างๆ ดังนี้
                          </p>
                          <br />
                          <ul className="list-bullet-gray">
                            <li>
                              เพื่อนำเสนอ Saypilot Platform และเนื้อหาของ
                              Saypilot Platform ให้แก่ท่าน
                            </li>
                            <li>
                              เพื่อจัดหาข้อมูล สินค้า
                              หรือบริการซึ่งท่านร้องขอจากบริษัท
                            </li>
                            <li>
                              เพื่อการติดต่อระหว่างท่าน กับ บริษัท และ/หรือ
                              บุคคลอื่น อันเกี่ยวกับสินค้าและบริการของบริษัท
                              และของบุคคลภายนอก ซึ่งอาจรวมถึง
                              การนำเสนอข้อมูลของท่านในที่ต่างๆ เพื่อการโฆษณา
                              ประชาสัมพันธ์ตัวท่านตามรูปแบบการทำงานของ Saypilot
                              Platform
                              ตลอดระยะเวลาที่ท่านยังคงให้ความยินยอมแก่บริษัท
                              ตามนโยบายฉบับนี้
                            </li>
                            <li>
                              เพื่อให้บรรลุวัตถุประสงค์อื่นใดๆ ที่ Saypilot
                              Platform และ/หรือที่กฎหมายกำหนด
                            </li>
                            <li>
                              เพื่อรวบรวมฐานข้อมูลเชิงสถิติเกี่ยวกับบริการของบริษัท
                            </li>
                            <li>
                              เพื่อจัดให้มีการบอกกล่าวแก่ท่าน
                              เกี่ยวกับบัญชี/การลงชื่อติดตาม (subscription)
                              รวมถึงการบอกกล่าวเกี่ยวกับการสิ้นอายุ
                              และการต่ออายุ
                            </li>
                            <li>
                              เพื่อปฏิบัติตามภาระหน้าที่ของบริษัท
                              และบังคับตามสิทธิของเราที่เกิดขึ้นตามสัญญาฉบับใดๆ
                              ที่บริษัทได้ทำกับท่าน รวมถึง การแจ้งยอดหนี้
                              และการเรียกเก็บเงิน
                            </li>
                            <li>
                              เพื่อแจ้งท่านเกี่ยวกับการเปลี่ยนแปลงที่มีต่อ
                              Saypilot Platform หรือสินค้า หรือบริการใดๆ
                              ที่บริษัทได้นำเสนอ หรือจัดหาให้ผ่าน Saypilot
                              Platform
                            </li>
                            <li>
                              เพื่อให้ท่านสามารถเข้าร่วมใช้ Saypilot Platform
                              ในลักษณะพิเศษ
                            </li>
                            <li>
                              เพื่อการนำไปเปิดเผยแก่บริษัทในกลุ่มและพันธมิตรของบริษัท
                              (ซึ่งหมายถึงบริษัทที่เทลสกอร์เข้าไปถือหุ้น
                              หรือบริษัทที่เข้ามาถือหุ้นของเทลสกอร์
                              หรือบริษัทที่เข้าทำสัญญาในการประกอบธุรกิจกับเทลสกอร์)
                              เพื่อประโยชน์ในการนำเสนอสินค้าและบริการแก่ท่าน
                            </li>
                            <li>
                              ใช้เพื่อวิธีการอื่นตามที่บริษัทจะแจ้งให้ท่านทราบและขอความยินยอมจากท่านเพิ่มเติมต่อไปในอนาคต
                            </li>
                          </ul>
                          <p>
                            ในกรณีที่บริษัทใช้เทคโนโลยีจัดเก็บข้อมูลแบบอัตโนมัติ
                            (automatic data collection technologies) นั้น
                            อาจทำให้บริษัทได้ฐานข้อมูลเชิงสถิติ
                            อันมีข้อมูลส่วนบุคคลรวมอยู่ด้วย
                            หรือบริษัทอาจคงไว้ซึ่ง
                            หรือเชื่อมโยงข้อมูลดังกล่าวกับข้อมูลส่วนบุคคลที่บริษัทได้เก็บรวบรวมมาโดยวิธีการอื่น
                            หรือได้รับข้อมูลจากบุคคลภายนอก
                            ข้อมูลที่ได้เหล่านั้นจะช่วยให้บริษัทสามารถปรับปรุง
                            Saypilot Platform เพื่อให้บริการที่ดีขึ้น
                            และที่ตรงกับความต้องการมากขึ้น
                            ซึ่งทำให้บริษัทสามารถดำเนินการดังต่อไปนี้ได้
                          </p>
                          <br />{" "}
                          <ul className="list-bullet-gray">
                            <li>
                              ประเมินจำนวนและรูปแบบการใช้งานของผู้ติดตามของบริษัท
                            </li>{" "}
                            <li>
                              เก็บรักษาข้อมูลเกี่ยวกับความชอบของท่าน
                              ซึ่งทำให้บริษัทสามารถนำมาปรับเปลี่ยนรูปแบบของ
                              Saypilot Platform ให้ตรงกับความสนใจของท่านได้
                            </li>{" "}
                            <li>เพิ่มความรวดเร็วให้แก่การค้นหาให้แก่ท่าน</li>{" "}
                            <li>
                              จดจำท่านได้ เมื่อท่านกลับมาใช้ Saypilot Platform
                              อีกครั้ง
                            </li>
                          </ul>
                          <p>
                            หากบริษัทประสงค์จะเก็บรวบรวมข้อมูลของท่านนอกเหนือไปจากวัตถุประสงค์ที่ระบุข้างต้น
                            บริษัทจะแจ้งวัตถุประสงค์ใหม่ให้ท่านรับทราบและขอความยินยอมจากท่านอีกครั้ง
                          </p>
                          <br />
                        </div>
                      </section>
                      <section>
                        <h3 className="title-with-border">
                          4. บริษัทเก็บรวบรวมข้อมูลอะไร เพื่อนำไปใช้
                          หรือถ่ายทอดต่อ
                        </h3>
                        <div className="_f-system">
                          <p>
                            ในการให้บริการของบริษัท
                            บริษัทมีความจำเป็นต้องขอให้ท่านกรอกข้อมูลของท่านก่อนเริ่มการใช้งาน
                            Saypilot Platform
                            ซึ่งหากท่านไม่ยินยอมให้ข้อมูลแก่บริษัท
                            อาจจะส่งผลให้บริษัทไม่สามารถนำเสนอสินค้าและบริการที่เหมาะสมและตรงตามความต้องการของท่านได้
                            และในบางครั้ง
                            บริษัทจำเป็นต้องเก็บรวบรวมข้อมูลของท่านจากแหล่งอื่นๆ
                            (นอกจากการเก็บข้อมูลจากท่าน)&nbsp;ซึ่งบริษัทจะแจ้งให้ท่านทราบภายใน
                            30 วันนับแต่วันที่เก็บรวบรวม
                            และในกรณีที่บริษัทจะนำข้อมูลดังกล่าวของท่านไปเปิดเผย
                            บริษัทจะแจ้งให้ท่านทราบก่อนการนำข้อมูลนั้นไปเปิดเผยเป็นครั้งแรก
                            โดยบริษัทมีแนวทางและวิธีการในการเก็บรวบรวมข้อมูลของท่าน
                            ดังนี้
                          </p>
                          <br />{" "}
                          <div className="sub">
                            <h3 className="title-with-border sub-title">
                              4.1 การเก็บรวบรวมข้อมูล
                            </h3>
                            <p>บริษัทจะเก็บรวบรวมข้อมูลต่างๆ ดังนี้</p>
                            <br />
                            <ul className="list-bullet-gray">
                              <li>
                                ข้อมูลใดๆ ซึ่งทำให้สามารถระบุตัวตนของท่านได้
                                ไม่ว่าทางตรงหรือทางอ้อม จะถือเป็น&nbsp;
                                <strong>“ข้อมูลส่วนบุคคล”</strong>
                                &nbsp;ที่จะได้รับความคุ้มครองตามนโยบายฉบับนี้
                                ซึ่งรวมถึง
                                <ul className="list-bullet-border-gray">
                                  <li>
                                    ข้อมูลเกี่ยวกับตัวท่าน อันได้แก่ ชื่อ
                                    นามสกุล อายุ เพศ เชื้อชาติ เผ่าพันธุ์
                                    ความเชื่อและ/หรือความคิดเห็นในด้านต่างๆ
                                    พฤติกรรมทางเพศ ประวัติส่วนตัว ข้อมูลสุขภาพ
                                    ความถนัด และคุณสมบัติอื่นๆ
                                  </li>
                                  <li>
                                    ข้อมูลเกี่ยวกับภูมิลำเนา ถิ่นที่อยู่
                                    สถานที่ติดต่อ
                                  </li>
                                  <li>
                                    ข้อมูลเกี่ยวกับการติดต่อ เช่น ที่อยู่
                                    ที่ทำงาน อ เบอร์โทรศัพท์
                                    บัญชีผู้ใช้ทางสื่อสังคมออนไลน์ (social media
                                    account)
                                  </li>
                                  <li>
                                    การระบุตัวตนอื่นใดๆ
                                    ซึ่งท่านอาจได้รับการติดต่อผ่านทางระบบออนไลน์
                                    หรือออฟไลน์ และ/หรือ
                                  </li>
                                  <li>
                                    ข้อมูลส่วนตัวของท่านที่เปิดเผยต่อสาธารณะด้วยความยินยอมของท่าน
                                  </li>
                                </ul>
                              </li>
                              <li>
                                ข้อมูลอื่นใดที่เกี่ยวกับท่าน
                                แต่ไม่ได้ระบุถึงตัวตนของท่านเป็นการส่วนตัว
                                และ/หรือข้อมูลที่เกี่ยวกับการเชื่อมต่ออินเทอร์เน็ตของท่าน
                                และอุปกรณ์ที่ท่านใช้ในการเข้าถึง Saypilot
                                Platform และข้อมูลการใช้งาน
                              </li>
                            </ul>
                            <p>
                              ในกรณีที่บริษัทต้องการเก็บรวบรวมข้อมูลส่วนบุคคลของท่านนอกเหนือไปจากที่ระบุไว้ข้างต้น
                              บริษัทจะแจ้งให้ท่านทราบและขอความยินยอมจากท่านอีกครั้งหนึ่ง
                            </p>
                            <br />
                          </div>
                          <div className="sub">
                            <h3 className="title-with-border sub-title">
                              4.2 วิธีการจัดเก็บข้อมูล
                            </h3>
                            <p>
                              บริษัทเก็บรวบรวมข้อมูลของท่านด้วยวิธีการต่างๆ
                              ดังนี้
                            </p>
                            <br />
                            <ul className="list-bullet-gray">
                              <li>
                                ด้วยวิธีการสื่อสารกับท่านโดยตรง
                                และท่านเป็นผู้ให้ข้อมูลผ่านวิธีการสื่อสารนั้น
                              </li>
                              <li>
                                ด้วยวิธีการอัตโนมัติจากการเข้าสู่ Saypilot
                                Platform ผ่านทางเว็บไซต์
                                ซึ่งข้อมูลที่ได้รับโดยอัตโนมัตินั้นอาจรวมถึงรายละเอียดการใช้งาน
                                ที่อยู่บนเครือข่ายของคอมพิวเตอร์ (IP addresses)
                                และข้อมูลที่ได้รับผ่านทางคุกกี้ (cookies)
                                และเทคโนโลยีการติดตามอื่นๆ (tracking
                                technologies)
                              </li>
                              <li>
                                ด้วยวิธีการติดต่อกับบุคคลอื่นๆ อาทิเช่น
                                Influencer Marketer
                                หรือบุคคลอื่นที่เกี่ยวข้องกับ Saypilot Platform
                                และรวมถึงบริษัทในเครือ บริษัทในกลุ่ม
                                ผู้ได้รับสิทธิจากบริษัทให้ดำเนินการภายใต้
                                Saypilot Platform และคู่ค้าทางธุรกิจของบริษัท
                              </li>
                            </ul>
                            <p>
                              ข้อมูลซึ่งบริษัทได้รับจาก หรือผ่าน Saypilot
                              Platform ในรูปแบบต่างๆ
                              ซึ่งรวมถึงข้อมูลที่เราอาจใช้เทคโนโลยีจัดเก็บฐานข้อมูลแบบอัตโนมัติ
                              (automatic data collection technologies)
                              เพื่อเก็บรวบรวมข้อมูลนั้นๆ ซึ่งประกอบไปด้วย
                            </p>
                            <br />
                            <ul className="list-bullet-gray">
                              <li>
                                ข้อมูลที่ท่านได้กรอกแบบฟอร์มบน Saypilot Platform
                                ซึ่งรวมถึง ข้อมูลที่ให้ไว้ในขณะที่
                                <ul className="list-bullet-border-gray">
                                  <li>ลงทะเบียนเพื่อใช้ Saypilot Platform</li>
                                  <li>
                                    ลงชื่อติดตาม (subscribing) บริการของบริษัท
                                  </li>
                                  <li>ประกาศข้อความผ่านอินเทอร์เน็ต</li>
                                  <li>การร้องขอบริการเพิ่มเติม หรือ</li>
                                  <li>
                                    ข้อมูลที่ท่านรายงานปัญหาเกี่ยวกับ Saypilot
                                    Platform
                                  </li>
                                </ul>
                              </li>
                              <li>
                                บันทึก
                                และสำเนาการติดต่อสื่อสารระหว่างกันในรูปแบบต่างๆ
                                รวมถึง การติดต่อผ่านอีเมล
                              </li>
                              <li>
                                รายละเอียดของธุรกรรมที่ท่านทำผ่าน Tellscrore
                                Platform อาทิเช่น การสร้างแคมเปญ
                                การกำหนดกลุ่มเป้าหมาย ชื่อสินค้าหรือบริการ
                                คำอธิบายสินค้า จุดเด่นของสินค้าหรือบริการ
                                คู่แข่ง การสั่งงาน เป้าหมายงาน
                              </li>
                              <li>
                                รายละเอียดในการปฏิบัติตามคำสั่งของท่าน
                                โดยท่านอาจถูกร้องขอให้แจ้งข้อมูลทางการเงินก่อนทำคำสั่งซื้อผ่านทาง
                                Tellscrore Platform
                              </li>
                              <li>คำค้นหาของท่านที่ระบุบน Saypilot Platform</li>
                              <li>
                                ข้อมูลที่ถูกท่านเผยแพร่
                                หรือแสดงข้อมูลบนพื้นที่สาธารณะของ Saypilot
                                Platform (“ประกาศ”)
                                หรือส่งข้อมูลผ่านไปยังบุคคลอื่นๆ ที่ใช้ Saypilot
                                Platform หรือบุคคลภายนอก (“เนื้อหาของผู้ใช้”)
                                <br />
                                <br />
                                <u>หมายเหตุ</u>&nbsp;การที่ท่านเผยแพร่ประกาศ
                                และ/หรือส่งเนื้อหาของผู้ใช้รายอื่นผ่าน Saypilot
                                Platform
                                บริษัทจะถือว่าท่านได้ทราบและยอมรับความเสี่ยงที่อาจจะเกิดขึ้น
                                ทั้งนี้
                                แม้ว่าท่านอาจกำหนดการตั้งค่าความเป็นส่วนตัวสำหรับข้อมูลดังกล่าวได้
                                โดยเข้าสู่ระบบบัญชีส่วนตัวของท่านก็ตาม
                                บริษัทขอเรียนให้ท่านทราบว่าไม่มีมาตรการรักษาความปลอดภัยใดที่จะสมบูรณ์แบบ
                                หรือไม่สามารถเข้าถึงได้
                                บริษัทไม่สามารถควบคุมการกระทำของผู้ใช้รายอื่น
                                ซึ่งอาจเผยแพร่ประกาศและ/หรือเนื้อหาของผู้ใช้ที่ท่านให้แก่บุคคลอื่นๆ
                                ดังนั้น บริษัทไม่สามารถและไม่รับประกันได้ว่า
                                การประกาศและ/หรือการส่งเนื้อหาของผู้ใช้ของท่านจะไม่ถูกพบเห็นโดยบุคคลที่ไม่พึงประสงค์
                                อย่างไรก็ตาม
                                บริษัทได้ตระหนักและปฏิบัติตามมาตรฐานในการรักษาความปลอดภัยของข้อมูลและความปลอดภัยทางเทคโนโลยีสารสนเทศในระดับสากลอย่างเต็มที่ที่สุดแล้ว{" "}
                              </li>
                              <li>
                                รายละเอียดการเข้าเยี่ยมชม Saypilot Platform
                                รวมถึงข้อมูลจราจรทางคอมพิวเตอร์ (traffic data)
                                ข้อมูลตำแหน่งที่ตั้ง
                                บันทึกข้อมูลเรียงตามลำดับเวลา (logs)
                                และข้อมูลการติดต่อสื่อสารอื่น
                                และแหล่งที่ท่านเข้าถึง และใช้บน Saypilot
                                Platform
                              </li>
                              <li>
                                ข้อมูลเกี่ยวกับคอมพิวเตอร์
                                การเชื่อมต่ออินเทอร์เน็ตของท่าน
                                รวมถึงที่อยู่บนเครือข่ายของคอมพิวเตอร์ (IP
                                addresses) ระบบปฏิบัติการ และประเภทของเบราเซอร์
                                (browser type)
                              </li>
                            </ul>
                          </div>{" "}
                          <div className="sub">
                            <h3 className="title-with-border sub-title">
                              4.3 ระยะเวลาในการจัดเก็บข้อมูล
                            </h3>{" "}
                            <p>
                              เพื่อประโยชน์ของท่าน
                              บริษัทจะเก็บข้อมูลส่วนบุคคลของท่าน
                              รวมทั้งประวัติการแก้ไขเพิ่มเติมข้อมูล
                              ไว้ในฐานข้อมูลของบริษัทตลอดระยะเวลาที่ท่านยังไม่ได้ถอนความยินยอมหรือใช้สิทธิลบข้อมูลส่วนบุคคลของท่าน
                              และบริษัทใคร่ขอเรียนว่า
                              หากท่านใช้สิทธิลบข้อมูลส่วนบุคคลของท่านแล้ว
                              ข้อมูลส่วนบุคคลนั้นจะถูกทำลายไปโดยทันทีและบริษัทจะไม่สามารถดำเนินการกู้คืนข้อมูลดังกล่าวได้
                              ไม่ว่าในกรณีใด
                            </p>
                            <br />
                          </div>
                        </div>
                      </section>
                      <section>
                        <h3 className="title-with-border">
                          5. บริษัทอนุญาตให้ใครเข้าถึงข้อมูลของท่านได้บ้าง
                        </h3>{" "}
                        <div className="_f-system">
                          <div className="sub">
                            <h3 className="title-with-border sub-title">
                              5.1 การใช้ เปิดเผย หรือถ่ายทอดข้อมูล
                            </h3>{" "}
                            <p>
                              นอกจากการเก็บรวบรวมข้อมูลข้างต้นแล้ว
                              บริษัทจำเป็นต้องนำข้อมูลของท่านไปใช้ เปิดเผย
                              หรือถ่ายทอดให้แก่ Influencer หรือ Marketer
                              หรือบุคคลอื่นที่เกี่ยวข้องกับ Saypilot Platform
                              ไม่ว่าอยู่ในประเทศหรือต่างประเทศ ซึ่งรวมถึง
                            </p>
                            <br />{" "}
                            <ul className="list-bullet-gray">
                              <li>บริษัทย่อย บริษัทในเครือ บริษัทในกลุ่ม</li>
                              <li>หน่วยงานราชการ</li>
                              <li>
                                ผู้ได้รับสิทธิจากบริษัทให้ดำเนินการภายใต้
                                Saypilot Platform และคู่ค้าทางธุรกิจของบริษัท
                              </li>
                              <li>
                                ให้แก่ผู้รับเหมา ผู้ให้บริการ
                                หรือบุคคลภายนอกอื่น
                                ซึ่งให้การสนับสนุนธุรกิจของบริษัทซึ่งเข้าทำสัญญาการให้และ/หรือรับบริการจากบริษัท
                                ไม่ว่าจะตั้งอยู่ในประเทศหรือต่างประเทศ
                                โดยหน่วยงานดังกล่าวยอมรับที่จะปฏิบัติตามนโยบายนี้รวมถึงแต่ไม่จำกัดเพียง
                                บริษัทด้านการจัดการ Influencer ผู้จัดการ
                                Influencer บริษัทด้านเทคโนโลยี,
                                ด้านการสื่อสารโทรคมนาคม, พัฒนาซอฟต์แวร์
                                บริษัทด้านความปลอดภัยทางเทคโนโลยีสารสนเทศ
                                บริษัทด้านการสื่อสารหรือโฆษณาประชาสัมพันธ์
                                บริษัทโลจิสติกส์
                              </li>
                              <li>
                                ให้แก่ผู้ซื้อ
                                หรือผู้สืบสิทธิอื่นในกรณีมีการควบรวม
                                การขายกิจการ การปรับโครงสร้างทั่วไป
                                การปรับโครงสร้างองค์กร การเลิกกิจการ หรือการขาย
                                หรือโอนลักษณะอื่นซึ่งสินทรัพย์เพียงบางส่วน
                                หรือทั้งหมดของเรา
                                ไม่ว่าโดยการดำเนินธุรกิจตามปกติ
                                หรือเป็นส่วนหนึ่งของการล้มละลาย การชำระบัญชี
                                หรือกระบวนการในทำนองเดียวกัน
                                ซึ่งข้อมูลส่วนบุคคลที่บริษัทครอบครองอยู่อันเกี่ยวกับ
                                Saypilot Platform
                                สำหรับผู้ใช้นั้นรวมอยู่ในสินทรัพย์ที่โอนด้วย
                              </li>
                              <li>
                                ให้แก่บุคคลภายนอกที่ต้องการทำการตลาดสำหรับสินค้าหรือบริการกับท่าน
                                โดยที่ท่านไม่ได้ถอนความยินยอมในการเปิดเผยข้อมูลของท่าน
                              </li>
                              <li>
                                ให้แก่บุคคลใดๆ เพื่อให้บรรลุจุดมุ่งหมายของ
                                Saypilot Platform ตามที่ได้กล่าวไว้ในหัวข้อที่ 3
                                แล้ว
                              </li>
                            </ul>{" "}
                            <p>
                              ในกรณีที่บริษัทต้องการเปิดเผยข้อมูลส่วนบุคคลของท่านแก่บุคคลอื่นนอกจากจากที่ระบุไว้ข้างต้น
                              บริษัทและแจ้งให้ท่านรับทราบและขอความยินยอมจากท่านอีกครั้งหนึ่ง
                            </p>
                            <br />
                          </div>{" "}
                          <div className="sub">
                            <h3 className="title-with-border sub-title">
                              5.2 การส่ง หรือโอนข้อมูลให้แก่บุคคลในประเทศอื่น
                            </h3>{" "}
                            <p>
                              ในบางครั้ง บริษัทอาจมีความจำเป็นต้องส่ง
                              หรือโอนข้อมูลของท่านให้แก่บุคคลในประเทศอื่น
                              แต่ทั้งนี้ บริษัทจะใช้ความพยายามอย่างดีที่สุด
                              ที่จะพิจารณาว่าผู้ที่ได้รับการส่ง
                              หรือรับโอนข้อมูลของท่านจะมีมาตรการให้ความคุ้มครองข้อมูลส่วนบุคคลที่ไม่ต่ำไปกว่านโยบายความฉบับนี้
                              อย่างไรก็ตาม
                              ในกรณีที่บุคคลในประเทศอื่นนั้นมีมาตรฐานการคุ้มครองข้อมูลส่วนบุคคลที่ต่ำไปกว่านโยบายนี้
                              บริษัทจะแจ้งให้ท่านพิจารณาและขอความยินยอมจากท่านอีกครั้ง
                              และหากท่านเห็นว่ามาตรฐานการคุ้มครองข้อมูลส่วนบุคคลไม่เพียงพอ
                              ท่านสามารถร้องขอให้บริษัทระงับการส่งหรือโอนข้อมูลของท่านให้แก่บุคคลในประเทศอื่นได้ตามช่องทางที่บริษัทกำหนดไว้ในหัวข้อที่
                              2
                            </p>
                            <br />{" "}
                            <h3 className="title-with-border sub-title">
                              5.3 การใช้คุกกี้โดยบุคคลภายนอก
                              และเทคโนโลยีการติดตามอื่น
                            </h3>{" "}
                            <p>
                              เนื้อหา และแอปพลิเคชันในบางส่วน รวมถึงโฆษณาบน
                              เทลสกอร์แพลตฟอร์ม นั้น ดำเนินการโดยบุคคลภายนอก
                              รวมไปถึงผู้โฆษณา เครือข่ายโฆษณา (ad networks)
                              และเซอร์เวอร์ ผู้ให้บริการเนื้อหา
                              และผู้ให้บริการแอปพลิเคชัน
                              ซึ่งบุคคลภายนอกเหล่านี้อาจใช้คุกกี้เพียงอย่างเดียว
                              หรือใช้ร่วมกับเว็บไซต์ บีคอนส์
                              หรือเทคโนโลยีการติดตามอื่น
                              เพื่อเก็บรวบรวมข้อมูลเกี่ยวกับท่านเมื่อท่านใช้
                              Saypilot Platformทั้งนี้
                              ข้อมูลที่พวกเขาเก็บรวบรวมอาจเกี่ยวโยงกับข้อมูลส่วนบุคคลของท่าน
                              หรือพวกผู้ให้บริการอาจรวบรวมข้อมูล
                              ซึ่งรวมถึงข้อมูลส่วนบุคคลเกี่ยวกับกิจกรรมทางออนไลน์ตามช่วงเวลา
                              หรือ จาก Saypilot Platformอื่นที่ต่างกัน
                              และบริการออนไลน์อื่นๆ
                              โดยพวกเขาอาจใช้ข้อมูลนี้เพื่อจัดหาโฆษณาซึ่งตรงกับความสนใจ
                              (เชิงพฤติกรรม) ของท่าน หรือเนื้อหาที่สนใจอื่นๆ
                            </p>
                            <br />{" "}
                            <p>
                              บริษัทไม่ได้ควบคุมเทคโนโลยีการติดตามต่างๆเหล่านี้ของบุคคลภายนอก
                              หรือวิธีการที่เทคโนโลยีนั้นจะถูกใช้งาน
                              หากท่านมีคำถามเกี่ยวกับการโฆษณา
                              หรือเนื้อหาที่น่าสนใจอื่นๆ
                              ท่านควรติดต่อกับผู้ให้บริการซึ่งรับผิดชอบโดยตรง
                            </p>
                            <br />{" "}
                            <h3 className="title-with-border sub-title">
                              5.4 การเปิดเผยข้อมูลในกรณีอื่นๆ
                            </h3>{" "}
                            <ul className="list-bullet-gray">
                              <li>
                                เพื่อปฏิบัติตามคำสั่งศาล กฎหมาย
                                หรือกระบวนการทางกฎหมาย
                                รวมถึงเพื่อดำเนินการตามการร้องขอของเจ้าหน้าที่ตามกฎหมาย
                                หรือทางราชการ
                              </li>
                              <li>
                                เพื่อบังคับตาม หรือบังคับใช้
                                ข้อกำหนดการใช้งานของบริษัท และสัญญาฉบับอื่น
                                รวมถึงเพื่อวัตถุประสงค์ในการแจ้งยอดหนี้
                                และการเรียกเก็บเงิน
                              </li>
                              <li>
                                หากบริษัทเห็นว่าการเปิดเผยนั้นมีความจำเป็น
                                หรือเหมาะสมเพื่อการปกป้องสิทธิ ทรัพย์สิน
                                หรือเพื่อความปลอดภัยของบริษัท ลูกค้า
                                หรือบุคคลอื่น
                                ซึ่งรวมถึงการแลกเปลี่ยนข้อมูลกันระหว่างบริษัท
                                และองค์กรอื่น
                                เพื่อวัตถุประสงค์ในการป้องกันการฉ้อฉล
                                และลดความเสี่ยงจากการผิดนัดชำระหนี้ (Credit
                                risk)
                              </li>
                              <li>
                                เพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวกับการจัดทำเอกสารประวัติศาสตร์หรือจดหมายเหตุ
                                เพื่อประโยชน์สาธารณะ
                                หรือที่เกี่ยวกับการศึกษาวิจัยหรือสถิติซึ่งได้จัดให้มีมาตรการปกป้องที่เหมาะสม
                                เพื่อคุ้มครองสิทธิและเสรีภาพของเจ้าของข้อมูลส่วนบุคคล
                              </li>
                              <li>
                                เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย
                                หรือสุขภาพของบุคคล
                              </li>
                              <li>
                                เป็นการจำเป็นเพื่อการปฏิบัติหน้าที่ในการดำเนินภารกิจเพื่อประโยชน์สาธารณะของบริษัท
                                หรือปฏิบัติหน้าที่ในการใช้อำนาจรัฐที่ได้มอบให้แก่บริษัท
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>
                      <section>
                        <h3 className="title-with-border">
                          6.
                          บริษัทคำนึงถึงสิทธิของท่านผู้เป็นเจ้าของข้อมูลอย่างไร
                        </h3>
                        <div className="_f-system">
                          <p>ท่านในฐานะเจ้าของข้อมูลมีสิทธิต่าง ๆ ดังนี้</p>
                          <br />
                          <div className="sub">
                            <h3 className="title-with-border sub-title">
                              6.1 สิทธิเข้าถึงข้อมูลส่วนบุคคลของท่าน
                            </h3>
                            <p>
                              ท่านสามารถเข้าถึงข้อมูลส่วนบุคคลของท่านที่อยู่ภายในความรับผิดชอบของบริษัท
                              เพื่อตรวจสอบและเปลี่ยนแปลงข้อมูลส่วนบุคคลของท่าน
                              และเข้าเยี่ยมชมหน้าบัญชีส่วนตัวของท่าน
                              โดยการเข้าสู่ระบบ Saypilot Platform ได้ตลอดเวลา
                            </p>
                            <br />
                            <p>
                              ทั้งนี้
                              การเข้าถึงหรือการใช้งานที่เหมาะสมซึ่งข้อมูลที่อยู่บน
                              Saypilot Platform รวมถึง
                              เนื้อหาของผู้ใช้นั้นอยู่ภายใต้บังคับของข้อกำหนดการใช้งานของบริษัท
                            </p>
                            <br />
                            <h3 className="title-with-border sub-title">
                              6.2 สิทธิขอรับสำเนาข้อมูลส่วนบุคคลของท่าน
                            </h3>
                            <p>
                              ท่านสามารถขอรับสำเนาข้อมูลส่วนบุคคลของท่านที่อยู่ภายใต้ความรับผิดชอบของบริษัทได้
                              ตามวิธีการและช่องทางที่บริษัทกำหนดไว้ในหัวข้อที่ 2
                            </p>
                            <br />
                            <h3 className="title-with-border sub-title">
                              6.3
                              สิทธิขอให้เปิดเผยถึงการได้มาซึ่งข้อมูลส่วนบุคคลที่ท่านไม่ได้ให้ความยินยอม
                            </h3>
                            <p>
                              ในกรณีที่บริษัทได้เก็บรวบรวมข้อมูลจากแหล่งอื่นตามที่ท่านระบุไว้ในหัวข้อที่
                              4
                              ท่านสามารถร้องขอให้บริษัทเปิดเผยถึงการได้มาซึ่งข้อมูลดังกล่าวได้ตามวิธีการและช่องทางที่บริษัทกำหนดไว้ในหัวข้อที่
                              2
                            </p>
                            <br />
                            <h3 className="title-with-border sub-title">
                              6.4 สิทธิคัดค้านการเก็บรวบรวม ใช้
                              หรือการเปิดเผยข้อมูลส่วนบุคคลของท่าน
                            </h3>
                            <p>
                              บริษัทตระหนักดีถึงความสำคัญของข้อมูลส่วนบุคคลของท่าน
                              ดังนั้น ท่านสามารถคัดค้านการเก็บรวบรวม ใช้
                              หรือเปิดเผยข้อมูลส่วนบุคคลของท่านต่อบริษัทได้ตลอดเวลา
                              เว้นแต่บริษัทจะมีสิทธิโดยชอบตามกฎหมายที่จะปฏิเสธการคำคัดค้านของท่าน
                            </p>
                            <br />
                            <h3 className="title-with-border sub-title">
                              6.5 สิทธิในการลบ หรือขอให้ทำลาย
                              หรือระงับการใช้ชั่วคราว
                              หรือแปลงข้อมูลให้อยู่ในรูปแบบข้อมูลที่ไม่ระบุชื่อ
                            </h3>
                            <p>
                              เว้นแต่
                              บริษัทมีหน้าที่ต้องปฏิบัติตามที่กฎหมายกำหนดไว้เป็นการเฉพาะหรือข้อมูลส่วนบุคคลที่บริษัทเก็บรวบรวมไว้เพื่อวัตถุประสงค์ในการใช้เสรีภาพในการแสดงความคิดเห็น
                              ท่านสามารถลบข้อมูลของท่านออกจาก Saypilot Platform
                              แล้วสำเนาข้อมูลของท่านเก็บไว้
                              รวมถึงการร้องขอให้บริษัทระงับการใช้ข้อมูลส่วนบุคคลของท่านไว้เป็นการชั่วคราว
                              อย่างไรก็ตามสำเนาข้อมูลของท่านอาจจะยังสามารถถูกพบเห็นได้ในหน่วยเก็บความจำชั่วคราวขนาดเล็ก
                              หรือหน้าเว็บที่ถูกบันทึก (cached and archived
                              pages) หรืออาจถูกทำสำเนา
                              หรือเก็บรักษาโดยผู้ใช้รายอื่นภายใต้ Saypilot
                              Platform
                            </p>
                            <br />
                            <p>
                              หากบริษัทไม่ปฏิบัติตามนโยบาย
                              หรือกฎหมายที่เกี่ยวข้อง ท่านสามารถขอให้บริษัททำลาย
                              หรือระงับใช้ชั่วคราว
                              หรือแปลงข้อมูลให้อยู่ในรูปแบบข้อมูลที่ไม่ระบุชื่อได้&nbsp;เว้นแต่
                              กฎหมายจะกำหนดให้บริษัทยังคงมีหน้าที่ต้องเก็บรักษาข้อมูลนั้นต่อไป
                            </p>
                            <br />
                            <h3 className="title-with-border sub-title">
                              6.6 สิทธิขอให้ทำข้อมูลให้เป็นปัจจุบัน
                              สมบูรณ์และไม่ก่อให้เกิดความเข้าใจผิด
                            </h3>
                            <p>
                              ในกรณีที่ข้อมูลส่วนบุคคลของท่านไม่เป็นปัจจุบัน
                              ไม่สมบูรณ์
                              ซึ่งอาจจะก่อให้เกิดความเข้าใจผิดต่อบุคคลภายนอกได้
                              ท่านสามารถดำเนินการปรับปรุงข้อมูลส่วนบุคคลของท่านให้เป็นปัจจุบัน
                              สมบูรณ์และไม่ก่อให้เกิดความเข้าผิดได้ตลอดเวลาผ่าน
                              Saypilot Platform ด้วยตัวของท่านเอง อย่างไรก็ตาม
                              หากระบบของบริษัทมีความผิดพลาดหรือท่านพบปัญหาหรืออุปสรรคใด
                              ทำให้ท่านไม่สามารถดำเนินการด้วยตนเองได้
                              ท่านสามารถแจ้งให้บริษัทดำเนินการได้ตามวิธีและช่องทางที่บริษัทกำหนดไว้ในหัวข้อที่
                              2
                            </p>
                            <br />
                            <h3 className="title-with-border sub-title">
                              6.7 สิทธิร้องเรียนต่อหน่วยงานที่เกี่ยวข้อง
                            </h3>
                            <p>
                              ในกรณีที่บริษัทเป็นผู้ควบคุมข้อมูลตามนิยามในพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
                              พ.ศ. 2562
                              หากบริษัทไม่ปฏิบัติตามการร้องขอหรือการใช้สิทธิของท่าน
                              ท่านในฐานะเจ้าของข้อมูลส่วนบุคคลย่อมมีสิทธิร้องเรียนบริษัทต่อหน่วยงานที่เกี่ยวข้องและมีหน้าที่รับผิดชอบได้
                            </p>
                            <br />
                            <p>
                              ทั้งนี้
                              บริษัทขอเรียนชี้แจงว่าการใช้สิทธิของท่านตามที่ปรากฎในหัวข้อ
                              6
                              นี้จะต้องไม่เป็นก่อให้เกิดความเสียหายต่อสิทธิและเสรีภาพของบุคคลอื่น
                              หากเป็นกรณีดังกล่าว
                              หรือเป็นกรณีที่บริษัทจำเป็นต้องปฏิบัติตามกฎหมายหรือคำสั่งศาล
                              บริษัทขอสงวนสิทธิที่จะไม่ดำเนินการตามคำขอของท่าน
                            </p>
                            <br />
                          </div>
                        </div>
                      </section>
                      <section>
                        <h3 className="title-with-border">
                          7. การใช้งาน การดูแลรักษา การป้องกัน
                        </h3>
                        <div className="_f-system">
                          <p>
                            เราอาจใช้เทคโนโลยีจัดเก็บฐานข้อมูลแบบอัตโนมัติ
                            (automatic data collection technologies) ดังต่อไปนี้
                          </p>
                          <br />
                          <div className="sub">
                            <h3 className="title-with-border sub-title">
                              7.1 บันทึกข้อมูลการเยี่ยมชมเว็บไซต์ หรือ คุกกี้
                              (Cookies) หรือ (browser cookies)
                            </h3>
                            <p>
                              คุกกี้เป็นไฟล์ขนาดเล็กซึ่งบันทึกอยู่ในอุปกรณ์บันทึกข้อมูล
                              (Hard drive) ของคอมพิวเตอร์ของท่าน
                              ซึ่งท่านอาจปฏิเสธที่จะยอมรับ browser cookies ได้
                              โดยการเปิดใช้งานการตั้งค่าที่เหมาะสมบน browser
                              ของท่าน อย่างไรก็ตาม หากท่านเลือกการตั้งค่าเช่นนี้
                              ท่านอาจไม่สามารถเข้าถึงบางส่วนของ Saypilot
                              Platform ได้ ทั้งนี้ เนื่องจาก Saypilot Platform
                              จะสร้าง Cookies ขึ้นมา ดังนั้น
                              ท่านจึงได้ปรับการตั้งค่า browser ของท่านที่ปฏิเสธ
                              Cookies ที่ Saypilot Platform สร้างขึ้น
                            </p>
                            <br />
                            <h3 className="title-with-border sub-title">
                              7.2 แฟลช คุกกี้ (Flash Cookies)
                            </h3>
                            <p>
                              ลักษณะพิเศษบางประการของ Saypilot Platform
                              นั้นอาจใช้ข้อมูลที่จัดเก็บในคอมพิวเตอร์ (local
                              stored objects) (หรือ Flash Cookies) เพื่อรวบรวม
                              และจัดเก็บข้อมูลเกี่ยวกับความชอบส่วนตัว
                              และการนำท่านไปยัง หรือจาก และบน Saypilot Platform
                              ทั้งนี้ Flash Cookies ไม่ได้ถูกจัดการโดยการตั้งค่า
                              browser เหมือนกับที่ใช้สำหรับ browser cookies
                              สำหรับข้อมูลเกี่ยวกับการจัดการความเป็นส่วนตัวของท่าน
                              และการตั้งค่าการรักษาความปลอดภัยสำหรับ Flash
                              Cookies นั้น โปรดอ่านหัวข้อ วิธีการที่บริษัทใช้
                              และเปิดเผยข้อมูลของท่านในข้อ 7.4
                            </p>
                            <br />
                            <h3 className="title-with-border sub-title">
                              7.3 เว็บ บีคอนส์ (Web Beacons)
                            </h3>{" "}
                            <p>
                              หน้าเว็บของ Saypilot Platform และ email ของบริษัท
                              อาจมีไฟล์อิเล็กทรอนิกส์ขนาดเล็ก ที่รู้กันในชื่อ
                              Web Beacons ประกอบอยู่ หรือบางครั้งรู้จักในชื่อ
                              กิฟส์ (gifs) พิกเซล แทกซ์ (pixel tags) และ
                              กิฟส์แบบพิกเซลเดี่ยว (single-pixel gifs)
                              ซึ่งทำให้บริษัทสามารถนับจำนวนผู้ใช้ที่เข้าเยี่ยมชม
                              Saypilot Platform หรือ ผู้ใช้ที่รับอีเมล์ของบริษัท
                              และข้อมูลสถิติอื่นที่เกี่ยวข้องกับ Saypilot
                              Platform อาทิเช่น การบันทึกเนื้อหาบน Saypilot
                              Platform ที่ได้รับความนิยม, การตรวจสอบระบบ
                              และความสมบูรณ์ของเซอร์เวอร์ (Server)
                            </p>
                            <br />
                            <h3 className="title-with-border sub-title">
                              7.4 ทางเลือกเกี่ยวกับวิธีการใช้งาน
                              และเปิดเผยข้อมูลของท่าน
                            </h3>
                            <p>
                              บริษัทมุ่งมั่นที่จะมอบทางเลือกต่างๆ
                              ให้แก่ท่านสำหรับข้อมูลส่วนบุคคลที่ท่านให้ไว้แก่บริษัทนั้น
                              บริษัทได้สร้างกลไกสำหรับท่านเพื่อจัดให้มีการควบคุมข้อมูลของท่าน
                              ดังนี้:
                            </p>
                            <br />
                            <ul className="list-bullet-gray">
                              <li>
                                <p>เทคโนโลยีการติดตาม และโฆษณา</p>
                                <br />
                                <p>
                                  ท่านสามารถตั้งค่า browser เพื่อปฏิเสธ browser
                                  cookies ทั้งหมดหรือบางส่วน
                                  หรือเพื่อแจ้งเตือนท่านในเวลาที่มีการส่ง
                                  cookies ทั้งนี้
                                  เพื่อศึกษาวิธีการจัดการกับการตั้งค่าสำหรับ
                                  Flash Cookies
                                  ให้ท่านเข้าเยี่ยมชมหน้าเว็บไซต์การตั้งค่าสำหรับ
                                  Flash Player บน Saypilot Platform ของ Adobe's
                                  Saypilot Platform ซึ่งหากท่านยกเลิกการทำงาน
                                  หรือปฏิเสธ cookies
                                  โปรดทราบว่าบางส่วนของเว็บไซต์นี้อาจจะไม่สามารถเข้าถึงได้
                                  หรือไม่สามารถทำงานได้อย่างเหมาะสม
                                </p>
                                <br />
                              </li>
                              <li>
                                <p>
                                  การเปิดเผยข้อมูลของท่านสำหรับการโฆษณาของบุคคลภายนอก
                                </p>
                                <br />
                                <p>
                                  หากท่านไม่ต้องการให้บริษัทแบ่งปันข้อมูลส่วนบุคคลของท่านให้แก่บุคคลภายนอก
                                  ซึ่งไม่ใช่บริษัทในเครือ หรือที่ไม่ใช่ตัวแทน
                                  เพื่อวัตถุประสงค์ในการส่งเสริมการขายนั้น
                                  ท่านสามารถเลือกที่จะเพิกถอนความยินยอมได้
                                  นอกจากนี้
                                  ท่านสามารถทำการยกเลิกคำสั่งได้ตลอดเวลา
                                  โดยการเข้าสู่ระบบ Saypilot Platform
                                  และทำการปรับเปลี่ยนในหัวข้อความชอบของผู้ใช้ในบัญชีส่วนตัวของท่าน
                                  โดยการเลือก หรือยกเลิก
                                  กล่องตั้งค่าที่เกี่ยวข้อง
                                  หรือโดยส่งอีเมล์มาที่{" "}
                                  <a href="mailto:contact@Saypilot.com">
                                    contact@Saypilot.com
                                  </a>{" "}
                                  พร้อมระบุความประสงค์ของท่าน
                                </p>
                                <br />
                              </li>
                              <li>
                                <p>ข้อเสนอส่งเสริมการขาย</p>
                                <br />
                                <p>
                                  หากท่านไม่ประสงค์ให้ที่อยู่อีเมล์
                                  /ข้อมูลการติดต่อของท่านถูกใช้ในการส่งเสริมการขายสินค้า
                                  หรือบริการของเรา หรือของบุคคลภายนอก
                                  ท่านสามารถเลือกที่จะเพิกถอนความยินยอมได้
                                  หรือเข้าสู่ระบบ Saypilot Platform
                                  เพื่อปรับเปลี่ยนในหัวข้อความชอบของผู้ใช้ในบัญชีส่วนตัวของท่าน
                                  โดยการเลือกหรือยกเลิก
                                  กล่องตั้งค่าที่เกี่ยวข้อง หรือโดยส่งมาที่{" "}
                                  <a href="mailto:contact@Saypilot.com">
                                    contact@Saypilot.com
                                  </a>{" "}
                                  พร้อมระบุความประสงค์ของท่าน
                                </p>
                                <br />
                                <p>
                                  หากท่านได้รับอีเมลส่งเสริมการขายจากเรา
                                  ท่านอาจส่งอีเมลตอบกลับ
                                  เพื่อขอยกเลิกการส่งอีเมลอื่นในอนาคต ทั้งนี้
                                  การยกเลิกคำสั่งนั้นไม่มีผลบังคับถึงข้อมูลที่ท่านได้เคยให้ไว้ก่อนหน้านี้
                                  อันเนื่องมาจากการซื้อสินค้า
                                  การลงทะเบียนการรับประกัน
                                  การรับบริการเกี่ยวกับสินค้า หรือธุรกรรมอื่นๆ
                                </p>
                                <br />
                              </li>
                              <li>
                                <p>การโฆษณาตามเป้าหมาย</p>
                                <br />
                                <p>
                                  หากท่านไม่ต้องการให้เราใช้ข้อมูลที่เก็บรวบรวมไว้
                                  หรือที่ท่านได้ให้ไว้แก่เราในการส่งโฆษณาตามการตั้งค่าความชอบของผู้ชมซึ่งเป็นกลุ่มเป้าหมายของผู้โฆษณา
                                  (advertisers' target-follower preferences)
                                  นั้น ท่านสามารถเลือกที่จะเพิกถอนความยินยอมได้
                                  โดยท่านสามารถปรับเปลี่ยนความชอบส่วนตัวของผู้ใช้สำหรับโฆษณาได้ในบัญชีส่วนตัวของท่าน
                                  โดยการเลือกหรือยกเลิกกล่องตั้งค่าที่เกี่ยวข้อง
                                  หรือโดยส่งอมาที่{" "}
                                  <a href="mailto:contact@Saypilot.com">
                                    contact@Saypilot.com
                                  </a>{" "}
                                  พร้อมระบุความประสงค์ของท่าน
                                </p>
                                <br />
                                <p>
                                  บริษัทไม่มีมาตรการควบคุมการเก็บรวบรวม
                                  หรือการใช้ข้อมูลของท่านโดยบุคคลภายนอก
                                  เพื่อดำเนินการด้านโฆษณาตามความสนใจ
                                  (interest-based advertising) อย่างไรก็ตาม
                                  บุคคลภายนอกเหล่านี้
                                  อาจดำเนินการเพื่อให้ท่านสามารถเลือกที่จะไม่ให้ข้อมูลของท่านถูกเก็บรวบรวม
                                  หรือถูกใช้งานด้วยวิธีนี้
                                </p>
                                <br />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>
                      <br />
                      <section>
                        <h3 className="title-with-border">
                          8. การเปลี่ยนแปลงของนโยบายการเก็บรวบรวม ใช้
                          และเปิดเผยข้อมูลส่วนบุคคล
                        </h3>
                        <div className="_f-system">
                          <p>
                            บริษัทสงวนสิทธิในการแก้ไข
                            เปลี่ยนแปลงนโยบายการเก็บรวบรวม ใช้
                            และเปิดเผยข้อมูลส่วนบุคคลฉบับนี้ (รวมถึงฉบับแก้ไข)
                            เพื่อให้สอดคล้องกับสถานการณ์ กฎ ระเบียบ ประกาศ
                            หรือกฎหมายที่จะเกิดขึ้นในอนาคต ทั้งนี้
                            บริษัทจะประกาศเกี่ยวกับการเปลี่ยนแปลงใดๆ
                            ของนโยบายนี้ในหน้าเว็บไซต์ Saypilot Platform
                            หากมีการเปลี่ยนแปลงในสาระสำคัญ
                            ถึงวิธีการดูแลข้อมูลส่วนบุคคลนั้น
                            บริษัทจะแจ้งเตือนบนหน้าหลักของ Saypilot Platform
                            ทั้งนี้
                            วันที่นโยบายความเป็นส่วนตัวได้รับการปรับปรุงครั้งล่าสุดนั้น
                            จะถูกระบุไว้บริเวณส่วนบนสุดของหน้าเว็บไซต์ Saypilot
                            Platform บริษัทขอย้ำเตือนว่า
                            เพื่อประโยชน์ของตัวท่านเอง ท่านจะต้องติดตาม Saypilot
                            Platform เป็นประจำ เพื่อให้ทราบถึงการเปลี่ยนแปลงใดๆ
                            ที่อาจจะเกิดขึ้น รวมถึงเรื่องนโยบาย (ถ้ามี)
                            และถือเป็นหน้าที่ของท่าน ที่จะต้องทำให้แน่ใจว่า
                            อีเมล์ที่แจ้งไว้บน Saypilot Platform เป็นปัจจุบัน
                            และสามารถใช้งานรับส่งข้อความได้เป็นปกติ
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
        </div>
      )}
    </>
  );
};

export default BindAccount;
