"use client";
import React, { useEffect, useState,useRef } from "react";
import { MovieCredits, CastMember } from "@/app/utility/types";
import axios from "axios";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css";
import "../../exploreComponents/exploreComponents.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
interface Props {
  ids: string;
}
const CastforDetails: React.FC<Props> = ({ ids }) => {
  const [cast, setCast] = useState<CastMember[]>([]);
  const [flag,setFlag]=useState<boolean>(true)
const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const getCast = async () => {
    try {
      const { data } = await axios.get<MovieCredits>(
        `https://api.themoviedb.org/3/movie/${ids}/credits?language=en-US&&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      // console.log(data.cast);
      setCast(
        data.cast.filter((item) => {
          if (item.known_for_department === "Acting" && item.profile_path) {
            return item;
          }
        })
      );
      
    } catch (error) {
      setFlag(false)
      if (error) {
        
      }
      // console.log(error);
    }
  };
  useEffect(() => {
    getCast();
  }, [ids]);
  return (
      <div className=" pt-[0.5em] bg-blue  text-white z-10">
        {
          flag?(  <div className="mx-[5%] ">
            {cast.length != 0  && cast.length >= 4 ?(
             <div className="">
             <p className="text-[0.4em] text-white mx-[5%] py-[1em]">
               Popular Cast
             </p>
             <div className="  flex items-center  ">
               <div
                 ref={prevRef}
                 onClick={(e) => {
                   e.preventDefault();
                 }}
                 className=" text-center relative z-40  cursor-pointer  max-mob:hidden w-[10%]"
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
                 className="mySwiper  relative z-10"
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
                 {cast.map((casts:CastMember, index: number) => {
                   
                     if (casts.profile_path) {
                       return (
                     
                         <div key={index} className="  border-2  ">
                           <SwiperSlide key={casts.id}>
                             {
                               casts.profile_path?   <div className="pt-[1em] relative">
                               {
                                 casts.profile_path?<Image
                                 width="1050"
                                 height="1050"
                                 className=" w-[3.5em] h-[3.5em] p-2 max-sm:p-1 border-[2px] max-sm:border-[1px] border-white hover:border-[#E70713] transition-all duration-300 m-auto rounded-full object-cover object-center "
                                 src={`https://image.tmdb.org/t/p/w500/${casts.profile_path}`}
                                 alt="Movieposter"
                               />:""
                               }
                                <div className="text-center text-[0.35em] max-mob:text-[0.3em]">
                               <p>{casts.name}</p>
                               <p className="text-[gray]">{casts.character}</p>
                             </div>
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
                 className=" text-center relative z-50 flex justify-end cursor-pointer max-mob:hidden w-[10%]"
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
               {cast.length != 0?"":""}
              </div>
            )}
          </div>):('')
        }
    
  </div>
  );
};

export default CastforDetails;



