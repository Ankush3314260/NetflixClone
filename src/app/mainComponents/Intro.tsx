"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
// import Loader from "./Loader";
import axios from "axios";
import "./mainComponents.css";

interface Movie {
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

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
const Intro: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const introAnimation = () => {
    gsap.matchMedia().add("(max-width: 640px)", () => {
      // Add an "overflow-hidden" class to <html> and <body> initially
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    
      const time = gsap.timeline({});
      time
        .to(".loader-images", {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.inOut",
        })
        .to(
          ".image-container",
          {
            x: "-50%",
            duration: 2,
            ease: "power3.inOut",
          },
          "-=1.9"
        )
        .to(
          ".loader-images",
          {
            clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
            duration: 1,
            ease: "power3.inOut",
          },
          "-=0.8"
        )
        .to(
          ".intro-section",
          {
            clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
            duration: 1,
            ease: "power3.inOut",
          },
          "-=0.5"
        )
        .to(".home-after-animation", {
          opacity: 1,
          duration: 1,
        })
        .to(".intro-section", {
          display: "none",
        })
        .call(() => {
          // Remove overflow-hidden class after the animation completes
          document.documentElement.classList.remove("overflow-hidden");
          document.body.classList.remove("overflow-hidden");
        });
    
      return () => {
        // Cleanup if needed
        time.kill();
        document.documentElement.classList.remove("overflow-hidden");
        document.body.classList.remove("overflow-hidden");
      };
    });
    gsap.matchMedia().add("(min-width:641px)", () => {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    
      const time = gsap.timeline({});
      time
        .to(".loader-images", {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.inOut",
        })
        .to(
          ".image-container",
          {
            x: "-260%",
            duration: 2,
            ease: "power3.inOut",
          },
          "-=1.9"
        )
        .to(
          ".loader-images",
          {
            clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
            duration: 1,
            ease: "power3.inOut",
          },
          "-=0.8"
        )
        .to(
          ".intro-section",
          {
            clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
            duration: 1,
            ease: "power3.inOut",
          },
          "-=0.5"
        )
        .to(".home-after-animation", {
          opacity: 1,
          duration: 1,
        })
        .to(".intro-section", {
          display: "none",
        })
        .call(() => {
          // Remove overflow-hidden class after the animation completes
          document.documentElement.classList.remove("overflow-hidden");
          document.body.classList.remove("overflow-hidden");
        });
    
      return () => {
        // Cleanup if needed
        time.kill();
        document.documentElement.classList.remove("overflow-hidden");
        document.body.classList.remove("overflow-hidden");
      };
    });
  };
  const fetchImages = async () => {
    try {
      const { data } = await axios.get<MovieResponse>(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      return data.results;
    } catch (error) {
      // console.log("unable to get the data", error);
      if (error) {
        
      }
    }

    // Return only the results
  };
  async function fixtiming() {
    const data = await fetchImages();
    if (data) {
      setMovies(data);
    }
    setTimeout(() => {
      gsap.set(".loader-images", {
        y: "120%",
        opacity: 0,
      });
      introAnimation();
    }, 1);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    fixtiming();
  }, []);

  return (
    <div className="relative bg-[#101010] min-h-screen max-sm:min-h-svh  text-white flex items-center ">
      <div className="image-container flex sm:gap-[2%] justify-evenly max-sm:gap-[10px]  items-center ">
        {movies.length === 0 ? (
          <div className="m-auto ">{/* <Loader /> */}</div>
        ) : (
          movies.map((movie: Movie) => (
            <div
              key={movie.id}
              className="relative sm:min-w-[20%] max-sm:min-w-[150px] loader-images"
            >
              <Image
                width="300"
                height="500"
                className="object-cover"
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Intro;
