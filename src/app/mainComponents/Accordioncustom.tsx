"use client";
import React from "react";
import { useState } from "react";
interface Props {
  title: string;
  answer: string;
}
const Accordioncustom: React.FC<Props> = ({ title, answer }) => {
  const [opeclose, setOpenclose] = useState<boolean>(false);
  return (
    <div className="">
      <button
        onClick={() => {
          setOpenclose(!opeclose);
        }}
        className="w-full justify-between flex hover:bg-[#414141] bg-[#2d2d2d] max-sm:rounded-md p-[18px] border-b-[1px] border-[#050505]"
      >
        <span className=" w-4/5 text-start  ">{title}</span>
        {opeclose ? (
          <span className=" w-1/5  flex justify-end">
            <svg
              className="w-1/5 min-w-[15px] transition-all duration-500 rotate-[405deg]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#e8eaed"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </span>
        ) : (
          <span className=" w-1/5   flex justify-end">
            <svg
              className="w-1/5 min-w-[15px] transition-all duration-500 rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#e8eaed"
            >
              <path  d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-[#2d2d2d] max-sm:rounded-md  ${
          opeclose
            ? "grid grid-rows-[1fr] opacity-100 p-[18px]"
            : "grid grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden ">{answer}</p>
      </div>
    </div>
  );
};

export default Accordioncustom;
