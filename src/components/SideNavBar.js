import Axios from "../services/axios";
import React, { Component } from "react";
import Logo from "./Logo";
import { API } from "../api";
import { toast } from "react-toastify";

export default class SideNavBar extends Component {

  state = {
    isLoggedin: false,
    displayName: ""
  }

  componentDidMount = () => {
    console.log("component did mounted for login")
    if(JSON.parse(localStorage.getItem('token'))){
      this.setState({ isLoggedin: true });
    }

    Axios("GET", API.USERDETAILS, true, )
    .then((res) => {
      console.log("res from get user details", res?.data?.Data?.displayName)
      if(res?.data?.Data?.displayName){
        this.setState({ displayName: res?.data?.Data?.displayName });
      }
    })
    .catch((err) => {
      console.log(err.json())
      if(err.details){
        console.log(err)
      }
      console.log("error from get user details", err)
    })
  }

  /**
   * on Toggle button for mobile navigation
   */
  onToggleButtonClicked = () => {
    document.getElementById('toggle-sidebar').classList.toggle('-translate-x-full')
  };

  /**
   * Logging out
   */
  onLogoutClicked = (e) => {
    // e.preventdefault()
    let loginToast = toast.success("Logout success", {position: "top-center"})
    localStorage.removeItem('token')
    console.log("logging you out")
    setTimeout(() => {
      console.log("accessing /login")

      window.location = '/login'
    }, 1000)
    
  }
  render() {
    return (
      <div className="sidebar flex">
        {/* -------------- Sidebar -------------- */}
        <div id="toggle-sidebar" className="z-50 fixed inset-y-0 left-0 transition -translate-x-full sm:translate-x-0 flex flex-col justify-between py-2 nav w-60 bg-skin-fill text-gray-100">
          <div className="flex flex-col">
            <div className="px-3 py-3 mb-6">
              <Logo />
            </div>
            <div className="navigation">
              {
                this.state.isLoggedin && <a href="/dashboard" className="block py-3 px-3 text-skin-light hover:bg-skin-filldark rounded-sm">
                Dashboard
              </a>
              }
              <a href="/aboutus" className="block py-3 px-3 text-skin-light hover:bg-skin-filldark rounded-sm">
                About us
              </a>
              <a href="/contactus" className="block py-3 px-3 text-skin-light hover:bg-skin-filldark rounded-sm">
                Contact Us
              </a>
            </div>
          </div>
          {/* <div className="bottom-nav py-5">
            <div className="flex space-x-1 py-3 px-3 text-skin-light cursor-pointer hover:bg-skin-filldark rounded-sm">
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
              {!this.state.isLoggedin && <div className=""  onClick={(e) => window.location = '/login'}>Login</div>}
              {this.state.isLoggedin && <div className="" onClick={this.onLogoutClicked.bind(this)}>{this.state.displayName} <span className="text-sm">(Logout)</span></div>}
            </div>
          </div> */}
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
