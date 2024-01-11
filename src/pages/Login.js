import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext.js";
import { login } from "../api/auth";
import { NavLink, useNavigate } from "react-router-dom";
export const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(Usercontext);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/profile");
    },
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    mutate();
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleFormSubmit}>
        <label>
          username
          <input
            type="username"
            name="username"
            id="username"
            onChange={handleChange}
            placeholder="username"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label>
          password
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <button type="submit" className="btn btn-accent">
          Login
        </button>
      </form>
    </div>
  );
};
