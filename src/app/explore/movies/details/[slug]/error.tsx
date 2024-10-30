"use client";

import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="min-h-screen relative z-20 flex flex-col items-center justify-center bg-[#111111] text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-6">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-red-500 rounded-md text-white hover:bg-red-600"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;