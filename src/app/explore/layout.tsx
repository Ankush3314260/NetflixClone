"use client";
import Link from "next/link";
import Image from "next/image";
import "./exploreComponents/exploreComponents.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { usePathname } from 'next/navigation';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menustate, setMenuopen] = useState<boolean>(false);
  const [path,setPath] =useState<boolean>(false)
  const pathName=usePathname()
 useEffect(()=>{
  if (pathName) {    
    setPath(()=>{
         return pathName.includes('details') ? true:false
    })
    
  }
 },[pathName])
  const t1 = gsap.timeline();
  const handleMenuOpenClose = () => {
    if (window.innerWidth<=640) {
      if (!menustate) {
        setMenuopen(!menustate);
        document.querySelector("body")?.classList.toggle("overflow-hidden");
        document.querySelector(".row-2")?.classList.remove("mt-[6px]");
        document.querySelector(".blur-nav")?.classList.toggle("backdrop-blue-sm");
        const r1 = document.querySelector<HTMLElement>(".row-1");
        if (r1) {
          r1.style.transform = "rotate(405deg)";
        }
  
        const r2 = document.querySelector<HTMLElement>(".row-2");
        if (r2) {
          r2.style.transform = "rotate(495deg)";
        }
        t1.to(
          ".mob-nav-text",
          {
            y: 25,
          },
          "=-1"
        )
          .to(
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
              // clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%,0% 100%)",
              duration: 0.3,
            },
            "-=0.5"
          )
          .to(".mob-nav-text", {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%,0% 0%)",
            stagger: 0.1,
            duration: 1,
            delay: -0.2,
            ease: "power3.inOut",
          })
          .to(".mob-nav-text", {
            y: 0,
            delay: -1.5,
            stagger: 0.1,
            duration: 1,
            ease: "power3.inOut",
          });
      } else {
        setMenuopen(!menustate);
        document.querySelector("body")?.classList.toggle("overflow-hidden");
        document.querySelector(".blur-nav")?.classList.toggle("backdrop-blue-sm");
        document.querySelector(".row-2")?.classList.add("mt-[6px]");
        const r1 = document.querySelector<HTMLElement>(".row-1");
        if (r1) {
          r1.style.transform = "rotate(0deg)";
        }
  
        const r2 = document.querySelector<HTMLElement>(".row-2");
        if (r2) {
          r2.style.transform = "rotate(0deg)";
        }
        t1.to(".mob-nav-text", {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%,0% 100%)",
          stagger: 0.1,
        })
          .to(".mob-nav-text", {
            y: 25,
            stagger: 0.1,
            duration: 0.1,
            delay: -0.1,
            ease: "power3.inOut",
          })
          .to(
            ".openMenu",
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%,0% 0%)",
              duration: 0.5,
              delay: -0.2,
            },
            "-=0.5"
          )
          .to(".openMenu", { opacity: 0, duration: 0.5 }, "-=0.3")
          .to(".openMenu", {
            display: "none",
          });
      } 
    }
   
  };
  return (
    <div className="bg-[#050505] relative text-white  responsive-parent-text  ">
      <div className="   absolute top-0 left-0 right-0 bottom-0  ">
        {/* <div className="absolute bottom-0 top-0 left-0 right-0 bg-[#000000ce]  z-20">

        </div> */}
        <div className="shadows-2 z-0 relative ">
          {
            path?"": <Image
            src="/images/IN2-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_small.jpg"
            className="object-cover m-auto  relative z-0  "
            width="2000"
            height="1000"
            alt="poster_"
          />
          }
         
        </div>
      </div>
      <div className="relative">
        <nav className="py-3 text-[0.3em] relative blur-nav z-[999999]">
          <div className="flex justify-between ">
            <div className="w-2/5 flex justify-center">
              <Link href="/explore" className="w-full  flex justify-center" onClick={()=>{
                if (menustate) {
                  handleMenuOpenClose()
                }
              }}>
                {" "}
                <Image
                  className="w-[30%] min-w-[50px] relative z-[9999999999] "
                  width="200"
                  height="100"
                  src="/images/1731472286386.png"
                  alt="logonetflix"
                />
              </Link>
            </div>
            <div className="flex items-center sm:justify-center w-[50%] relative ">
              <div className="sm:hidden ml-auto mr-0 w-1/2  flex items-center justify-center">
                <div
                  className="relative z-[9999999999]"
                  onClick={handleMenuOpenClose}
                >
                  <span className="w-[19px] h-[1px] bg-[#E70713] transition-all duration-500 block row-1"></span>

                  <span className="w-[19px] h-[1px] bg-[#E70713] transition-all duration-300 block row-2 mt-[6px]"></span>
                </div>
              </div>

              <ul className="flex max-sm:hidden  justify-evenly w-[60%] space-x-[5%] items-center text-[0.8em]">
                <li className="nav-link">
                  <Link className="nav-text" href="/explore/upcoming">
                    New
                  </Link>
                </li>
                <li className="nav-link ">
                  <Link className="nav-text" href="/explore/movies">
                    Movie
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className="nav-text" href="/explore/tv">
                    Tv
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className="nav-text" href="/explore/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`openMenu  absolute top-[0%] z-[99999999] text-[#E70713] bottom-0 h-svh left-0 right-0   bg-[#05050573] backdrop-blur-sm  defualtMenu sm:hidden opacity-0 `}
          >
            <div className=" min-h-svh   relative  p-[1em]  ml-auto mr-0 text-[2.5em]">
              <div className="absolute left-0 right-0 top-0 bottom-0 h-full ">
                <ul className="my-[5%]  relative top-[15%] mx-[5%] ">
                  <Link
                    href="/explore/upcoming"
                    className="overflow-hidden"
                    onClick={handleMenuOpenClose}
                  >
                    {" "}
                    <li className=" mob-nav-text">New</li>
                  </Link>
                  <Link href="/explore/movies" onClick={handleMenuOpenClose}>
                    {" "}
                    <li className=" pt-[1em] mob-nav-text">Movie</li>
                  </Link>
                  <Link href="/explore/tv" onClick={handleMenuOpenClose}>
                    <li className=" pt-[1em] mob-nav-text">TV</li>
                  </Link>
                  <Link href="/explore/about" onClick={handleMenuOpenClose}>
                    <li className=" pt-[1em] mob-nav-text">About</li>
                  </Link>
                </ul>

                <div className="relative top-[10%] max-mob:top-[25%]  text-[2em] max-mob:text-[2.5em] text-gray-200 text-center">
                  <h1 className="font-netflix text-[1em]">Netflix India</h1>
                  <h3 className="font-custom-bold animate-pulse">X</h3>
                  <h1 className="font-mySignature text-[1.2em] relative right-[1%]">
                    Ankush Kumar
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className=" ">{children}</div>
      <div className="mx-[10%]  max-sm:mx-[5%] border-t-[1px] border-red-600 relative z-50">
        <div className=" text-white sm:min-h-svh py-[1em]">
          <div className="py-5 ">
            <p className="text-[#AFAFAF] text-[0.5em] py-5">
              Questions? Call XXX-XXX-XXX-XX24
            </p>
            <div className="text-[0.25em] max-sm:text-[0.3em]  text-[#AFAFAF] footer-content">
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
                <li>Only on Btheone Movie</li>
              </ul>
              <ul>
                <li>Media Centre</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="flex justify-center space-x-5 max-mob:space-x-1 items-center py-10 w-[60%] max-sm:w-[80%] max-mob:w-full m-auto text-[#AFAFAF]">
              <p className="font-netflix tracking-wide">
                BTHEONE MOVIE{" "}
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
