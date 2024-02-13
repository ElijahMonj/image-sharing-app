'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './ImageSlider.css'; // Make sure to import your CSS file for styling
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import pic1 from '@/public/images/slideshow/test.png'
import pic2 from '@/public/test/desktop.jpg'
import pic3 from '@/public/test/long.jpg'
import pic4 from '@/public/test/phone.jpg'

const Phone = () => {
  const [index, setIndex] = useState(0);
  const images=[pic1,pic2,pic3,pic4]
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((image: string | StaticImport, idx: React.Key | null | undefined) => (
        <Image
          key={idx}
          src={image}
          alt={`Slide ${idx}`}
          className={idx === index ? 'active object-cover w-full h-full' : 'inactive object-cover w-full h-full'}
        />
      ))}
    </div>
  );
};

 
export default Phone;