import React from "react";
import instance from "../api";
import { useMutation, useQuery } from "@tanstack/react-query";

const Transfere = () => {
  //   const [amount, setAmount] = useState(0);
  //   const myPofile = async () => {
  //     const { data } = await instance.get("/mini-project/api/auth/me");
  //     return data;
  //   };
  //   const { data: myProfile, refetch } = useQuery({
  //     queryKey: ["balance"],
  //     queryFn: myPofile,
  //   });
  //   const { mutate } = useMutation({
  //     mutationKey: ["tranfir"],
  //     mutationFn: () => {
  //       if (amount > 0) {
  //         deposit(amount);
  //       } else {
  //         alert("amount must be bigger than 0");
  //       }
  //     },
  //     onSuccess: () => {
  //       refetch();
  //     }),
  //   return (
  //     <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-100">
  //       <div
  //         style={{ width: "100vw", height: "100vh" }}
  //         className="flex justify-center flex-col items-center font-serif space-y-2"
  //       >
  //         <div
  //           style={{ width: "50%", height: "50%" }}
  //           className="flex justify-center flex-col items-center font-serif space-y-2"
  //         >
  //           <p>{myProfile?.balance}</p>
  //           <input
  //             className="bg-gray-300 rounded h-50 w-50"
  //             onChange={(e) => setAmount(e.target.value)}
  //           />
  //           <button
  //             onClick={mutate}
  //             class="btn btn-accent btn-outline bg-cyan-500 shadow-lg shadow-cyan-500/50 "
  //           >
  //             Transfir
  //           </button>
  //         </div>
  //       </div>
  // </div>
  //   );
};

export default Transfere;
