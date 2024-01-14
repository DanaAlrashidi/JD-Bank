import React from "react";
import instance from "../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/auth";
import { useState } from "react";
import { NavLink } from "react-router-dom";

//did not compelete if statement for transfer but its work with "withdraw"
//didnt know how to filter usernames from api to choose it
//these are only trying codes
// const names = () => {
//   for (let x in users) {
//     console.log(users.username);
// }
// console.log(changeOnTyping);
// console.log(me);
// const userslist = () => {
//   users.filter((name) =>
//     name.username
//       .toLowercase()
//       .includes(query.toLowerCase)
//       .map((user) => (
//         <div key={user._id} className=" bg-purple-500 p-6 rounded-md ">
//           <div className="text-center">
//             <h3 className="text-lg text-white font-semibold mb-2">
//               {user.username}
//             </h3>
//           </div>
//         </div>
//       ))
//   );
// };
////////////////////////////////////////////////////////////////
const Transfere = () => {
  const { data: users } = useQuery({
    queryKey: ["allusers"],
    queryFn: getAllUsers,
  });
  const [amount, setAmount] = useState(0);

  const transfere = async (amount) => {
    const { data } = await instance.put(
      "/mini-project/api/transactions/transfer/<username>",
      { amount }
    );
    return data;
  };

  const myPofile = async () => {
    const { data } = await instance.get("/mini-project/api/auth/me");
    return data;
  };
  const { data: myProfile, refetch } = useQuery({
    queryKey: ["mybadget"],
    queryFn: myPofile,
  });

  const { mutate } = useMutation({
    mutationKey: ["transfere"],
    mutationFn: () => {
      if (amount <= myProfile.balance) {
        transfere(amount);
      } else {
        alert("Sorry, Your balance insufficient");
      }
    },
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <div className="bg-slate-100 h-screen w-screen flex justify-center items-center flex-col">
      <div className="h-screen w-screen flex flex-col items-center justify-center space-y-2">
        <h1 className=" italic font-serif text-center text-ellipsis">
          All users appeare here:
        </h1>
        {/* <p>Your current balance is: //{myProfile.balance}</p> */}
        <input
          className="flex w-[80]"
          placeholder="write the amount here"
          onChange={(e) => setAmount(e.target.value)}
        ></input>

        <input
          className="flex w-[80]"
          placeholder="your friend's user name"
        ></input>
        <button
          onClick={mutate}
          className="btn btn-accent btn-outline bg-cyan-500 shadow-lg shadow-cyan-500/50"
        >
          Tranfere
        </button>
        <NavLink to={"/transactions"}>
          <button onClick={() => {}} className="btn btn-primary font-serif">
            Back
          </button>
        </NavLink>
        <div className="w-[50%] h-[50%] space-y-2 flex flex-wrap space-x-5">
          {users?.map((user) => (
            <div key={user._id} className=" bg-purple-500 p-6 rounded-md ">
              <div className="text-center">
                <h3 className="text-lg text-white font-semibold mb-2">
                  {user.username}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transfere;
