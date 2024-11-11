"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { SeasonDetail, Episode, GuestStar } from "@/app/utility/types";
import Loader from "@/app/Loader";
import EpisodesAccordion from "@/app/explore/exploreComponents/EpisodesAccordion";
import "@/app/explore/exploreComponents/exploreComponents.css";
import Image from "next/image";
const Page = () => {
  const router = useParams();
  const [seasonNumber, setseasonNumber] = useState<string>("");
  const [sName, setSName] = useState<string>("");
  const [seasonid, setseasonid] = useState<string>("");
  const [sDetail, setSDetail] = useState<SeasonDetail | null>(null);
  const getSeasonDetails = async () => {
    if (!(seasonNumber && seasonid)) {
      return;
    } else {
      try {
        const { data } = await axios.get<SeasonDetail>(
          `https://api.themoviedb.org/3/tv/${seasonid}/season/${seasonNumber}?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        // console.log(data);
        setSDetail(data);
      } catch (error) {
        if (error) {
          
        }
      }
    }
  };
  useEffect(() => {
    getSeasonDetails();
  }, [seasonNumber, seasonid]);
  useEffect(() => {
    if (router.seasonDetail) {
      setseasonNumber(
        router.seasonDetail
          .slice(
            router.seasonDetail.indexOf("SeasonNo") + "SeasonNo".length,
            router.seasonDetail.indexOf("E")
          )
          .toString()
      );
      setseasonid(
        router.seasonDetail
          .slice(router.seasonDetail.indexOf("Episodes-") + "Episodes-".length)
          .toString()
      );
      const name = decodeURIComponent(router.seasonDetail.toString());
      setSName(name.slice(0, name.indexOf("-SeasonNo")));
    }
  }, [router.seasonDetail]);
  return (
    <div>
      {/* {seasonNumber}df{seasonid} */}
      {sDetail ? (
        <div className="mx-[5%] text-gray-200 relative z-[99] ">
          {/* posterdetails */}
          <div className="flex ">
            <div className="w-1/5">
              <Image
                width="500"
                height="1000"
                alt="poster"
                src={`https://image.tmdb.org/t/p/w500/${sDetail.poster_path}`}
                className="border-[1px] border-[#E70713] transition-all duration-300 min-w-[40px] "
              />
            </div>
            <div className="w-4/5  mx-[5%] flex items-center ">
              <div className=" w-full">
                <p className="text-[0.45em] ">
                  <span className="text-[#E70712]">{sName}</span>{" "}
                  <span className=" text-gray-300">-Season {seasonNumber}</span>
                  <span className="text-[0.6em] text-gray-300">
                    &nbsp;({sDetail.air_date.split("-")[0]})
                  </span>
                </p>
                <p className="text-[0.45em]">
                  Rating-{sDetail.vote_average.toFixed(1)}{" "}
                  <span className="text-[#050505] bg-[#F6C908] font-bold rounded-sm px-[0.5em] text-[0.75em] font-netflix tracking-wider">
                    Imdb
                  </span>{" "}
                </p>
               
              </div>
            </div>
          </div>
          <div className=" w-full">

<p className="text-[0.45em] pt-[0.5em]">{(sDetail.episodes.length!=0 && sDetail.episodes[0].guest_stars.length!=0)?"Cast of the season":""}</p>
<div className="castofseasonShadow relative overflow-hidden">
  {sDetail.episodes.length != 0 ? (
    <div className=" slidecastanimation flex gap-[1%] ">
    <div className="flex justify-between  gap-[1%]  min-w-full">
      {sDetail.episodes[
        0
      ].guest_stars.map((ep: GuestStar, index: number) => {
        if (ep.profile_path!=null) {
          return (
            <div key={index} className="min-w-[5%] max-w-[20%] ">
              <Image
                width="200"
                height="200"
                alt="poster"
                src={`https://image.tmdb.org/t/p/w500/${ep.profile_path}`}
                className="border-[1px] border-[#E70713] transition-all duration-300  "
              />
            </div>
          ); 
        }
       
      })}
      </div>
      <div className="flex justify-between   gap-[1%]  min-w-full">
      {sDetail.episodes[
        0
      ].guest_stars.map((ep: GuestStar, index: number) => {
        if (ep.profile_path!=null) {
          return (
            <div key={index} className="min-w-[5%] max-w-[20%] ">
              <Image
                width="200"
                height="200"
                alt="poster"
                src={`https://image.tmdb.org/t/p/w500/${ep.profile_path}`}
                className="border-[1px] border-[#E70713] transition-all duration-300"
              />
            </div>
          ); 
        }
       
      })}
      </div>
    </div>
  ) : (
    ""
  )}
</div>
</div>
          <div>
            {sDetail.episodes.length != 0 ? (
              <div>
                <h1 className="text-[0.85em]">Episodes Details</h1>
                {sDetail.episodes.map((ep: Episode, index: number) => {
                  return (
                    <div key={index} className="">
                      <EpisodesAccordion ep={ep} />
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-svh flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Page;
