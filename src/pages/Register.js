import React from "react";

const Register = () => {
  return (
    <div>
      <div>
        <label>username</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label>password</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <label>image</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-secondary">Register</button>
      </div>
    </div>
  );
};

export default Register;
