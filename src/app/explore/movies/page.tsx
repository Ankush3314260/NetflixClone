"use client";
import React, { useState } from "react";
import TrendingComponent from "../exploreComponents/TrendingComponent";
import Collections from "../exploreComponents/Collections";
import { ReactTyped } from "react-typed";
import { useEffect } from "react";
import './Movies.css'
import gsap from "gsap";
import AdvanceSearch from "../exploreComponents/AdvanceSearch";
// import Link from "next/link";
import { useRouter } from "next/navigation";
const Movie = () => {
  const router= useRouter()
  const [search,setSearch]=useState<string>('')
  const handleNavigate=()=>{
    const getUrl =search?`/explore/movies/${search}`:``
    router.push(getUrl)
  }
   const handleSearch =(event:React.KeyboardEvent<HTMLInputElement>)=>{
           if (event.key=='Enter') {
            handleNavigate()
           }
   }
  useEffect(() => {
    window.scrollTo(0, 0);
    const time = gsap.timeline();
    time
      .to(".movie-text", {
        y: 0,

        stagger: 0.05,
      })
      .to(
        ".movie-text2",
        {
          y: 0,
          stagger: -0.05,
        },
        "-=0.75"
      ).to(".movie-text",{
      
       
      });
    return () => {
      time.kill();
    };
  }, []);
  return (
    <div className=" min-h-screen text-white relative">
      {/* <div className="bg-[#050505] z-50 fixed top-0 left-0 right-0 bottom-0 animation-container ">
            <PageTransition/>
        </div> */}
      <div className="mx-[10%]">
        <div className="text-[1.5em] flex justify-center max-mob:text-[1em] font-custom-bold  overflow-hidden">
          <p className="flex clip-text relative ">
            <span className="movie-text translate-y-full ">M</span>
            <span className="movie-text translate-y-full ">o</span>
            <span className="movie-text translate-y-full ">v</span>
            <span className="movie-text translate-y-full ">i</span>
            <span className="movie-text translate-y-full ">e</span>
            <span className="movie-text translate-y-full ">s </span>
            <span className="movie-text2 -translate-y-full "> &nbsp;S</span>
            <span className="movie-text2 -translate-y-full ">t</span>
            <span className="movie-text2 -translate-y-full ">a</span>
            <span className="movie-text2 -translate-y-full ">t</span>
            <span className="movie-text2 -translate-y-full ">i</span>
            <span className="movie-text2 -translate-y-full ">o</span>
            <span className="movie-text2 -translate-y-full ">n</span>
          </p>
        </div>
      
      </div>
      <div>
        {/* search bar  */}
        <div className="search-Bar flex justify-center   items-center w-full pt-[0.5em]    ">
          <ReactTyped
            strings={[
              "Search for Action Movie",
              "Search for Adventure Movie",
              "Search for Animation Movie",
              "Search for Comedy Movie",
              "Search for Crime Movie",
              "Search for Documentary Movie",
              "Search for Fantasy Movie",
              "Search for Mystery Movie",
            ]}
            className="w-1/2"
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input
              className="text-[0.35em] caret-[#E70713] max-sm:text-[0.45em] bg-[#000000a6] px-[1em] translate-x-[3.5%] flex items-center py-[0.5em] rounded-full outline-none text-[#E70713]  w-full  "
              type="text"
              required
              onKeyDown={handleSearch}
              onChange={(e)=>setSearch(e.target.value)}
            />
          </ReactTyped>
          <span className="w-[3%] max-mob:w-[5%] -translate-x-[65%]  rounded-e-full cursor-pointer" onClick={handleNavigate}>
        
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="url(#grad1)"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="30%"
                    style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(0,0,0)", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            
          </span>
        </div>
        {/* advanced code search section */}
        <div className="advance-search">
          <AdvanceSearch url={`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=4e041fd34844514d59b1259e22d9930b`} type="movie"/>       
        </div>
      </div>
      <div className="base-page">
      <div >
        <TrendingComponent
          title="Action Movies"
          url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28"
          type="movie"
        />
      </div>
      <div>
        <TrendingComponent
          title="Adventure Movies"
          url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=12"
          type="movie"
        />
      </div>
      <div>
        <TrendingComponent
          title="Horror Movies"
          url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=27"
          type="movie"
        />
      </div>
      <div>
        <Collections urlType="movie" />
      </div>
      </div>
    </div>
  );
};

export default Movie;
