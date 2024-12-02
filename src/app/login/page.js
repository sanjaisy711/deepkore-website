"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For programmatic navigation
import Link from "next/link";
import Switcher from "../componets/switcher";
import Image from "next/image";

export default function Page() {
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake login logic: In a real scenario, you would check credentials here
    const isValid = true;

    if (isValid) {
      // Store login status in localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Safely access the redirect query parameter or fallback to "/docs"
      const redirectTo = router.query?.redirect || "/docs"; // Default to /docs
      router.push(redirectTo);
    } else {
      setLoginError(true);
    }
  };

  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <Link href="/">
                <Image
                  src="/images/logo-icon-64.png"
                  height={64}
                  width={72}
                  className="mx-auto"
                  alt="Worksbyte Logo"
                />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Login</h5>
              <form className="text-start" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="businessname">
                      Business Name
                    </label>
                    <input
                      id="businessname"
                      type="text"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Enter Your Business Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginEmail">
                      Email Address:
                    </label>
                    <input
                      id="LoginEmail"
                      type="email"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="Password">
                      Password:
                    </label>
                    <input
                      id="Password"
                      type="password"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Enter your password"
                    />
                  </div>
                  {loginError && (
                    <p className="text-red-500">
                      Invalid credentials. Please try again.
                    </p>
                  )}
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full py-2 px-3 bg-indigo-600 text-white rounded-md"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Switcher />
    </>
  );
}
