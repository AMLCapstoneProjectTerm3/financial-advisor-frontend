import "./App.css";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import SideNavBar from "./components/SideNavBar";

function App() {
  return (
    <div className="root-body">
      <div className="relative min-h-screen sm:flex text-lg">
        <SideNavBar />
        <div className="conten flex-1">content goes here ---------------</div>
      </div>
    </div>
  );
}

export default App;
