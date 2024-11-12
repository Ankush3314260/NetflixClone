"use client";
import React from "react";
import { useEffect, useState } from "react";
import { MediaItem } from "@/app/utility/types";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import "../exploreComponents/exploreComponents.css";
import { useParams } from "next/navigation";
const Page = () => {
  const params = useParams();
  const [collectionMovies, setCollectionmovies] = useState<MediaItem[]>([]);
  const [totalResult, setResult] = useState<number>(0);
  const [more, setMore] = useState<boolean>(true);
  const [countPage, setCountpage] = useState<number>(1);
  const collectMovies = async () => {
    try {
      if (countPage <= totalResult || countPage == 1) {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/multi?query=${params.search}&include_adult=false&language=en-US&page=${countPage}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        // https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc
        console.log(data.results);

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
    }
  };
  useEffect(() => {
    collectMovies();
  }, []);
  return (
    <div className="mx-[2%] relative z-10">
      <p className="text-[0.45em] max-sm:text-[0.65em] font-custom-bold pt-[2em]">
        Search Result For : {params.search}
      </p>

      <div className="sm:min-h-svh  pt-[1em]">
        {
          collectionMovies.length!=0?   <InfiniteScroll
          dataLength={collectionMovies.length} //This is important field to render the next data
          next={collectMovies}
          hasMore={more}
          className="All-collection min-h-svh "
          loader={<h4 className="text-[0.35em]">Loading....</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {collectionMovies.map((items: MediaItem, index: number) => {
            if (items.poster_path) {
              return (
                <div key={index} className="  ">
                  <Link
                    href={`/explore/${
                      items.media_type === "movie" ? "movies" : "tv"
                    }/details/${encodeURIComponent(
                      items.media_type === "movie"
                        ? items.original_title
                        : items.original_name
                    )}capo-${items.id}`}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                      width="350"
                      height="200"
                      className=" transition-all hover:duration-600 duration-500 border-2 border-[#050505]  flex items-center justify-center hover:border-[2px] hover:border-[#E70713]"
                      alt={`poster`}
                    />
                  </Link>
                </div>
              );
            }
          })}
        </InfiniteScroll>:<div className="min-h-svh flex justify-center items-center">
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
        }
     
      </div>
    </div>
  );
};

export default Page;
