import React, { useState, useEffect } from 'react';
import image1 from "../images/coverImage3.jpg";
import image2 from "../images/coverImage1.jpg";
import image3 from "../images/coverImage2.jpg";
import image4 from "../images/cover3.jpg";

const images = [
  { src: image1, alt: 'Cover Image 3', headline: 'Annual Sports Day' },
  { src: image2, alt: 'Cover Image 1', headline: 'Cultural Fest' },
  { src: image3, alt: 'Cover Image 2', headline: 'Science Exhibition' },
  { src: image4, alt: 'Cover 3', headline: 'Art Workshop' },
  { src: image3, alt: 'Cover Image 2', headline: 'Science Exhibition' },
  { src: image4, alt: 'Cover 3', headline: 'Art Workshop' }
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (currentIndex + 1) % images.length;
  const afterNextIndex = (currentIndex + 2) % images.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Event Gallery</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[30rem] shadow-xl">
        <div className="col-span-2 row-span-2 relative">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover rounded-[2rem] shadow-lg transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-lg font-medium p-2 rounded-b-lg w-full text-center">
            {images[currentIndex].headline}
          </div>
        </div>

       
        <div className="relative">
          <img
            src={images[nextIndex].src}
            alt={images[nextIndex].alt}
            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-lg font-medium p-2 rounded-b-lg w-full text-center">
            {images[nextIndex].headline}
          </div>
        </div>

        
        <div className="relative">
          <img
            src={images[afterNextIndex].src}
            alt={images[afterNextIndex].alt}
            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-lg font-medium p-2 rounded-b-lg w-full text-center">
            {images[afterNextIndex].headline}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
