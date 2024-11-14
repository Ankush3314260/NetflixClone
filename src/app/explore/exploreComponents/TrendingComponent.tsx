import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import Loader from "@/app/Loader";
import "swiper/css/navigation";
import { Movie } from "@/app/utility/types";
import { ShowResult } from "@/app/utility/types";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import axios from "axios";

interface Props{
    title:string,
    url:string
    type:string
}
const TrendingComponent :React.FC<Props>=({title,url,type}) => {
  const [trending, setTrending] = useState<(Movie | ShowResult)[]>([]);
  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const fetchMoviesTrending = async () => {
    try {
      const { data } = await axios.get(
        `${url}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      // console.log(data.results);
      setTrending(data.results);
    } catch (error) {
      if (error) {
        
      }
    }
  };

  useEffect(() => {
   
      fetchMoviesTrending();  
    
   
   
  }, []);
  return (
    <div className=" pt-[0.5em]   text-white z-10">
      {/* divider section */}
    
      {/* trending section */}
      <div className="mx-[5%] ">
        {Object.keys(trending).length !== 0 ? (
          <div className="">
            <p className="text-[0.4em] max-sm:text-[0.55em] text-white mx-[5%] py-[1em] font-custom-bold ">
               {title}
            </p>
            <div className="crousal  flex justify-evenly items-center  ">
              <div
                ref={prevRef}
                onClick={(e) => {
                  e.preventDefault();
                }}
                className=" text-center relative z-40 flex  cursor-pointer max-mob:hidden"
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
                cssMode={true}
                className="mySwiper  relative fade-crousal"
                breakpoints={{
                    50:{
                        slidesPerView: 2.5,
                        slidesPerGroup: 2,
                        spaceBetween:10,
                        speed:200
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
                {trending.map((movie: Movie | ShowResult, index: number) => {
                   const isMovie = (movie as Movie).release_date !== undefined;
                  return (
                    <div key={index} className="w-[50%] relative ">
                    
                      <SwiperSlide key={movie.id}>
                      <Link href={`/explore/${type=='movie'?"movies":"tv"}/details/${isMovie?(movie as Movie).title:(movie as ShowResult).original_name}capo-${movie.id}`}>
                        <Image
                          width="350"
                          height="350"
                          className="transition-all hover:duration-600 duration-500 border-2 border-[#05050500]  flex items-center justify-center hover:border-[2px] hover:border-[#E70713]"
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt="Moviepoater"
                        />
                          </Link>
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
                className=" text-center relative z-40 flex justify-end cursor-pointer max-mob:hidden"
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

export default TrendingComponent;
