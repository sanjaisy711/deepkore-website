import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componets/Navbar/navbar";
import Footer from "../componets/Footer/footer";
import Switcher from "../componets/switcher";
import ProjectWork from "../componets/portfolio/projectWork";

import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { servicesTwo } from "../Data/dataThree";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BsCheckCircle } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

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
              What We Offer ?
            </h5>
            <h3 className="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Our Features
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
              Features
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
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {servicesTwo.map((item, index) => {
              let Icons = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 text-center"
                >
                  <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                    <Icons className="w-7 h-7" />
                  </div>

                  <div className="content mt-7">
                    <Link
                      href="/page-services"
                      className="title h5 text-lg font-medium hover:text-indigo-600"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 mt-3">{item.desc}</p>

                    <div className="mt-5">
                      <Link
                        href="/page-services"
                        className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="container-fluid relative mt-8">
                    <div className="grid grid-cols-1 mt-8">
                        <ProjectWork />
                    </div>
                </div> */}

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div
              className="relative order-1 md:order-2 wow animate__animated animate__fadeInRight"
              data-wow-delay=".5s"
            >
              <Image
                src="/images/hero1.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg shadow-md dark:shadow-gray-800"
                alt=""
              />
              <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
            </div>

            <div
              className="lg:me-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft"
              data-wow-delay=".5s"
            >
              <h2 className="mb-4 text-2xl leading-normal font-medium">
                The worksbyte Advantage
              </h2>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i>Choose from 100s of pre-built templates or build your
                  app from scratch
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i>Get access to powerful management tools that make
                  handling projects easier
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i>Collaborate with your team to build your apps on a
                  single, unified platform
                </li>
                <li className="mb-1 flex items-center">
                  <BsCheckCircle className="text-indigo-600 text-base me-2" />
                  <i></i>Accelerate development and minimize your costs and time
                  to deployment
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Do you have digital project? <br /> Lets talk.
            </h3>

            <div className="mt-6">
              <Link
                href="/contactus"
                className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"
              >
                <FiPhone className="me-1 text-lg" /> Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}
