"use client";
import React from "react";
import { useState } from "react";
import { Episode } from "@/app/utility/types";
import Image from "next/image";
import "./exploreComponents.css"
interface Props {
  ep: Episode;
}
const EpisodesAccordion: React.FC<Props> = ({ ep }) => {
  const [opeclose, setOpenclose] = useState<boolean>(false);
  return (
    <div className="">
      <button
        onClick={() => {
          setOpenclose(!opeclose);
        }}
        className="w-full justify-between flex p-[18px] border-b-[1px] border-[#050505]"
      >
        <p className="text-[0.5em]">
          <span> Episode-{ep.episode_number}</span>
          &nbsp; <span>({ep.name})</span>
        </p>
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
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </span>
        )}
      </button>
      <div
        className={` overflow-hidden transition-all duration-300 ease-in-out   ${
          opeclose
            ? "max-h-[500px] opacity-100 p-0"
            : "max-h-0 opacity-0 p-0"
        }`}
      >
        
                <div className="flex items-center gap-[10%] border-b-[1px] p-2 border-[#E70713]">
                <div className="w-[30%] text-[0.3em] epsisodeshadow relative">
                  <Image
                    width="2000"
                    height="500"
                    alt="poster"
                    src={`https://image.tmdb.org/t/p/w500/${ep.still_path}`}
                    className="border-[1px] hover:border-[#E70713] transition-all duration-300 border-[#050505] "
                  />
               
                </div>
                <div className="  w-[60%]  ">
                        <h3 className="uppercase font-netflix text-[0.55em] text-[#e70713]">{ep.episode_type}</h3>
                        <h2 className="text-[0.35em]"> Episode Rating-{ep.vote_average.toFixed(1)} </h2>
                        <p className="text-[0.35em]">Overview - {ep.overview}</p>
                </div>
              </div>
        
      </div>
    </div>
  );
};

export default EpisodesAccordion;
