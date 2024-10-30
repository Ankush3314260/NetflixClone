"use client";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import AdvanceSearchResult from "./AdvanceSearchResult";
interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
  genres: Genre[];
}
// interface Gprops{
//     url:string
// }
const AdvanceSearch: React.FC = () => {
  const [geners, setGeners] = useState<Genre[]>([]);
  const [searchOpenClose, setSearchOpenClose] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [vote, setVote] = useState<number>(5);
  const years = Array.from({ length: 51 }, (_, index) => new Date().getFullYear() - index);
  const votes = Array.from({ length: 11 }, (_, index) => 10 - index);
  const fetchGeners = async () => {
    try {
      const { data } = await axios.get<GenresResponse>(
        `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=4e041fd34844514d59b1259e22d9930b`
      );
      console.log(data.genres);
      setGeners(data.genres);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleChangeGenre = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };
  const handleChangeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(event.target.value));
  };
  const handleChangeVote = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVote(parseInt(event.target.value));
   
    
  };
  const handleSubmit =()=>{
    console.log(selectedGenre,vote,selectedYear);
  }
 useEffect(()=>{

 },[])
  useEffect(() => {
    fetchGeners();
  }, []);
  return (
    <div className=" mx-[10%] transition-all duration-600 pt-[0.5em]">
      <button
        onClick={() => {
          setSearchOpenClose(!searchOpenClose);
               if (!document.querySelector(".result")?.classList.contains("hidden")) {
                document.querySelector(".result")?.classList.toggle("hidden");
               }
               if ( document.querySelector(".base-page")?.classList.contains("hidden")) {
                document.querySelector(".base-page")?.classList.remove("hidden")
               }

        }}
        className="transition-all duration-300 bg-[#E70714] z-20   hover:bg-[#C11119] text-[0.35em] text-center py-[0.2em] block px-[1em]  rounded-full "
      >
        Advance Search
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
          searchOpenClose && geners
            ? "grid grid-rows-[1fr] opacity-100 p-[18px]"
            : "grid grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-[0.30em] text-black bg-[#111111] ">
          <div className="grid grid-cols-3 max-sm:grid-cols-2 max-mob:grid-cols-1 space-y-3 justify-center items-center">
            <div className="flex space-x-2 justify-center items-center">
              <label htmlFor="genre" className="block text-[#808080]">
                Genre:*{" "}
              </label>
              <select
                id="genre"
                className="focus:outline-none"
                value={selectedGenre}
                onChange={handleChangeGenre}
              >
                {!selectedGenre && (
                  <option value="" disabled>
                    --select--
                  </option>
                )}
                {geners.map((genres: Genre, index: number) => {
                  return (
                    <option key={index} value={`${genres.id}`} className="p-2">
                      {genres.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex space-x-2 justify-center items-center">
              <label htmlFor="genre" className="block text-[#808080]">
                Release Year:{" "}
              </label>
              <select
                id="genre"
                className="focus:outline-none"
                value={selectedYear}
                onChange={handleChangeYear}
              >
                {!selectedYear && (
                  <option value="" disabled>
                    --select--
                  </option>
                )}
                {years.map((years: number, index: number) => {
                  return (
                    <option key={index} value={`${years}`} className="p-2">
                      {years}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex space-x-2 justify-center items-center">
              <label htmlFor="genre" className="block text-[#808080]">
                Imdb: {" "}
              </label>
              <select
                id="genre"
                className="focus:outline-none"
                value={vote}
                onChange={handleChangeVote}
              >
                {!vote && (
                  <option value="" disabled>
                    --select--
                  </option>
                )}
                {votes.map((item: number, index: number) => {
                  if (item==10) {
                   return; 
                  }
                  return (
                    <option key={index} value={`${item}`} className="p-2">
                      {item+1}+
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex justify-center py-[1em] text-white">
            <button onClick={()=>{
                handleSubmit();
                if ( document.querySelector(".result")?.classList.contains("hidden")) {
                    document.querySelector(".result")?.classList.toggle("hidden");    
                }
                if (!document.querySelector(".base-page")?.classList.contains("hidden")) {
                  document.querySelector(".base-page")?.classList.add("hidden")
                }
                
                }} 
                className="transition-all duration-300 bg-[#E70714] z-20  hover:bg-[#C11119] py-[0.2em] px-[1em] rounded-sm ">Search</button>
          </div>
        </div>
      </div>
      {/* advance result page */}
      <div className="hidden result">
        {
            vote && years && selectedGenre ? (<AdvanceSearchResult vote={vote} year={selectedYear} genres={selectedGenre}/>):("")
        }
           
      </div>
    </div>
  );
};

export default AdvanceSearch;
