import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar';
import Footer from '../componets/Footer/footer';
import Switcher from '../componets/switcher';
import TermsFaq from '../componets/termsFaq';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

export default function Page() {
    return (
        <>
            <Navbar/>
            <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="text-3xl leading-normal font-semibold">Terms of Services</h3>
                    </div>
                </div>
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link href="/i">worksbyte</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">Terms</li>
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
                                <h5 className="text-xl font-semibold mb-4">Terms of Service :</h5>
                                <p className="text-slate-400">Last Updated: 22/10/2024</p>
                                <p className="text-slate-400">Welcome to Dgiverse. These Terms of Service (“Terms”) govern your access to and use of our website, services, and platform (collectively, the “Services”). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Services.</p>

                                <h5 className="text-xl font-semibold mb-4 mt-8">1. Acceptance of Terms:</h5>
                                <p className="text-slate-400">By using our platform and Services, you agree to these<b className="text-red-600">Terms</b>and any additional terms that may apply. You must be at least<b className="text-red-600">18 years </b> old to use our Services. If you are using our <b className="text-red-600">Services</b> on behalf of an organization, you are agreeing to these Terms on behalf of that organization.</p>



                                  <h5 className="text-xl font-semibold mb-4 mt-8">2. Changes to Terms:</h5>
                                <p className="text-slate-400">We reserve the right to update or modify these<b className="text-red-600">Terms</b>Terms at any time. Any changes will be effective immediately upon posting the revised <b className="text-red-600">version</b> on our website. Your continued use of the<b className="text-red-600">Services</b> after such changes constitutes your acceptance of the new Terms. Please review these Terms periodically for updates.</p>






                                   <h5 className="text-xl font-semibold mb-4 mt-8">3. Services Overview:</h5>
                                <p className="text-slate-400">Our platform enables users to create, manage, and deploy applications using low-code/no-code tools. The specific services we offer may include</p>
                                   <ul className="list-none text-slate-400 mt-3">
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Application Development-Tools to build applications without extensive coding.</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Customization and Automation-Features to automate processes and customize workflows.</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Hosting and Deployment-Hosting services for applications created on the platform.</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Integration with Third-Party Services-Connections with other applications and services through APIs.</li>
                                </ul> 



                                  <h5 className="text-xl font-semibold mb-4 mt-8">4. User Accounts:</h5>
                                <p className="text-slate-400">To access certain features of our Services, you may be required to create an account. You agree to:</p>
                                   <ul className="list-none text-slate-400 mt-3">
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Provide accurate, current, and complete information when registering.</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Maintain the security of your account and password.</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Notify us immediately of any unauthorized use of your account.</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Be responsible for all activities that occur under your account.</li>
                                </ul> 
                                 className="text-slate-400">We reserve the right to terminate accounts that provide false or misleading information or violate these Terms</p>



                                      <h5 className="text-xl font-semibold mb-4 mt-8">5. User Responsibilities</h5>
                                <p className="text-slate-400">By using our Services, you agree that you will not:</p>
                                   <ul className="list-none text-slate-400 mt-3">
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Use the platform for any unlawful purposes or in violation of any applicable laws or regulations.</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Distribute viruses, malware, or other harmful software.</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Reverse-engineer, decompile, or disassemble the Services or any underlying technology.</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Infringe on any intellectual property rights or rights of privacy.</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Misuse or abuse our Services, including creating malicious or fraudulent applications.</li>
                               
                                </ul> 
                                 className="text-slate-400">You are <b className="text-red-600">responsible </b> for the content you create, including any applications, data, or code.</p>





                                <h5 className="text-xl font-semibold mb-4 mt-8">6. Fees and Payment</h5>
                                <p className="text-slate-400">Some of our Services may be provided on a paid basis. By selecting a paid plan or subscription, you agree to pay the fees associated with that plan. All fees are non-refundable unless otherwise specified in writing. We reserve the right to change our pricing at any time with reasonable notice.</p>



                                      <h5 className="text-xl font-semibold mb-4 mt-8">6. Fees and Payment</h5>
                                <p className="text-slate-400">Some of our Services may be provided on a paid basis. By selecting a paid plan or subscription, you agree to pay the fees associated with that plan. All fees are non-refundable unless otherwise specified in writing. We reserve the right to change our pricing at any time with reasonable notice.</p>


                                     <h5 className="text-xl font-semibold mb-4 mt-8">7. Intellectual Property</h5>
                                     <h3 className="text-lg font-semibold mb-4 mt-8">7.1. Ownership:</h3>
                                <p className="text-slate-400">All content, technology, and intellectual property rights on our platform, including software, logos, and designs, are owned by or licensed to us. You agree not to copy, distribute, or create derivative works based on our platform without prior written permission.</p>

                                  <h3 className="text-lg font-semibold mb-4 mt-8">7.2. Your Content:</h3>
                                <p className="text-slate-400">You retain ownership of any content, data, or applications you create using our platform. By using our Services, you grant us a worldwide, royalty-free license to use, host, store, reproduce, and display your content solely for the purpose of providing the Services to you.</p>




                                     <h5 className="text-xl font-semibold mb-4 mt-8">8. Third-Party Services</h5>
                                <p className="text-slate-400">Our platform may integrate with or allow you to use third-party services. These third-party services are not controlled by us, and their use is subject to their own terms and privacy policies. We are not responsible for the content, accuracy, or reliability of any third-party services.</p>



                                     <h5 className="text-xl font-semibold mb-4 mt-8">9. Termination of Services</h5>
                                <p className="text-slate-400">We reserve the right to suspend or terminate your access to the Services at any time, without notice, for any reason, including, but not limited to, violation of these Terms. Upon termination, your right to use the Services will immediately cease, and you must stop using the platform and any related services.</p>


                                     
                                <h5 className="text-xl font-semibold mb-4 mt-8">Restrictions :</h5>
                                <p className="text-slate-400">You are specifically restricted from all of the following :</p>
                                <ul className="list-none text-slate-400 mt-3">
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Create your own skin to match your brand</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                                    <li className="flex items-center mt-2"><FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>Create your own skin to match your brand</li>
                                </ul>

                                <h5 className="text-xl font-semibold mt-8">Users Question & Answer :</h5>

                                <TermsFaq/>

                                <div className="mt-6">
                                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Accept</Link>
                                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md ms-2">Decline</Link>
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
