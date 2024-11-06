"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import "./About.css";
const Page = () => {
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.to(".headinngs", {
      opacity: 1,
      stagger: 0.05,
      duration: 1,
      ease: "linear",
    }).to(".myimageshadow", {
        display: "block",
        duration:0.5
      })
      .to(".projectoverview", {
        opacity: 1,
        duration: 1,
      })
      .to(".aboutAuthor", {
        opacity: 1,
        duration: 0.5,
      });
    return () => {
      t1.kill();
    };
  }, []);
  return (
    <div className="min-h-svh  mx-[5%] flex flex-col relative ">
      <h1 className=" text-center relative z-[1]">
        {" "}
        <div className="font-netflix ">
          <span className="headinngs">A</span>
          <span className="headinngs">n</span>
          <span className="headinngs"> A</span>
          <span className="headinngs">n</span>
          <span className="headinngs">k</span>
          <span className="headinngs">u</span>
          <span className="headinngs">s</span>
          <span className="headinngs">h</span>
          <span className="headinngs"> K</span>
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
      <div className="myimageshadow  ">
        <div className=" w-full absolute z-0 top-0  bottom-0 min-h-screen left-0 right-0 ">
          <video
            autoPlay
            loop
            muted
            playsInline
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          >
            <source src="/images/videoplayback.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-full relative z-10 projectoverview ">
          <h3 className="font-netflix text-[0.75em] border-b-[1px] ml-[5%] ">
            Project Overview
          </h3>
          <div className="ml-[5%]  text-[0.35em] pt-[1em]">
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
              inspiration. All rights to Netflix&apos;s trademarks, branding,
              and content belong to Netflix, Inc. Any resemblance to
              Netflix&apos;s proprietary design, content, or structure is purely
              incidental and serves only to simulate an authentic streaming app
              experience for learning purposes.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="relative z-10 ml-[5%] aboutAuthor">
        <h1 className="text-[0.75em] font-netflix border-b-[1px]">
          About Author
        </h1>
        <p className="text-[0.35em] pt-[1em]">
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
        <p className="text-[0.35em] pt-[1em]">
          In this project,He replicated a popular streaming platform, focusing
          on delivering a seamless and immersive user experience. By
          incorporating interactive elements and smooth transitions, he ensured
          that the interface feels intuitive while maintaining high performance
          and responsiveness across all devices.
        </p>
        <p className="text-[0.35em] pt-[1em]">
          Ankush&apos;s expertise lies in understanding the intricate balance
          between technical precision and user-centric design.
        </p>
        <p className="font-mySignature text-end mx-[5%] font text-[0.7em] pt-[0.5em]">
          Ankush Kumar
        </p>
        <p className=" text-end mx-[5%] font text-[0.23em] pt-[0.2em]">
          &#169; All rights reserved by their respective owners 2024
        </p>
      </div>
      <div></div>
      <br />
    </div>
  );
};

export default Page;
