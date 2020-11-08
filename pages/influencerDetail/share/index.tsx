import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
// import All from "./all";
// import NewJob from "./newJob";
// import InProgress from "./inProgress";
// import EndJob from "./endJob";
// import CancelJob from "./cancel";
// import JobDetail from "./jobDetail";

const Share = () => {
  const [menu, setMenu] = useState(1);
  const [sortMenu, setSortMenu] = useState(false);

  const onChangeMenu = (props: any) => {
    // console.log(props);
    setMenu(props);
  };

  return (
    <div className="flex flex-grow flex-col">
      <div className="mt-10 text-center text-5xl">เพิ่มรายได้</div>
      <div>
        <div className="hidden mt-3 sm:block text-center">
          <div>
            เพิ่มรายได้ง่ายๆ เพียงแนะนำ Saypilot และส่งลิงก์นี้ให้เพื่อนของคุณ
          </div>
          <div>
            รับรายได้เพิ่มพิเศษ 1% ของยอดรายได้เพื่อนทุกครั้ง
            ทันทีที่เพื่อนของคุณสร้างรายได้จากการทำงานบน <br /> Saypilot
            ตลอดระยะเวลา 1 ปี โดยไม่มีการหักยอดเงินใดๆ จากรายได้เพื่อนของคุณ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
