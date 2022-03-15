import "./App.css";
import Login from "./components/Login";
import SideNavBar from "./components/SideNavBar";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="root-body">
      <div className="relative min-h-screen sm:flex text-lg">
        <SideNavBar />
        <div className="conten flex-1">
          {/* content goes here --------------- */}
          {/* <Login /> */}
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;
