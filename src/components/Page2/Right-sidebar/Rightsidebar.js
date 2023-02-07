const Rightsidebar = () => {
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
        class="fixed top-11 right-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-#e3f2f3 border-r border-gray-200 sm:translate-x-0 #e3f2f3:bg-gray-800 #e3f2f3:border-gray-700"
        aria-label="Sidebar"
      >
        <div
          class="h-full px-3 pb-4 overflow-y-auto bg-#e3f2f3 #e3f2f3:bg-#e3f2f3-800"
          style={{ backgroundColor: "#e3f2f3" }}
        >
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg #e3f2f3:text-#e3f2f3 hover:bg-gray-100 #e3f2f3:hover:bg-gray-700"
              >
                <input type="checkbox" id="1" />
                <span class="ml-3">Bg Removal</span>{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg #e3f2f3:text-#e3f2f3 hover:bg-gray-100 #e3f2f3:hover:bg-gray-700"
              >
                <input type="checkbox" id="2" />
                <span class="flex-1 ml-3 #e3f2f3space-nowrap">Liquify</span>
                <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full #e3f2f3:bg-gray-700 #e3f2f3:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg #e3f2f3:text-#e3f2f3 hover:bg-gray-100 #e3f2f3:hover:bg-gray-700"
              >
                <input type="checkbox" id="3" />
                <span class="flex-1 ml-3 #e3f2f3space-nowrap">Retouch</span>
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full #e3f2f3:bg-blue-900 #e3f2f3:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg #e3f2f3:text-#e3f2f3 hover:bg-gray-100 #e3f2f3:hover:bg-gray-700"
              >
                <input type="checkbox" id="4" />
                <span class="flex-1 ml-3 #e3f2f3space-nowrap">Clipping</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg #e3f2f3:text-#e3f2f3 hover:bg-gray-100 #e3f2f3:hover:bg-gray-700"
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
