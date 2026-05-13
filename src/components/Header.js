import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode") || false));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
   

    if(darkMode){
      document.documentElement.classList.add('dark');
    } else{
       document.documentElement.classList.remove('dark');

    }
  },[darkMode]);

  const activeClass =
    "text-base block py-2 px-3 rounded md:p-0 text-blue-700 dark:text-blue-400";

  const inActiveClass =
    "text-base block py-2 px-3 rounded md:p-0 text-gray-700 hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent";

    const handleSubmit = (event) => {
      event.preventDefault();
      const queryTerm = event.target.search.value;
      event.target.reset();

      return navigate(`/search?q=${queryTerm}`);


    }

  return (
    <header>
      <nav className="fixed top-0 start-0 z-20 w-full border-b bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8 mr-2 sm:h-9" alt="Cinemate Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
              CineBoima
            </span>
          </Link>

          {/* Right Side Buttons */}
          <div id="mobile-nav" className="flex items-center gap-2 md:order-2">
            <button onClick={() => setDarkMode(!darkMode)} 

            data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            { darkMode ? (<svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>) : (<svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>) }
          </button>
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              className="flex items-center justify-center md:hidden text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 rounded-md w-10 h-10"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            {/* Desktop Search */}
            <label htmlFor="desktop-search" className="sr-only">
              Search movies
            </label>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                type="text"
                id="desktop-search"
                autoComplete="off"
                className="block w-full ps-9 pe-3 py-2.5 text-sm rounded-md border shadow-sm bg-gray-100 border-gray-300 text-black placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
                placeholder="Search..."
                name="search"
              />
              </form>
              
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-md md:hidden text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-controls="navbar-search"
              aria-expanded={!hidden}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>

          {/* Nav + Mobile Search */}
          <div
            className={`${
              hidden ? "hidden" : ""
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            {/* Mobile Search */}
            <div className="relative mt-3 md:hidden">
              <label htmlFor="mobile-search" className="sr-only">
                Search movies
              </label>
              <div id="nav-links" className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="mobile-search"
                autoComplete="off"
                className="block w-full ps-9 pe-3 py-2.5 text-sm rounded-md border shadow-sm bg-gray-100 border-gray-300 text-black placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400"
                placeholder="Search..."
                name="search"
              />
              </form>
            </div>

            {/* Navigation Links */}
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-md bg-white border-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                  end
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movies/popular"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Popular
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movies/top"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Top Rated
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movies/upcoming"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;