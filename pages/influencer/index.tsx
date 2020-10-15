import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useRouter } from "next/router";
import Head from "next/head";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const Schema = Yup.object().shape({
  password: Yup.string()
    .required("This field is required")
    .min(8, "Password must have at least 8 characters"),
  changepassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "The passwords do not match"
    ),
  }),
});

const RegisterInfluencer = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleShowPassConfirm = () => {
    setShowPassConfirm(!showPassConfirm);
  };

  return (
    <div className="flex flex-row flex-1 overflow-hidden bg-white h-screen">
      {/* <SideBar /> */}
      <main className="flex flex-grow relative z-0 overflow-y-auto focus:outline-none ">
        <Head>
          <title>Home | Saypilot</title>
          <meta property="og:title" content="Saypolot" />
          <meta property="og:description" content="" />
        </Head>
        <div className="flex flex-grow flex-col ">
          <div className=" sm:block flex-grow">
            <div className="bg-indigo-500 w-full py-16 px-4 sm:px-6 lg:px-24 ">
              <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
                <div className="max-w-xl mx-auto text-center">
                  <h2 className="text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
                    Influencer
                  </h2>
                  <p className="mt-5 text-xl leading-7 text-indigo-300">
                    นักรีวิว บล็อคเกอร์ และ Content Creator
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full py-16 px-4 sm:px-24 lg:px-64">
              <Formik
                initialValues={{
                  password: "",
                  changepassword: "",
                }}
                validationSchema={Schema}
                onSubmit={() => {}}
              >
                {({
                  values,
                  errors,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                }) => {
                  return (
                    <form>
                      <div>
                        <div>
                          <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              Profile
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                              This information will be displayed publicly so be
                              careful what you share.
                            </p>
                          </div>
                          <div className="mt-6 sm:mt-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:py-5">
                              <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Username
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                    <svg
                                      className=" h-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      />
                                    </svg>
                                  </span>
                                  <input
                                    id="username"
                                    className="flex-1 form-input block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:py-5">
                              <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Password
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                    <svg
                                      className="h-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                      />
                                    </svg>
                                  </span>
                                  <div className="relative w-full">
                                    <input
                                      id="password"
                                      name="password"
                                      type={showPass ? "text" : "password"}
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      value={values.password}
                                      className="flex-1 form-input block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                      <svg
                                        className={`${
                                          showPass && "hidden"
                                        } h-6 text-gray-700 cursor-pointer`}
                                        onClick={() => handleShowPass()}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                        ></path>
                                      </svg>

                                      <svg
                                        className={`${
                                          !showPass && "hidden"
                                        } h-6 text-gray-700 cursor-pointer`}
                                        onClick={() => handleShowPass()}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>

                                <ErrorMessage
                                  component="div"
                                  name="password"
                                  className="text-red-400 text-sm"
                                />
                              </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Confirm Password
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                    <svg
                                      className="h-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                      />
                                    </svg>
                                  </span>
                                  <div className="relative w-full">
                                    <input
                                      id="password"
                                      name="changepassword"
                                      type={
                                        showPassConfirm ? "text" : "password"
                                      }
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      value={values.changepassword}
                                      className="flex-1 form-input block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                      <svg
                                        className={`${
                                          showPassConfirm && "hidden"
                                        } h-6 text-gray-700 cursor-pointer`}
                                        onClick={() => handleShowPassConfirm()}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                        ></path>
                                      </svg>

                                      <svg
                                        className={`${
                                          !showPassConfirm && "hidden"
                                        } h-6 text-gray-700 cursor-pointer`}
                                        onClick={() => handleShowPassConfirm()}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <ErrorMessage
                                  component="div"
                                  name="changepassword"
                                  className="text-red-400 text-sm"
                                />
                              </div>
                            </div>

                            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                htmlFor="photo"
                                className="block text-sm leading-5 font-medium text-gray-700"
                              >
                                Photo
                              </label>
                              <div className="mt-2 sm:mt-0 sm:col-span-2">
                                <div className="flex items-center">
                                  <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                    <svg
                                      className="h-full w-full text-gray-300"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                  </span>
                                  <span className="ml-5 rounded-md shadow-sm">
                                    <button
                                      type="button"
                                      className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                                    >
                                      Change
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                          <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              Personal Information
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                              Use a permanent address where you can receive
                              mail.
                            </p>
                          </div>
                          <div className="mt-6 sm:mt-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                htmlFor="first_name"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                First name
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                                  <input
                                    id="first_name"
                                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                htmlFor="last_name"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Last name
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                                  <input
                                    id="last_name"
                                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Email address
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg rounded-md shadow-sm">
                                  <input
                                    id="email"
                                    type="email"
                                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Country / Region
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                                  <select
                                    id="country"
                                    className="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                  >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                htmlFor="street_address"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Street address
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg rounded-md shadow-sm">
                                  <input
                                    id="street_address"
                                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                City
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                                  <input
                                    id="city"
                                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                htmlFor="state"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                State / Province
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                                  <input
                                    id="state"
                                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                htmlFor="zip"
                                className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                              >
                                ZIP / Postal
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                                  <input
                                    id="zip"
                                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 border-t border-gray-200 pt-5">
                        <div className="flex justify-end">
                          <span className="inline-flex rounded-md shadow-sm">
                            <button
                              type="button"
                              className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                            >
                              Cancel
                            </button>
                          </span>
                          <span className="ml-3 inline-flex rounded-md shadow-sm">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                            >
                              Save
                            </button>
                          </span>
                        </div>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterInfluencer;
