import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform authentication
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center  bg-white">
        <div className="px-5 pb-2  rounded-md shadow-2xl">
          <h3 className="mb-4 mt-1 text-xl font-bold text-gray-900 dark:text-white">
            Sign in to Retouch.ai
          </h3>
          <form
            className="space-y-6   lg:w-96"
            action="#"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/lost-password"
                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-black "
            >
              Login in with email
            </button>
            <p className="text-center">OR LOGIN IN WITH</p>
            <button
              type="submit"
              className="w-28 text-gray-800 border-gray-700 border-2 hover:bg-black hover:text-white rounded-md py-1 mr-2  "
            >
              <i class="fa-brands fa-facebook"></i> Facebook
            </button>
            <button
              type="submit"
              className="w-28 text-gray-800 border-gray-700 border-2  hover:bg-black hover:text-white rounded-md py-1 mr-2"
            >
              <i class="fa-brands fa-google"></i> Google
            </button>
            <button
              type="submit"
              className="w-28 text-gray-800 border-gray-700  hover:bg-black hover:text-white border-2 rounded-md py-1 "
            >
              <i class="fa-brands fa-twitter"></i> Twitter
            </button>
            <button
              type="submit"
              className="w-28 text-gray-800 border-gray-700 border-2  hover:bg-black hover:text-white rounded-md ml-28 py-1"
            >
              <i class="fa-brands fa-apple"></i> Apple
            </button>

            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              New to Retouch.ai?{" "}
              <Link
                to="/sign-up"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default Login;
