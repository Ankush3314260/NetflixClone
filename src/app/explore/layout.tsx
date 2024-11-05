"use client";
import Link from "next/link";
import Image from "next/image";
import "./exploreComponents/exploreComponents.css";
import { useState } from "react";
import gsap from "gsap";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menustate, setMenuopen] = useState<boolean>(false);
  const t1 = gsap.timeline();
  const handleMenuOpenClose = () => {
    if (!menustate) {
      setMenuopen(!menustate);
      document.querySelector(".row-2")?.classList.remove("mt-[6px]");
      const r1 = document.querySelector<HTMLElement>(".row-1");
      if (r1) {
        r1.style.transform = "rotate(405deg)";
      }

      const r2 = document.querySelector<HTMLElement>(".row-2");
      if (r2) {
        r2.style.transform = "rotate(495deg)";
      }
      t1.to(
        ".openMenu",
        {
          display: "block",
        },
        "-=1"
      )
        .to(".openMenu", { opacity: 1 }, "-=1")
        .to(
          ".openMenu",
          {
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
            duration: 0.3,
          },
          "-=0.5"
        );
    } else {
      setMenuopen(!menustate);
      document.querySelector(".row-2")?.classList.add("mt-[6px]");
      const r1 = document.querySelector<HTMLElement>(".row-1");
      if (r1) {
        r1.style.transform = "rotate(0deg)";
      }

      const r2 = document.querySelector<HTMLElement>(".row-2");
      if (r2) {
        r2.style.transform = "rotate(0deg)";
      }
      t1.to(
        ".openMenu",
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          duration: 0.5,
        },
        "-=0.2"
      )
        .to(".openMenu", { opacity: 0, duration: 0.5 }, "-=0.3")
        .to(".openMenu", {
          display: "none",
        });
    }
  };
  return (
    <div className="bg-[#050505] text-white relative responsive-parent-text">
      <div>
        <nav className="py-8 text-[0.3em] relative  z-[999999]">
          <div className="flex justify-between ">
            <div className="w-2/5 flex justify-center">
              <Image
                className="w-[30%] min-w-[50px]  "
                width="200"
                height="100"
                src="/images/Logonetflix.png"
                alt="logonetflix"
              />
            </div>
            <div className="flex items-center sm:justify-center w-[50%] relative ">
          
              <div className="sm:hidden ml-auto mr-0 w-1/2  flex items-center justify-center">
                <div className="" onClick={handleMenuOpenClose}>
                  <span className="w-[19px] h-[1px] bg-[#E70713] transition-all duration-500 block row-1"></span>

                  <span className="w-[19px] h-[1px] bg-[#E70713] transition-all duration-300 block row-2 mt-[6px]"></span>
                </div>
              </div>

              <ul className="flex max-sm:hidden  justify-evenly w-[60%] space-x-[5%] items-center text-[0.8em]">
                <li className="nav-link">
                  <Link className="nav-text" href="">
                    New
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className="nav-text" href="/explore/movies" >
                    Movie
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className="nav-text" href="/explore/tv" >
                    Tv
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className="nav-text" href="" >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`openMenu  absolute top-[65%] z-[999999] bottom-0 h-svh left-0 right-0   bg-[#0505054c] backdrop-blur-sm  defualtMenu sm:hidden opacity-0 `}
          >
            
            <div className=" min-h-svh w-1/2 border-l-[1px] relative  p-[1em] border-white text-[#E70712] ml-auto mr-0 text-[3.5em]">
              <ul className="space-y-[2%]">
                <li>New</li>
               <Link href="/explore/movies" onClick={handleMenuOpenClose}> <li>Movie</li></Link>
               <Link href="/explore/tv" onClick={handleMenuOpenClose} ><li>TV</li></Link>
                <li>About</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className=" ">{children}</div>
      <div className="mx-[10%] border-t-[1px] border-red-600 relative z-50">
        <div className=" text-white min-h-screen py-[1em]">
          <div className="py-5 ">
            <p className="text-[#AFAFAF] text-[0.35em] py-5">
              Questions? Call XXX-XXX-XXX-XX24
            </p>
            <div className="text-[0.29em]  text-[#AFAFAF] footer-content">
              <ul>
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
              </ul>
              <ul>
                <li>Help Centre</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
              </ul>
              <ul>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
              </ul>
              <ul>
                <li>Media Centre</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="flex justify-center space-x-5 max-mob:space-x-1 items-center py-10 w-[60%] max-sm:w-[80%] max-mob:w-full m-auto text-[#AFAFAF]">
              <p className="font-netflix tracking-wide">
                NETFLIX INDIA{" "}
                <span className="font-sans ml-5 max-mob:ml-1"> x </span>
              </p>

              <p className="font-mySignature">Ankush Kumar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
