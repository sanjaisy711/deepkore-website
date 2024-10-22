import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';


export default function Page() {

    return (
        <>
            <Navbar/>

            <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="text-3xl leading-normal font-semibold">Privacy Policy</h3>
                    </div>
                </div>
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/i">worksbyte</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="#" >Utility</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">Privacy</li>
                    </ul>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="md:flex justify-center">
                        <div className="md:w-3/4">
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                <h5 className="text-xl font-semibold mb-4">Privacy Policy</h5>
                                <p className="text-slate-400">Last updated: [22/10/2024]</p>

                                <h5 className="text-xl font-semibold mb-4 mt-8">Introduction:</h5>
                                <p className="text-slate-400">At Dgiverse, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.worksbyte.com, use our services, or engage with us. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
                                <p className="text-slate-400">By using our services, you consent to the data practices described in this Privacy Policy.</p>
        

                                <h4 className="text-xl font-semibold mb-4 mt-8">1. Information We Collect</h4>
                                <p className="text-slate-400">We may collect and process the following types of information:</p>

                                  <h3 className="text-xl font-semibold mb-4 mt-8">1.1. Personal Data :</h3>
                                <p className="text-slate-400">Personal identification information such as your name, email address, phone number, job title, and company name when you sign up for our services, contact us, or otherwise interact with us.</p>
                                  <h3 className="text-xl font-semibold mb-4 mt-8">1.2. Non-Personal Data:</h3>
                                <p className="text-slate-400">Non-identifiable and anonymous information such as usage data, device information (IP address, browser type, device type), and other statistical data to improve our services.</p>
                                <h3 className="text-xl font-semibold mb-4 mt-8">1.3. Cookies:</h3>
                                <p className="text-slate-400">We use cookies and similar tracking technologies to track the activity on our website and store certain information to enhance user experience. You can modify your cookie preferences through your browser settings.</p>
                               
        
                               <h4 className="text-xl font-semibold mb-4 mt-8">2. How We Use Your Information</h4>
                                <p className="text-slate-400">We may use the information collected for the following purposes:</p>

                                  <h3 className="text-xl font-semibold mb-4 mt-8">2.1.	To Provide and Improve Services: </h3>
                                <p className="text-slate-400">Personal identification information such as your name, email address, phone number, job title, and company name when you sign up for our services, contact us, or otherwise interact with us.</p>
                                  <h3 className="text-xl font-semibold mb-4 mt-8">1.2. Non-Personal Data:</h3>
                                <p className="text-slate-400">Non-identifiable and anonymous information such as usage data, device information (IP address, browser type, device type), and other statistical data to improve our services.</p>
                                <h3 className="text-xl font-semibold mb-4 mt-8">1.3. Cookies:</h3>
                                <p className="text-slate-400">We use cookies and similar tracking technologies to track the activity on our website and store certain information to enhance user experience. You can modify your cookie preferences through your browser settings.</p>
                                
                                 <div className="mt-8">
                                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Print</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <Switcher/>
        </>
    )
}
