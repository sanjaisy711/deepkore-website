"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Switcher from "../componets/switcher";
import axios from "axios";
import { useRouter } from "next/navigation";
import getEnvConfig from "../componets/getenv";

export default function Page() {
  const [name, setName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [allFieldsCheck, setAllFieldsCheck] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [country, setCountry] = useState("United States");

  // Error state for all fields
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
  const [isCompanyNameEmpty, setIsCompanyNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Reset all error states
    setIsNameEmpty(false);
    setIsEmailEmpty(false);
    setIsPhoneEmpty(false);
    setIsCompanyNameEmpty(false);
    setEmailCheck(false);

    // Validation for name field
    if (name.trim() === "") {
      setIsNameEmpty(true);
      valid = false;
    }

    // Validation for email field
    if (businessEmail.trim() === "") {
      setIsEmailEmpty(true);
      valid = false;
    } else if (!validateEmail(businessEmail)) {
      setEmailCheck(true);
      valid = false;
    }

    // Validation for phone field
    if (phone.trim() === "") {
      setIsPhoneEmpty(true);
      valid = false;
    }

    // Validation for company name field
    if (companyName.trim() === "") {
      setIsCompanyNameEmpty(true);
      valid = false;
    }

    if (valid && isChecked) {
      Signup();
    } else {
      // If not valid, show the error messages and prevent submission
      return;
    }
  };

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  function validateEmail(email) {
    const restrictedDomains = [
      "gmail.com",
      "ymail.com",
      "outlook.com",
      "live.com",
      "hotmail.com",
      "yahoo.com",
      "yahoo.co.in",
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    const domain = email.split("@")[1];
    return !restrictedDomains.includes(domain);
  }

  function Signup() {
    if (
      isChecked &&
      name !== "" &&
      businessEmail !== "" &&
      phone !== "" &&
      companyName !== ""
    ) {
      axios
        .post(`${getEnvConfig()}/site/leadsignup`, {
          name: name,
          business_email: businessEmail,
          mobile: phone,
          company_name: companyName,
        })
        .then(function (response) {
          setEmailCheck(false);
          setSuccessMessage(true);
        })
        .catch(function (error) {
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
              <form className="text-start">
                {/* Name Field */}
                <div className="grid grid-cols-1">
                  <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                    <div className="relative bg-inherit">
                      <input
                        id="name"
                        type="text"
                        className="peer h-10 w-full rounded-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                        placeholder="Enter Your Name"
                        onChange={(e) => {
                          setName(e.target.value);
                          if (e.target.value.trim() !== "") {
                            setIsNameEmpty(false);
                          }
                        }}
                      />

                      <label
                        htmlFor="name"
                        className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
                      >
                        Your Name
                      </label>
                    </div>
                  </div>
                  {isNameEmpty && (
                    <p className="text-red-600 text-xs">Name is required</p>
                  )}
                </div>
                <br />

                {/* Email Field */}
                <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                  <div className="relative bg-inherit">
                    <input
                      id="business_email"
                      type="email"
                      className="peer h-10 w-full rounded-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                      placeholder="Business Email Address"
                      onChange={(e) => {
                        const emailInput = e.target.value;
                        setBusinessEmail(emailInput);
                        if (emailInput.trim() !== "") {
                          setIsEmailEmpty(false);
                        }
                        if (validateEmail(emailInput)) {
                          setEmailCheck(false);
                        } else {
                          setEmailCheck(true);
                        }
                      }}
                    />

                    <label
                      htmlFor="business_email"
                      className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
                    >
                      Business Email Address
                    </label>
                  </div>
                  {(emailCheck || isEmailEmpty) && (
                    <p className="text-red-600 text-xs">
                      {emailCheck
                        ? "Please Provide a Business Email is required"
                        : "Email is required"}
                    </p>
                  )}
                </div>
                <br />

                {/* Phone Field */}
                <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                  <div className="relative bg-inherit flex">
                    {/* Country Dropdown */}
                    <select
                      value={selectedCountryCode}
                      onChange={(e) => setSelectedCountryCode(e.target.value)}
                      className="peer h-10 w-24 rounded-l-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-slate-200 dark:ring-gray-700 dark:focus:border-indigo-600 dark:bg-slate-900"
                    >
                      <option value="+1">+1 - United States</option>
                      <option value="+44">+44 - United Kingdom</option>
                      <option value="+91">+91 - India</option>
                      <option value="+61">+61 - Australia</option>
                      <option value="+81">+81 - Japan</option>
                      <option value="+33">+33 - France</option>
                      <option value="+49">+49 - Germany</option>
                      <option value="+39">+39 - Italy</option>
                      <option value="+34">+34 - Spain</option>
                      <option value="+1">+1 - Canada</option>
                      <option value="+55">+55 - Brazil</option>
                      <option value="+86">+86 - China</option>
                      <option value="+7">+7 - Russia</option>
                      <option value="+27">+27 - South Africa</option>
                      <option value="+53">+53 - Cuba</option>
                      <option value="+971">+971 - United Arab Emirates</option>
                      <option value="+45">+45 - Denmark</option>
                      <option value="+46">+46 - Sweden</option>
                      <option value="+31">+31 - Netherlands</option>
                      <option value="+47">+47 - Norway</option>
                      <option value="+32">+32 - Belgium</option>
                      <option value="+352">+352 - Luxembourg</option>
                      <option value="+34">+34 - Spain</option>
                      <option value="+20">+20 - Egypt</option>
                      {/* Add more country codes and names here */}
                    </select>

                    <input
                      id="phone"
                      type="text"
                      className="peer h-10 w-full rounded-r-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                      placeholder="Phone Number"
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (e.target.value.trim() !== "") {
                          setIsPhoneEmpty(false);
                        }
                      }}
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
                    >
                      Phone
                    </label>
                  </div>
                  {isPhoneEmpty && (
                    <p className="text-red-600 text-xs bg-transparent">
                      Phone is required
                    </p>
                  )}
                </div>
                <br />

                {/* Company Name Field */}
                <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                  <div className="relative bg-inherit">
                    <input
                      id="company_name"
                      type="text"
                      className="peer h-10 w-full rounded-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                      placeholder="Company Name"
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                        if (e.target.value.trim() !== "") {
                          setIsCompanyNameEmpty(false);
                        }
                      }}
                    />

                    <label
                      htmlFor="company_name"
                      className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
                    >
                      Company Name
                    </label>
                  </div>
                  {isCompanyNameEmpty && (
                    <p className="text-red-600 text-xs bg-transparent">
                      Company name is required
                    </p>
                  )}
                </div>
                <br />
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

                {/* <div className="flex items-center justify-between mt-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </div> */}
              </form>
              <div className="mb-4">
                <input
                  type="submit"
                  name="send"
                  onClick={handleSubmit}
                  className="py-2 px-5 cursor-pointer inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                  value="Register"
                />
              </div>
              {successMessage && (
                <div className="grid grid-cols-1 gap-[30px]">
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
                          <div className="relative overflow-hidden text-transparent -m-3 text-indigo-600"></div>

                          <h4 className="text-xl text-indigo-600 font-semibold mt-6">
                            Thank you for registering!
                          </h4>
                        </div>
                      </div>
                    </div>
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
