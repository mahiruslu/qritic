import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHamburger, FaBars } from "react-icons/fa";

function Navbar() {
  const [isActive, setIsActive] = React.useState(true);
  const user = useSelector((state) => {
    return state.user;
  });
  // const user = useSelector((state) => state.user);

  console.log(user);
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2  sm:px-4 py-2.5 rounded-b dark:bg-gray-800">
        <div className="container flex flex-wrap md:justify-between items-center mx-auto justify-center">
          <Link to="/" className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              qritic
            </span>
          </Link>
          <div className={`${isActive ? "flex" : "hidden"} w-full   md:w-auto`}>
            <ul className="flex flex-col gap-3 w-full justify-center items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to="/"
                  className="block   text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/users"
                  className="block  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="block  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="block  text-purple-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-purple-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {user.isLoggedIn ? user.name : "Account"}
                </Link>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => {
              setIsActive(!isActive);
              console.log(isActive);
            }}
          >
            <span>
              <FaBars />
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
