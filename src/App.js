import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="root-body">
      <div className="relative min-h-screen flex">
        {/* sidebar navigation goes here ---------- */}
        <div className="relative nav w-60 bg-red-700 text-gray-100">
          navigation sidebar
        </div>
        {/* mobile screen here ----------- */}
        <div className="conten flex-1">
        content goes here ---------------
        </div>
      </div>
    </div>
  );
}

export default App;
