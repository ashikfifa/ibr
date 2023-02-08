import React from "react";

const Toggle = () => {
  return (
    <div className=" bg-sky-200 h-20">
      <div className="flex justify-center items-center">
        <p className=" font-bold py-6 px-4 text-2xl rounded">
          AI-DRIVEN SERVICES
        </p>

        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
