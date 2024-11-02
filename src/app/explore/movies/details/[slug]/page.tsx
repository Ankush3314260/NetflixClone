"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import "../../Movies.css";
import gsap from "gsap";
import ErrorPage from "@/app/explore/exploreComponents/error";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../../movies/Movies.css";
gsap.registerPlugin(ScrollTrigger);
import {
  Detailsmovie,
  Genre,
  VideoResult,
  MovieVideos,
  errorTypes
} from "@/app/utility/types";
import Loader from "@/app/Loader";
import Image from "next/image";
import CastforDetails from "../CastforDetails";
import SimilarMovies from "../SimilarMovies";
const Page = () => {
  const router = useParams();
  const [details, setDetails] = useState<Detailsmovie | null>(null); // Adjust type for a single Detailsmovie
  const [video, setVideo] = useState<VideoResult[] | null>([]);
  const [id, setId] = useState<string | null>(null);
  const [error, setError] = useState<errorTypes | null>(null);

  useEffect(() => {
    if (router.slug) {
      const url = router.slug.slice(router.slug.indexOf("capo-") + 5);
      if (typeof url == "string") {
        setId(url); // Set id only when router.slug is available
      }
    }
  }, [router.slug]);
  const getVideo = async () => {
    if (!id) return; // Only fetch if id is set

    try {
      const { data } = await axios.get<MovieVideos>(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      let count = 0;
      console.log(data);

      setVideo(
        data.results.filter((items: VideoResult) => {
          if (items.type == "Trailer" && count == 0) {
            count++;
            return items;
          }
        
        })
      ); // Store fetched details
    } catch (error) {
      console.log("Error", error);
    
    }
  };
  const getFetch = async () => {
    if (!id) return; // Only fetch if id is set

    try {
      const { data } = await axios.get<Detailsmovie>(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      getVideo();
      setDetails(data); // Store fetched details
      console.log(video);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.status) {
          setError({statuscode:error.status,status:true})  
        } 
      }
    }
  };

  useEffect(() => {
    getFetch();
  }, [id]); // Fetch whenever id changes
  interface Props {
    videoResults: VideoResult;
  }

  // video component

  const VideoComponent: React.FC<Props> = ({ videoResults }) => {
    useEffect(() => {
      const t1 = gsap.timeline();
      t1.to(".trailer-text", {
        scrollTrigger: {
          trigger: ".details",
          start: "10%  -30%",
          end: "80% top",
          scrub: true,
          // markers:true
        },
        letterSpacing: "1em",
        color: "#E70714",
        duration: 3,
        ease: "power3.inOut",
      });
      return () => {
        t1.kill();
      };
    }, []);
    const youtubeUrl = `https://www.youtube.com/embed/${videoResults.key}?autoplay=1`;
    return (
      <div
        style={{ aspectRatio: "16/9" }}
        className="overflow-hidden responsive-iframe-container"
      >
        <iframe
          src={youtubeUrl}
          title="Video"
          // frameBorder="0"
          className=""
          allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  if (error?.status) {
    return <ErrorPage error={error}/>
  }
  return (
    <div className="min-h-svh relative">
      {details ? (
        <div className="">
          {details ? (
            <div className="relative">
              <div className=" relative w-full  top-0 left-0 bottom-0 right-0 ">
                <div
                  className={`fixed z-0 shadow-fade-inside top-0 left-0 right-0  `}
                >
                  <Image
                    className="w-full object-cover object-center"
                    src={`https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`}
                    width="5000"
                    height="2050"
                    alt={`${details.original_title}`}
                  />
                  {/* <div className=" absolute  z-30  -translate-y-full bottom-0 left-0 right-0">
                      <svg
                          className="rotate-180 dropShadow"
                          xmlns="http://www.w3.org/2000/svg"
                          data-name="Layer 1"
                          viewBox="0 0 1200 120"
                          preserveAspectRatio="none"
                      >
                          <path
                          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                          className="shape-fill"
                          fill="#050505"
                          fill-opacity="1"
                          />
                      </svg>
                      </div> */}
                </div>
                {/* image with rating and overview */}
                <div className="details relative    flex space-x-3  z-50 mx-[5%] ">
                  <div className="w-1/5   ">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                      width="1050"
                      height="1350"
                      className="border-[1px] border-[#E70713]"
                      alt={`${details.original_title}`}
                    />
                  </div>
                  {/* section of title and rating */}
                  <div className="w-4/5   flex  text-[0.9em] sm:p-[3%]">
                    <div className="">
                      <p className="font-netflix  tracking-wider">
                        {details.original_title}
                      </p>
                      <p className="flex w-full items-center max-sm:space-x-1 space-x-3 text-[0.45em]">
                        <span>Rating: {details.vote_average.toFixed(1)}</span>
                        <Image
                          width="550"
                          height="550"
                          className="w-[5%]  min-w-[10px] max-h-[1%]"
                          src="/images/IMDB_Logo_2016.svg.png"
                          alt="imdblogo"
                        />
                      </p>
                      <p className="text-[0.34em] pt-[0.5em] tracking-wide">
                        <span className="font-custom-bold">Overview:</span>
                        {details.overview}
                      </p>
                      <div></div>
                    </div>
                    {/* overview section */}

                    {/* cast of movie section movie */}
                  </div>
                </div>
                <br />
                {/* video tag  showing trailer or teaser*/}
                {/*  */}
                <div className="z-10 relative sm:mx-[5%] max-sm:w-4/5 m-auto ">
                  {video != null ? (
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 ">
                      {video.map((videos, index) => {
                        return (
                          <VideoComponent key={index} videoResults={videos} />
                        );
                      })}
                      <p className="text-center text-[0.55em] text-white max-sm:order-first max-sm:text-[1em] relative z-10 flex items-center justify-center  font-netflix tracking-[0.1em]  trailer-text">
                        TRAILER
                      </p>
                    </div>
                  ) : (
                    <div>{video != null ? "" : <Loader />}</div>
                  )}
                </div>

                <div className="relative z-10">
                  {id ? <CastforDetails ids={id} /> : ""}
                </div>
                {/* run time details */}
                <div className="relative z-10 mx-[5%]  flex flex-wrap items-center pt-[0.5em] gap-[1%]">
                  <div className="border-b-[1px] flex w-full">
                    <h2 className="text-[0.5em] text-[#E70713]">
                      Production country -
                    </h2>

                    {details.production_countries.map((item, index) => {
                      return (
                        <p
                          key={item.iso_3166_1}
                          className="text-[0.35em]  p-2   "
                        >
                          {index != 0 ? "," : ""} &nbsp;{item.name}
                        </p>
                      );
                    })}
                  </div>
                  <div className="   w-full">
                    <div className="m-auto border-b-[1px]">
                      <span className="text-[0.45em] text-[#E70713]">
                        Release Date :{" "}
                      </span>
                      <span className="text-[0.45em]  p-2 rounded-xl ">
                        {" "}
                        {details.release_date}
                      </span>
                    </div>
                    <div className="m-auto border-b-[1px]">
                      <span className="text-[0.45em] text-[#E70713]">
                        Run Time :{" "}
                      </span>
                      <span className="text-[0.45em]  p-2 rounded-xl ">
                        {" "}
                        {details.runtime}Min
                      </span>
                    </div>
                  </div>
                </div>
                {/* rest of details */}
                <br />

                <div className="relative z-10 mx-[5%]  ">
                  <div className="grid grid-cols-2 text-[0.35em]">
                    <div className="  ">
                      {Object.keys(details.production_companies).length != 0 ? (
                        <div>
                          <p className="text-center font-custom-bold uppercase text-[#E70713]">
                            Production Company
                          </p>
                          <div className="grid gap-3  grid-cols-2 items-center  max-mob:grid-cols-1 pt-[0.5em]">
                            {details.production_companies.map(
                              (items, index: number) => {
                                return (
                                  <div
                                    key={index}
                                    className="w-[50%] max-mob:w-4/5 m-auto bg-white rounded-lg  "
                                  >
                                    {items.logo_path ? (
                                      <div className="flex  items-center justify-evenly text-black space-x-1 p-2 rounded-sm">
                                        <Image
                                          src={`https://image.tmdb.org/t/p/w500/${items?.logo_path}`}
                                          width="1050"
                                          height="2050"
                                          className="w-[30%] relative z-20"
                                          alt={`${details.original_title}`}
                                        />
                                        <p className="text-[0.55em]">
                                          {items.name}
                                        </p>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="">
                      <p className="text-center font-custom-bold uppercase text-[#E70713]">
                        Genre
                      </p>
                      <div className="flex justify-center gap-[1%] pt-[0.5em] max-sm:flex-wrap">
                        {details.genres.map((items: Genre, index: number) => {
                          return (
                            <div key={items.id} className="  text-[0.7em] ">
                              {index != 0 ? "," : ""} &nbsp;{items.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="">{id ? <SimilarMovies ids={id} /> : ""}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="min-h-svh flex justify-center items-center">
              <Loader />
            </div>
          )}
          <br />
        </div>
      ) : (
        <div className="min-h-svh flex justify-center items-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Page;
