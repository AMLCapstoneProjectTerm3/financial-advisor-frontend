import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="w-full h-full flex flex-center justify-center">
        <div className="wrapper flex flex-col my-auto w-80 px-3 py-4 rounded-md border-2 shadow-md">
          <div className="text-skin-dark text-center font-bold text-lg mb-4">Login</div>
          <div className="my-4">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="">
            <button className="bg-skin-button rounded-md w-full text-skin-light px-4 py-2 text-base">Login</button>
          </div>
        </div>
      </div>
    );
  }
}
