import React, { useContext } from "react";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../api";
import { deleteToken } from "../api/storage";
import { NavLink } from "react-router-dom";
import UserContext from "../context/Usercontext";
const Profile = () => {
  const [user, setUser] = useContext(UserContext);

  const { data: myProfile } = useQuery({
    queryKey: ["mee"],
    queryFn: me,
  });
  console.log(myProfile);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={`${BASE_URL}/${myProfile?.image}`}
          alt="me"
          className="w-24 h-24 rounded-full mb-4"
        />
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">
            Hello {myProfile?.username}
          </h3>
          <h3 className="text-lg font-semibold mb-2">
            Your balance is: {myProfile?.balance}
          </h3>
          <NavLink to={"/transactions"}>
            <button onClick={() => {}} className="btn btn-primary font-serif">
              Doing Change
            </button>
          </NavLink>
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
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
