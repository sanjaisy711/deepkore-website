"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../componets/Navbar/navbar";
import Footer from "../componets/Footer/footer";
import Sidebar from "../componets/Sidebar";
import Image from "next/image";
import Switcher from "../componets/switcher";
import { MdKeyboardArrowRight } from "react-icons/md";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("introduction");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in (e.g., from localStorage)
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true"); // Set login status from localStorage

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const changeMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleDocumentClick = () => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      router.push("/login");
    }
  };

  return (
    <>
      <Navbar />

      <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="text-3xl leading-normal font-semibold">
              Product Documentation
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
              <Link href="/">worksbyte</Link>
            </li>
            <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"
              aria-current="page"
            >
              Documentation
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
                />
              )}
            </div>

            <div className="md:col-span-3">
              {activeSection === "introduction" && (
                <section id="introduction" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">Introduction</h4>
                  <p className="text-slate-400 text-base leading-8">
                    <strong>Worksbyte</strong> simplifies application
                    development for business users, enabling them to innovate
                    and collaborate effortlessly.
                  </p>
                  <p className="text-slate-400 text-base leading-8 font-semibold mt-2">
                    Its intuitive platform, affordability, and rapid deployment
                    redefine how businesses operate and adapt to changing needs.
                  </p>
                </section>
              )}
              {activeSection === "role" && (
                <section id="admin" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">Account Owner</h4>
                  <h4 className="text-3xl font-semibold mb-4">Super Admin</h4>
                  <h4 className="text-3xl font-semibold mb-4">User Admin</h4>
                  <h4 className="text-3xl font-semibold mb-4">Billing Admin</h4>
                  <h4 className="text-3xl font-semibold mb-4">User</h4>
                  {/* <p className="text-slate-400 text-base leading-8">
                    We are using npm which allows having complete automation for
                    build flow. In case if you don't know npm...
                  </p> */}
                </section>
              )}

              {activeSection === "usermanagement" && (
                <section id="admin" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">Active Users</h4>
                  <h4 className="text-3xl font-semibold mb-4">
                    Inactive Users
                  </h4>
                  {/* <p className="text-slate-400 text-base leading-8">
                    We are using npm which allows having complete automation for
                    build flow. In case if you don't know npm...
                  </p> */}
                </section>
              )}
              {activeSection === "groupmanagement" && (
                <section id="admin" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">
                    Group Management
                  </h4>
                  {/* <h4 className="text-3xl font-semibold mb-4">
                    Inactive Users
                  </h4> */}
                  {/* <p className="text-slate-400 text-base leading-8">
                    We are using npm which allows having complete automation for
                    build flow. In case if you don't know npm...
                  </p> */}
                </section>
              )}
              {activeSection === "auditlogs" && (
                <section id="admin" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">Audit Logs</h4>
                  {/* <h4 className="text-3xl font-semibold mb-4">
                    Inactive Users
                  </h4> */}
                  {/* <p className="text-slate-400 text-base leading-8">
                    We are using npm which allows having complete automation for
                    build flow. In case if you don't know npm...
                  </p> */}
                </section>
              )}

              {activeSection === "accountsettings" && (
                <section id="admin" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">
                    Account Details
                  </h4>
                  <h4 className="text-3xl font-semibold mb-4">
                    Format Setting
                  </h4>
                  <h4 className="text-3xl font-semibold mb-4">
                    Weekend Setting
                  </h4>
                  <h4 className="text-3xl font-semibold mb-4">File Upload</h4>
                  <h4 className="text-3xl font-semibold mb-4">Key Settings</h4>
                  {/* <p className="text-slate-400 text-base leading-8">
                    We are using npm which allows having complete automation for
                    build flow. In case if you don't know npm...
                  </p> */}
                </section>
              )}

              {activeSection === "admin" && (
                <section id="admin" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">Admin</h4>
                  <p className="text-slate-400 text-base leading-8">
                    We are using npm which allows having complete automation for
                    build flow. In case if you don't know npm...
                  </p>
                </section>
              )}
              {activeSection === "dashboard" && (
                <section id="dashboard" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">Dashboard</h4>
                  <p className="text-slate-400 text-base leading-8">
                    We are using npm which allows having complete automation for
                    build flow. In case if you don't know npm...
                  </p>
                </section>
              )}
              {activeSection === "dataForm" && (
                <section id="dataForm" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">DataForm</h4>
                  <p className="text-slate-400 text-base leading-8">
                    Our platform’s Data Form feature allows you to create custom
                    forms effortlessly without coding. With a drag-and-drop
                    interface, it streamlines data collection, validation, and
                    integration into your applications. Simplify workflows,
                    reduce errors, and manage data efficiently—all hassle-free.
                  </p>
                  <br />
                  <p className="text-slate-400 text-base leading-8">
                    Simplify workflows, reduce errors, and manage data
                    efficiently—all hassle-free.
                  </p>
                  <br />
                  <Image
                    src="/images/saas/classic02.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-lg shadow-md dark:shadow-gray-800"
                    alt="Dataform"
                  />
                </section>
              )}
              {activeSection === "process" && (
                <section id="process" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">Process</h4>
                  <p className="text-slate-400 text-base leading-8">
                    Our platform's Process feature enables you to design and
                    automate complex business workflows without any coding. With
                    an intuitive drag-and-drop interface, you can map out
                    processes, set triggers, and automate tasks to optimize
                    efficiency and reduce manual effort. Seamlessly integrate
                    data and apps to keep your operations running smoothly and
                    scale as your business grows.
                  </p>
                  <br />
                  <p className="text-slate-400 text-base leading-8">
                    Seamlessly integrate data and apps to keep your operations
                    running smoothly and scale as your business grows.
                  </p>
                  <div className="grid mt-8">
                    <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800">
                      <img src="/images/classic04.gif" alt="loading..." />
                    </div>
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
              {activeSection === "integration" && (
                <section id="integration" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">Integration</h4>
                  <p className="text-slate-400 text-base leading-8">
                    Our platform offers robust Integration capabilities that
                    allow you to connect seamlessly with your existing tools and
                    applications. With pre-built connectors and APIs, you can
                    effortlessly integrate CRMs, ERPs, and other business
                    solutions to enhance your workflows. Streamline data
                    exchange, automate processes, and ensure a unified
                    experience across all platforms—all without any coding
                    required.
                  </p>
                  <br />
                  <p className="text-slate-400 text-base leading-8">
                    Streamline data exchange, automate processes, and ensure a
                    unified experience across all platforms—all without any
                    coding required.
                  </p>
                </section>
              )}
              {activeSection === "pages" && (
                <section id="integration" className="py-16">
                  <h4 className="text-3xl font-semibold mb-4">Pages</h4>
                  <p className="text-slate-400 text-base leading-8">
                    Our platform offers robust Integration capabilities that
                    allow you to connect seamlessly with your existing tools and
                    applications. With pre-built connectors and APIs, you can
                    effortlessly integrate CRMs, ERPs, and other business
                    solutions to enhance your workflows. Streamline data
                    exchange, automate processes, and ensure a unified
                    experience across all platforms—all without any coding
                    required.
                  </p>
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
