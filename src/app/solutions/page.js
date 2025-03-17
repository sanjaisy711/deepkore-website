"use client";
import React, { useEffect, useState } from "react";
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../componets/Navbar/navbar";
import Footer from "../componets/Footer/footer";
import Sidebar from "../componets/Sidebar";
import Image from "next/image";
import Switcher from "../componets/switcher";
import Head from "next/head";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaNetworkWired, FaCogs, FaCode, FaChartLine } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import { CgInternal } from "react-icons/cg";
import { SiSecurityscorecard } from "react-icons/si";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("byusecase");
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [loading, setLoading] = useState(true); // Initial loading state
  const router = useRouter();

  // Check login status on mount

  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //     router.push("/login");
  //   }
  // }, []);

  // useEffect(() => {
  //   const loginStatus = localStorage.getItem("isLoggedIn");
  //   if (loginStatus === "true") {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  //   setLoading(false); // Finished loading
  // }, []);
  // useEffect(() => {
  //   if (!localStorage.getItem("authToken")) {
  //     router.push("/login");
  //   }
  // }, []);

  // useEffect(() => {
  //   // Only redirect when loading is complete and login status is known
  //   if (!loading) {
  //     if (isLoggedIn === false) {
  //       router.push("/login");
  //     } else if (isLoggedIn === true) {
  //       console.log("docs");
  //       router.replace("/docs"); // Redirect to docs if logged in
  //     }
  //   }
  // }, [isLoggedIn, loading, router]);

  const changeMode = () => setIsDarkMode((prevMode) => !prevMode);
  const handleSectionChange = (section) => setActiveSection(section);
  // const handleLogout = () => {
  //   // Remove login-related data from localStorage
  //   localStorage.removeItem("isLoggedIn");
  //   localStorage.removeItem("authToken"); // Assuming authToken is stored in localStorage

  //   // Update the state to reflect logged-out status
  //   setIsLoggedIn(false);

  //   // Redirect to the login page
  //   router.push("/login");
  // };

  // if (loading) {
  //   return (
  //     <div className="loading-spinner">
  //       <p>Loading...</p>
  //       {/* Consider adding a spinner component here */}
  //     </div>
  //   );
  // }

  return (
    <>
      <Head>
        <title>{`Documentation - ${
          activeSection.charAt(0).toUpperCase() + activeSection.slice(1)
        }`}</title>
        <meta
          name="description"
          content={`Learn about ${activeSection} in our platform`}
        />
      </Head>

      {/* <Navbar /> */}
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
              Our Solutions
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className=" tracking-[0.5px]  mb-0 inline-flex mx-auto space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">Deepkore</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Solutions
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
            <div className="md:col-span-1">
              {typeof isDarkMode !== "undefined" && (
                <Sidebar
                  isDarkMode={isDarkMode}
                  onLinkClick={handleSectionChange}
                  activeSection={activeSection} // Pass the active section state
                />
              )}
            </div>

            <div className="md:col-span-3">
              {activeSection === "byusecase" && (
                <section id="byroles" className="py-16 px-6 max-w-6xl mx-auto">
                  {/* Section Heading */}
                  <h4
                    className="text-5xl font-extrabold text-transparent bg-clip-text 
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-wide mb-6 text-left"
                  >
                    BY USE-CASES
                  </h4>

                  {/* Section Description */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed text-left">
                    What can you build with Deepkore?
                  </p>

                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {/* IT Heads Card */}
                    <div
                      className="relative w-full h-64 p-8 rounded-2xl border border-white/30 dark:border-gray-700/40 
        backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] 
        hover:shadow-indigo-500/20 transition-all duration-500 hover:scale-105 overflow-hidden text-left"
                    >
                      <div className="relative flex items-center gap-4 mb-4">
                        <CgInternal className="text-indigo-400 text-4xl" />
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Internal tools
                        </h5>
                      </div>
                      <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                        Enable rapid application development and build scalable
                        internal tools for all your organizational needs.
                        Improve internal collaboration, approval processes, and
                        productivity while automating tasks, with internal
                        tools.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/"
                          className="inline-flex items-center text-sm font-medium 
            text-indigo-400 hover:text-indigo-300 transition-all"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                        </a>
                      </div>
                    </div>

                    {/* Enterprise Architects Card */}
                    <div
                      className="relative w-full h-64 p-8 rounded-2xl border border-white/30 dark:border-gray-700/40 
        backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] 
        hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 overflow-hidden text-left"
                    >
                      <div className="relative flex items-center gap-4 mb-4">
                        <FcServices className="text-purple-400 text-4xl" />
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Portals
                        </h5>
                      </div>
                      <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                        Build self-service portals that can facilitate
                        customers, vendors, business partners, and others—who
                        need a single point of access to your products,
                        services, and information.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/"
                          className="inline-flex items-center text-sm font-medium 
            text-indigo-400 hover:text-indigo-300 transition-all"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                        </a>
                      </div>
                    </div>

                    {/* Professional Developers Card */}
                    <div
                      className="relative w-full h-64 p-8 rounded-2xl border border-white/30 dark:border-gray-700/40 
        backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] 
        hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105 overflow-hidden text-left"
                    >
                      <div className="relative flex items-center gap-4 mb-4">
                        <FaCode className="text-pink-400 text-4xl" />
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Core systems
                        </h5>
                      </div>
                      <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                        Build core systems that range across many operational
                        areas, such as field service management, supply chain
                        management, franchise management, and enterprise
                        resource planning.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/"
                          className="inline-flex items-center text-sm font-medium 
            text-indigo-400 hover:text-indigo-300 transition-all"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                        </a>
                      </div>
                    </div>

                    {/* Business Managers Card */}
                    <div
                      className="relative w-full h-64 p-8 rounded-2xl border border-white/30 dark:border-gray-700/40 
        backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] 
        hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 overflow-hidden text-left"
                    >
                      <div className="relative flex items-center gap-4 mb-4">
                        <FaChartLine className="text-green-400 text-4xl" />
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Extend Deepkore Apps and 3rd party applications
                        </h5>
                      </div>
                      <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                        Deepkore can be used along with your existing systems;
                        whether it's a Zoho service or a third party system, to
                        customize them for your unique use-cases.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/"
                          className="inline-flex items-center text-sm font-medium 
            text-indigo-400 hover:text-indigo-300 transition-all"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "byroles" && (
                <section id="byroles" className="py-16 px-6 max-w-6xl mx-auto">
                  {/* Section Heading */}
                  <h4
                    className="text-5xl font-extrabold text-transparent bg-clip-text 
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-wide mb-6 text-left"
                  >
                    BY ROLES
                  </h4>

                  {/* Section Description */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed text-left">
                    Deepkore empowers professionals across all levels, from
                    C-level executives to operational teams, enabling seamless
                    digital transformation with low-code solutions.
                  </p>

                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {/* IT Heads Card */}
                    <div
                      className="relative w-full h-64 p-8 rounded-2xl border border-white/30 dark:border-gray-700/40 
        backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] 
        hover:shadow-indigo-500/20 transition-all duration-500 hover:scale-105 overflow-hidden text-left"
                    >
                      <div className="relative flex items-center gap-4 mb-4">
                        <FaNetworkWired className="text-indigo-400 text-4xl" />
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                          IT Heads
                        </h5>
                      </div>
                      <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                        Drive digital transformation with scalable low-code
                        applications, ensuring business agility and efficiency.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/aboutus"
                          className="inline-flex items-center text-sm font-medium 
            text-indigo-400 hover:text-indigo-300 transition-all"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                        </a>
                      </div>
                    </div>

                    {/* Enterprise Architects Card */}
                    <div
                      className="relative w-full h-64 p-8 rounded-2xl border border-white/30 dark:border-gray-700/40 
        backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] 
        hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 overflow-hidden text-left"
                    >
                      <div className="relative flex items-center gap-4 mb-4">
                        <FaCogs className="text-purple-400 text-4xl" />
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Enterprise Architects
                        </h5>
                      </div>
                      <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                        Create adaptable architectures that evolve with business
                        needs using powerful low-code solutions.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/aboutus"
                          className="inline-flex items-center text-sm font-medium 
            text-indigo-400 hover:text-indigo-300 transition-all"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                        </a>
                      </div>
                    </div>

                    {/* Professional Developers Card */}
                    <div
                      className="relative w-full h-64 p-8 rounded-2xl border border-white/30 dark:border-gray-700/40 
        backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] 
        hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105 overflow-hidden text-left"
                    >
                      <div className="relative flex items-center gap-4 mb-4">
                        <FaCode className="text-pink-400 text-4xl" />
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Professional Developers
                        </h5>
                      </div>
                      <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                        Automate repetitive tasks and focus on high-value
                        innovation with rapid development tools.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/aboutus"
                          className="inline-flex items-center text-sm font-medium 
            text-indigo-400 hover:text-indigo-300 transition-all"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                        </a>
                      </div>
                    </div>

                    {/* Business Managers Card */}
                    <div
                      className="relative w-full h-64 p-8 rounded-2xl border border-white/30 dark:border-gray-700/40 
        backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] 
        hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 overflow-hidden text-left"
                    >
                      <div className="relative flex items-center gap-4 mb-4">
                        <FaChartLine className="text-green-400 text-4xl" />
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Business Managers
                        </h5>
                      </div>
                      <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                        Quickly develop business-specific applications without
                        IT dependency, streamlining operations efficiently.
                      </p>
                      <div className="mt-4">
                        <a
                          href="/aboutus"
                          className="inline-flex items-center text-sm font-medium 
            text-indigo-400 hover:text-indigo-300 transition-all"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === "bysize" && (
                <section
                  id="bysize"
                  className="py-16 px-6 max-w-6xl mx-auto text-center"
                >
                  {/* Section Heading */}
                  <h4
                    className="text-5xl font-extrabold text-transparent bg-clip-text 
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-wide mb-6"
                  >
                    BY SIZE
                  </h4>

                  {/* Section Description */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Regardless of an organization's size, low-code always
                    bridges the gap between the client's demands and
                    requirements.
                  </p>

                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {[
                      {
                        title: "Enterprise",
                        desc: "Build large-scale scalable applications quickly and cost-effectively, reducing the dependence on expensive software development resources.",
                      },
                      {
                        title: "SMBs",
                        desc: "Low-code enables SMBs to compete with larger organizations effortlessly, by providing the same level of services and applications at a fraction of the cost.",
                      },
                      {
                        title: "Startups",
                        desc: "LCAPs help develop and launch minimum viable products (MVPs) quickly. This allows SMB's to innovate ideas and gather customer feedback without investing heavily in software development.",
                      },
                    ].map((role, index) => (
                      <div
                        key={index}
                        className="relative w-full h-64 p-8 rounded-2xl border border-white/30 dark:border-gray-700/40 
          backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] 
          hover:shadow-indigo-500/20 transition-all duration-500 hover:scale-105 overflow-hidden"
                      >
                        {/* Soft Neon Border */}
                        <div
                          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r 
          from-indigo-400/10 to-purple-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
                        ></div>

                        {/* Card Content */}
                        <h5 className="relative text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          {role.title}
                        </h5>
                        <p className="relative text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                          {role.desc}
                        </p>

                        {/* Learn More Button */}
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center mt-4 text-sm font-medium 
            text-indigo-400 hover:text-indigo-300 transition-all"
                        >
                          Learn More
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeSection === "byindustry" && (
                <section
                  id="byindustry"
                  className="py-16 px-6 max-w-6xl mx-auto text-center"
                >
                  {/* Section Heading */}
                  <h4
                    className="text-5xl font-extrabold text-transparent bg-clip-text 
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-wide mb-6"
                  >
                    BY INDUSTRY
                  </h4>

                  {/* Section Description */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Low-code development provides a faster and more
                    cost-effective way to build and deploy software applications
                    for different industries.
                  </p>

                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {[
                      {
                        title: "Enterprise",
                        desc: "Build large-scale scalable applications quickly and cost-effectively, reducing the dependence on expensive software development resources.",
                      },
                      {
                        title: "SMBs",
                        desc: "Low-code enables SMBs to compete with larger organizations effortlessly, by providing the same level of services and applications at a fraction of the cost.",
                      },
                      {
                        title: "Startups",
                        desc: "LCAPs help develop and launch minimum viable products (MVPs) quickly. This allows SMB's to innovate ideas and gather customer feedback without investing heavily in software development.",
                      },
                    ].map((role, index) => (
                      <div
                        key={index}
                        className="relative w-full h-64 p-8 rounded-2xl border border-white/30 dark:border-gray-700/40 
          backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] 
          hover:shadow-indigo-500/20 transition-all duration-500 hover:scale-105 overflow-hidden"
                      >
                        {/* Soft Neon Border */}
                        <div
                          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r 
          from-indigo-400/10 to-purple-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500"
                        ></div>

                        {/* Card Content */}
                        <h5 className="relative text-xl font-semibold text-gray-900 dark:text-white mb-4">
                          {role.title}
                        </h5>
                        <p className="relative text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                          {role.desc}
                        </p>

                        {/* Learn More Button */}
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center mt-4 text-sm font-medium 
            text-indigo-400 hover:text-indigo-300 transition-all"
                        >
                          Learn More
                          <MdKeyboardArrowRight className="text-lg ml-2" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeSection === "byindustry" && (
                <section id="byindustry" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">BY INDUSTRY</h4>
                  <h4 className="text-2xl font-semibold mb-4">
                    Low-code development provides a faster and more
                    cost-effective way to build and deploy software applications
                    for different industries.
                  </h4>

                  <br />
                  <div className="flex flex-wrap gap-6 ">
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Retail
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Retail backend operations, such as customer engagement,
                        inventory management, and logistics, can be automated
                        and tracked without worrying about misplaced orders or
                        delays.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Manufacturing
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Streamline the manufacturing process, improving
                        efficiency and reducing costs. An entire ERP system can
                        be custom-built to an organization's unique
                        requirements.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Education
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Develop educational applications facilitating end-to-end
                        education ERP solutions, such as elearning, enrollment,
                        and attendance management.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Education
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Develop educational applications facilitating end-to-end
                        education ERP solutions, such as elearning, enrollment,
                        and attendance management.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Logistics
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Deliver enhanced customer experience by digitizing
                        entire logistics operations that optimize supply chain
                        management and improve delivery times.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Nonprofits
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Low-code can help impact your nonprofit programs and
                        automate fundraising and volunteer management.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Information Technology
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        IT departments can use low-code technology to build
                        custom applications to unify their internal needs.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Professional Services
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Professional service firms can rely on low-code as their
                        core tech to develop custom solutions to increase
                        productivity and deliver seamless customer engagement.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Healthcare
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Digitally transform your healthcare operations to
                        modernize patient management, maintain electronic health
                        records, and automate medical billing.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Media
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Media management is now easier with custom-based
                        low-code applications for publishing, advertising, and
                        management solutions.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Real estate
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Unify real estate operations, such as property
                        management, quotation management, and tenant engagement,
                        through a single UI, for easy accessibility.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Hospitality
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Build holistic hospitality and hotel management
                        solutions to achieve safe, unique, and personalized
                        guest experiences.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                  </div>
                </section>
              )}
              {activeSection === "byfunction" && (
                <section id="byfunction" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">BY FUNCTION</h4>
                  <h4 className="text-2xl font-semibold mb-4">
                    Low-code helps keep up with evolving technology and consumer
                    demands, allowing users to remain competitive in their
                    respective functions.
                  </h4>
                  <br />
                  <div className="flex flex-wrap gap-6 ">
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Customer Service
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Customer service teams can achieve enhanced customer
                        support and engagement, while businesses gather feedback
                        and insights improving customer satisfaction levels.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Marketing
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        To boost productivity, marketing teams can stay fully
                        functional by adopting low-code to manage customer
                        engagement across multiple channels and drive marketing
                        initiatives.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sales
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Businesses can develop sales automation applications
                        that manage leads, automate follow-ups,track sales
                        performance and increase leads.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Finance
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Organizations can create invoice processing
                        applications, streamline the invoice approval process,
                        and provide real-time insights into financial
                        performance.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none  w-96">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sales
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Businesses can develop sales automation applications
                        that manage leads, automate follow-ups,track sales
                        performance and increase leads.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        HR
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        By automating recruitment, onboarding, and performance
                        management, HR operations can be hassle-free. Manage the
                        recruitment process, and improve the employee onboarding
                        process with low-code.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                    <Card className="max-w-sm bg-transparent shadow-none">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Operations
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Automate operational processes, such as supply chain and
                        inventory management, to reduce operating costs.
                        Efficiently handle operations to keep everything in your
                        sight..
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/aboutus"
                          className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                        >
                          Learn More{" "}
                          <MdKeyboardArrowRight className="text-xl ms-1" />
                        </Link>
                      </div>
                    </Card>
                  </div>
                </section>
              )}
              {activeSection === "analytics" && (
                <section id="analytics" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">Analytics</h4>
                  <p className="text-slate-400 text-base leading-8">
                    Our platform's Analytics feature empowers you to turn data
                    into actionable insights effortlessly. With intuitive
                    dashboards and customizable reports, you can visualize key
                    metrics and track performance in real time. Make informed
                    decisions, identify trends, and optimize processes—all
                    without the need for complex coding or data analysis skills.
                  </p>
                  <br />
                  <p className="text-slate-400 text-base leading-8">
                    Make informed decisions, identify trends, and optimize
                    processes—all without the need for complex coding or data
                    analysis skills.
                  </p>
                  <br />
                  <Image
                    src="/images/saas/classic05.PNG"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-lg shadow-md dark:shadow-gray-800"
                    alt="Analytics"
                  />
                </section>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Switcher isDarkMode={isDarkMode} changeMode={changeMode} />
    </>
  );
};

export default App;
