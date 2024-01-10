import React from "react";

export const Login = () => {
  return (
    <div className="flex justify-center">
      <label>
        username
        <input
          type="text"
          placeholder="username"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label>
        password
        <input
          type="text"
          placeholder="password"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <button className="btn btn-accent">Login</button>
    </div>
  );
};
