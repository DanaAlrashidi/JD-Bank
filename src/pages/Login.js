import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import UserContext from "../context/Usercontext.js";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
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
    mutate();
  };

  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className=" flex items-center justify-center bg-slate-100	"
    >
      <form
        className="flex justify-center flex-col items-center font-serif space-y-2"
        onSubmit={handleFormSubmit}
      >
        <label className="text-center">
          Write your username:
          <input
            type="username"
            name="username"
            id="username"
            onChange={handleChange}
            placeholder="username"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="text-center">
          Your password:
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <button type="submit" className="btn btn-accent w-full max-w-xs">
          Login
        </button>
      </form>
    </div>
  );
};
