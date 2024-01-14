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
  const mySearch = async () => {
    const { data } = await instance.get("/mini-project/api/transactions/my");
    return data;
  };
  const { data: transactions } = useQuery({
    queryKey: ["search"],
    queryFn: mySearch,
  });
  const depositItems = transactions?.filter((item) => item.type == "deposit");
  const withdrawItems = transactions?.filter((item) => item.type == "withdraw");

  console.log(transactions?.sort((a, b) => b.amount - a.amount));
  return (
    <div className="h-screen w-screen flex flex-col space-y-5 py-5 items-center bg-slate-100">
      <label>All transactions appeare Here:</label>
      <div className="flex space-x-2">
        <p>from</p>
        <input
          name="startDate"
          type="date"
          className="flex w-[80]"
        ></input>{" "}
        <p>to</p>
        <input name="endDate" type="date" className="flex w-[80]"></input>
      </div>
      <div className="overflow-x-auto w-[85%] rounded-lg border border-gray-200 text-center">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date & Time
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Type
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Amount
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {transactions?.map((item) => (
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.createdAt}
                </td>
                <td
                  className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900  ${
                    item.type == "deposit"
                      ? "bg-green-300"
                      : item.type == "withdraw"
                      ? "bg-red-300"
                      : "bg-yellow-300"
                  }
                  `}
                >
                  {item.type}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="w-full">
          {withdrawItems?.map((item) => (
            <div className=" flex flex-row gap-2 border-b-2 justify-center">
              <h1>{item.amount}</h1>
              <h1>{item.type}</h1>
            </div>
          ))}
        </div> */}
    </div>
  );
};

export default Search;
