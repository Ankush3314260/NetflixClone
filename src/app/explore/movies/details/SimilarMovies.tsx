"use client";
import React, { useEffect, useState,useRef } from "react";
import { MoviesResponse, Movie } from "@/app/utility/types";
import axios from "axios";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css";
import Loader from "@/app/Loader";
import "../../exploreComponents/exploreComponents.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
interface Props {
  ids: string;
}
const SimilarMovies: React.FC<Props> = ({ ids }) => {
  const [similar, setSimilar] = useState<Movie[]>([]);
const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const getSimilarMovies = async () => {
    try {
      const { data } = await axios.get<MoviesResponse>(
        `https://api.themoviedb.org/3/movie/${ids}/similar?language=en-US&page=1&&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      console.log(data.results);
      setSimilar(
        data.results
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSimilarMovies();
  }, [ids]);
  return (
      <div className=" pt-[0.5em] bg-blue  text-white z-10">
      <div className=" ">
      {Object.keys(similar).length !== 0 ? (
        <div className="">
          <p className="text-[0.4em] text-white  py-[1em]">
           Similar Movies
          </p>
          <div className="  flex items-center  ">
            <div
              ref={prevRef}
              onClick={(e) => {
                e.preventDefault();
              }}
              className=" text-center relative z-40  cursor-pointer  max-mob:hidden"
              aria-label="Previous Slide"
            >
              <svg
                className="w-[50%] min-w-[20px]"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 19"
              >
                <g>
                  <polygon points="10 3.116 4 9.611 10 16.107 10 3.116" />
                </g>
              </svg>
            </div>

            <Swiper
              navigation={{
                nextEl: nextRef.current,
                prevEl: prevRef.current,
              }}
              spaceBetween={50}
              modules={[Navigation]}
              slidesPerView={4.6}
              className="mySwiper  relative z-10 "
              breakpoints={{
                50: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween:  5,
                  speed: 500,
                },
                400: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 5,
                  speed: 600,
                },
                640: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 25,
                  speed: 600,
                },
                768: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 35,
                  speed: 600,
                },
                1024: {
                  slidesPerView: 4.1,
                  slidesPerGroup: 4,
                  spaceBetween: 35,
                  speed: 600,
                },
              }}
              onBeforeInit={(swiper) => {
                // Ensure navigation elements are correctly assigned
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.params.navigation.prevEl = prevRef.current;
                }
              }}
            >
              {similar.map((items:Movie, index: number) => {
                
                  if (items.poster_path) {
                    return (
                  
                      <div key={index} className="  border-2  ">
                        <SwiperSlide key={items.id}>
                          {
                            items.poster_path?   <div className=" relative">
                            {
                              items.poster_path?
                              <Link href={`/explore/movies/details/${items.title}capo-${items.id}`}>
                              <Image
                              width="1050"
                              height="1050"
                              className="    border-[2px] max-sm:border-[1px] border-white hover:border-[#E70713] transition-all duration-300 m-auto object-cover object-center "
                              src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                              alt="Movieposter"
                            />
                            </Link>
                            :""
                            }
                             
                          </div>:""
                          }
                       
                         
                        </SwiperSlide>
                      </div>
                    );
                  }
               
              })}
            </Swiper>
            {/* Next Button */}
            <div
              ref={nextRef}
              onClick={(e) => {
                e.preventDefault();
              }}
              className=" text-center relative z-50 flex justify-end cursor-pointer max-mob:hidden"
              aria-label="Next Slide"
            >
              <svg
                className="w-[50%] min-w-[25px] rotate-180"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 19"
              >
                <g>
                  <polygon points="10 3.116 4 9.611 10 16.107 10 3.116" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center ">
        {SimilarMovies.length!=0?"": <Loader />} 
        </div>
      )}
    </div>
  </div>
  );
};

export default SimilarMovies;



