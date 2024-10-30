"use client"
import Link from "next/link";
import Image from "next/image";
import "./exploreComponents/exploreComponents.css"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


 
  return (
  
    <div className="bg-[#050505] text-white relative responsive-parent-text">
      <div>
      <nav className='py-8 text-[0.3em] relative z-50 '>
                       <div className='flex justify-between '>
                        <div className='w-2/5 flex justify-center'>
                              <Image className='w-[30%] min-w-[50px]  ' width="200" height="100" src="/images/Logonetflix.png" alt='logonetflix'/>
                              </div>
                              <div className='flex items-center justify-center w-[50%] '>
                                <ul className='flex  justify-evenly w-[60%] space-x-[5%] items-center text-[0.8em]'>
                                    <li className="nav-link">
                                        <Link className="nav-text" href="" >New</Link>
                                    </li>
                                    <li className="nav-link">
                                        <Link className="nav-text" href="/explore/movies" >Movie</Link>
                                    </li>
                                    <li className="nav-link">
                                        <Link className="nav-text" href="" >Tv</Link>
                                    </li>
                                    <li className="nav-link">
                                        <Link className="nav-text" href="" >About</Link>
                                    </li>
                                </ul>
                              </div>
                              
                       </div>
                   </nav>
      </div>
       
        <div className=" ">
        {children}
        </div>
        <div className="mx-[10%] border-t-[1px] border-red-600 relative z-50">
        <div className=" text-white min-h-screen py-[1em]">
       
        
     

        <div className="py-5 ">
          <p className="text-[#AFAFAF] text-[0.3em] py-5">
            Questions? Call XXX-XXX-XXX-XX24
          </p>
          <div className="text-[0.21em]  text-[#AFAFAF] footer-content">
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
          </div >
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
