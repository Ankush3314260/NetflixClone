import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import Loader from "./Loader";
import "swiper/css/navigation";
import { Movie } from "../utility/types";
import { MoviesResponse } from "../utility/types";
// import required modules
import { Navigation } from "swiper/modules";
import axios from "axios";
const TrendingCrousal = () => {
  const [trending, setTrending] = useState<Movie[]>([]);
  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const fetchTrending = async () => {
    try {
      const { data } = await axios.get<MoviesResponse>(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      // console.log(data.results);
      setTrending(data.results);
    } catch (error) {
      // console.log(error);
      if (error) {
        
      }
    }
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div className="  text-white z-10">
      {/* divider section */}
      <div className=" bg-[#101010]  drop-shadow-[0px_5px_2px_rgba(255,0,0,0.5)] rotate-180 z-10 left-0 right-0">
        <div className="custom-shape-divider-top-1729230229 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="#050505"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="bg-[#111111]"
            ></path>
          </svg>
        </div>
      </div>
      {/* trending section */}
      <div className="sm:mx-[3%] ">
        {Object.keys(trending).length !== 0 ? (
          <div className="">
            <p className="text-[0.4em] max-sm:text-[0.75em] text-white mx-[5%] py-[1em] relative z-10">
              Trending Now
            </p>
            <div className="crousal  flex justify-evenly items-center  ">
              <div
                ref={prevRef}
                onClick={(e) => {
                  e.preventDefault();
                }}
                className=" text-center relative z-40 flex  cursor-pointer max-mob:hidden "
                aria-label="Previous Slide"
              >
                <svg
                  className="w-[50%] min-w-[20px]"
                  fill="#E50914"
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
                cssMode={window.innerWidth<640?true:false}
                className="mySwiper  relative"
                breakpoints={{
                    50:{
                        slidesPerView: 2.3,
                        slidesPerGroup: 2,
                        spaceBetween:10,
                        speed:500
                    },
                    400:{
                        slidesPerView: 2.5,
                        slidesPerGroup: 3,
                        spaceBetween:10,
                        speed:600,
                        
                    },
                    640: {
                      slidesPerView: 2.5,
                      slidesPerGroup: 3,
                      spaceBetween:25,
                      speed:600
                    },
                    768: {
                      slidesPerView: 3.5,
                      slidesPerGroup: 4,
                      spaceBetween:35,
                      speed:600
                    },
                    1024: {
                      slidesPerView: 4.6,
                      slidesPerGroup: 4,
                      spaceBetween:35,
                      speed:600
                    }
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
                {trending.map((movie: Movie, index: number) => {
                  return (
                    <div key={index} className="w-[50%] relative ">
                    
                      <SwiperSlide key={movie.id}>
                      <p className="absolute top-0 z-[999] w-[15%] py-[5px] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_80%)] right-0 text-center bg-[#E50914] text-[0.2em] max-sm:text-[0.35em]">Top <b className="block">20</b></p>

                        <Image
                          width="350"
                          height="350"
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt="Movieposter"
                        />
                         <p className="absolute trending-number font-custom-bold bottom-0 sm:-left-[15%]   z-50 w-[15%]    text-center  text-[2em] max-sm:text-[2.5em]">{index+1}</p>  
                      </SwiperSlide>
                    
                    </div>
                  );
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
                  fill="#E50914"
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
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingCrousal;
