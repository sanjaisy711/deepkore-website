"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../componets/Navbar/navbar";
import Footer from "../componets/Footer/footer";
import Switcher from "../componets/switcher";
import GetInTuct from "../componets/getInTuch";
import ServiceFaq from "../componets/serviceFaq";
import PricingTab from "../componets/pricingTab";
import axios from "axios";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Page() {
  const [name, setName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false); // Track email format validation error
  const [successMessage, setSuccessMessage] = useState(false); // Track if the form was submitted successfully
  const [allFieldsCheck, setAllFieldsCheck] = useState(false); // Track if all fields are filled out
  const [isLoading, setIsLoading] = useState(false); // Track the loading state for form submission

  const router = useRouter();

  const checkHandler = () => setIsChecked(!isChecked);

  // Handle modal visibility
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage(false); // Reset on close
    setAllFieldsCheck(false); // Reset error messages
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled and the terms are accepted before sending
    if (isChecked && name && businessEmail && phone && companyName) {
      setIsLoading(true); // Show loading indicator
      setAllFieldsCheck(true);

      // Send form data to backend
      axios
        .post("http://localhost:3001/site/leadSignup", {
          name,
          business_email: businessEmail,
          mobile: phone,
          company_name: companyName,
        })
        .then((response) => {
          setSuccessMessage(true); // Show success message
          setIsLoading(false); // Hide loading state
        })
        .catch((error) => {
          setIsLoading(false); // Hide loading state
          console.error(error.response?.data?.message);
          if (error.response?.data?.message === "Email is required") {
            setEmailCheck(true); // Display email error
          }
        });
    } else {
      setAllFieldsCheck(false); // If not all fields are filled, show error message
    }
  };

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
          <ul className="tracking-[0.5px] mb-0 inline-flex mx-auto space-x-1">
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

          <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-8 gap-[30px] justify-center items-center">
            <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
              <h6 className="font-bold uppercase mb-5 text-indigo-600">Free</h6>
              <div className="flex mb-5 justify-items-center">
                <span className="text-xl font-semibold"></span>
                <span className="price text-4xl font-semibold mb-0">
                  Trial Plan
                </span>
              </div>
              <button
                onClick={openModal}
                className="py-2 px-5 inline-block justify-items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
              >
                Contact us
              </button>
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
              <button
                onClick={openModal}
                className="py-2 px-5 inline-block justify-items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
              >
                Contact us
              </button>
            </div>
          </div>
          <ServiceFaq />
        </div>
        <div className="my-12">
          <GetInTuct />
        </div>
      </section>

      {/* Modal for Signup */}
      {isModalOpen && (
        <div className="bg-gray-900 bg-opacity-50 fixed inset-0 z-40 flex items-center justify-center">
          <div className="relative w-full h-auto max-w-lg p-4">
            <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-indigo-600 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hover:text-gray-900 rounded-full text-sm p-1.5"
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
                {successMessage ? (
                  <div className="text-indigo-600 font-semibold">
                    <h4 className="text-xl">Thank You For Contacting Us!</h4>
                    <p>We Will Get Back To You Soon.</p>
                  </div>
                ) : (
                  <div>
                    <Link href="/">
                      <Image
                        src="/images/logo-icon.svg"
                        height={74}
                        width={82}
                        className="mx-auto"
                        alt=""
                      />
                    </Link>
                    <h5 className="text-xl font-semibold mb-6 text-start">
                      Sign Up
                    </h5>
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 text-start"
                    >
                      <p className="text-red-600 text-xs">
                        {!allFieldsCheck && "* All fields are required"}
                      </p>
                      <div>
                        <label
                          className="font-semibold text-left"
                          htmlFor="name"
                        >
                          Your Name:
                        </label>
                        <input
                          type="text"
                          className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Your Name"
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          className="font-semibold text-left"
                          htmlFor="business_email"
                        >
                          Business Email Address:
                        </label>
                        <input
                          type="email"
                          className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="name@example.com"
                          required
                          onChange={(e) => setBusinessEmail(e.target.value)}
                        />
                        {emailCheck && (
                          <p className="text-red-600 text-xs">
                            Invalid email format.
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="font-semibold text-left"
                          htmlFor="mobile"
                        >
                          Phone :
                        </label>
                        <input
                          type="tel"
                          className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Phone Number"
                          required
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div>
                        <label
                          className="font-semibold text-left"
                          htmlFor="company_name"
                        >
                          Company Name :
                        </label>
                        <input
                          type="text"
                          className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Company Name"
                          required
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          id="accept"
                          checked={isChecked}
                          onChange={checkHandler}
                          required
                        />
                        <label className="ml-2" htmlFor="accept">
                          I accept the{" "}
                          <Link href="/page-terms" className="text-indigo-600">
                            Terms and Conditions
                          </Link>
                        </label>
                      </div>
                      {!isChecked && (
                        <p className="text-red-600 text-xs">
                          Please accept our terms and Conditions.
                        </p>
                      )}
                      <button
                        type="submit"
                        className="py-2 px-5 bg-indigo-600 text-white rounded-md w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Submitting..." : "Register"}
                      </button>
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
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <Switcher />
    </>
  );
}
