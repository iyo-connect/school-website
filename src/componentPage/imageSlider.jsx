import { useState, useEffect } from 'react';
import image1 from "../images/coverImage3.jpg";
import image2 from "../images/coverImage1.jpg";
import image3 from "../images/coverImage2.jpg";
import image4 from "../images/cover3.jpg";
import image5 from "../images/heroImage.jpeg";

const SliderImages = [
  image1,
  image2,
  image3,
  image4,
  image5
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % SliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-[#2c3877] text-white rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Campus</h2>
          <p className="mb-4">
            A vast playground to cater to the needs of athletes and sportspersons, basketball court with floodlights, kids play zone for kindergarten students, extensively stocked library with age-appropriate books on various genres, spacious and well-lit and well-ventilated classrooms with comfortable furniture, well-equipped science laboratories, and exclusive computer labs.
          </p>
          <p className="mb-8">
            <a href="#" className="text-blue-300 hover:text-white">FIND OUT MORE</a>
          </p>
          <div className="relative">
            <img src={SliderImages[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

