import React, { useState } from "react";
import instance from "../api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const Deposit = () => {
  const [amount, setAmout] = useState(0);
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
  console.log(myProfile);

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
    <div>
      <p>{myProfile?.balance}</p>
      <input
        type="number"
        className="bg-gray-300 rounded-md"
        onChange={(e) => setAmout(e.target.value)}
      />
      <button className="bg-green-400" onClick={mutate}>
        Deposit
      </button>
    </div>
  );
};
