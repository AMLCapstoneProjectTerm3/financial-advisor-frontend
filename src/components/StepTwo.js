import React, { Component } from "react";

export default class StepTwo extends Component {
  stepOneComplete = () => {
    const anchor = document.querySelector("#stepThree");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  render() {
    return (
      <div
        id="stepTwo"
        className="w-full h-screen flex flex-center justify-center mt-10 sm:m-0"
      >
        <div className="wrapper flex flex-col my-auto w-72 sm:w-96 px-3 py-10 rounded-md border-2 shadow-md">
          <div className="text-skin-dark text-center font-bold text-lg mb-4">
            How much risk - reward would you like to take ?
          </div>
          <div className="my-4">
            <div className="mb-3">
              <select onChange={this.props.onRiskChange} class="form-select mt-1 rounded-md relative text-xs sm:text-sm block w-full px-3 py-2 border  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-skin-dark focus:z-10 sm:text-sm">
                <option value={3}>High Risk</option>
                <option value={2}>Average Risk</option>
                <option value={1}>Low Risk</option>
              </select>
            </div>
          </div>

          <div className="mt-3">
            <button
              //   disabled={!this.state.allRequiredFields}
              onClick={this.stepOneComplete.bind(this)}
              className="bg-skin-button rounded-md w-full text-skin-light px-4 py-2 text-base"
            >
              Next >>>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
