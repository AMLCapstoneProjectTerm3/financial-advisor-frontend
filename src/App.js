import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SideNavBar from "./components/SideNavBar";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <div className="root-body">
          <div className="relative min-h-screen sm:flex text-lg">
            <SideNavBar />
            <div className="conten flex-1">
              <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />

                <Route exact path="/" element={<Login />} />
                <Route exact="/dashboard" element={<ProtectedRoute/>} >
                  <Route exact path="/dashboard" element={<Dashboard />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
