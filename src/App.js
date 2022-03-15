import "./App.css";
import Login from "./components/Login";
import SideNavBar from "./components/SideNavBar";

function App() {
  return (
    <div className="root-body">
      <div className="relative min-h-screen sm:flex text-lg">
        <SideNavBar />
        <div className="conten flex-1">
          {/* content goes here --------------- */}
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
