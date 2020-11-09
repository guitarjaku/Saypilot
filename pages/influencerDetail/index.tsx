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
  const [user, setUser] = useState({});
  const [menu, setMenu] = useState(1);

  const getUser = () => {
    DataService.getAll("")
      .then((res) => {
        console.log(res.data);
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
      <InfluencerSideBar menu={menu} onChangeMenu={onChangeMenu} />
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
        {menu === 2 && <Profile />}
        {menu === 3 && <Income />}
        {menu === 4 && <Job onChangeMenu={onChangeMenu} />}
        {menu === 5 && <Post />}
        {menu === 6 && <Share />}
        {menu === 7 && <JobDetail />}
      </main>
    </div>
  );
};

export default InfluencerDetail;
