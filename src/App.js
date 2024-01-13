import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar";
import { NavLink } from "react-router-dom";
import UserContext from "./context/Usercontext";
import { useEffect, useState } from "react";
import { getToken } from "./api/storage";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (getToken()) {
      setUser(true);
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
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
    </UserContext.Provider>
  );
}

export default App;
