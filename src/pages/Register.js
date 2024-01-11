import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(Usercontext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/profile");
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    mutate();
  };
  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">username</label>
          <input
            type="username"
            id="username"
            name="username"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label>password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label htmlFor="image">image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />

          <button type="submit" className="btn btn-accent">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
