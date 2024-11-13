'use client'
import React from 'react';
import Image from 'next/image';
const Error = () => {
    return (
        <div className='min-h-svh '>
            <div className='m-auto text-center relative  '>
            <Image className='m-auto block' src="/images/1731472286386.png" alt="logo" width="250" height="150"/>
            <p className='text-[0.25em] max-sm:text-[0.65em]'>Smething Went Wrong Please try again later</p>
            </div>            
      <div className='m-auto pt-[0.5em]'>
      <button className='bg-[#E70713] text-[0.5em] block m-auto px-[1em] rounded-sm text-gray-100'>
        Back
      </button>
      </div>
        </div>
    );
}

export default Error;
