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
  genres:string,
  type:string

}
const AdvanceSearchResult :React.FC<props>= ({vote,year,genres,type}) => {
  
  const [collectionMovies, setCollectionmovies] = useState<Movie[]>([]);
  const [totalResult, setResult] = useState<number>(0);
  const [more, setMore] = useState<boolean>(true);
  const [countPage, setCountpage] = useState<number>(1);
  const collectMovies = async () => {
   
        try {
            if (countPage <= totalResult || countPage == 1) {
              const { data } = await axios.get<MoviesResponse>(
                `https://api.themoviedb.org/3/discover/${type=='movie'?"movie":"tv"}?include_adult=false&include_video=false&language=en-US&page=${countPage}&${type=='movie'?"primary_release_year":"first_air_date_year"}=${year}&sort_by=popularity.desc&vote_average.lte=${vote}&with_genres=${genres}}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
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
                        <Link href={`/explore/${type=='movie'?"movies":"tv"}/details/${items.title}capo-${items.id}`}>
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
          
            
          </InfiniteScroll>):(  <div className="min-h-svh flex justify-center items-center">
          <div className="max-[5%] w-3/5 text-center">
            <Image
              className="m-auto"
              src="/images/Logonetflix.png"
              alt="netflix logo"
              width="500"
              height="500"
            />
            <p>0:Result </p>
            <p className="text-[0.3em] opacity-50">
              Make sure your title matches the movie title
            </p>

            <Link className="pt-[0.5em] block" href="/explore/movies/">
              {" "}
              <button className=" flex items-center py-[0.2em] px-[0.8em] rounded-sm m-auto bg-[#E70713] transition-all duration-300 hover:bg-[#C11119] text-[0.3em]">
                <span className=" flex justify-end">
                  <svg
                    className="w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#FFFFFF"
                  >
                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                  </svg>
                </span>{" "}
                <span className="">BACK</span>
              </button>
            </Link>
          </div>
        </div>)
        }
     
      </div>
    </div>
  );
};

export default AdvanceSearchResult;
