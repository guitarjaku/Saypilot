import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";
import DataService from "../../service/service";
import Head from "next/head";
import MobileHeader from "../../components/MobileHeader";
import InfluencerSideBar from "../../components/InfluencerSidebar";
import Job from "./job";
import Income from "./income";
import Profile from "./profile";
import Post from "./post";
import Share from "./share";
import Dashboard from "./dashboard";
import JobDetail from "./job/jobDetail";

const InfluencerDetail = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(1);

  const [user, setUser] = useState({
    id: "1",
    firstname: "Influencer",
    lastname: "Name",
    username: "custommer",
    password: "1234",
    email: "123@123.com",
    phone: "082-212-1231",
    country: "ไทย",
    gender: "ชาย",
    birthday: "11 พ.ย. 2538",
    address: "112/33 ม.14 หนองปรือ บางะลุมง 10150",
    province: "ชลบุรี",
    income: 1500,
    withdraw: 0,
    balance: 1500,
    job: {
      new: [
        {
          id: "11",
          topic: "Saypilot-Welcome Job(10'Nov)",
          type: "เขียนรีวิวและถ่ายภาพ",
          brand: "saypilot",
          date: "12 พ.ย. 2563",
        },
      ],
      inprogress: [],
      cancle: [],
      end: [],
    },
  });

  const getUser = () => {
    DataService.getAll("")
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onChangeMenu = (props: any) => {
    // console.log(props);
    setMenu(props);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row flex-1 overflow-hidden bg-white h-screen">
      <InfluencerSideBar menu={menu} onChangeMenu={onChangeMenu} user={user} />
      <MobileHeader menu={menu} onChangeMenu={onChangeMenu} />
      <main className="flex flex-grow relative z-0 overflow-y-auto focus:outline-none ">
        <Head>
          <title>Home | Saypilot</title>
          <meta property="og:title" content="Information about Genemator" />
          <meta
            property="og:description"
            content="In this page you can get detailed information about Genemator and his works & experiences."
          />
        </Head>
        {menu === 1 && <Dashboard />}
        {menu === 2 && <Profile user={user} />}
        {menu === 3 && <Income user={user} />}
        {menu === 4 && <Job user={user} onChangeMenu={onChangeMenu} />}
        {menu === 5 && <Post user={user} onChangeMenu={onChangeMenu} />}
        {menu === 6 && <Share />}
        {menu === 7 && <JobDetail onChangeMenu={onChangeMenu} />}
      </main>
    </div>
  );
};

export default InfluencerDetail;
