"use client";

import React from "react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Image from "next/image";
import "../../exploreComponents/exploreComponents.css";
import Loader from "@/app/mainComponents/Loader";
import { useParams } from "next/navigation";
import Link from "next/link";
interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
}
const SearchPage: React.FC = () => {
  const router = useParams();
  
  
  const [collectionMovies, setCollectionmovies] = useState<Movie[]>([]);
  const [decodedTitle, setDecodedTitle] = useState("");
  const [totalResult, setResult] = useState<number>(0);
  const [more, setMore] = useState<boolean>(true);
  const [countPage, setCountpage] = useState<number>(1);
  const collectMovies = async () => {
    try {
      if (countPage <= totalResult || countPage == 1) {
        const { data } = await axios.get<MoviesResponse>(
          `https://api.themoviedb.org/3/search/movie?query=${router.title}&include_adult=false&language=en-US&page=${countPage}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
         console.log(data);

        setCountpage((prev) => prev + 1);
        setCollectionmovies([...collectionMovies, ...data.results]);
        setResult(data.total_pages);
        // console.log(collectionMovies, totalResult);
      } else {
        setMore(false);
        return;
      }
    } catch (error) {

      console.error("something went wrong", error);
      throw new Error("Got while")
    }
  };
  useEffect(() => {
    if (typeof router.title === "string") {
      setDecodedTitle(router.title);
      console.log(decodedTitle);
      
      collectMovies();
    }

    // Decode and replace "+" with spaces
    // console.log(title);
    // setDecodedTitle(decodeURIComponent(title).replace(/\+/g, ' '));

    return () => {
      setCollectionmovies([]);
      setCountpage(1);
      setDecodedTitle("");
      setResult(0);
    };
  }, []);
  return (
    <div>
    <div className="mx-[10%] ">

      <p className="text-[0.45em] font-custom-bold pt-[2em]">
        Search Result For :{decodeURIComponent(decodedTitle)}
      </p>
      {collectionMovies.length !== 0 ? (
        <div className="min-h-svh  pt-[1em]">
          <InfiniteScroll
            dataLength={collectionMovies.length} //This is important field to render the next data
            next={collectMovies}
            hasMore={more}
            className="All-collection min-h-svh space-x-2"
            loader={
              <h4 className="text-[0.35em]">
                <Loader />
              </h4>
            }
            endMessage={
              <p style={{ textAlign: "center"}}>
            
              </p>
            }
          >
            {collectionMovies.map((items: Movie, index: number) => {
              return (
                <div key={index} className="relative text-[0.45em] ">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                    width="350"
                    height="200"
                    className=" transition-all hover:duration-600 duration-500 border-2 border-[#050505]  flex items-center justify-center hover:border-[2px] hover:border-[#E70713]"
                    alt={`${items.original_name}`}
                  />
                  <p className=" text-[0.6em] text-center">{items.original_name}</p>
                </div>
              );
            })}
             <p className="text-center text-[0.6em] pt-[1em]"><b>Yay! You caught all Result</b></p>
          </InfiniteScroll>
         
        </div>
      ) : (
        <div className="min-h-svh flex justify-center items-center">
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
        </div>
      )}
    
    </div>
    </div>
  );
};

export default SearchPage;
