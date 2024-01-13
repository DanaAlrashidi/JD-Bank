import React, { useContext, useState } from "react";
import Usercontext from "../context/Usercontext";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

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
    mutate();
  };
  return (
    <div className="bg-slate-100 h-screen w-screen flex items-center justify-center">
      <div>
        <div className="flex justify-center items-center flex-col font-serif space-y-2">
          <form
            className="flex justify-center items-center flex-col font-serif space-y-2	bg-blue-100 rounded-lg h-80 w-70"
            onSubmit={handleFormSubmit}
          >
            <div className="flex justify-center items-center flex-col font-serif space-y-2 w-65">
              <label htmlFor="name" className="underline decoration-sky-500/30">
                Username:
              </label>
              <input
                type="username"
                id="username"
                name="username"
                onChange={handleChange}
                placeholder="Type here"
                className="input input-bordered max-w-xs"
              />
              <label className="underline decoration-sky-500/30">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                placeholder="Type here"
                className="input input-bordered  max-w-xs"
              />
              <label
                className="underline decoration-sky-500/30"
                htmlFor="image"
              >
                Choose your profile image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                placeholder="Type here"
                className="input input-bordered max-w-xs "
              />
            </div>
            <button
              type="submit"
              className=" bg-sky-100 btn btn-primary font-serif"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
