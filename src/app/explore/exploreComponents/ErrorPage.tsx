"use client";

import React from "react";
import { errorTypes } from "@/app/utility/types";
interface ErrorProps {
  error: errorTypes;
}

const ErrorPage: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="min-h-screen text-[0.5em] relative z-20 flex flex-col items-center justify-center bg-[#050505] text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong </h1>
      <p>Please try again later</p>
      <p className="mb-6">Status Code:{error.statuscode}</p>
      <button
      onClick={()=>window.location.reload()}
        className="px-6 py-2 bg-red-600 rounded-md  text-white hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;