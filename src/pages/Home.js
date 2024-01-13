import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-slate-100 h-screen flex justify-center items-center flex-col">
      <div className="space-y-10 flex flex-col items-center italic font-serif text-center text-ellipsis text-wrap beak-all ">
        <div className="rounded-lg text-center bg-purple-100 w-[50%]">
          <p>
            <h1>Welcome to JD.Bank</h1> An institution that deals in money and
            its substitutes and provides other money-related services. In its
            role as a financial intermediary, a bank accepts deposits and makes
            loans. It derives a profit from the difference between the costs
            (including interest payments) of attracting and servicing deposits
            and the income it receives through interest charged to borrowers or
            earned through securities. Many banks provide related services such
            as financial management and products such as mutual funds and credit
            cards. Some bank liabilities also serve as money—that is, as
            generally accepted means of payment and exchange.
          </p>
          <div className="flex flex-col justify-center items-center space-y-2">
            <NavLink to={"/login"}>
              <button onClick={() => {}} className="btn btn-primary font-serif">
                Our Client?
              </button>
            </NavLink>
            <NavLink to={"/register"}>
              <button onClick={() => {}} className="btn btn-primary font-serif">
                join us
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
