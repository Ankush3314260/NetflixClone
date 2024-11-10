'use client'
import React, { useEffect, useState } from "react";
import { NewMovieResponse } from "@/app/utility/types";
import axios from "axios";
import TrendingComponent from "../exploreComponents/TrendingComponent";
const Page = () => {
    const [upcoming,setUpcoming]=useState<NewMovieResponse|null>(null)
    const [date,setDate]=useState<string>('')
    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleString("en-US", { month: "short"});
      }
    const getUpcoming=async()=>{
        try {
            const {data} = await axios.get<NewMovieResponse>(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
            console.log(data);
            setUpcoming(data)
            
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
             if (upcoming) {
                if (upcoming?.dates.minimum) {
                    setDate(formatDate(upcoming?.dates.minimum))    
                }  
             }
    },[upcoming])
    useEffect(()=>{
        getUpcoming()
    },[])
  return <div className="relative z-20 min-h-svh">
     <div className="">
        <h1 className="text-[0.7em] mx-[5%] "> Entertainment Drop of <span className="text-[#E70713]">{date} Month </span> </h1>
     </div>
    <div>
        <TrendingComponent url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" type="movie" title=""/>
    </div>
    </div>;
};

export default Page;
