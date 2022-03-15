import "./App.css";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="root-body">
      <div className="relative min-h-screen flex text-lg">
        {/* sideb ar navigation goes here ---------- */}
        <div className="relative flex flex-col justify-between py-2 px-2 nav w-60 bg-skin-fill text-gray-100">
          <div className="flex flex-col">
            <Logo />
            <div className="navigation">
              <a href="#" className="block py-3 px-2 text-skin-light">
                About us
              </a>
              <a href="#" className="block py-3 px-2 text-skin-light">
                Contact Us
              </a>
            </div>
          </div>
          <div className="bottom-nav py-5">
            <div className="flex space-x-1 py-3 px-2 text-skin-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <div>Login</div>
            </div>
          </div>
        </div>
        {/* mobile screen here ----------- */}
        <div className="conten flex-1">content goes here ---------------</div>
      </div>
    </div>
  );
}

export default App;
