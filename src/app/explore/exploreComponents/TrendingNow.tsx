"use  client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// MoviesResponse Interface
interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
const TrendingNow = () => {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);
  const fetchTrending = async () => {
    try {
      const { data } = await axios.get<MoviesResponse>(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );

      setTrending(data.results);
    } catch (err) {
      console.error("Error fetching trending movies:", err);
      console.log(error);

      setError("Failed to load trending movies.");
    }
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  useEffect(() => {
    if (
      swiperRef.current &&
      nextRef.current &&
      prevRef.current &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== "boolean"
    ) {
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.params.navigation.prevEl = prevRef.current;

      // Initialize and update navigation
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [trending]);
  const shouldLoop = trending.length >= 6;
  return (
    <div className=" relative z-10 text-white bg-[#050505]">
      {/* page divider  */}

      {/* trending section start */}
      <div>
        <div className="trending-section mx-[10%]">
          <p className="text-[0.4em]">Trending Now</p>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay, Keyboard]}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            loop={shouldLoop}
            slidesPerView={1}
            slidesPerGroup={1}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              1024: {
                slidesPerView: 1,
                slidesPerGroup: 1,
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
            {/* Swiper Slides */}
            {trending.map((item:Movie) => (
              <SwiperSlide key={item.id}>
                <Link href={`/explore/movies/details/${item.title}-${item.id}`}>
                <div className="relative z-10 m-auto flex items-center h-full">
                  {/* Background Image */}

                  <Image
                    className="absolute top-0 left-0 bottom-0 right-0 w-full object-cover -z-30 opacity-30"
                    src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                    alt={`Backdrop for ${item.title}`}
                    loading="lazy"
                    width="1000"
                    height="500"
                  />

                  {/* Slide Content */}
                  <div>
                    <div className="flex justify-between mob:-translate-y-[1%] items-center relative sm:p-5 max-sm:p-0 leading-snug">
                      {/* Poster Image */}
                      <Image
                        className="z-10 relative w-1/5 border-2 max-sm:border-[1px] sm:p-2 shadow-2xl shadow-black h-full"
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={`Poster for ${item.title}`}
                        loading="lazy"
                        width="200"
                        height="200"
                      />

                      {/* Movie Details */}
                      <div className="w-[74%] p-3 font-custom space-y-2">
                        <h2 className="text-[0.9em] max-sm:text-[0.6em] drop-shadow-3xl text-shadow">
                          {item.title}
                        </h2>
                        <p className="text-[0.3em] drop-shadow-3xl text-shadow">
                          Language: {item.original_language}
                        </p>
                        <p className="text-[0.3em] flex items-center space-x-1">
                          <span className="drop-shadow-3xl text-shadow">
                            Rating: {item.vote_average.toFixed(1)}
                          </span>
                          <Image
                            className="w-[5%] "
                            src="/images/IMDB_Logo_2016.svg.png"
                            width="1600"
                            height="500"
                            alt="IMDb"
                          />
                        </p>
                        <p className="text-[0.31em] max-mob:text-[0.25em] drop-shadow-3xl text-shadow">
                          Overview: {item.overview}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-start w-[60%] m-auto  justify-evenly">
            <div ref={prevRef} onClick={(e)=>{e.preventDefault()}} className="w-max relative z-0 flex justify-center">
              <svg
              
                className="w-[1.5em] cursor-pointer relative z-20 "
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e)=>{e.stopPropagation()}}
                viewBox="0 -960 960 960"
                fill="#E30913"
              >
                <path d="M560-280 360-480l200-200v400Z" />
              </svg>
            </div>
            <div ref={nextRef} onClick={(e)=>{e.preventDefault()}}  className="w-max 0 pointer-events-none relative z-0 flex justify-center ">
              <svg
                className="rotate-180 w-[1.5em] cursor-pointer relative z-20 pointer-events-auto"
                onClick={(e)=>{e.stopPropagation()}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#E30913"
              >
                <path d="M560-280 360-480l200-200v400Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
