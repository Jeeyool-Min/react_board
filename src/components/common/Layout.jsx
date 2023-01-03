import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../NavigationSidebar';
import Teamsbar from '../TeamsSidebar';

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-9xl mx-auto">
            <div className="xl:flex">
              {/* Left side bar + Content */}
              <div className="md:flex flex-1">
                {/* Navigation bar */}
                <Navbar />
                {/* Middle content */}
                <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                  <div className="md:py-8">
                    <Outlet />
                  </div>
                </div>
              </div>
              {/* Right side bar */}
              <Teamsbar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
