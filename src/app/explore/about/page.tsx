"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import "./About.css";
import Link from "next/link";
const Page = () => {
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.to("body",{
      overflow:"hidden"
    }).to(".myimageshadow", {
      display: "block",
      opacity:1,
      duration: 4,
    }).to(".myimageshadow", {
      display: "none",
      opacity:0,
      duration: 1,
    })
    .to(".headinngs", {
      opacity: 1,
      stagger: 0.05,
      duration: 1,
      ease: "linear",
    })
      
      .to(".myimageshadow", {
        display: "none",
      })
      .to("body",{
        overflow:"auto"
      })
      .to(".projectoverview", {
        opacity: 1,
        duration: 1,
      })
      .to(".aboutAuthor", {
        opacity: 1,
        duration: 0.5,
      })
    return () => {
      t1.kill();
    };
  }, []);
  return (
    <div className="min-h-svh   flex flex-col   ">
      <div className="absolute myimageshadow opacity-0 top-0 left-0 bottom-0 right-0 z-[99999999] bg-black">
      <div className=" h-svh flex items-center ">
        <div className=" w-full absolute z-0 top-0 max-sm:top-[15%]  bottom-0 min-h-screen left-0 right-0 ">
          <video
            autoPlay
            muted
            playsInline
            width="100%"
            height="100vh"
            style={{ objectFit: "cover" }}
          >
            <source src="/images/videoplayback.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      </div>
      <h1 className=" text-center relative z-[6]">
        {" "}
        <div className="font-netflix">
          <span className="headinngs ">A</span>
          <span className="headinngs">n</span>
          <span className="headinngs"> A</span>
          <span className="headinngs">n</span>
          <span className="headinngs">k</span>
          <span className="headinngs ">u</span>
          <span className="headinngs">s</span>
          <span className="headinngs">h</span>
          <span className="headinngs "> K</span>
          <span className="headinngs">u</span>
          <span className="headinngs">m</span>
          <span className="headinngs">a</span>
          <span className="headinngs">r</span>
          <span className="headinngs"> &apos;s</span>
          <span className="headinngs"> P</span>
          <span className="headinngs">r</span>
          <span className="headinngs">o</span>
          <span className="headinngs">j</span>
          <span className="headinngs">e</span>
          <span className="headinngs">c</span>
          <span className="headinngs">t</span>
        </div>
      </h1>
      
      <div className="w-full relative z-10 projectoverview ">
        <h3 className="font-netflix text-[0.75em] border-b-[1px] ml-[5%] ">
          Project Overview
        </h3>
        <div className="ml-[5%]  text-[0.35em] max-sm:text-[0.45em] pt-[1em]">
          <p>
            Disclaimer: This project is a personal, non-commercial replica of
            the Netflix interface, developed purely for educational and
            demonstration purposes. It is designed to showcase front-end
            development skills, including API integration with the TMDB (The
            Movie Database) API for real-time movie and show data, and GSAP
            (GreenSock Animation Platform) for smooth, engaging animations.
          </p>
          <p className="pt-[1em]">
            This project is not affiliated with, endorsed, sponsored, or
            approved by Netflix, Inc. or TMDB. The Netflix name, logo, and
            related assets are trademarks of Netflix, Inc. and are used solely
            as a reference to illustrate the intended functionality and design
            inspiration. All rights to Netflix&apos;s trademarks, branding, and
            content belong to Netflix, Inc. Any resemblance to Netflix&apos;s
            proprietary design, content, or structure is purely incidental and
            serves only to simulate an authentic streaming app experience for
            learning purposes.
          </p>
        </div>
      </div>
      <br />
      <div className="relative z-10 ml-[5%] aboutAuthor">
        <h1 className="text-[0.75em] font-netflix border-b-[1px]">
          About Author
        </h1>
        <p className="text-[0.35em] max-sm:text-[0.45em] pt-[1em]">
          <span className="text-[#E70713]">
            <a href="http://ankushportfolios.netlify.app" target="_blank">
              Ankush Kumar
            </a>
          </span>{" "}
          is a highly skilled and dedicated front-end developer with a passion
          for creating seamless, high-performance web applications. With a keen
          eye for detail, Ankush is known for crafting intuitive and visually
          engaging interfaces that prioritize user experience. He has a strong
          commitment to writing clean, efficient, and scalable code, ensuring
          that his projects not only meet business goals but also provide
          exceptional, lasting value to users.
        </p>
        <p className="text-[0.35em] max-sm:text-[0.45em]  pt-[1em]">
          In this project,He replicated a popular streaming platform, focusing
          on delivering a seamless and immersive user experience. By
          incorporating interactive elements and smooth transitions, he ensured
          that the interface feels intuitive while maintaining high performance
          and responsiveness across all devices.
        </p>
        <p className="text-[0.35em] max-sm:text-[0.45em] pt-[1em]">
          Ankush&apos;s expertise lies in understanding the intricate balance
          between technical precision and user-centric design.
        </p>
        <p className="font-mySignature text-end mx-[5%] max-sm:text-[0.8em] font text-[0.7em] pt-[0.5em]">
          Ankush Kumar
        </p>
        <p className=" text-end mx-[5%] font max-sm:text-[0.35em] text-[0.23em] pt-[0.2em]">
          &#169; All rights reserved by their respective owners 2024
        </p>
      </div>
      <div></div>
      <div className="pt-[0.5em] flex gap-[1%] max-sm:gap-[3%] justify-center relative z-[20]">
        <span>
          <Link href="https://www.linkedin.com/in/btheone" target="_blank">
            <svg
             onMouseEnter={(e) => {
              const svg = e.currentTarget; // Use e.currentTarget for more reliability
              if (svg.tagName === "svg") {
                // Ensure it's actually an SVG element
                svg.setAttribute("fill", "#E70713");
              }
            }}
            onMouseLeave={(e) => {
              const svg = e.currentTarget; // Use e.currentTarget for more reliability
              if (svg.tagName === "svg") {
                // Ensure it's actually an SVG element
                svg.setAttribute("fill", "#FFFFFF");
              }
            }}
              id="svg5"
              className="transition-all duration-300 max-sm:w-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px"
              fill="#FFFFFF"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: "1",
                transform: "translate(0px, 0px)",
              }}
            >
              {" "}
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </Link>
        </span>
        <span>
          <Link href="https://ankushportfolios.netlify.app" target="_blank">
            <svg
              onMouseEnter={(e) => {
                const svg = e.currentTarget; // Use e.currentTarget for more reliability
                if (svg.tagName === "svg") {
                  // Ensure it's actually an SVG element
                  svg.setAttribute("fill", "#E70713");
                }
              }}
              onMouseLeave={(e) => {
                const svg = e.currentTarget; // Use e.currentTarget for more reliability
                if (svg.tagName === "svg") {
                  // Ensure it's actually an SVG element
                  svg.setAttribute("fill", "#FFFFFF");
                }
              }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="hover:shadow-sh21 transition-all duration-300   max-sm:w-[18px] "
              fill="#FFFFFF"
              width="30px"
              height="30px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path d="M256,0C114.62,0,0,114.62,0,256s114.62,256,256,256s256-114.62,256-256S397.38,0,256,0z M172.211,41.609    c-24.934,27.119-44.68,66.125-56.755,111.992H49.749C75.179,102.741,118.869,62.524,172.211,41.609z M25.6,256    c0-26.999,5.077-52.727,13.662-76.8h70.494c-4.608,24.294-7.356,49.963-7.356,76.8s2.748,52.506,7.347,76.8H39.262    C30.677,308.727,25.6,283,25.6,256z M49.749,358.4h65.707c12.083,45.867,31.821,84.872,56.755,111.991    C118.869,449.476,75.179,409.259,49.749,358.4z M243.2,485.188c-43.81-8.252-81.877-58.24-101.359-126.788H243.2V485.188z     M243.2,332.8H135.74c-4.924-24.166-7.74-49.997-7.74-76.8s2.816-52.634,7.74-76.8H243.2V332.8z M243.2,153.6H141.841    C161.323,85.052,199.39,35.063,243.2,26.812V153.6z M462.251,153.6h-65.707c-12.083-45.867-31.821-84.873-56.755-111.992    C393.131,62.524,436.821,102.741,462.251,153.6z M268.8,26.812c43.81,8.252,81.877,58.24,101.359,126.788H268.8V26.812z     M268.8,179.2h107.46c4.924,24.166,7.74,49.997,7.74,76.8s-2.816,52.634-7.74,76.8H268.8V179.2z M268.8,485.188V358.4h101.359    C350.677,426.948,312.61,476.937,268.8,485.188z M339.789,470.391c24.934-27.127,44.672-66.125,56.755-111.991h65.707    C436.821,409.259,393.131,449.476,339.789,470.391z M402.244,332.8c4.608-24.294,7.356-49.963,7.356-76.8    s-2.748-52.506-7.347-76.8h70.494c8.576,24.073,13.653,49.801,13.653,76.8c0,27-5.077,52.727-13.662,76.8H402.244z" />
                </g>
              </g>
            </svg>
          </Link>
        </span>
        <span>
          <Link href="https://github.com/Ankush3314260" target="_blank">
            <svg
               onMouseEnter={(e) => {
                const svg = e.currentTarget; // Use e.currentTarget for more reliability
                if (svg.tagName === "svg") {
                  // Ensure it's actually an SVG element
                  svg.setAttribute("fill", "#E70713");
                }
              }}
              onMouseLeave={(e) => {
                const svg = e.currentTarget; // Use e.currentTarget for more reliability
                if (svg.tagName === "svg") {
                  // Ensure it's actually an SVG element
                  svg.setAttribute("fill", "#FFFFFF");
                }
              }}
              id="svg2"
              className="transition-all duration-300 max-sm:w-[18px] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
              fill="#FFFFFF"
            >
              {" "}
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </Link>
        </span>
      </div>
      <br />
    </div>
  );
};

export default Page;
