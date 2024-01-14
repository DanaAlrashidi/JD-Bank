import React from "react";
import instance from "../api";
import { useQuery } from "@tanstack/react-query";
//did not solve the searching function to recall all transactions
//this is a trying codes to fetch balance instead of writing it
// const myPofile = async () => {
//   const { data } = await instance.get("/mini-project/api/auth/me");
//   return data;
// };
// const { refetch } = useQuery({
//   queryKey: ["mybadget"],
//   queryFn: myPofile,
// });

// const balance = refetch();
// console.log(balance);

//
const Search = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-100">
      <label>Choose the date to search:</label>
      from <input
        name="startDate"
        type="date"
        className="flex w-[80]"
      ></input>{" "}
      to <input name="endDate" type="date" className="flex w-[80]"></input>
      Choose the amount:
      <input type="number" min="0" max="" className="flex w-[80]"></input>
    </div>
  );
};

export default Search;
