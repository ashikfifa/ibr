import { useState, useEffect } from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import imgTrain from "./img/train.svg";
import "./navbar.css";

const Navbar = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://27.147.191.97:8008/menu")
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
      <nav className="bg-white border-gray-200 px-2 sm:px-4 shadow-md rounded light:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap light:text-white">
              Retouch.ai
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 light:hover:bg-gray-700 light:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col px-4 py-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700">
              {items.map((item) =>
                item.Type == "sign_up" ? (
                  <Link to="/log-in">
                    <button
                      id="btn-signup"
                      className="rounded-md text-white bg-yellow-300"
                      key={item.ID}
                    >
                      {item.Name}
                    </button>
                  </Link>
                ) : (
                  <Link to="#">
                    <div key={item.ID}>{item.Name}</div>
                  </Link>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};
export default Navbar;
