'use client'
import { IoChevronBack, IoRadioButtonOffOutline, IoSquareOutline } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './ImageSlider.css'; // Make sure to import your CSS file for styling
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import image1 from '@/public/images/slideshow/image1.png'
import image2 from '@/public/images/slideshow/image2.png'
import image3 from '@/public/images/slideshow/image3.png'
import image4 from '@/public/images/slideshow/image4.png'

import { MdBattery80, MdOutlineWifi, MdSignalCellularAlt } from "react-icons/md";

const Phone = () => {
  const [index, setIndex] = useState(0);
  const images=[image1,image2,image3,image4]
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
    <div className="w-full flex h-7 justify-between bg-base-100 z-0">  
        <div className="text-xs my-auto mx-7 font-semibold text-slate-600 select-none">12:30</div>
        <div className="flex mx-6 gap-1">
          <MdSignalCellularAlt className="h-4 w-4 text-slate-600 my-auto"/>
          <MdOutlineWifi className="h-4 w-4 text-slate-600 my-auto"/>
          <MdBattery80 className="h-4 w-4 text-slate-600 my-auto"/>        
        </div>
                
      </div>
      <div className="image-slider h-auto">
        {images.map((image: string | StaticImport, idx: React.Key | null | undefined) => (
          <Image
            key={idx}
            src={image}
            alt={`Slide ${idx}`}
            className={idx === index ? 'active object-cover w-full h-full' : 'inactive object-cover w-full h-full'}
          />
        ))}
      </div>
      <div className="w-full flex h-7 justify-around bg-base-100">  
          <IoChevronBack className="h-4 w-4 text-slate-600 my-auto"/>    
          <IoRadioButtonOffOutline className="h-4 w-4 text-slate-600 my-auto"/>
          <IoSquareOutline className="h-4 w-4 text-slate-600 my-auto"/>      
      </div>
    </>
    
  );
};

 
export default Phone;