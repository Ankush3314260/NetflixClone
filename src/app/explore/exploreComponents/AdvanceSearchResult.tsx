"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Movie, MoviesResponse } from "@/app/utility/types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Image from "next/image";
import "./exploreComponents.css";
import Link from "next/link";
// import Loader from "@/app/mainComponents/Loader";
interface props{
  vote:number,
  year:number,
  genres:string

}
const AdvanceSearchResult :React.FC<props>= ({vote,year,genres}) => {
  
  const [collectionMovies, setCollectionmovies] = useState<Movie[]>([]);
  const [totalResult, setResult] = useState<number>(0);
  const [more, setMore] = useState<boolean>(true);
  const [countPage, setCountpage] = useState<number>(1);
  const collectMovies = async () => {
   
        try {
            if (countPage <= totalResult || countPage == 1) {
              const { data } = await axios.get<MoviesResponse>(
                `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${countPage}&primary_release_year=${year}&sort_by=popularity.desc&vote_average.lte=${vote}&with_genres=${genres}}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
              );
              setCountpage((prev) => prev + 1);
              setCollectionmovies((prev) => [...prev, ...data.results]);
              setResult(data.total_pages);
                console.log(collectionMovies, totalResult);
              // console.log("get data",data);
              
            }
            else{
              setMore(false)
              return 
      
            }
          } catch (error) {
            console.error("something went wrong", error);
          }
   
  
  };

  useEffect(() => {
    setCollectionmovies([])
    setCountpage(1)
    setResult(0)
    collectMovies();

  }, [vote,year,genres]);
  return (
    <div className="">
      <p className="text-[0.45em] font-custom-bold pt-[2em]">
        Search Result
      </p>

      <div className="min-h-svh  pt-[1em] text-[0.35em] ">
        {
          collectionMovies.length!=0?( 
          <InfiniteScroll
            dataLength={collectionMovies.length} //for rendering the next data
            next={collectMovies}
            hasMore={more}
            className="All-collection min-h-svh space-x-2"
            loader={
              <h4 className="text-[0.5em] text-center">
              Loading..
              </h4>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          > 
          
                {collectionMovies.map((items: Movie, index: number) => {
                  if (items.poster_path) {
                    return (
                      <div key={index} className="  ">
                        <Link href={`/explore/movies/details/${items.title}capo-${items.id}`}>
                        {
                          items.poster_path?(<Image
                            src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                            width="350"
                            height="200"
                            className=" transition-all hover:duration-600 duration-500 border-2 border-[#050505]  flex items-center justify-center hover:border-[2px] hover:border-[#E70713]"
                            alt={`${items.title}`}
                          />):("")
                        }
                        
                        </Link>
                      </div>
                    );  
                  }
                
                })}
          
            
          </InfiniteScroll>):("sfsdsdsddd")
        }
     
      </div>
    </div>
  );
};

export default AdvanceSearchResult;
