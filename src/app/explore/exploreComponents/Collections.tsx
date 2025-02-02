"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Movie,ShowResult} from "@/app/utility/types";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import "./exploreComponents.css";
interface props{
  urlType:string
}
const Collections:React.FC<props> = ({urlType}) => {
  const [collectionMovies, setCollectionmovies] = useState<(Movie | ShowResult)[]>([]);
  const [totalResult, setResult] = useState<number>(0);
  const [more, setMore] = useState<boolean>(true);
  const [countPage, setCountpage] = useState<number>(1);
  const collectMovies = async () => {
        try {
            if (countPage <= totalResult || countPage == 1) {
              const { data } = await axios.get(
                `https://api.themoviedb.org/3/discover/${urlType}?include_adult=false&include_video=false&language=en-US&page=${countPage}&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
              );
              // https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc
              setCountpage((prev) => prev + 1);
              setCollectionmovies([...collectionMovies, ...data.results]);
              setResult(data.total_pages);
              // console.log(collectionMovies, totalResult);
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
    collectMovies();
  }, []);
  return (
    <div className="mx-[5%]">
      <p className="text-[0.45em] max-sm:text-[0.65em] font-custom-bold pt-[2em]">
        All Movies Collection{" "}
      </p>

      <div className="sm:min-h-svh  pt-[1em]">
        <InfiniteScroll
          dataLength={collectionMovies.length} //This is important field to render the next data
          next={collectMovies}
          hasMore={more}
          className="All-collection min-h-svh "
          loader={
            <h4 className="text-[0.35em]">
             Loading....
            </h4>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        > 
        
              {collectionMovies.map((items: Movie | ShowResult, index: number) => {
                 const isMovie = (items as Movie).release_date !== undefined;
                return (
                  <div key={index} className="  ">
                    <Link href={`/explore/${isMovie?"movies":"tv"}/details/${isMovie?(items as Movie).title:(items as ShowResult).original_name}capo-${items.id}`}> 
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
              })}
        
          
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Collections;
