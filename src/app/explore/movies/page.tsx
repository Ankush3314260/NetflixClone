"use client";
import React from "react";
// import PageTransition from '../exploreComponents/pageTransition';
import TrendingComponent from "../exploreComponents/TrendingComponent";
import Collections from "../exploreComponents/Collections";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import './Movies.css'
import gsap from "gsap";
const Movie = () => {
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
        color:'#E70713',
        duration:1
      });
    return () => {
      time.kill();
    };
  }, []);
  return (
    <div className="bg-[#050505] min-h-screen text-white relative">
      {/* <div className="bg-[#050505] z-50 absolute top-0 left-0 right-0 bottom-0 animation-container">
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
        <div>
          <p className="pt-[1em] text-[0.35em] text-center ">
            Ready for your next movie night? Browse the latest releases and
            uncover stories that will keep you on the edge of your seat. What
            will you watch next? The adventure starts here!
          </p>
        </div>
      </div>
      <div>
        <div className="search-Bar flex justify-center   items-center w-full   ">
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
              className="text-[0.5em] bg-white px-[0.8em] translate-x-[3.5%] flex items-center py-2 rounded-full outline-none text-black bg-transparent w-full  "
              type="text"
            />
          </ReactTyped>
          <span className="w-[4%] -translate-x-[65%] bg-white rounded-e-full">
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
      </div>
      <div>
        <TrendingComponent
          title="Action Movies"
          url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28"
        />
      </div>
      <div>
        <TrendingComponent
          title="Adventure Movies"
          url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=12"
        />
      </div>
      <div>
        <TrendingComponent
          title="Horror Movies"
          url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=27"
        />
      </div>
      <div>
        <Collections />
      </div>
    </div>
  );
};

export default Movie;
