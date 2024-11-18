import React from "react";
import Link from "next/link";

import Navbar from "../componets/Navbar/navbar";
import Footer from "../componets/Footer/footer";
import Switcher from "../componets/switcher";
import GetInTuct from "../componets/getInTuch";
import ServiceFaq from "../componets/serviceFaq";
import PricingTab from "../componets/pricingTab";

import { startAbout } from "../Data/dataThree";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Page() {
  return (
    <>
      <Navbar navClass="nav-light" />

      <section
        className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/services.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h5 className="text-white/50 text-lg font-medium">
              Our Comfortable Rates
            </h5>
            <h3 className="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Pricing / Plans
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className=" tracking-[0.5px]  mb-0 inline-flex mx-auto space-x-1">
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
              Pricing
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
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
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Choose Pricing Plan
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Workbytes that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1  mt-8 gap-[30px] justify-center items-center">
              <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                <h6 className="font-bold uppercase mb-5 text-indigo-600">
                  Free
                </h6>

                <div className="flex mb-5 justify-items-center">
                  <span className="text-xl font-semibold"></span>
                  <span className="price text-4xl font-semibold mb-0">
                    Trail Plan
                  </span>
                  <span className="text-xl font-semibold self-end mb-1"></span>
                </div>

                <Link
                  href="/auth-signup"
                  className="py-2 px-5 inline-block justify-items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                >
                  Contact us
                </Link>
              </div>

              <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                <h6 className="font-bold uppercase mb-5 text-indigo-600">
                  Enterprise
                </h6>

                <div className="flex mb-5">
                  <span className="price text-4xl font-semibold mb-0">
                    Get a Quote
                  </span>
                </div>
                <Link
                  href="/auth-signup"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* <PricingTab /> */}
        </div>

        <div className="container relative md:py-24 py-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Frequently Asked Questions
            </h3>
          </div>

          <ServiceFaq />
        </div>

        <GetInTuct />
      </section>

      <Footer />
      <Switcher />
    </>
  );
}
