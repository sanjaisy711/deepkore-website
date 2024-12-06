"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Switcher from "../componets/switcher";
import axios from "axios";
import { useRouter } from "next/navigation";
import getEnvConfig from "../componets/getenv";

export default function Page() {
  const [name, setName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [allFieldsCheck, setAllFieldsCheck] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [country, setCountry] = useState("United States");

  // Error state for all fields
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
  const [isCompanyNameEmpty, setIsCompanyNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Reset all error states
    setIsNameEmpty(false);
    setIsEmailEmpty(false);
    setIsPhoneEmpty(false);
    setIsCompanyNameEmpty(false);
    setEmailCheck(false);

    // Validation for name field
    if (name.trim() === "") {
      setIsNameEmpty(true);
      valid = false;
    }

    // Validation for email field
    if (businessEmail.trim() === "") {
      setIsEmailEmpty(true);
      valid = false;
    } else if (!validateEmail(businessEmail)) {
      setEmailCheck(true);
      valid = false;
    }

    // Validation for phone field
    if (phone.trim() === "") {
      setIsPhoneEmpty(true);
      valid = false;
    }

    // Validation for company name field
    if (companyName.trim() === "") {
      setIsCompanyNameEmpty(true);
      valid = false;
    }

    if (valid && isChecked) {
      Signup();
    } else {
      // If not valid, show the error messages and prevent submission
      return;
    }
  };

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  function validateEmail(email) {
    const restrictedDomains = [
      "gmail.com",
      "ymail.com",
      "outlook.com",
      "live.com",
      "hotmail.com",
      "yahoo.com",
      "yahoo.co.in",
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    const domain = email.split("@")[1];
    return !restrictedDomains.includes(domain);
  }

  function Signup() {
    if (
      isChecked &&
      name !== "" &&
      businessEmail !== "" &&
      phone !== "" &&
      companyName !== ""
    ) {
      axios
        .post(`${getEnvConfig()}/site/leadsignup`, {
          name: name,
          business_email: businessEmail,
          mobile: phone,
          company_name: companyName,
        })
        .then(function (response) {
          setEmailCheck(false);
          setSuccessMessage(true);
        })
        .catch(function (error) {
          if (error.response.data.message == "Email is required") {
            setEmailCheck(true);
          }
        });
    }
  }

  return (
    <>
      <section
        className="md:h-screen py-36 flex items-center  bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <Link href="/">
                <Image
                  src="/images/logo-icon.svg"
                  height={74}
                  width={82}
                  className="mx-auto"
                  alt=""
                />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Signup</h5>
              <form className="text-start">
                {/* Name Field */}
                <div className="grid grid-cols-1">
                  <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                    <div className="relative bg-inherit">
                      <input
                        id="name"
                        type="text"
                        className="peer h-10 w-full rounded-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                        placeholder="Enter Your Name"
                        onChange={(e) => {
                          setName(e.target.value);
                          if (e.target.value.trim() !== "") {
                            setIsNameEmpty(false);
                          }
                        }}
                      />

                      <label
                        htmlFor="name"
                        className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
                      >
                        Your Name
                      </label>
                    </div>
                  </div>
                  {isNameEmpty && (
                    <p className="text-red-600 text-xs">Name is required</p>
                  )}
                </div>
                <br />

                {/* Email Field */}
                <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                  <div className="relative bg-inherit">
                    <input
                      id="business_email"
                      type="email"
                      className="peer h-10 w-full rounded-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                      placeholder="Business Email Address"
                      onChange={(e) => {
                        const emailInput = e.target.value;
                        setBusinessEmail(emailInput);
                        if (emailInput.trim() !== "") {
                          setIsEmailEmpty(false);
                        }
                        if (validateEmail(emailInput)) {
                          setEmailCheck(false);
                        } else {
                          setEmailCheck(true);
                        }
                      }}
                    />

                    <label
                      htmlFor="business_email"
                      className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
                    >
                      Business Email Address
                    </label>
                  </div>
                  {(emailCheck || isEmailEmpty) && (
                    <p className="text-red-600 text-xs">
                      {emailCheck
                        ? "Please Provide a Business Email is required"
                        : "Email is required"}
                    </p>
                  )}
                </div>
                <br />

                {/* Phone Field */}
                <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                  <div className="relative bg-inherit flex">
                    {/* Country Dropdown */}
                    <select
                      value={selectedCountryCode}
                      onChange={(e) => setSelectedCountryCode(e.target.value)}
                      className="peer h-10 w-20 rounded-l-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-slate-200 dark:ring-gray-700 dark:focus:border-indigo-600 dark:bg-slate-900"
                    >
                      <option value="+93">+93 - Afghanistan</option>
                      <option value="+355">+355 - Albania</option>
                      <option value="+213">+213 - Algeria</option>
                      <option value="+1-684">+1-684 - American Samoa</option>
                      <option value="+376">+376 - Andorra</option>
                      <option value="+244">+244 - Angola</option>
                      <option value="+1-264">+1-264 - Anguilla</option>
                      <option value="+672">+672 - Antarctica</option>
                      <option value="+1-268">
                        +1-268 - Antigua and Barbuda
                      </option>
                      <option value="+54">+54 - Argentina</option>
                      <option value="+374">+374 - Armenia</option>
                      <option value="+297">+297 - Aruba</option>
                      <option value="+61">+61 - Australia</option>
                      <option value="+43">+43 - Austria</option>
                      <option value="+994">+994 - Azerbaijan</option>
                      <option value="+1-242">+1-242 - Bahamas</option>
                      <option value="+973">+973 - Bahrain</option>
                      <option value="+880">+880 - Bangladesh</option>
                      <option value="+1-246">+1-246 - Barbados</option>
                      <option value="+375">+375 - Belarus</option>
                      <option value="+32">+32 - Belgium</option>
                      <option value="+501">+501 - Belize</option>
                      <option value="+229">+229 - Benin</option>
                      <option value="+1-441">+1-441 - Bermuda</option>
                      <option value="+975">+975 - Bhutan</option>
                      <option value="+591">+591 - Bolivia</option>
                      <option value="+387">
                        +387 - Bosnia and Herzegovina
                      </option>
                      <option value="+267">+267 - Botswana</option>
                      <option value="+55">+55 - Brazil</option>
                      <option value="+246">
                        +246 - British Indian Ocean Territory
                      </option>
                      <option value="+1-284">
                        +1-284 - British Virgin Islands
                      </option>
                      <option value="+673">+673 - Brunei</option>
                      <option value="+359">+359 - Bulgaria</option>
                      <option value="+226">+226 - Burkina Faso</option>
                      <option value="+257">+257 - Burundi</option>
                      <option value="+238">+238 - Cabo Verde</option>
                      <option value="+855">+855 - Cambodia</option>
                      <option value="+237">+237 - Cameroon</option>
                      <option value="+1">+1 - Canada</option>
                      <option value="+1-345">+1-345 - Cayman Islands</option>
                      <option value="+236">
                        +236 - Central African Republic
                      </option>
                      <option value="+235">+235 - Chad</option>
                      <option value="+56">+56 - Chile</option>
                      <option value="+86">+86 - China</option>
                      <option value="+61">+61 - Christmas Island</option>
                      <option value="+61">+61 - Cocos Islands</option>
                      <option value="+57">+57 - Colombia</option>
                      <option value="+269">+269 - Comoros</option>
                      <option value="+242">+242 - Congo</option>
                      <option value="+682">+682 - Cook Islands</option>
                      <option value="+506">+506 - Costa Rica</option>
                      <option value="+385">+385 - Croatia</option>
                      <option value="+53">+53 - Cuba</option>
                      <option value="+599">+599 - Curaçao</option>
                      <option value="+357">+357 - Cyprus</option>
                      <option value="+420">
                        +420 - Czech Republic (Czechia)
                      </option>
                      <option value="+225">+225 - Côte d'Ivoire</option>
                      <option value="+45">+45 - Denmark</option>
                      <option value="+253">+253 - Djibouti</option>
                      <option value="+1-767">+1-767 - Dominica</option>
                      <option value="+1-809, 1-829, 1-849">
                        +1-809, 1-829, 1-849 - Dominican Republic
                      </option>
                      <option value="+243">+243 - DR Congo</option>
                      <option value="+593">+593 - Ecuador</option>
                      <option value="+20">+20 - Egypt</option>
                      <option value="+503">+503 - El Salvador</option>
                      <option value="+240">+240 - Equatorial Guinea</option>
                      <option value="+291">+291 - Eritrea</option>
                      <option value="+372">+372 - Estonia</option>
                      <option value="+268">+268 - Eswatini</option>
                      <option value="+251">+251 - Ethiopia</option>
                      <option value="+298">+298 - Faeroe Islands</option>
                      <option value="+500">+500 - Falkland Islands</option>
                      <option value="+679">+679 - Fiji</option>
                      <option value="+358">+358 - Finland</option>
                      <option value="+33">+33 - France</option>
                      <option value="+689">+689 - French Polynesia</option>
                      <option value="+241">+241 - Gabon</option>
                      <option value="+220">+220 - Gambia</option>
                      <option value="+995">+995 - Georgia</option>
                      <option value="+49">+49 - Germany</option>
                      <option value="+233">+233 - Ghana</option>
                      <option value="+350">+350 - Gibraltar</option>
                      <option value="+30">+30 - Greece</option>
                      <option value="+299">+299 - Greenland</option>
                      <option value="+1-473">+1-473 - Grenada</option>
                      <option value="+1-671">+1-671 - Guam</option>
                      <option value="+502">+502 - Guatemala</option>
                      <option value="+44-1481">+44-1481 - Guernsey</option>
                      <option value="+224">+224 - Guinea</option>
                      <option value="+245">+245 - Guinea-Bissau</option>
                      <option value="+592">+592 - Guyana</option>
                      <option value="+509">+509 - Haiti</option>
                      <option value="+379">+379 - Holy See</option>
                      <option value="+504">+504 - Honduras</option>
                      <option value="+852">+852 - Hong Kong</option>
                      <option value="+36">+36 - Hungary</option>
                      <option value="+354">+354 - Iceland</option>
                      <option value="+91">+91 - India</option>
                      <option value="+62">+62 - Indonesia</option>
                      <option value="+98">+98 - Iran</option>
                      <option value="+964">+964 - Iraq</option>
                      <option value="+353">+353 - Ireland</option>
                      <option value="+44-1624">+44-1624 - Isle of Man</option>
                      <option value="+972">+972 - Israel</option>
                      <option value="+39">+39 - Italy</option>
                      <option value="+1-876">+1-876 - Jamaica</option>
                      <option value="+81">+81 - Japan</option>
                      <option value="+44-1534">+44-1534 - Jersey</option>
                      <option value="+962">+962 - Jordan</option>
                      <option value="+7">+7 - Kazakhstan</option>
                      <option value="+254">+254 - Kenya</option>
                      <option value="+686">+686 - Kiribati</option>
                      <option value="+965">+965 - Kuwait</option>
                      <option value="+996">+996 - Kyrgyzstan</option>
                      <option value="+856">+856 - Laos</option>
                      <option value="+371">+371 - Latvia</option>
                      <option value="+961">+961 - Lebanon</option>
                      <option value="+266">+266 - Lesotho</option>
                      <option value="+231">+231 - Liberia</option>
                      <option value="+218">+218 - Libya</option>
                      <option value="+423">+423 - Liechtenstein</option>
                      <option value="+370">+370 - Lithuania</option>
                      <option value="+352">+352 - Luxembourg</option>
                      <option value="+853">+853 - Macao</option>
                      <option value="+261">+261 - Madagascar</option>
                      <option value="+265">+265 - Malawi</option>
                      <option value="+60">+60 - Malaysia</option>
                      <option value="+960">+960 - Maldives</option>
                      <option value="+223">+223 - Mali</option>
                      <option value="+356">+356 - Malta</option>
                      <option value="+692">+692 - Marshall Islands</option>
                      <option value="+222">+222 - Mauritania</option>
                      <option value="+230">+230 - Mauritius</option>
                      <option value="+262">+262 - Mayotte</option>
                      <option value="+52">+52 - Mexico</option>
                      <option value="+691">+691 - Micronesia</option>
                      <option value="+373">+373 - Moldova</option>
                      <option value="+377">+377 - Monaco</option>
                      <option value="+976">+976 - Mongolia</option>
                      <option value="+382">+382 - Montenegro</option>
                      <option value="+1-664">+1-664 - Montserrat</option>
                      <option value="+212">+212 - Morocco</option>
                      <option value="+258">+258 - Mozambique</option>
                      <option value="+95">+95 - Myanmar</option>
                      <option value="+264">+264 - Namibia</option>
                      <option value="+674">+674 - Nauru</option>
                      <option value="+977">+977 - Nepal</option>
                      <option value="+31">+31 - Netherlands</option>
                      <option value="+687">+687 - New Caledonia</option>
                      <option value="+64">+64 - New Zealand</option>
                      <option value="+505">+505 - Nicaragua</option>
                      <option value="+227">+227 - Niger</option>
                      <option value="+234">+234 - Nigeria</option>
                      <option value="+683">+683 - Niue</option>
                      <option value="+850">+850 - North Korea</option>
                      <option value="+389">+389 - North Macedonia</option>
                      <option value="+1-670">
                        +1-670 - Northern Mariana Islands
                      </option>
                      <option value="+47">+47 - Norway</option>
                      <option value="+968">+968 - Oman</option>
                      <option value="+92">+92 - Pakistan</option>
                      <option value="+680">+680 - Palau</option>
                      <option value="+507">+507 - Panama</option>
                      <option value="+675">+675 - Papua New Guinea</option>
                      <option value="+595">+595 - Paraguay</option>
                      <option value="+51">+51 - Peru</option>
                      <option value="+63">+63 - Philippines</option>
                      <option value="+64">+64 - Pitcairn Islands</option>
                      <option value="+48">+48 - Poland</option>
                      <option value="+351">+351 - Portugal</option>
                      <option value="+1-787, 1-939">
                        +1-787, 1-939 - Puerto Rico
                      </option>
                      <option value="+974">+974 - Qatar</option>
                      <option value="+40">+40 - Romania</option>
                      <option value="+7">+7 - Russia</option>
                      <option value="+250">+250 - Rwanda</option>
                      <option value="+262">+262 - Réunion</option>
                      <option value="+590">+590 - Saint Barthelemy</option>
                      <option value="+290">+290 - Saint Helena</option>
                      <option value="+1-869">
                        +1-869 - Saint Kitts & Nevis
                      </option>
                      <option value="+1-758">+1-758 - Saint Lucia</option>
                      <option value="+590">+590 - Saint Martin</option>
                      <option value="+508">
                        +508 - Saint Pierre & Miquelon
                      </option>
                      <option value="+685">+685 - Samoa</option>
                      <option value="+378">+378 - San Marino</option>
                      <option value="+239">+239 - São Tomé & Príncipe</option>
                      <option value="+966">+966 - Saudi Arabia</option>
                      <option value="+221">+221 - Senegal</option>
                      <option value="+381">+381 - Serbia</option>
                      <option value="+248">+248 - Seychelles</option>
                      <option value="+232">+232 - Sierra Leone</option>
                      <option value="+65">+65 - Singapore</option>
                      <option value="+1-721">+1-721 - Sint Maarten</option>
                      <option value="+421">+421 - Slovakia</option>
                      <option value="+386">+386 - Slovenia</option>
                      <option value="+677">+677 - Solomon Islands</option>
                      <option value="+252">+252 - Somalia</option>
                      <option value="+27">+27 - South Africa</option>
                      <option value="+82">+82 - South Korea</option>
                      <option value="+211">+211 - South Sudan</option>
                      <option value="+34">+34 - Spain</option>
                      <option value="+94">+94 - Sri Lanka</option>
                      <option value="+1-784">
                        +1-784 - St. Vincent & Grenadines
                      </option>
                      <option value="+970">+970 - State of Palestine</option>
                      <option value="+249">+249 - Sudan</option>
                      <option value="+597">+597 - Suriname</option>
                      <option value="+47">+47 - Svalbard and Jan Mayen</option>
                      <option value="+46">+46 - Sweden</option>
                      <option value="+41">+41 - Switzerland</option>
                      <option value="+963">+963 - Syria</option>
                      <option value="+886">+886 - Taiwan</option>
                      <option value="+992">+992 - Tajikistan</option>
                      <option value="+255">+255 - Tanzania</option>
                      <option value="+66">+66 - Thailand</option>
                      <option value="+670">+670 - Timor-Leste</option>
                      <option value="+228">+228 - Togo</option>
                      <option value="+690">+690 - Tokelau</option>
                      <option value="+676">+676 - Tonga</option>
                      <option value="+1-868">
                        +1-868 - Trinidad and Tobago
                      </option>
                      <option value="+216">+216 - Tunisia</option>
                      <option value="+90">+90 - Turkey</option>
                      <option value="+993">+993 - Turkmenistan</option>
                      <option value="+1-649">+1-649 - Turks and Caicos</option>
                      <option value="+688">+688 - Tuvalu</option>
                      <option value="+1-340">
                        +1-340 - U.S. Virgin Islands
                      </option>
                      <option value="+256">+256 - Uganda</option>
                      <option value="+380">+380 - Ukraine</option>
                      <option value="+971">+971 - United Arab Emirates</option>
                      <option value="+44">+44 - United Kingdom</option>
                      <option value="+1">+1 - United States</option>
                      <option value="+598">+598 - Uruguay</option>
                      <option value="+998">+998 - Uzbekistan</option>
                      <option value="+678">+678 - Vanuatu</option>
                      <option value="+58">+58 - Venezuela</option>
                      <option value="+84">+84 - Vietnam</option>
                      <option value="+681">+681 - Wallis & Futuna</option>
                      <option value="+212">+212 - Western Sahara</option>
                      <option value="+967">+967 - Yemen</option>
                      <option value="+260">+260 - Zambia</option>
                      <option value="+263">+263 - Zimbabwe</option>

                      {/* Add more country codes and names here */}
                    </select>

                    <input
                      id="phone"
                      type="text"
                      className="peer h-10 w-full rounded-r-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                      placeholder="Phone Number"
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (e.target.value.trim() !== "") {
                          setIsPhoneEmpty(false);
                        }
                      }}
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
                    >
                      Phone
                    </label>
                  </div>
                  {isPhoneEmpty && (
                    <p className="text-red-600 text-xs bg-transparent">
                      Phone is required
                    </p>
                  )}
                </div>
                <br />

                {/* Company Name Field */}
                <div className="mb-4p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                  <div className="relative bg-inherit">
                    <input
                      id="company_name"
                      type="text"
                      className="peer h-10 w-full rounded-lg border border-gray-300 bg-transparent px-2 text-sm text-gray-900 placeholder-transparent ring-2 ring-gray-500 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:ring-gray-700 dark:focus:border-indigo-600"
                      placeholder="Company Name"
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                        if (e.target.value.trim() !== "") {
                          setIsCompanyNameEmpty(false);
                        }
                      }}
                    />

                    <label
                      htmlFor="company_name"
                      className="absolute left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-border-indigo-600 peer-focus:text-sm dark:text-gray-400 dark:peer-focus:border-indigo-600"
                    >
                      Company Name
                    </label>
                  </div>
                  {isCompanyNameEmpty && (
                    <p className="text-red-600 text-xs bg-transparent">
                      Company name is required
                    </p>
                  )}
                </div>
                <br />
                <div className="mb-4">
                  <div className="flex items-center w-full mb-0">
                    <input
                      className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                      type="checkbox"
                      value=""
                      id="AcceptT&C"
                      checked={isChecked}
                      onChange={checkHandler}
                      required
                    />
                    <label
                      className="form-check-label text-slate-400"
                      htmlFor="AcceptT&C"
                    >
                      I Accept{" "}
                      <Link href="/page-terms" className="text-indigo-600">
                        Terms And Condition
                      </Link>
                    </label>
                  </div>
                  <p className="text-red-600 text-xs">
                    {!isChecked && "Please accept our terms and Conditions"}
                  </p>
                </div>

                {/* <div className="flex items-center justify-between mt-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </div> */}
              </form>
              <div className="mb-4">
                <input
                  type="submit"
                  name="send"
                  onClick={handleSubmit}
                  className="py-2 px-5 cursor-pointer inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                  value="Register"
                />
              </div>
              {successMessage && (
                <div className="grid grid-cols-1 gap-[30px]">
                  <div
                    className={`bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center ${
                      successMessage ? "" : "hidden"
                    }`}
                  >
                    <div className="relative w-full h-auto max-w-lg p-4">
                      <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setSuccessMessage(!successMessage);
                            router.push("/");
                          }}
                          className="absolute -top-4 -end-4 text-indigo-600 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hover:text-gray-900 rounded-full text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
                          <div className="relative overflow-hidden text-transparent -m-3 text-indigo-600"></div>

                          <h4 className="text-xl text-indigo-600 font-semibold mt-6">
                            Thank you for registering!
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="text-center">
                <span className="text-slate-400 me-2">
                  Already have an account?
                </span>
                <Link
                  href="https://brightbars.dgitra.com/login"
                  className="text-black dark:text-white font-bold inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Switcher />
    </>
  );
}
