"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Switcher from "../componets/switcher";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const [name, setName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [allFieldsCheck, setAllFieldsCheck] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  function Signup(e) {
    e.preventDefault();
    if (
      isChecked &&
      name != "" &&
      businessEmail != "" &&
      phone != "" &&
      companyName != ""
    ) {
      setAllFieldsCheck(true);
      axios
        // .post("https://common.apiv1.dgiverse.com/site/leadsignup", {
        .post("http://localhost:3001/site/leadSignup", {
          name: name,
          business_email: businessEmail,
          mobile: phone,
          company_name: companyName,
        })
        .then(function (response) {
          // handle success
          //console.log(response);
          setEmailCheck(false);
          setSuccessMessage(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error.response.data.message);
          if (error.response.data.message == "Email is required") {
            setEmailCheck(true);
          }
        });
    }
  }

  return (
    <>
      <section
        className="md:h-screen py-36 flex items-center  bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <Link href="/">
                <Image
                  src="/images/logo-icon.svg"
                  height={74}
                  width={82}
                  className="mx-auto"
                  alt=""
                />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Signup</h5>
              {/* action="auth-signup-success" */}
              <form className="text-start">
                <p className="text-red-600 text-xs">
                  {!allFieldsCheck && "* All fields are required"}
                </p>
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="name">
                      Your Name:
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Harry"
                      name="name"
                      required
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="business_email">
                      Business Email Address:
                    </label>
                    <input
                      id="business_email"
                      type="email"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="name@example.com"
                      name="businessemail"
                      required
                      onChange={(e) => {
                        setBusinessEmail(e.target.value);
                      }}
                    />
                  </div>
                  <p className="text-red-600 text-xs mb-2">
                    {emailCheck && "Incorrect email format"}
                  </p>
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="mobile">
                      Phone :
                    </label>
                    <input
                      id="mobile"
                      type="number"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Contact Number"
                      name="phone"
                      required
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="company_name">
                      Company Name :
                    </label>
                    <input
                      id="company_name"
                      type="name"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Company Name"
                      name="companyname"
                      required
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center w-full mb-0">
                      <input
                        className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        value=""
                        id="AcceptT&C"
                        checked={isChecked}
                        onChange={checkHandler}
                        required
                      />
                      <label
                        className="form-check-label text-slate-400"
                        htmlFor="AcceptT&C"
                      >
                        I Accept{" "}
                        <Link href="/page-terms" className="text-indigo-600">
                          Terms And Condition
                        </Link>
                      </label>
                    </div>
                    <p className="text-red-600 text-xs">
                      {!isChecked && "Please accept our terms and Conditions"}
                    </p>
                  </div>
                </div>
              </form>
              <div className="mb-4">
                <input
                  type="submit"
                  name="send"
                  onClick={(e) => {
                    Signup(e);
                  }}
                  className="py-2 px-5 cursor-pointer inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                  value="Register"
                />
              </div>
              {successMessage && (
                <div className="grid grid-cols-1 gap-[30px]">
                  {/* <div className="shadow dark:shadow-slate-800 rounded bg-white dark:bg-slate-900"> */}
                  {/* <div className="p-5 border-t border-gray-100 dark:border-slate-800"> */}
                  <div
                    className={`bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center ${
                      successMessage ? "" : "hidden"
                    }`}
                  >
                    <div className="relative w-full h-auto max-w-lg p-4">
                      <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setSuccessMessage(!successMessage);
                            router.push("/");
                            // setEmail("");
                          }}
                          className="absolute -top-4 -end-4 text-indigo-600 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hover:text-gray-900 rounded-full text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        >
                          <svg
                            className="w-5 h-5 cursor-pointer"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <div className="p-6 py-10 text-center">
                          <div className="relative overflow-hidden text-transparent -m-3 text-indigo-600">
                            {/* <Icon.Hexagon className="size-32 fill-red-600/5 mx-auto"></Icon.Hexagon> */}
                            {/* <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-red-600 rounded-xl duration-500 text-4xl flex align-middle justify-center items-center"> */}
                            {/* <BsHeartbreak /> */}
                            {/* </div> */}
                          </div>

                          <h4 className="text-xl text-indigo-600 font-semibold mt-6">
                            Thank you for registering!
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                </div>
              )}
              <div className="text-center">
                <span className="text-slate-400 me-2">
                  Already have an account ?
                </span>{" "}
                <Link
                  href="https://brightbars.dgitra.com/login"
                  className="text-black dark:text-white font-bold inline-block"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Switcher />
    </>
  );
}
