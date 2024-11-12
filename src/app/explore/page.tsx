"use client";
import React from "react";
import { ReactTyped } from "react-typed";
// import Link from "next/link";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
// import PageTransition from "./exploreComponents/pageTransition";
import TrendingNow from "./exploreComponents/TrendingNow";
import TrendingComponent from "./exploreComponents/TrendingComponent";
import TrendingCast from "./exploreComponents/TrendingCast";
import LastScreen from "./exploreComponents/LastScreen";
const Page = () => {
  const router = useRouter();
  const [search,setSearch]=useState<string>('')
  const handleNavigate=()=>{
    const getUrl =search?`/explore/${search}`:``
    if (router) {
      router.push(getUrl)
    }
    
  }
   const handleSearch =(event:React.KeyboardEvent<HTMLInputElement>)=>{
           if (event.key=='Enter') {
            handleNavigate()
           }
   }
  
  useEffect(() => {

    const t1 = gsap.timeline();
    t1.to("body", {
      overflow: "hidden",
    },"-=1")
      .to(".myimageshadow", {
        display: "block",
        opacity: 1,
      }).to(".explore-content",{
        opacity:1
      })
      .to(".myimageshadow", {
        display: "none",
        clipPath:"polygon(0% 0%, 100% 0%,100% 0%,0% 0%);",
        opacity: 0,
        delay:3,
        duration: 1,
      })
      .to(".myimageshadow", {
        display: "none",
      })
      .to("body", {
        overflow: "auto",
      })
  }, []);
  return (
    <div className="   text-white min-h-svh  ">
    <div className="absolute myimageshadow opacity-0 top-0 left-0 bottom-0 right-0 z-[99999999] bg-black">
      <div className=" h-svh flex items-center ">
        <div className=" w-full absolute z-0 top-0 max-sm:top-[5%]  bottom-0 min-h-screen left-0 right-0 ">
          <video
            autoPlay
            muted
            playsInline
            width="100%"
            height="100vh"
            style={{ objectFit: "cover" }}
          >
            <source src="/images/videoplayback.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      </div>
      <div className="min-h-screen max-sm:min-h-svh relative z-20 opacity-0 explore-content ">
        {/* first page */}
        <div className=" ">
          <h1 className="mx-[20%] text-center pt-[1em] ">
            Explore New Movies, Tv Series And Much More{" "}
          </h1>
          {/* search bar  */}

          <div className="search-Bar flex justify-center   items-center w-full   ">
            <ReactTyped
              strings={[
                "Search for Trending Movie",
                "Search for Trending Tv series",
                "Search for Horror Genre",
                "Search for Action Movie",
                "Search for Latest Collections",
              ]}
              className="w-1/2"
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input
                className="text-[0.35em] caret-[#E70713] max-sm:text-[0.45em] bg-[#000000a6] px-[1em] translate-x-[3.5%] flex items-center py-[0.5em] rounded-full outline-none text-[#E70713]  w-full   "
                type="text"
                required
                onKeyDown={handleSearch}
                onChange={(e)=>setSearch(e.target.value)}
              />
            </ReactTyped>
            <span className="w-[3%] max-mob:w-[5%] -translate-x-[65%] bg-black rounded-e-full cursor-pointer" onClick={handleNavigate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="url(#grad1)"
              >
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
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
          <br />
          {/* trending now with banner  */}
          <div>
            <TrendingNow />
          </div>
          <div>
            <TrendingComponent
              title="Trending Movies Now"
              url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
              type="movie"
            />
          </div>
          <div>
            <TrendingComponent
              title=" Trending TV Now"
              url="https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
              type="tv"
            />
          </div>
          <div>
            <TrendingComponent
              title="In Cinemas Now"
              url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2"
              type="movie"
            />
          </div>
          <div className="py-[1em]">
            <TrendingCast />
          </div>

          <div className="h-svh  overflow-hidden  shadows relative">
            <LastScreen />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Page;
