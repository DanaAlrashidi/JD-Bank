import React, { useState } from "react";
import instance from "../api";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
const Withdraw = () => {
  const [amount, setAmount] = useState(0);

  const withdraw = async (amount) => {
    const { data } = await instance.put(
      "/mini-project/api/transactions/withdraw",
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

  const { mutate } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => {
      if (amount <= myProfile) {
        withdraw(amount);
      } else {
        alert("Sorry, Your balance insufficient");
      }
    },
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-100">
      Hello
    </div>
  );
};

export default Withdraw;
