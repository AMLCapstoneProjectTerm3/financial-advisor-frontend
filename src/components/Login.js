import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="w-full h-full flex flex-center justify-center mt-10 sm:m-0">
        <div className="wrapper flex flex-col my-auto w-72 sm:w-96 px-3 py-10 rounded-md border-2 shadow-md">
          <div className="text-skin-dark text-center font-bold text-lg mb-4">Financial Advisor Login</div>
          <div className="my-4">
            <div className="mb-3">
              <label for="email-address" class="text-xs ml-1 text-skin-dark">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-md relative text-xs sm:text-sm block w-full px-3 py-2 border  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-skin-dark focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="text-xs ml-1 text-skin-dark">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-md relative text-xs sm:text-sm block w-full px-3 py-2 border text-skin-dark rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-skin-dark focus:z-10 "
                placeholder="Password"
              />
            </div>
          </div>
          <div className="mt-3">
            <button className="bg-skin-button rounded-md w-full text-skin-light px-4 py-2 text-base">Login</button>
          </div>
          <div className="text-xs text-right mt-2 text-skin-dark">
               <a className="text-blue-600" href="#">Forgot Password?</a>
          </div>
          <div className="text-xs text-right mt-2 text-skin-dark">
              New to Financial Advisor? <a className="text-blue-600" href="#">Signup</a>
          </div>
        </div>
      </div>
    );
  }
}
