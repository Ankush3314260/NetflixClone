'use client'
import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import "./exploreComponents.css"
const PageTransition = () => {
    const addAnimation=()=>{
        const time =gsap.timeline()
        time.to(".pageTransiton",{
            clipPath:"polygon(100% 0%,0% 0%,0% 100%,100% 100%)",
            duration:1.5,
            ease:"power3.inOut"
        }).to(".pageTransiton",{
            // 100% 0%,0% 0%,100% 100%,100% 100%
            clipPath:"polygon(0% 0%,100% 0%,100% 100%,100% 0%)",
            duration:1.5,
            ease:"power3.inOut" 
        }).to(".pageTransiton",{
            display:"none"
        },"-=0.2").to(".animation-container",{
            display:"none"
        })
    }
    useEffect(()=>{
        addAnimation()
    },[])
   
    return (
        <div className='flex justify-center text-[6.5vw] items-center min-h-screen  pageTransiton  bg-[#111111] text-[#616161] top-0 left-0 right-0 bottom-0'>
            <div className='text-center  w-[60%] max-sm:w-4/5 flex items-center space-x-3 '>
            <Image className='m-auto w-[45%]  ' src="/images/Logonetflix.png" width="300" height="300" alt='netflix logo' />
            <p className='text-[0.5em]'>X</p>
            <p className='font-mySignature'>Anksh Kumar</p>
            </div>

        </div>
    );
}

export default PageTransition;
