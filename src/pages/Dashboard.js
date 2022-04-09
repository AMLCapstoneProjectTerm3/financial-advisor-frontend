import React, { Component } from 'react'
import { API } from '../api'
import StepOne from '../components/StepOne'
import StepThree from '../components/StepThree'
import StepTwo from '../components/StepTwo'
import Axios from '../services/axios'

const STOCK_NAME_CODE_MAP = [
  {
      "stock": "^GSPC",
      "name": "S&P 500"
  },
  {
      "stock": "AAPL",
      "name": "Apple"
  },
  {
      "stock": "AMZN",
      "name": "Amazon"
  },
  {
      "stock": "AMT",
      "name": "American Tower Corporation"
  },
  {
      "stock": "XOM",
      "name": "Exxon Mobil Corporation"
  },
  {
      "stock": "CVX",
      "name": "Chevron Corporation"
  },
  {
      "stock": "SHW",
      "name": "The Sherwin-Williams Company"
  },
  {
      "stock": "DD",
      "name": "DuPont de Nemours, Inc."
  },
  {
      "stock": "BA",
      "name": "The Boeing Company"
  },
  {
      "stock": "UNP",
      "name": "Union Pacific Corporation"
  },
  {
      "stock": "DUK",
      "name": "Duke Energy Corporation"
  },
  {
      "stock": "ED",
      "name": "Consolidated Edison, Inc."
  },
  {
      "stock": "AEP",
      "name": "American Electric Power Company, Inc."
  },
  {
      "stock": "UNH",
      "name": "UnitedHealth Group Incorporated"
  },
  {
      "stock": "JNJ",
      "name": "Johnson & Johnson"
  },
  {
      "stock": "BRK-A",
      "name": "Berkshire Hathaway Inc."
  },
  {
      "stock": "JPM",
      "name": "JPMorgan Chase & Co."
  },
  {
      "stock": "MCD",
      "name": "McDonald's Corporation"
  },
  {
      "stock": "KO",
      "name": "The Coca-Cola Company"
  },
  {
      "stock": "PG",
      "name": "The Procter & Gamble Company"
  },
  {
      "stock": "MSFT",
      "name": "Microsoft Corporation"
  },
  {
      "stock": "SPG",
      "name": "Simon Property Group, Inc."
  }
]
export default class Dashboard extends Component {

  state = {
    stockAmount: 0,
    riskLevel: 0,
    stock:''
  }
  componentDidMount(){
    console.log("Inside componentDidMount of DASHBOARD!")

    Axios('GET', API.PROTECTEDTEST, true)
    .then(res => {
      console.log("Response in protected path", res);
    })
  }

  onStockChange = (e) => {
    if(e.target?.value){
      this.setState({stock: e.target?.value})
    }
  }
  
  onAmountChange = (e) => {
    if(e.target?.value){
      this.setState({stockAmount: e.target?.value})
    }
  }
  onRiskChange = (e) => {
    console.log("riskChange", e.target?.value)
    if(e.target?.value){
      this.setState({riskLevel: e.target?.value})
    }
  }

  onCalculate = () => {
    console.log("calculating with state", this.state)
    if(this.state.stock && this.state.stockAmount){
      Axios("POST", API.PREDICT_STOCK, true, {
        riskLevel: this.state.riskLevel,
        stock: this.state.stock,
        stockAmount: this.state.stockAmount
      })
      .then(res => {
        console.log("Response in predicting stock", res?.data?.Data)
      })
      .catch(err => {
        console.log("error occured while predicting stock", err)
      })
    }
  }

  render() {
    return (
      <div>
        <StepOne stockAmount={this.state.stockAmount} onAmountChange={this.onAmountChange.bind(this)}/>
        <StepTwo riskLevel={this.state.riskLevel} onRiskChange={this.onRiskChange.bind(this)}/>
        <StepThree onCalculate={this.onCalculate.bind(this)} onStockChange={this.onStockChange.bind(this)} stocks={STOCK_NAME_CODE_MAP}/>
      </div>
    )
  }
}
