import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";
import DataService from "../../service/service";
import Head from "next/head";
import MobileHeader from "../../components/MobileHeader";
import InfluencerSideBar from "../../components/InfluencerSidebar";
// import Job from "./job";
// import Income from "./income";
// import Profile from "./profile";
// import Post from "./post";
// import Share from "./share";
// import Dashboard from "./dashboard";

const Login = () => {
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
      <main className="flex flex-grow w-full relative z-0 overflow-y-auto focus:outline-none">
        <Head>
          <title>Home | Saypilot</title>
          <meta property="og:title" content="Information about Genemator" />
          <meta
            property="og:description"
            content="In this page you can get detailed information about Genemator and his works & experiences."
          />
        </Head>
        <div className="w-full max-w-xs mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
