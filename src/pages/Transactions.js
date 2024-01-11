import React from "react";
import instance from "../api";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const Transactions = () => {
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
    <div>
      <div>
        <NavLink to={"/deposit"}>
          <button onClick={() => {}} className="btn btn-success">
            Deposit
          </button>
        </NavLink>
        <NavLink to={"/withdraw"}>
          <button onClick={() => {}} className="btn btn-error">
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
