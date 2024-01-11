import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../api/auth";

const Users = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return (
    <div>
      <h1>users</h1>
      <div>
        {users?.map((user) => (
          <div
            key={user._id}
            className="bg-gray-700 p-6 rounded-md flex flex-col items-center justify-center"
          >
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
  );
};

export default Users;
