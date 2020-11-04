import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const Share = () => {
  return (
    <div className="flex flex-grow flex-col">
      <div className="container mx-auto text-center">
        <div className="mt-10 text-center text-5xl">เพิ่มรายได้</div>
        <div className="py-10 px-40">
          เพิ่มรายได้ง่ายๆ เพียงแนะนำ Saypilot และส่งลิงก์นี้ให้เพื่อนของคุณ
        </div>
        <div className="">
          รับรายได้เพิ่มพิเศษ 1% ของยอดรายได้เพื่อนทุกครั้ง
          ทันทีที่เพื่อนของคุณสร้างรายได้จากการทำงานบน Tellscore ตลอดระยะเวลา 1
          ปี โดยไม่มีการหักยอดเงินใดๆ จากรายได้เพื่อนของคุณ
        </div>
      </div>
    </div>
  );
};
export default Share;
