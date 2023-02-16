import React, { useState } from "react";
import { Link } from "react-router-dom";

const LostPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-24 h-full ">
        <div className="p-5 rounded-md shadow-2xl">
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Lost Password
          </h3>
          <form className="space-y-6  w-96" action="#" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="w-full text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Reset Password
            </button>

            <Link
              to="/log-in"
              className="text-sm  text-blue-700 hover:underline dark:text-blue-500"
            >
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LostPassword;
