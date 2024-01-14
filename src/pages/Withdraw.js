import React, { useState } from "react";
import instance from "../api";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

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
    queryKey: ["badget"],
    queryFn: myPofile,
  });
  // console.log(myProfile.balance);

  const { mutate } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => {
      if (amount <= myProfile.balance) {
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
      <p>Your balance is :{myProfile?.balance}</p>
      <input
        className="bg-gray-300 rounded h-50 w-50"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={mutate}
        class="btn btn-accent btn-outline bg-cyan-500 shadow-lg shadow-cyan-500/50 "
      >
        Withdraw
      </button>

      <NavLink to={"/transactions"}>
        <button onClick={() => {}} className="btn btn-primary font-serif">
          Back
        </button>
      </NavLink>
    </div>
  );
};

export default Withdraw;
