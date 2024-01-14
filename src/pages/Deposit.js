import React, { useContext, useState } from "react";
import instance from "../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { deleteToken } from "../api/storage";
import UserContext from "../context/Usercontext";
export const Deposit = () => {
  const [user, setUser] = useContext(UserContext);
  const [amount, setAmount] = useState(0);
  // const amountLessThan = (e) => {};
  const deposit = async (amount) => {
    const { data } = await instance.put(
      "/mini-project/api/transactions/deposit",
      { amount }
    );
    return data;
  };

  const myPofile = async () => {
    const { data } = await instance.get("/mini-project/api/auth/me");
    return data;
  };
  const { data: myProfile, refetch } = useQuery({
    queryKey: ["balance"],
    queryFn: myPofile,
  });
  // console.log(myProfile.balance);

  const { mutate } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => {
      if (amount > 0) {
        deposit(amount);
      } else {
        alert("amount must be bigger than 0");
      }
    },
    onSuccess: () => {
      refetch();
    },
  });
  // console.log(myDeposit);

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="flex justify-center flex-col items-center font-serif space-y-2 bg-slate-100"
    >
      <div>
        {/* {" "}
        <NavLink to={"/"}>
          <button
            onClick={() => {
              deleteToken();
              setUser(false);
            }}
            className="btn btn-primary font-serif"
          >
            Logout
          </button>
        </NavLink> */}
      </div>
      <div
        style={{ width: "50%", height: "50%" }}
        className="flex justify-center flex-col items-center font-serif space-y-2"
      >
        <p>Your balance is: {myProfile?.balance}</p>
        <input
          className="bg-gray-300 rounded h-50 w-50"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={mutate}
          class="btn btn-accent btn-outline bg-cyan-500 shadow-lg shadow-cyan-500/50 "
        >
          Deposit
        </button>
        <NavLink to={"/transactions"}>
          <button onClick={() => {}} className="btn btn-primary font-serif">
            Back
          </button>
        </NavLink>
      </div>
    </div>
  );
};
