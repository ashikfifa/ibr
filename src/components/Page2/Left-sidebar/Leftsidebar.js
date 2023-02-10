import fileicon from "./img/file-icon.svg";
import {
  BiFile,
  BiFilterAlt,
  BiFolderOpen,
  BiWindowAlt,
  BiXCircle,
} from "react-icons/bi";
const Leftsidebar = () => {
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
        class=" top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full  border-gray-200 sm:translate-x-0 border-opacity-0"
        aria-label="Sidebar"
      >
        <div
          class="w-32  h-full  pb-4  overflow-y-auto shadow-2xl "
          // style={{ backgroundColor: "#e3f2f3" }}
        >
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base flex flex-col font-normal text-gray-900 hover:border-r-2 hover:border-r-yellow-300 hover:bg-gray-100 "
              >
                <BiFile className="h-6 w-6"></BiFile>
                <span>File</span>
              </a>
            </li>
            <li>
              <div
                onClick={() => document.querySelector("#filepicker").click()}
                class="flex items-center p-2 text-base flex flex-col font-normal text-gray-900  hover:bg-gray-100 hover:border-r-2 hover:border-r-yellow-300"
              >
                <BiFolderOpen className="h-6 w-6"></BiFolderOpen>
                <span class="flex-1  #e3f2f3space-nowrap">Folder</span>
              </div>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base flex flex-col font-normal text-gray-900 hover:border-r-2 hover:border-r-yellow-300 hover:bg-gray-100 "
              >
                <BiWindowAlt className="h-6 w-6"></BiWindowAlt>
                <span class="flex-1  #e3f2f3space-nowrap">FTP</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center hover:border-r-2 hover:border-r-yellow-300 p-2 text-base flex flex-col font-normal text-gray-900  hover:bg-gray-100 "
              >
                <BiFilterAlt className="h-6 w-6"></BiFilterAlt>

                <span class="flex-1  #e3f2f3space-nowrap">Filter</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 flex flex-col text-base font-normal  text-gray-900   hover:bg-gray-100 hover:border-r-2 hover:border-r-yellow-300 "
              >
                <BiXCircle className="h-6 w-6"></BiXCircle>
                <span class="flex-1  #e3f2f3space-nowrap">Clear</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Leftsidebar;
