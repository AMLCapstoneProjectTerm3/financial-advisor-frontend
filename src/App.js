import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SideNavBar from "./components/SideNavBar";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoutes";
import Router from "./Router"

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
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
