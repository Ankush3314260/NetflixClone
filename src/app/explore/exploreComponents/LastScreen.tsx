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
          {/* <Image className="w-1/2 " src="/images/pngimg.com - netflix_PNG10.png" width="350" height="650" alt="Netflixlogo"/> */}
          <svg
            className="w-2/5 min-w-[35px] m-auto"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 407.29349 407.29348"
          >
            <defs>
              <radialGradient
                xlinkHref="#a"
                id="c"
                cx="367.99158"
                cy="280.36646"
                r="368.71729"
                fx="367.99158"
                fy="280.36646"
                gradientTransform="matrix(.30407 -.10528 3.8564 11.13776 -825.1108 -2803.5461)"
                gradientUnits="userSpaceOnUse"
              />
              <radialGradient
                xlinkHref="#a"
                id="b"
                cx="367.99158"
                cy="280.36646"
                r="368.71729"
                fx="367.99158"
                fy="280.36646"
                gradientTransform="matrix(.30407 -.10528 3.8564 11.13776 -825.1108 -2803.5461)"
                gradientUnits="userSpaceOnUse"
              />
              <linearGradient id="a">
                <stop offset="0" />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
            <g transform="translate(12.494543 6.7556334)">
              <rect
                width="407.29349"
                height="407.29349"
                x="-12.494543"
                y="-6.7556334"
                ry="37.455776"
              />
              <g transform="translate(81.631476 113.77111) scale(.29074)">
                <path
                  fill="#b1060f"
                  fill-rule="evenodd"
                  stroke="#000"
                  d="m451.82617-188.60352-.36914 210.000004-.37109 209.999996-17.27735-48.75c-.006-.0168-.0273-.0789-.0332-.0957l-22.32617 467.51563c21.95088 61.98892 33.71165 95.08081 33.84375 95.21289.17284.1729 12.68225.92753 27.79883 1.67773 45.79984 2.2727 102.55492 7.14269 145.60937 12.49219 9.96875 1.2385 18.54796 1.87275 19.06445 1.41016.5165-.4626.79775-214.28135.625-475.15235l-.31445-474.31055h-186.25zm-336.875-.625V285.5625c0 261.1354.25552 475.04843.56836 475.36133.31282.3128 16.4847-1.21398 35.9375-3.39258 19.45278-2.1787 46.33789-4.88783 59.74414-6.01953 20.56097-1.7358 81.94995-5.68286 89.0586-5.72656 2.06786-.013 2.20049-10.68157 2.5-201.10157l.3164-201.08789 14.85352 42.02539c2.29551 6.49543 3.01555 8.52378 5.25195 14.85157l22.32031-467.400394c-4.72927-13.371182-2.25012-6.352022-7.66992-21.675782-18.23693-51.562504-33.71225-95.296904-34.39062-97.187504l-1.23438-3.4375H114.95117z"
                />
                <path
                  fill="url(#b)"
                  fill-rule="evenodd"
                  d="M114.95117-189.22852V77.285156l187.7461 498.023434c.0196-11.41266.042-17.57934.0625-30.625l.3164-201.08789 14.85352 42.02539c82.68109 233.9563 127.10203 359.39701 127.36328 359.65821.17284.1729 12.68225.92753 27.79883 1.67773 45.79984 2.2727 102.55492 7.14269 145.60937 12.49219 9.96875 1.2385 18.54796 1.87275 19.06445 1.41016.355-.31796.58674-105.15812.64844-253.0586L451.54688-29.443359l-.0899 50.839843-.37109 209.999996-17.27735-48.75c-16.88185-47.6341-28.15376-79.49-95.97656-271.249996-18.23693-51.562504-33.71225-95.296904-34.39062-97.187504l-1.23438-3.4375H114.95112z"
                />
                <path
                  fill="#e50914"
                  fill-rule="evenodd"
                  d="m114.95508-189.22852 188.12109 533.06641v-.24219l14.85352 42.02539c82.68109 233.9563 127.10203 359.39701 127.36328 359.65821.17284.1729 12.68225.92753 27.79883 1.67773 45.79984 2.2727 102.55492 7.14269 145.60937 12.49219 9.91766 1.23215 18.45293 1.86506 19.04883 1.41601l-186.66406-529.5664v.0976l-17.27735-48.75c-16.88185-47.6341-28.15376-79.49-95.97656-271.249996-18.23693-51.562504-33.71225-95.296904-34.39062-97.187504l-1.23438-3.4375H114.95508z"
                />
                <path
                  fill="#b1060f"
                  fill-rule="evenodd"
                  stroke="#000"
                  d="m451.82617-188.60352-.36914 210.000004-.37109 209.999996-17.27735-48.75c-.006-.0168-.0273-.0789-.0332-.0957l-22.32617 467.51563c21.95088 61.98892 33.71165 95.08081 33.84375 95.21289.17284.1729 12.68225.92753 27.79883 1.67773 45.79984 2.2727 102.55492 7.14269 145.60937 12.49219 9.96875 1.2385 18.54796 1.87275 19.06445 1.41016.5165-.4626.79775-214.28135.625-475.15235l-.31445-474.31055h-186.25zm-336.875-.625V285.5625c0 261.1354.25552 475.04843.56836 475.36133.31282.3128 16.4847-1.21398 35.9375-3.39258 19.45278-2.1787 46.33789-4.88783 59.74414-6.01953 20.56097-1.7358 81.94995-5.68286 89.0586-5.72656 2.06786-.013 2.20049-10.68157 2.5-201.10157l.3164-201.08789 14.85352 42.02539c2.29551 6.49543 3.01555 8.52378 5.25195 14.85157l22.32031-467.400394c-4.72927-13.371182-2.25012-6.352022-7.66992-21.675782-18.23693-51.562504-33.71225-95.296904-34.39062-97.187504l-1.23438-3.4375H114.95117z"
                />
                <path
                  fill="url(#c)"
                  fill-rule="evenodd"
                  d="M114.95117-189.22852V77.285156l187.7461 498.023434c.0196-11.41266.042-17.57934.0625-30.625l.3164-201.08789 14.85352 42.02539c82.68109 233.9563 127.10203 359.39701 127.36328 359.65821.17284.1729 12.68225.92753 27.79883 1.67773 45.79984 2.2727 102.55492 7.14269 145.60937 12.49219 9.96875 1.2385 18.54796 1.87275 19.06445 1.41016.355-.31796.58674-105.15812.64844-253.0586L451.54688-29.443359l-.0899 50.839843-.37109 209.999996-17.27735-48.75c-16.88185-47.6341-28.15376-79.49-95.97656-271.249996-18.23693-51.562504-33.71225-95.296904-34.39062-97.187504l-1.23438-3.4375H114.95112z"
                />
                <path
                  fill="#e50914"
                  fill-rule="evenodd"
                  d="m114.95508-189.22852 188.12109 533.06641v-.24219l14.85352 42.02539c82.68109 233.9563 127.10203 359.39701 127.36328 359.65821.17284.1729 12.68225.92753 27.79883 1.67773 45.79984 2.2727 102.55492 7.14269 145.60937 12.49219 9.91766 1.23215 18.45293 1.86506 19.04883 1.41601l-186.66406-529.5664v.0976l-17.27735-48.75c-16.88185-47.6341-28.15376-79.49-95.97656-271.249996-18.23693-51.562504-33.71225-95.296904-34.39062-97.187504l-1.23438-3.4375H114.95508z"
                />
              </g>
            </g>
          </svg>
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
