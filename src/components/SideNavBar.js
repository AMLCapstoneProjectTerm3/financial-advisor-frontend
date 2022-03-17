import React, { Component } from "react";
import Logo from "./Logo";

export default class SideNavBar extends Component {
  onToggleButtonClicked = () => {
    document.getElementById('toggle-sidebar').classList.toggle('-translate-x-full')
  };
  render() {
    return (
      <div className="sidebar flex">
        {/* -------------- Sidebar -------------- */}
        <div id="toggle-sidebar" className="z-50 absolute inset-y-0 left-0 transition -translate-x-full sm:relative sm:translate-x-0 flex flex-col justify-between py-2 px-2 nav w-60 bg-skin-fill text-gray-100">
          <div className="flex flex-col">
            <div className="px-2 py-3 mb-6">
              <Logo />
            </div>
            <div className="navigation">
              <a href="#" className="block py-3 px-2 text-skin-light">
                About us
              </a>
              <a href="#" className="block py-3 px-2 text-skin-light">
                Contact Us
              </a>
            </div>
          </div>
          <div className="bottom-nav py-5">
            <div className="flex space-x-1 py-3 px-2 text-skin-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <div>Login</div>
            </div>
          </div>
        </div>
        {/* -------------- Mobile Header -------------- */}
        <div className="sm:hidden w-full transition duration-1000 ease-in bg-skin-fill flex items-center justify-between py-2">
          <div className="px-3">
            <Logo />
          </div>
          <div className="px-5 py-3">
            <button
              className="flex items-center text-skin-light"
              onClick={this.onToggleButtonClicked}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
