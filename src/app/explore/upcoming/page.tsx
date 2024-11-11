"use client";
import React, { useEffect, useState } from "react";
import { Movie, NewMovieResponse } from "@/app/utility/types";
import axios from "axios";
import Image from "next/image";
import Loader from "@/app/mainComponents/Loader";
import "../exploreComponents/exploreComponents.css";
import Link from "next/link";
const Page = () => {
  const [upcoming, setUpcoming] = useState<NewMovieResponse | null>(null);
  const [upcoming2, setUpcoming2] = useState<NewMovieResponse | null>(null);
  const [date, setDate] = useState<string>("");
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { month: "short" });
  }
  const getUpcomingrow2 = async () => {
    try {
      const { data } = await axios.get<NewMovieResponse>(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      // console.log(data);
      setUpcoming2(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUpcomingrow1 = async () => {
    try {
      const { data } = await axios.get<NewMovieResponse>(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      // console.log(data);
      setUpcoming(data);
    } catch (error) {
      if (error) {
        
      }
    }
  };
  useEffect(() => {
    if (upcoming) {
      if (upcoming?.dates.minimum) {
        setDate(formatDate(upcoming?.dates.minimum));
      }
    }
  }, [upcoming]);
  useEffect(() => {
    getUpcomingrow1();
    getUpcomingrow2()
  }, []);
  return (
    <div className="relative z-20 sm:min-h-svh">
      <div className="">
        <h1 className="text-[0.5em] ml-[5%] border-b-2 ">
          {" "}
          Stay Ahead of the Buzz – Movies Coming Soon in 
         
          <span className="text-[#E70713]"> {date} Month </span>{" "}
        </h1>
      </div>
      <div className="mx-[5%] pt-[0.5em]">
        <p className="text-[0.35em] text-center"> Be in the know and stay ahead of the crowd! Our Coming Soon lineup showcases everything from groundbreaking blockbusters to heartfelt indie films. Whether you&apos;re into action-packed adventures, magical fantasies, or gripping dramas, you&apos;ll find the latest releases that are set to take audiences by storm. Bookmark your favorites, share them with friends, and get ready for a cinematic journey like never before!</p>
      </div>
      <div>
     <br /> 
      </div>
      <div className="">
        {upcoming ? (
          <div className="overflow-x-hidden  shadowsforthefade relative ">
            <div className="flex  gap-[1%] slides-left   ">
              <div className="min-w-full flex gap-[1%] justify-between ">
                {upcoming.results.map((movies: Movie, index: number) => {
                  return (
                    <div key={index} className="min-w-[15%] ">
                      <Link href={``}>
                      <Image
                      className="border-[1px] border-[#E70713]"
                        width="200"
                        height="200"

                        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                        alt={`${movies.original_title}`}
                      />
                      </Link>
                    </div>
                  );
                })}
                 {upcoming.results.map((movies: Movie, index: number) => {
                  return (
                    <div key={index} className="min-w-[15%] ">
                      <Link href={``}>
                      <Image
                      className="border-[1px] border-[#E70713] cursor-pointer"
                        width="200"
                        height="200"

                        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                        alt={`${movies.original_title}`}
                      />
                      </Link>
                    </div>
                  );
                })}
              </div>
             
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <div className="pt-[1em]">
        {/* <TrendingComponent url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" type="movie" title=""/> */}
        {upcoming2 ? (
          <div className="overflow-x-hidden  shadowsforthefade relative ">
            <div className="flex  gap-[1%] slides-right   ">
              <div className="min-w-full flex gap-[1%] justify-between ">
                {upcoming2.results.map((movies: Movie, index: number) => {
                  return (
                    <div key={index} className="min-w-[15%]  ">
                        <Link href={``}>
                      <Image
                      className="border-[1px] border-[#E70713]"
                        width="200"
                        height="200"

                        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                        alt={`${movies.original_title}`}
                      />
                      </Link>
                    </div>
                  );
                })}
                 {upcoming2.results.map((movies: Movie, index: number) => {
                  return (
                    <div key={index} className="min-w-[15%] ">
                      <Link href={``}>
                      <Image
                      className="border-[1px] border-[#E70713]"
                        width="200"
                        height="200"

                        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                        alt={`${movies.original_title}`}
                      />
                      </Link>
                    </div>
                  );
                })}
              </div>
             
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <br />
    </div>
  );
};

export default Page;
