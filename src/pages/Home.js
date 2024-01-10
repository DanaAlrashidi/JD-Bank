import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
        height: "40%",
        padding: "5px",
        borderRadius: "50px",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      <p>Welcome to JD.Bank</p>
      <NavLink to={"/login"}>
        <button onClick={() => {}} className="btn btn-primary">
          Our Client?
        </button>
      </NavLink>

      <NavLink to={"/register"}>
        <button onClick={() => {}} className="btn btn-primary">
          join us?
        </button>
      </NavLink>
    </div>
  );
};
