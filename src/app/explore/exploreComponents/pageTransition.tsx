"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import "./exploreComponents.css";
import { VideoResult,MovieVideos } from "@/app/utility/types";
import axios from "axios";
const PageTransition = () => {
    const [data,setData] =useState<VideoResult>()
    const [key,setKey]=useState<number>(Math.floor(Math.random()*120))
  const addAnimation = () => {
    const time = gsap.timeline();
    time
      .to(".pageTransiton", {
        clipPath: "polygon(100% 0%,0% 0%,0% 100%,100% 100%)",
        duration: 1.5,
        ease: "power3.inOut",
      })
      .to(".pageTransiton", {
        // 100% 0%,0% 0%,100% 100%,100% 100%
        // 0% 0%,100% 0%,100% 100%,100% 0%
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        duration: 1.5,
        ease: "power3.inOut",
      },"-=0.3")
      .to(
        ".pageTransiton",
        {
          display: "none",
        },
       "-=0.6" 
      )
      .to(".animation-container", {
        opacity:0,
        duration:0.6
      },"-=0.6").to(".animation-container", {
        display:"none"
      },);
  };
  const getVideo=async()=>{
        try {
          const {data} = await axios.get(`https://api.themoviedb.org/3/movie/912649/videos?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
         console.log(data);
         
        setData(data.results[20])
         
        
        } catch (error) {
            console.log(error);
            
        }
  }
  useEffect(() => {
     getVideo()
    addAnimation();

  }, []);
//   762441,667538,912649,533535
  return (
    <div className="fixed text-[6.5vw] items-center min-h-screen  pageTransiton  bg-[#111111] top-0 left-0 right-0 bottom-0">
      <div className="">
        {
            data? ( 
            <div
                style={{ maxWidth: "100%", aspectRatio: "16/9" }}
                className="relative z-20"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${data.key}?autoplay=1&mute=1&playsinline=1&start=${key}&modestbranding=1&controls=0`}
                  title="Video"
                //   frameBorder="0"
                  allow="autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                  allowFullScreen
                ></iframe>
              </div>):("")
             
            
        }
      
       
      </div>
    </div>
  );
};

export default PageTransition;
