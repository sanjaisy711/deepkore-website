"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import * as Icon from "react-feather";

import {
  FaRegEnvelope,
  FaDribbble,
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaRegFile,
  FaBehance,
} from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import getEnvConfig from "../getenv";
import { useRouter } from "next/navigation";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  const router = useRouter();

  function SubscribeEmail(e) {
    //console.log(e.target.value);
    axios
      .post(`${getEnvConfig()}/site/newsletter/subscribe`, {
        email: email,
      })
      .then(function (response) {
        // handle success
        // console.log(response);
        setSuccessMessage(true);
        setEmailCheck(false);
      })
      .catch(function (error) {
        // handle error
        // console.log(error.response.data.message);
        if (error.response.data.message == "Email is required") {
          setEmailCheck(true);
        }
      });
  }

  const footerLinks = [
    {
      liClass: "",
      route: "/page-terms",
      title: "Terms of Services",
    },
    {
      liClass: "mt-[10px]",
      route: "/page-privacy",
      title: "Privacy Policy",
    },
    // {
    //   liClass: "mt-[10px]",
    //   route: "/docs",
    //   title: "Documentation",
    // },
  ];
  const footerCompany = [
    {
      liClass: "",
      route: "/aboutus",
      title: "About us",
    },
    {
      liClass: "mt-[10px]",
      route: "/features",
      title: "Features",
    },
    {
      route: "/pricing",
      title: "Pricing",
      liClass: "mt-[10px]",
    },
    {
      route: "/blog",
      title: "Blog",
      liClass: "mt-[10px]",
    },
    {
      route: "/helpcenter-faqs",
      title: "FAQ",
      liClass: "mt-[10px]",
    },
  ];

  // console.log(successMessage);

  return (
    <div>
      <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="container relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link href="/#" className="text-[22px] focus:outline-none">
                      <Image
                        src="/images/light-logo.svg"
                        width={300}
                        height={100}
                        alt=""
                      />
                    </Link>
                    <p className="mt-6 text-gray-300">
                      Deepkore lets you transform ideas into powerful Enterprise
                      applications that adapt to your business needs. One
                      platform. No coding. Completely hassle-free.
                    </p>
                    <ul className="list-none mt-5 space-x-1 space-y-1">
                      <li className="inline">
                        <Link
                          href="https://www.linkedin.com/company/deepkore"
                          target="_blank"
                          className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaLinkedin className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="https://www.youtube.com/watch?v=0FHTRPkpr90"
                          target="_blank"
                          className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaYoutube className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="#"
                          target="_blank"
                          className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaFacebookF className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="#"
                          target="_blank"
                          className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaInstagram className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="#"
                          target="_blank"
                          className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaTwitter className="text-sm" />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link
                          href="mailto:muru@dgiverse.com,kris@dgiverse.com"
                          className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                        >
                          <FaRegEnvelope className=" text-sm" />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Company
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerCompany.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Usefull Links
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerLinks.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Newsletter
                    </h5>
                    <p className="mt-6">
                      Sign up and receive the latest tips via email.
                    </p>
                    <form>
                      <div className="grid grid-cols-1">
                        <div className="foot-subscribe my-3">
                          <label className="form-label">
                            Write your email{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Mail className="size-4 absolute top-3 start-4" />
                            <input
                              type="email"
                              className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0"
                              placeholder="Email"
                              name="email"
                              required=""
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <p className="text-red-600 text-xs mb-2">
                          {emailCheck && "Incorrect email format"}
                        </p>
                        {/* <button
                          type="submit"
                          id="submitsubscribe"
                          name="send"
                          onClick={SubscribeEmail}
                          className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                        >
                          Subscribe
                        </button> */}
                      </div>
                    </form>
                    <button
                      type="submit"
                      id="submitsubscribe"
                      name="send"
                      onClick={(e) => {
                        SubscribeEmail(e);
                      }}
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                    >
                      Subscribe
                    </button>
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
                                onClick={() => {
                                  setSuccessMessage(!successMessage);
                                  setEmail("");
                                  router.push("/");
                                }}
                                className="absolute -top-4 -end-4 text-indigo-600 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hover:text-gray-900 rounded-full text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                              >
                                <svg
                                  className="w-5 h-5"
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
                                  Thank you for subscribing.
                                </h4>
                              </div>
                            </div>
                          </div>
                          {/* </div> */}
                          {/* </div> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container relative text-center">
            <div className="grid md:grid-cols-2 items-center">
              <div className="md:text-start text-center">
                <p className="mb-0">
                  © {new Date().getFullYear()} Deepkore Technologies. All rights
                  reserved.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
