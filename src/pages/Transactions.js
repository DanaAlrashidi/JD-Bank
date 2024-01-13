import React from "react";
import instance from "../api";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { me } from "../api/auth";

const Transactions = () => {
  const { data: myProfile } = useQuery({
    queryKey: ["mee"],
    queryFn: me,
  });
  const transactions = async () => {
    const { data } = await instance.get("/mini-project/api/transactions/my");
    return data;
  };
  const { data: myTransaction } = useQuery({
    queryKey: ["transaction"],
    queryFn: transactions,
  });
  console.log(myTransaction);
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="bg-sky-50 flex justify-center flex-col items-center font-serif space-y-2 h-2/4 w-2/4 rounded-lg ">
        <p
          className="text-center text-xl
"
        >
          {/* <h1>Hello {myProfile?.username}</h1> */}
          <h1>What are U going to do ?</h1> Click on your transaction button
          bellow:
        </p>
        <NavLink to={"/deposit"}>
          <button onClick={() => {}} className="btn btn-success">
            Deposit
          </button>
        </NavLink>
        <NavLink to={"/withdraw"}>
          <button onClick={() => {}} className="btn btn-error ">
            Withdraw
          </button>
        </NavLink>
        <NavLink to={"/transfere"}>
          <button onClick={() => {}} className="btn btn-error">
            Transfere
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Transactions;
