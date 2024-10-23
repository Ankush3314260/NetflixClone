import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import Loader from "@/app/Loader";
import "swiper/css/navigation";
import { Movie } from "@/app/utility/types";
import { MoviesResponse } from "@/app/utility/types";
// import required modules
import { Navigation } from "swiper/modules";
import axios from "axios";

interface Props{
    title:string,
    url:string
}
const TrendingComponent :React.FC<Props>=({title,url}) => {
  const [trending, setTrending] = useState<Movie[]>([]);
  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const fetchTrending = async () => {
    try {
      const { data } = await axios.get<MoviesResponse>(
        `${url}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
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
            <p className="text-[0.4em] text-white mx-[5%] py-[1em] font-custom-bold ">
               {title}
            </p>
            <div className="crousal  flex justify-evenly items-center  ">
              <div
                ref={prevRef}
                onClick={(e) => {
                  e.preventDefault();
                }}
                className=" text-center relative z-40 flex  cursor-pointer "
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
                    50:{
                        slidesPerView: 1.5,
                        slidesPerGroup: 1,
                        spaceBetween:30,
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
                     
                        <Image
                          width="350"
                          height="350"
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt="Moviepoater"
                        />
                          
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
                className=" text-center relative z-50 flex justify-end cursor-pointer"
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
