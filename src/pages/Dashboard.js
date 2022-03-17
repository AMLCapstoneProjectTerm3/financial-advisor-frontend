import React, { Component } from 'react'
import { API } from '../api'
import Axios from '../services/axios'

export default class Dashboard extends Component {
  componentDidMount(){
    console.log("Inside componentDidMount of DASHBOARD!")

    Axios('GET', API.PROTECTEDTEST, true)
    .then(res => {
      console.log("Response in protected path", res);
    })
  }
  render() {
    return (
      <div>This is Dashboard</div>
    )
  }
}
