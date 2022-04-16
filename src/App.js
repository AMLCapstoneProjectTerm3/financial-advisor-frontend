import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SideNavBar from "./components/SideNavBar";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoutes";
import Router from "./Router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <div className="root-body">
          <div className="relative min-h-screen sm:flex text-lg">
            <SideNavBar />
            <div className="conten flex-1">
              <Router />
            </div>
          </div>
          <ToastContainer />
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
