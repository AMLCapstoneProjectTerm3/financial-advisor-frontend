import React, { Component } from "react";

export default class StepOne extends Component {
  stepOneComplete = () => {
    const anchor = document.querySelector('#stepTwo')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  };


  render() {
    return (
      <div className="w-full h-screen flex flex-center justify-center mt-10 sm:m-0">
        <div className="wrapper flex flex-col my-auto w-72 sm:w-96 px-3 py-10 rounded-md border-2 shadow-md">
          <div className="text-skin-dark text-center font-bold text-lg mb-4">
            How much capital would you like to invest ?
          </div>
          <div className="my-4">
            <div className="mb-3">
              <input
                id="capital"
                name=""
                type="number"
                required
                className="appearance-none rounded-md relative text-xs sm:text-sm block w-full px-3 py-2 border  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-skin-dark focus:z-10 sm:text-sm"
                placeholder="Enter Amount"
                // onChange={this.changeFormValues.bind(this)}
                // value={this.state.email}
                // value={this.props?.stockAmount}
                onChange={this.props.onAmountChange}
                onFocus={(e) => this.setState({ isError: false })}
              />
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
