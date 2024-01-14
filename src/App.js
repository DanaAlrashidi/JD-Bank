import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar";
// import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToken } from "./api/storage";
import Usercontext from "./context/Usercontext.js";
// import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(true);
    }
  }, []);

  return (
    <Usercontext.Provider value={[user, setUser]}>
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
    </Usercontext.Provider>
  );
}

export default App;
