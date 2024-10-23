"use client";
import React from "react";
import { ReactTyped } from "react-typed";
// import Image from 'next/image';
// import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/compat/router";
// import PageTransition from "./exploreComponents/pageTransition";
import TrendingNow from "./exploreComponents/TrendingNow";
import TrendingComponent from "./exploreComponents/TrendingComponent";
import TrendingCast from "./exploreComponents/TrendingCast";
import LastScreen from "./exploreComponents/LastScreen";
const Page = () => {
  const router = useRouter();

  if (router) {
  }
  useEffect(() => {}, []);
  return (
    <div className="   text-white min-h-screen  max-sm:min-h-svh   ">
      {/* <div className="bg-[#050505] z-50 absolute top-0 left-0 right-0 bottom-0 animation-container">
        <PageTransition />
      </div> */}
      <div className="min-h-screen max-sm:min-h-svh ">
        {/* first page */}
        <div className=" ">
          <h1 className="mx-[20%] text-center pt-[1em] ">
            Explore New Movies, Tv Series And Much More{" "}
          </h1>
          {/* search bar  */}
          <div className="search-Bar flex justify-center   items-center w-full   ">
            <ReactTyped
              strings={[
                "Search for prsadadc",
                "Search for categasdadories",
                "Search for basdadrands",
              ]}
              className="w-1/2"
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop
            >
             
                <input
                  className="text-[0.5em] bg-white px-[0.8em] translate-x-[3.5%] flex items-center py-2 rounded-full outline-none text-black bg-transparent w-full  "
                  type="text"
                />
            </ReactTyped>
            <span className="w-[4%] -translate-x-[65%] bg-white rounded-e-full">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="url(#grad1)">
            <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="30%" style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "rgb(0,0,0)", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></span>
          </div>
          {/* trending now with banner  */}
          <div>
            <TrendingNow/>
          </div>
          <div>
            <TrendingComponent title="Trending Movies Now" url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"/>
          </div>
          <div>
            <TrendingComponent title=" Trending TV Now" url="https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"/>
          </div>
          <div>
            <TrendingComponent title="In Cinemas Now" url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2"/>
          </div>
          <div className="py-[1em]">
            <TrendingCast/>
          </div>
          
          <div className="h-svh  overflow-hidden  shadows relative">
          <LastScreen/>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Page;
