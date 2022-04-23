import React, { Component } from "react";
import { API } from "../api";
import StepOne from "../components/StepOne";
import StepThree from "../components/StepThree";
import StepTwo from "../components/StepTwo";
import Axios from "../services/axios";
import GraphDisplay from "../components/GraphDisplay";
// import axios from 'axios';
import { toast } from "react-toastify";

// var yfinance = require('yfinance');

const STOCK_NAME_CODE_MAP = [
  {
    stock: "^GSPC",
    name: "S&P 500",
  },
  {
    stock: "AAPL",
    name: "Apple",
  },
  {
    stock: "AMZN",
    name: "Amazon",
  },
  {
    stock: "AMT",
    name: "American Tower Corporation",
  },
  {
    stock: "XOM",
    name: "Exxon Mobil Corporation",
  },
  {
    stock: "CVX",
    name: "Chevron Corporation",
  },
  {
    stock: "SHW",
    name: "The Sherwin-Williams Company",
  },
  {
    stock: "DD",
    name: "DuPont de Nemours, Inc.",
  },
  {
    stock: "BA",
    name: "The Boeing Company",
  },
  {
    stock: "UNP",
    name: "Union Pacific Corporation",
  },
  {
    stock: "DUK",
    name: "Duke Energy Corporation",
  },
  {
    stock: "ED",
    name: "Consolidated Edison, Inc.",
  },
  {
    stock: "AEP",
    name: "American Electric Power Company, Inc.",
  },
  {
    stock: "UNH",
    name: "UnitedHealth Group Incorporated",
  },
  {
    stock: "JNJ",
    name: "Johnson & Johnson",
  },
  {
    stock: "BRK-A",
    name: "Berkshire Hathaway Inc.",
  },
  {
    stock: "JPM",
    name: "JPMorgan Chase & Co.",
  },
  {
    stock: "MCD",
    name: "McDonald's Corporation",
  },
  {
    stock: "KO",
    name: "The Coca-Cola Company",
  },
  {
    stock: "PG",
    name: "The Procter & Gamble Company",
  },
  {
    stock: "MSFT",
    name: "Microsoft Corporation",
  },
  {
    stock: "SPG",
    name: "Simon Property Group, Inc.",
  },
];
export default class Dashboard extends Component {
  state = {
    stockAmount: 0,
    riskLevel: 3,
    stock: STOCK_NAME_CODE_MAP[0]["stock"],
    stockName: "",
    stocks: null,
  };
  componentDidMount() {
    console.log("Inside componentDidMount of DASHBOARD!");
    console.log(
      "Inside componentDidMount of DASHBOARD! the env variables are : ",
      process.env.REACT_APP_NGROK
    );
  }

  onStockChange = (e) => {
    if (e.target?.value) {
      this.setState({ stock: e.target?.value });
    }
  };

  onAmountChange = (e) => {
    if (e.target?.value) {
      this.setState({ stockAmount: e.target?.value });
    }
  };
  onRiskChange = (e) => {
    console.log("riskChange", e.target?.value);
    if (e.target?.value) {
      this.setState({ riskLevel: e.target?.value });
    }
  };

  onRiskSubmited = () => {
    if (this.state.riskLevel && this.state.stockAmount) {

      let getStocks = toast.loading(
        "Fetching stocks for your amount and risk",
        { position: "top-center" }
      );

      Axios("POST", API.GET_STOCKS, false, {
        riskLevel: parseInt(this.state.riskLevel),
        investmentAmount: this.state.stockAmount,
      }).then((res) => {
        let stocks = res?.data?.stocksList;
        stocks = stocks.map((a) =>
          STOCK_NAME_CODE_MAP.find((b) => b.stock === a)
        );
        console.log("Response in protected path", stocks);
        this.setState({
          stocks,
          stock: stocks[0]["stock"]
        });

        toast.update(getStocks, {
          position: "top-center",
          type: toast.TYPE.SUCCESS,
          autoClose: 1000,
          render: "received stock list!",
          isLoading: false,
        });

        setTimeout(() => {
          const anchor = document.querySelector("#stepThree");
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 1000)
      }).catch(err => {
        toast.update(getStocks, {
          position: "top-center",
          type: toast.TYPE.ERROR,
          autoClose: 1000,
          render: "received stock list failed!",
          isLoading: false,
        });
      })
    }
  };

  onCalculate = () => {
    console.log("calculating with state", this.state);
    if (this.state.stock && this.state.stockAmount) {
      let predictToast = toast.loading(
        "predicting stock prices for " +
          STOCK_NAME_CODE_MAP.filter((a) => a.stock === this.state.stock)[0][
            "name"
          ] +
          "......",
        { position: "top-center" }
      );
      Axios("POST", API.PREDICT_STOCK, false, {
        riskLevel: this.state.riskLevel,
        stock: this.state.stock,
        stockAmount: this.state.stockAmount,
      })
        .then((res) => {
          console.log("Response in predicting stock", res?.data?.Data);
          this.setState({
            graphStock: res?.data?.Data,
            stockName: STOCK_NAME_CODE_MAP.filter(
              (a) => a.stock === this.state.stock
            )[0]["name"],
          });
          toast.update(predictToast, {
            position: "top-center",
            type: toast.TYPE.SUCCESS,
            autoClose: 1000,
            render: "received prediction for stock " + this.state.stock,
            isLoading: false,
          });

          setTimeout(() => {
            const anchor = document.querySelector("#graphDisplay");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 1000);
        })
        .catch((err) => {
          console.log("error occured while predicting stock", err);
          toast.update(predictToast, {
            position: "top-center",
            type: toast.TYPE.ERROR,
            autoClose: 5000,
            render: "error occured while predicting stock",
            isLoading: false,
          });
        });
    }
  };

  render() {
    return (
      <div className="flex flex-grow flex-row">
        <div className="w-0 h-0 sm:h-full sm:w-60"></div>
        <div className="w-full">
          <StepOne
            stockAmount={this.state.stockAmount}
            onAmountChange={this.onAmountChange.bind(this)}
          />
          <StepTwo
            riskLevel={this.state.riskLevel}
            onRiskChange={this.onRiskChange.bind(this)}
            onRiskSubmited={this.onRiskSubmited.bind(this)}
          />
          {this.state.stocks && (
            <StepThree
              onCalculate={this.onCalculate.bind(this)}
              onStockChange={this.onStockChange.bind(this)}
              stocks={this.state.stocks}
            />
          )}
          {this.state.graphStock && (
            <GraphDisplay
              stocks={this.state.graphStock}
              stockName={this.state.stockName}
            />
          )}
          {/* <GraphDisplay stocks={this.state.graphStock}/> */}
        </div>
      </div>
    );
  }
}
