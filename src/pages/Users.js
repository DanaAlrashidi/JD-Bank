import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../api/auth";

const Users = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  // console.log(users);

  return (
    <div className="bg-slate-100 h-screen w-screen flex justify-center items-center flex-col">
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <h1 className=" italic font-serif text-center text-ellipsis">
          All users appeare here:
        </h1>
        <div className="w-[50%] h-[50%] space-y-2 flex flex-wrap space-x-5">
          {users?.map((user) => (
            <div key={user._id} className=" bg-purple-500 p-6 rounded-md ">
              <img
                src={`https://react-bank-project.eapi.joincoded.com/${user.image}`}
                alt="User"
                className="w-[100px] h-[100px] rounded-full mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg text-white font-semibold mb-2">
                  {user.username}
                </h3>
                <p className="text-gray-300">{user.balance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
