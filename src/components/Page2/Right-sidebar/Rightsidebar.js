import { useState } from "react";

const Rightsidebar = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 #e3f2f3:text-gray-400 #e3f2f3:hover:bg-gray-700 #e3f2f3:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        class=" top-0 right-0 z-1  h-screen  transition-transform -translate-x-full   border-gray-200 sm:translate-x-0 border-opacity-0"
        aria-label="Sidebar"
      >
        <div
          class="h-full  w-36 shadow-2xl ml-24  pb-4 overflow-y-auto "
          // style={{ backgroundColor: "#e3f2f3" }}
        >
          <ul class="space-y-2">
            <p className="pl-4 bg-gray-200 py-1 font-semibold">AI Enabled</p>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal hover:border-r-2 hover:border-r-lime-400 text-gray-900  #e3f2f3:text-#e3f2f3 hover:bg-gray-100 #e3f2f3:hover:bg-gray-700"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  id="1"
                />
                <label for="1" class="ml-3">
                  Bg Removal
                </label>
              </a>
            </li>
            <p className="pl-4 bg-gray-200 py-1 font-semibold">Manual</p>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base hover:border-r-2 hover:border-r-lime-400 font-normal text-gray-900  #e3f2f3:text-#e3f2f3 hover:bg-gray-100 #e3f2f3:hover:bg-gray-700"
              >
                <input type="checkbox" id="2" />
                <span class="flex-1 ml-3 #e3f2f3space-nowrap">Liquify</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base hover:border-r-2 hover:border-r-lime-400 font-normal text-gray-900  #e3f2f3:text-#e3f2f3 hover:bg-gray-100 #e3f2f3:hover:bg-gray-700"
              >
                <input type="checkbox" id="3" />
                <span class="flex-1 ml-3 #e3f2f3space-nowrap">Retouch</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal hover:border-r-2 hover:border-r-lime-400 text-gray-900  #e3f2f3:text-#e3f2f3 hover:bg-gray-100 #e3f2f3:hover:bg-gray-700"
              >
                <input type="checkbox" id="4" />
                <span class="flex-1 ml-3 #e3f2f3space-nowrap">Clipping</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal hover:border-r-2 hover:border-r-lime-400 text-gray-900  #e3f2f3:text-#e3f2f3 hover:bg-gray-100 #e3f2f3:hover:bg-gray-700"
              >
                <input type="checkbox" id="5" />
                <span class="flex-1 ml-3 #e3f2f3space-nowrap">Masking</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Rightsidebar;
