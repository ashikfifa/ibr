import { useState, useEffect } from "react";
import './style.css';

const Leftsidebar = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://27.147.191.97:8008/bar-menu/173")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.menu_list);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div>
          <button
            data-drawer-target="sidebar-multi-level-sidebar"
            data-drawer-toggle="sidebar-multi-level-sidebar"
            aria-controls="sidebar-multi-level-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 #e3f2f3:text-gray-400 #e3f2f3:hover:bg-gray-700 #e3f2f3:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <aside
            id="logo-sidebar"
            className=" top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full  border-gray-200 sm:translate-x-0 border-opacity-0"
            aria-label="Sidebar"
          >
            <div
              className="w-32  h-full  pb-4  overflow-y-auto shadow-2xl "
            // style={{ backgroundColor: "#e3f2f3" }}
            >
              <div className="leftBarMenuWrap space-y-2">
                {items.map((item) =>
                  item.Name == "Folder" ? (
                    <div key={item.ID}>
                      <div
                        onClick={() =>
                          document.querySelector("#filepicker").click()
                        }
                        className="leftBarMenu flex items-center p-2 text-base flex-col font-normal text-gray-900  hover:bg-gray-100 hover:border-r-2 hover:border-r-yellow-300"
                      >
                        <i className={item.icon}></i> {item.Name}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="leftBarMenu flex items-center p-2 text-base flex-col font-normal text-gray-900 hover:border-r-2 hover:border-r-yellow-300 hover:bg-gray-100 "
                    >
                      <i className={item.icon}></i> {item.Name}
                    </div>
                  )
                )}
              </div>
            </div>
          </aside>
        </div>
      </>
    );
  }
};
export default Leftsidebar;
