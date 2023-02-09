import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import { BiBox, BiCodeAlt, BiImage, BiUserVoice } from "react-icons/bi";
import "./PriceCard.css";

const PriceCard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" grid grid-cols-3 mt-10 justify-items-center">
        <div class="w-80 p-4 grid justify-center bg-white shadow-xl border-r-emerald-200 border-r-2 rounded-2xl dark:bg-gray-800">
          <p class="text-3xl  text-black text-center dark:text-white">
            Free Account
          </p>
          <p class="mb-4 text-sm text-center  dark:text-gray-300">
            <BiImage className=" ml-32 -mb-5 mt-6 h-10 w-10"></BiImage> <br />
            <span>1 free credit</span>
          </p>
          <p class="mb-4 text-sm text-center  dark:text-gray-300">
            <BiCodeAlt className="ml-32 h-10 w-10"></BiCodeAlt>
            <p>50 free previews</p>
            <span>via API and apps per month</span>
          </p>
          <p class="mb-4 text-sm text-center  dark:text-gray-300">
            <BiBox className="ml-32 -mb-5 h-10 w-10"></BiBox> <br />
            <p>Apps for Windows / Mac / Linux</p>
            <span>and Adobe Photoshop</span>
          </p>
          <p class="mb-4 text-sm text-center  dark:text-gray-300">
            <BiUserVoice className="ml-32 -mb-5 h-10 w-10"></BiUserVoice> <br />
            <span>Refer friends and earn credits</span>
          </p>
          <button
            type="button"
            class="w-40 px-3 py-3 m-auto text-sm text-black bg-white border border-blue-700 rounded-2xl shadow hover:bg-blue-500 hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
          >
            Sign Up Free
          </button>
          <p className="text-center mt-5 py-2 bg-gray-300 rounded-md pl-4 pr-4">
            Free Forever <br />
            <span className="text-xs">
              Recommended for personal use and evaluation
            </span>
          </p>
        </div>

        {/* 2nd card */}
        <div class="w-96 relative p-4 grid justify-center bg-white shadow-lg  border-r-emerald-200 border-r-2 rounded-2xl dark:bg-gray-800">
          <p class="text-3xl text-center  text-black dark:text-white">
            <p class="ribbon bg-blue-300 text-white text-sm whitespace-no-wrap px-4">
              Premium
            </p>{" "}
            Subscription Plan
          </p>

          <p class="text-3xl text-center font-bold text-blue-500 dark:text-white">
            $0.20 <span className="text-xs font-thin">/image</span>
          </p>

          <ul class="w-full mt-6 mb-6 text-sm text-black dark:text-white">
            <li class="flex items-center mb-3">
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-lg font-medium  flex text-gray-900 dark:text-gray-300"
                >
                  40 credits / month
                  <p className="text-xs ml-8 mt-2">$ 9</p>
                  <p className="text-xs mt-2 ml-9">$ 0.23 / image</p>
                </label>
              </div>
            </li>
            <li class="flex items-center mb-3">
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-lg font-medium  flex text-gray-900 dark:text-gray-300"
                >
                  200 credits / month
                  <p className="text-xs ml-5 mt-2">$ 39</p>
                  <p className="text-xs mt-2 ml-8">$ 0.20 / image</p>
                </label>
              </div>
            </li>
            <li class="flex items-center mb-3">
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-lg font-medium  flex text-gray-900 dark:text-gray-300"
                >
                  500 credits / month
                  <p className="text-xs ml-5 mt-2">$ 89</p>
                  <p className="text-xs mt-2 ml-8">$ 0.18 / image</p>
                </label>
              </div>
            </li>
            <li class="flex items-center mb-3">
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-lg font-medium  flex text-gray-900 dark:text-gray-300"
                >
                  1,200 credits / month
                  <p className="text-xs ml-2 mt-2">$ 189</p>
                  <p className="text-xs mt-2 ml-7">$ 0.16 / image</p>
                </label>
              </div>
            </li>
            <li class="flex items-center mb-3">
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-lg font-medium  flex text-gray-900 dark:text-gray-300"
                >
                  2,800 credits / month
                  <p className="text-xs ml-2 mt-2">$ 389</p>
                  <p className="text-xs mt-2 ml-6">$ 0.14 / image</p>
                </label>
              </div>
            </li>
          </ul>
          <button
            type="button"
            class="w-40 px-3 py-3 m-auto text-sm text-black bg-white border border-blue-700 rounded-2xl shadow hover:bg-blue-500 hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
          >
            Subscribe Now
          </button>
          <span className="text-center text-sm">
            $ 389 per month, price incl. VAT, if applicable
          </span>
          <p className="text-center mt-5 text-xs py-2 bg-gray-300 rounded-md pl-4 pr-4">
            Risk free: 14 Days Money Back Guarantee <br />
            <span className="text-xs">
              Flexible: Downgrade, upgrade or cancel any time
            </span>
            <br />
            <span className="text-xs">
              Fair: Unused credits roll over as long as you're subscribed
            </span>
          </p>
        </div>
        {/* 3rd card */}
        <div class="w-80  p-4 grid justify-center bg-white shadow-lg  border-r-emerald-200 border-r-2 rounded-2xl dark:bg-gray-800">
          <p class="text-3xl text-center  text-black dark:text-white">
            {" "}
            Pay as you go
          </p>

          <p class="text-3xl text-center font-bold text-blue-500 dark:text-white">
            $ 0.90 <span className="text-xs font-thin">/image</span>
          </p>

          <ul class="w-full mt-6 mb-6 text-sm text-black dark:text-white">
            <li class="flex items-center mb-3">
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-lg font-medium  flex text-gray-900 dark:text-gray-300"
                >
                  1 credit
                  <p className="text-xs ml-9 mt-2">$ 1.99</p>
                  <p className="text-xs mt-2 ml-5">$ 1.99 / image</p>
                </label>
              </div>
            </li>
            <li class="flex items-center mb-3">
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-lg font-medium  flex text-gray-900 dark:text-gray-300"
                >
                  10 credits
                  <p className="text-xs ml-5 mt-2">$ 9</p>
                  <p className="text-xs mt-2 ml-8">$ 0.90 / image</p>
                </label>
              </div>
            </li>
            <li class="flex items-center mb-3">
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-lg font-medium  flex text-gray-900 dark:text-gray-300"
                >
                  75 credits
                  <p className="text-xs ml-4 mt-2">$ 49</p>
                  <p className="text-xs mt-2 ml-7">$ 0.65 / image</p>
                </label>
              </div>
            </li>
            <li class="flex items-center mb-3">
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-lg font-medium  flex text-gray-900 dark:text-gray-300"
                >
                  200 credits
                  <p className="text-xs ml-2 mt-2">$ 99</p>
                  <p className="text-xs mt-2 ml-7">$ 0.50 / image</p>
                </label>
              </div>
            </li>
            <li class="flex items-center mb-3">
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ml-2 text-lg font-medium  flex text-gray-900 dark:text-gray-300"
                >
                  500 credits
                  <p className="text-xs ml-2 mt-2">$ 199</p>
                  <p className="text-xs mt-2 ml-6">$ 0.40 / image</p>
                </label>
              </div>
            </li>
          </ul>
          <button
            type="button"
            class="w-40 px-3 py-3 m-auto text-sm text-black bg-white border border-blue-700 rounded-2xl shadow hover:bg-blue-500 hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
          >
            Buy Now
          </button>
          <span className="text-center text-sm">
            $ 199 one-time payment, price incl. VAT, if applicable
          </span>
          <p className="text-center mt-5 text-xs py-2 bg-gray-300 rounded-md pl-4 pr-4">
            Credits available for use anytime <br />
            <span className="text-xs">within two years of purchase.</span>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
