"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import countryCodes from "country-codes-list";

import Navbar from "../componets/Navbar/navbar";
import Footer from "../componets/Footer/footer";
import Switcher from "../componets/switcher";

import * as Icon from "react-feather";

import { MdKeyboardArrowRight } from "react-icons/md";

import { contactData } from "../Data/dataTwo";

export default function Page() {
  const [name, setName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [briefbusinessrequirement, setBriefBusinessrequirement] = useState("");
  const [allFieldsCheck, setAllFieldsCheck] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");

  const router = useRouter();

  const countryCodeList = countryCodes.customList(
    "countryCode",
    "+{countryCallingCode} ({countryNameEn})"
  );

  const countryNameByCode = countryCodes.customList(
    "countryCallingCode",
    "{countryNameEn}"
  );

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
    ];

    return !restrictedDomains.includes(emailDomain);
  }

  function Submit(e) {
    e.preventDefault();
    if (
      isChecked &&
      name != "" &&
      businessEmail != "" &&
      phone != "" &&
      companyName != "" &&
      country != "" &&
      briefbusinessrequirement != ""
    ) {
      setAllFieldsCheck(true);
      if (!validateEmail(businessEmail)) {
        setEmailCheck(true);
        return; //
      }

      axios
        .post(`${getEnvConfig()}/site/lead/contactus`, {
          name: name,
          business_email: businessEmail,
          mobile: phone,
          company_name: companyName,
          country: country,
          brief_business_requirement: briefbusinessrequirement,
        })
        .then(function (response) {
          // handle success
          //console.log(response);
          setEmailCheck(false);
          setSuccessMessage(true);
        })
        .catch(function (error) {
          // handle error
          // console.log(error.response.data.message);
          if (error.response.data.message == "Email is required") {
            setEmailCheck(true);
          }
        });
    }
  }
  console.log(name);
  console.log(businessEmail);
  console.log(phone);
  console.log(companyName);
  console.log(country);
  console.log(briefbusinessrequirement);

  return (
    <>
      <Navbar navClass="nav-light" />

      <section
        className="relative table w-full py-36  bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/company/aboutus.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              Contact Us
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">Worksbyte</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Contact Us
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-[30px]">
            {contactData.map((item, index) => {
              let Icons = item.icon;
              return (
                <div key={index} className="text-center px-6 mt-6">
                  <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                    <Icons className="w-7 h-7" />
                  </div>

                  <div className="content mt-7">
                    <h5 className="title h5 text-xl font-medium">
                      {item.title}
                    </h5>
                    <p className="text-slate-400 mt-3">{item.desc}</p>

                    <div className="mt-5">
                      <Link
                        href="/tel:+91 92444 44499"
                        className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        {item.contact}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src="/images/contact.svg"
                alt=""
              />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch !
                  </h3>

                  <form>
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="name" className="font-semibold">
                            Name:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.User className="size-4 absolute top-3 start-4"></Icon.User>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder=" Name"
                              required
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label
                            htmlFor="business_email"
                            className="font-semibold"
                          >
                            Business Email:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Mail className="size-4 absolute top-3 start-4"></Icon.Mail>
                            <input
                              name="businessemail"
                              id="business_email"
                              type="email"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder=" Business Email :"
                              required
                              onChange={(e) => {
                                setBusinessEmail(e.target.value);
                              }}
                            />
                          </div>
                          <p className="text-red-600 text-xs mb-2">
                            {emailCheck &&
                              "Please provide a business email (not from Gmail, Ymail, Outlook, Live, or Hotmail)"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label htmlFor="mobile" className="font-semibold">
                          Phone :
                        </label>
                        <div className="form-icon relative mt-2 flex items-center gap-2">
                          <select
                            id="countryCode"
                            name="countryCode"
                            className="form-input w-20 py-2 px-2 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600"
                            value={selectedCountryCode}
                            onChange={(e) => {
                              const selectedCode = e.target.value; // Get the full code (e.g., "+1")
                              const countryCode = selectedCode.slice(1); // Remove '+' to match with the mapping
                              console.log(selectedCode);
                              console.log(countryCode);
                              setSelectedCountryCode(selectedCode);
                              setCountry(countryNameByCode[countryCode] || ""); // Update the country field
                            }}
                          >
                            {/* {Object.entries(countryCodeList).map(
                              ([code, label]) => {(

                                <option key={code} value={code}>
                                  {label}
                                </option>
                              )}
                            )} */}
                            {Object.entries(countryCodeList).map(
                              ([code, label]) => {
                                // console.log(code);
                                // console.log(label);
                                // Log code to the console
                                return (
                                  // Return the JSX
                                  <option
                                    onChange={(e) => {
                                      console.log(e.target.value);
                                    }}
                                    key={code}
                                    value={code}
                                  >
                                    {label}{" "}
                                  </option>
                                );
                              }
                            )}
                          </select>
                          <input
                            name="phone"
                            id="mobile"
                            type="text"
                            className="form-input ps-4 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Phone"
                            required
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label htmlFor="country" className="font-semibold">
                          Country :
                        </label>
                        <div className="form-icon relative mt-2">
                          <Icon.Map className="size-4 absolute top-3 start-4"></Icon.Map>
                          <input
                            name="countryname"
                            id="country"
                            type="text"
                            className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Country"
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label htmlFor="company_name" className="font-semibold">
                          Company Name:
                        </label>
                        <div className="form-icon relative mt-2">
                          <Icon.User className="size-4 absolute top-3 start-4"></Icon.User>
                          <input
                            name="companyname"
                            id="company_name"
                            type="text"
                            className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Company Name"
                            required
                            onChange={(e) => {
                              setCompanyName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6 mb-5">
                      <div className="text-start">
                        <label
                          htmlFor="brief_business_requirment"
                          className="font-semibold"
                        >
                          Brief Business Requirement :
                        </label>
                        <div className="form-icon relative mt-2">
                          <Icon.User className="size-4 absolute top-3 start-4"></Icon.User>
                          <input
                            name="briefbusinessrequirment"
                            id="brief_business_requirment"
                            type="text"
                            className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                            placeholder="Brief Business Requirement"
                            required
                            onChange={(e) => {
                              setBriefBusinessrequirement(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      onClick={(e) => {
                        Submit(e);
                      }}
                      className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              title="google"
              src="https://maps.google.com/maps?q=chennai&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ border: 0 }}
              className="w-full h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
      <Switcher />
    </>
  );
}
