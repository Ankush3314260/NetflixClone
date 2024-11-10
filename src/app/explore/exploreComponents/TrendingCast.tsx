import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "./exploreComponents.css";
// Import Swiper styles
import "swiper/css";
import Loader from "@/app/Loader";
import "swiper/css/navigation";
import { Actor } from "@/app/utility/types";
import { MovieResults } from "@/app/utility/types";
// import required modules
import { Navigation } from "swiper/modules";
import axios from "axios";

const TrendingCast: React.FC = () => {
  const [trending, setTrending] = useState<Actor[]>([]);
  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const fetchTrending = async () => {
    try {
      const { data } = await axios.get<MovieResults>(
        `https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      // console.log(data.results);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div className="bg-[#050505] pt-[0.5em]   text-white z-10">
      {/* divider section */}

      {/* trending section */}
      <div className="mx-[5%] ">
        {Object.keys(trending).length !== 0 ? (
          <div className="">
            <p className="text-[0.4em] text-white mx-[5%] py-[1em]">
              Popular Cast
            </p>
            <div className="crousal  flex justify-evenly items-center   ">
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
                className="mySwiper  relative fade-crousal"
                breakpoints={{
                  50: {
                    slidesPerView: 2.7,
                    slidesPerGroup: 2,
                    spaceBetween:  4,
                    speed: 500,
                  },
                  400: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 10,
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
                {trending.map((movie: Actor, index: number) => {
                  return (
                    <div key={index} className="  border-2 p-2">
                      <SwiperSlide key={movie.id}>
                        <div className=" rounded-full  max-mob:flex max-mob:justify-center relative ">
                          <Image
                            width="350"
                            height="350"
                            className=" w-[4em] h-[4em]   rounded-full object-cover border-[1px] hover:border-[#E70713] transition-all duration-300 p-1 sm:p-2 "
                            src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`}
                            alt="Movieposter"
                          />
                        </div>
                        <div className="text-center text-[0.35em] max-mob:text-[0.3em]">
                          <p>{movie.name}</p>
                          <p className="flex items-center justify-evenly">
                            <span>
                              Popularity: {movie.popularity.toFixed(1)}
                            </span>
                            <Image
                              width="250"
                              height="100"
                              className="w-1/6 min-w-[20px] h-auto"
                              src="/images/IMDB_Logo_2016.svg.png"
                              alt="imdblogo"
                            />
                          </p>
                        </div>
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
                className=" text-center relative z-50 flex justify-end cursor-pointer max-mob:hidden "
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
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingCast;
