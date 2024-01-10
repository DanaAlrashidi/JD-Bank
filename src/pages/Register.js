import React, { useState, useContext } from "react";
import Usercontext from "../context/Usercontext";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";

export const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(Usercontext);

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
      // setUser(true);
      // navigator("/");
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    mutate();
  };

  return <div>Register</div>;
};
