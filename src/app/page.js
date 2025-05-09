"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/navigation";

const Navbar = dynamic(() => import("./componets/Navbar/navbar"));
const Footer = dynamic(() => import("./componets/Footer/footer"));
const Switcher = dynamic(() => import("./componets/switcher"));
const CompanyLogo = dynamic(() => import("./componets/companyLogo"));
const GetInTuct = dynamic(() => import("./componets/getInTuch"));
import SaasCounter from "./componets/counter/saasCounter";
import VideoModal from "./componets/videoModal/videoModal";
import AccordionTwo from "./componets/accordianTwo";
import getEnvConfig from "./componets/getenv";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "../../node_modules/tiny-slider/dist/tiny-slider.css";

import * as Icon from "react-feather";

import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import { BsCheckCircle } from "react-icons/bs";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import { teams } from "./Data/data";

export default function Page() {
  const [businessEmail, setBusinessEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [businessEmailCheck, setBusinessEmailCheck] = useState(false);

  const router = useRouter();

  function SubscribeEmail(e) {
    e.preventDefault();

    if (
      !businessEmail ||
      /@(gmail\.com|ymail\.com|outlook\.com|live\.com|hotmail\.com|yahoo\.com|yahoo\.co\.in)$/.test(
        businessEmail
      )
    ) {
      setBusinessEmailCheck(true); // Show email error if not valid
      return;
    }
    setSuccessMessage(true);
    document.getElementById("business_email").value = "";

    //console.log(e.target.value);
    axios
      .post(`${getEnvConfig()}/site/lead/scheduledemo`, {
        business_email: businessEmail,
      })
      .then((response) => {
        console.log("Success:", response);
        setSuccessMessage(true); // Show success message
        setBusinessEmail(""); // Clear input
        setTimeout(() => {
          setSuccessMessage(false); // Hide success message after 3 seconds
        }, 3000);
      })
      .catch((error) => {
        console.error("Error occurred:", error);

        if (error.response) {
          // Show specific error if email is required
          if (error.response.data.message === "Email is required") {
            setBusinessEmailCheck(true);
          }
        } else {
          console.error("Network or unknown error:", error);
        }
      });
  }

  return (
    <>
      <Navbar />

      <section className="relative table w-full py-36 overflow-hidden bg-gradient-to-b to-transparent from-indigo-600/20 dark:from-indigo-600/40">
        <div className="container relative">
          <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="md:col-span-6">
              <div className="md:me-8">
                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white relative">
                  Building the Future{" "}
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-600 relative inline-block">
                    <span className="relative text-white">AI</span>
                  </span>{" "}
                  Driven Business
                </h4>
                <p className="font-bold text-slate-400 text-lg max-w-xl">
                  Deepkore lets you transform ideas into powerful Enterprise
                  applications that adapt to your business needs.
                </p>
                <div className="subcribe-form mt-6 mb-3">
                  <form className="relative max-w-xl" onSubmit={SubscribeEmail}>
                    <input
                      type="email"
                      id="business_email"
                      name="businessemail"
                      onChange={(e) => {
                        setBusinessEmail(e.target.value);
                        setBusinessEmailCheck(false);
                      }}
                      className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                      placeholder="Your Business Email Address :"
                    />
                    <button
                      type="submit"
                      onClick={(e) => {
                        SubscribeEmail(e);
                      }}
                      className="py-2 px-5 inline-flex items-center item-center font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full"
                    >
                      Schedule a Demo
                      <FaArrowRight className="ms-2 text-[10px]" />
                    </button>
                  </form>
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
                                setBusinessEmail("");
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

                              <div className="text-indigo-600 font-semibold">
                                <h4 className="text-xl">
                                  Thank You For Contacting Us!
                                </h4>
                                <p>We Will Get Back To You Soon.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                      </div>
                    </div>
                  )}

                  {/* Error Message (optional) */}
                  {businessEmailCheck && (
                    <div className="mt-4 text-red-600 font-semibold">
                      Please Provide a Business Email
                    </div>
                  )}
                </div>

                <span className="text-slate-400 font-medium">
                  Looking for help?{" "}
                  <Link href="/auth-signup" className="text-indigo-600">
                    Get in touch with us
                  </Link>
                </span>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800">
                  <div
                    className="w-full py-72 bg-slate-400  bg-cover bg-no-repeat bg-top jarallax"
                    style={{ backgroundImage: "url('/images/saas/home.jpg')" }}
                  ></div>
                </div>

                <div className="absolute flex justify-between items-center md:bottom-10 bottom-5 md:-start-16 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                      <FaArrowUpRightDots className="size-6"></FaArrowUpRightDots>
                    </div>
                    <SaasCounter />
                  </div>

                  <span className="text-green-500 flex items-center">
                    <HiArrowTrendingUp className="me-1" />
                    9%
                  </span>
                </div>

                <div className="absolute xl:top-10 top-60 xl:-end-20 lg:-end-10 -end-1 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                  <h5 className="text-xl font-semibold mb-3">
                    Ideas to Application
                  </h5>
                  <div className="flex justify-between mt-3 mb-2">
                    <span className="text-slate-400">Work in progress</span>
                    <span className="text-slate-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                    <div
                      className="bg-indigo-600 h-[6px] rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:pb-24 pb-16 overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <div className="flex items-center justify-center rounded-full mx-auto bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 size-[110px]">
              <Image
                src="/images/logo-icon.svg"
                width={66}
                height={66}
                className="block mx-auto"
                alt="deepkore logo"
              />
            </div>
            <h1 className="mb-6 mt-8 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">
              Leading Enterprise Application Platform for <br />{" "}
              <span className="after:absolute after:end-0  after:start-0  after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">
                Digital Tranformation.
              </span>
            </h1>

            <p className="text-slate-400 max-w-xl mx-auto">
              Transform your business and boost productivity with Deepkore.
              Effortlessly build Enterprise apps that keep pace with your
              business's rapid growth—all without writing a single line of code.
            </p>
          </div>

          <div className="grid mt-8">
            <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800">
              <video autoPlay muted loop>
                <source src="/images/modern.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div
            className="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp"
            data-wow-delay=".1s"
          >
            <h2 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Why Everyone Loves deepkore
            </h2>

            <p className="text-slate-400 max-w-xl mx-auto">
              Deepkore simplifies application development for business users,
              enabling them to innovate and collaborate effortlessly. Its
              intuitive platform, affordability, and rapid deployment redefine
              how businesses operate and adapt to changing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
            <div
              className="relative wow animate__animated animate__fadeInLeft"
              data-wow-delay=".3s"
            >
              <Image
                src="/images/saas/classic02.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg shadow-md dark:shadow-gray-800"
                alt="Dataform"
              />
              <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 start-0 rotate-45 -z-1 rounded-3xl"></div>
            </div>

            <div
              className="lg:ms-8 wow animate__animated animate__fadeInRight"
              data-wow-delay=".3s"
            >
              <h2 className="mb-4 text-2xl leading-normal font-medium">
                Dataform{" "}
              </h2>
              <p className="text-slate-400">
                Our platform’s Data Form feature allows you to create custom
                forms effortlessly without coding.With a drag-and-drop
                interface, it streamlines data collection, validation, and
                integration into your applications
              </p>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Simplify workflows
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Reduce errors
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Manage data efficiently all hassle-free
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/aboutus"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                >
                  Find Out More{" "}
                  <MdKeyboardArrowRight className="text-xl ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div
              className="relative order-1 md:order-2 wow animate__animated animate__fadeInRight"
              data-wow-delay=".5s"
            >
              <div className="grid mt-8">
                <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800">
                  {/* <video autoPlay muted loop>
                    <source src="/images/classic04.mp4" type="video/mp4" />
                  </video> */}
                  <img src="/images/classic04.gif" alt="loading..." />
                </div>
              </div>
              <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
            </div>

            <div
              className="lg:me-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft"
              data-wow-delay=".5s"
            >
              <h2 className="mb-4 text-2xl leading-normal font-medium">
                Process
              </h2>
              <p className="text-slate-400">
                Automate complex workflows without code. Our platform's Process
                feature lets you design and automate processes with a simple
                drag-and-drop interface. Integrates seamlessly with your data
                and scales with your business. Streamline operations and reduce
                manual work.
              </p>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Seamlessly integrate data
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Scale as your business grows
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Apps to keep your operations running smoothly
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/aboutus"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                >
                  Find Out More{" "}
                  <MdKeyboardArrowRight className="text-xl ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
            <div
              className="relative wow animate__animated animate__fadeInLeft"
              data-wow-delay=".3s"
            >
              <Image
                src="/images/saas/classic04.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg shadow-md dark:shadow-gray-800"
                alt="App"
              />
              <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 start-0 rotate-45 -z-1 rounded-3xl"></div>
            </div>

            <div
              className="lg:ms-8 wow animate__animated animate__fadeInRight"
              data-wow-delay=".3s"
            >
              <h2 className="mb-4 text-2xl leading-normal font-medium">App</h2>
              <p className="text-slate-400">
                Our platform’s App feature allows you to create custom
                applications tailored to your business needs without any coding.
                With an intuitive interface and pre-built components, you can
                design, deploy, and manage apps quickly and efficiently.
              </p>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Streamline operations
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Enhance user experiences
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Adapt to changing requirements
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/aboutus"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                >
                  Find Out More{" "}
                  <MdKeyboardArrowRight className="text-xl ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div
              className="relative order-1 md:order-2 wow animate__animated animate__fadeInRight"
              data-wow-delay=".5s"
            >
              <Image
                src="/images/saas/classic05.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg shadow-md dark:shadow-gray-800"
                alt="Analytics"
              />
              <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
            </div>

            <div
              className="lg:me-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft"
              data-wow-delay=".5s"
            >
              <h2 className="mb-4 text-2xl leading-normal font-medium">
                Analytics
              </h2>
              <p className="text-slate-400">
                Our platform's Analytics feature empowers you to turn data into
                actionable insights effortlessly. With intuitive dashboards and
                customizable reports, you can visualize key metrics and track
                performance in real time.
              </p>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Make informed decisions.
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> Identify trends, and optimize processes.
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i> All without the need for data analysis skills.
                </li>
              </ul>

              <div className="mt-4">
                <Link
                  href="/aboutus"
                  className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                >
                  Find Out More{" "}
                  <MdKeyboardArrowRight className="text-xl ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
            <div className="md:col-span-6">
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800">
                  <div
                    className="w-full py-72 bg-slate-400  bg-no-repeat bg-top bg-cover jarallax"
                    style={{ backgroundImage: "url('/images/saas/cta.jpg')" }}
                  ></div>
                </div>
              </div>
            </div>

            <AccordionTwo />
          </div>
        </div>

        <GetInTuct className="container relative md:mt-24 mt-16" />
      </section>

      <Footer />
      {/* <Switcher /> */}
      {/* <CookieModal /> */}
    </>
  );
}
