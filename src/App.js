import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
