import React from "react";
import Image from "next/image";
import { Movie, MoviesResponse } from "@/app/utility/types";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "@/app/Loader";

const LastScreen = () => {
  const [images, setImages] = useState<Movie[]>([]);
  const [images2, setImages2] = useState<Movie[]>([]);
  async function getImages() {
    try {
      const img1 = await axios.get<MoviesResponse>(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      const img2 = await axios.get<MoviesResponse>(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      //   console.log(data);
      setImages(img1.data.results);
      setImages2(img2.data.results);
     
    } catch (error) {
      console.error("Something went wrong", error);
    }
  }
  useEffect(() => {
    getImages();
  });

  return (
    <div className="relative flex  ">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 "></div>
      <div className="w-1/2 mr-auto ml-0 relative z-20 flex justify-center items-center h-svh ">
        <div className="relative z-20 w-full text-center ">
          <Image  className="w-1/2 m-auto" src="/images/1731472286386.png" width="350" height="650" alt="BtheoneLOGO"/>
          <p className="text-[0.5em] text-[#E50914] font-custom-bold">
            You&apos;ve wrapped it all up perfectly!
          </p>
        </div>
      </div>
      <div className=" w-1/2  opacity-75 relative">
        {Object.keys(images).length > 0 ? (
          <div className="">
            <div className="w-full  grid grid-cols-2 ">
              <div className="flex space-y-[5%] flex-col items-end  film-roll ">
                {images.map((items: Movie, index: number) => {
                  return (
                    <div key={index} className="min-w-[35%] max-w-[45%]  border-[#E50914] border-[1px]">
                      <Image
                        width="350"
                        height="350"
                        src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                        alt="Moviepoater"
                      />
                    </div>
                  );
                })}
                {images.map((items: Movie, index: number) => {
                  return (
                    <div key={index} className="min-w-[35%] max-w-[45%] border-[#E50914] border-[1px]">
                      <Image
                        width="350"
                        height="350"
                        src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                        alt="Moviepoater"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex space-y-[5%] flex-col items-center  -translate-y-1/2 film-roll-down ">
                {images2.map((items: Movie, index: number) => {
                  return (
                    <div key={index} className="min-w-[35%] max-w-[45%] border-[#E50914] border-[1px] ">
                      <Image
                        className="w-full"
                        width="150"
                        height="350"
                        src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                        alt="Moviepoater"
                      />
                    </div>
                  );
                })}
                {images2.map((items: Movie, index: number) => {
                  return (
                    <div key={index} className="min-w-[35%] max-w-[45%] border-[#E50914] border-[1px] ">
                      <Image
                        className="w-full"
                        width="150"
                        height="350"
                        src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                        alt="Moviepoater"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-svh flex justify-center items-center">
            <Loader />
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default LastScreen;
