import React from 'react';
import { Link } from 'react-router-dom';
import DropDownMenu from '../../elements/DropDownMenu/DropDownMenu';
import RightNavItems from '../../elements/DropDownMenu/RightNavItems';

function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-800  shadow py-4 ">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className=" flex items-center">
            <a className="flex-shrink-0" href="/">
              <img
                className="w-8 h-8"
                src="https://www.svgrepo.com/show/252282/running-speed.svg"
                alt="Logo"
              />
            </a>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <Link
                  class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  to="/"
                >
                  <span>Home</span>
                </Link>
                <Link
                  class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  to="/list"
                >
                  <span>List</span>
                </Link>
                <Link
                  class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  to="/new"
                >
                  <span>New</span>
                </Link>
                <Link
                  class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href="/#"
                >
                  <span>Detailed</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex items-center ml-4 md:ml-6">
              <div className="relative ml-3">
                <DropDownMenu withBackground withDivider items={RightNavItems} />
              </div>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              type="button"
              className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/"
          >
            <span>Home</span>
          </Link>
          <Link
            class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/list"
          >
            <span>List</span>
          </Link>
          <Link
            class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/new"
          >
            <span>New</span>
          </Link>
          <Link
            class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/#"
          >
            Detailed
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
