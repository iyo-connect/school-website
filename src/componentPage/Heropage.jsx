import { Button } from '../components/ui/button';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import hero_image from '../images/coverImage4.jpg'
import cover1 from '../images/coverImage1.jpg'
import cover2 from '../images/coverImage2.jpg'
import cover3 from '../images/coverImage3.jpg'
import cover4 from '../images/cover3.jpg'
import hero_image1 from '../images/mobImg.jpg'
import ImageGallery from './ImageGallery';
const Heropage = () => {
  return (
    <div>
      {/* Hero Section with Image and apply button */}
      <div className='relative'>
      <img src={hero_image} alt="Hero Image" className="w-full h-[300px] md:h-auto object-cover lg:block md:hidden" />
      <img src={hero_image1} alt="Hero Image" className="lg:hidden" />
              <div className='absolute lg:top-1/4 lg:w-1/2 md:1/4 md:top-1/2 text-white md:text-center md:text-[3rem] bg-black bg-opacity-40 rounded-lg hover:shadow-xl'>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti.
                </h2>
                {/* apply button */}
                <Button className="bg-blue-800 m-4 hover:bg-blue-700 text-white w-1/4 md:text-[2rem] md:p-3">Apply Now</Button>
              </div>
      </div>
      <ImageGallery/>
      <div className='w-full bg-gray-200 mt-20'>
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:text-[1rem] md:text-[3rem]">
      <h3 className="text-blue-800 bg-gray-200 rounded-lg p-5 font-bold flex justify-center items-center">About Newleaf</h3>
        <div className="p-4 bg-white shadow-lg rounded-lg text-center flex flex-col items-center">
          <img src={cover1} alt="Example" className="w-32 h-32 md:h-full md:w-3/4 mx-auto lg:rounded-md mb-4" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti.</p>
        </div>
       <div className='bg-gray-200 p-10 flex justify-center items-center flex-col'>
       <h3 className='mb-5 text-blue-800'>
        About Newleaf <ArrowLeft className="inline-block" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione facilis tenetur voluptatibus repudiandae dolore facere neque consectetur quisquam at magnam!
        </p>
       </div>
        <h3 className="text-blue-800 bg-gray-200 rounded-lg inline-block p-5 font-bold flex justify-center items-center">Visionaries</h3>
        <div className="p-4 bg-white shadow-lg rounded-lg text-center flex flex-col items-center">
          <img src={cover2} alt="Example" className="w-32 h-32 md:h-full md:w-3/4 mx-auto lg:rounded-md mb-4" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti.</p>
        </div>
        <div className='bg-gray-200 p-10 flex justify-center items-center flex-col'>
       <h3 className='mb-5 text-blue-800'>
        About Newleaf <ArrowLeft className="inline-block" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione facilis tenetur voluptatibus repudiandae dolore facere neque consectetur quisquam at magnam!
        </p>
       </div>
        <h3 className="text-blue-800 bg-gray-200 rounded-lg inline-block p-5 font-bold flex justify-center items-center">Why Newleaf</h3>
        <div className="p-4 bg-white shadow-lg rounded-lg text-center flex flex-col items-center">
          <img src={cover3} alt="Example" className="w-32 h-32 md:h-full md:w-3/4 mx-auto lg:rounded-md mb-4" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti.</p>
        </div>
        <div className='bg-gray-200 p-10 flex justify-center items-center flex-col'>
       <h3 className='mb-5 text-blue-800'>
        About Newleaf <ArrowLeft className="inline-block" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione facilis tenetur voluptatibus repudiandae dolore facere neque consectetur quisquam at magnam!
        </p>
       </div>
        <h3 className="text-blue-800 bg-gray-200 rounded-lg inline-block p-5 font-bold flex justify-center items-center">Curriculum</h3>
        <div className="p-4 bg-white shadow-lg rounded-lg text-center flex  md:flex-col items-center">
          <img src={cover4} alt="Example" className="w-32 h-32 md:h-full md:w-3/4 mx-auto lg:rounded-md mb-4" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti.</p>
        </div>
        <div className='bg-gray-200 p-10 flex justify-center items-center flex-col'>
       <h3 className='mb-5 text-blue-800'>
        About Newleaf <ArrowLeft className="inline-block" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione facilis tenetur voluptatibus repudiandae dolore facere neque consectetur quisquam at magnam!
        </p>
       </div>
        <h3 className="text-blue-800 bg-gray-200 rounded-lg inline-block p-5 font-bold flex justify-center items-center">Our Campus</h3>
        <div className="p-4 bg-white shadow-lgrounded-lg text-center flex flex-col items-center">
          <img src={cover4} alt="Example" className="w-32 h-32 md:h-full md:w-3/4 mx-auto lg:rounded-md mb-4" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti.</p>
        </div>
        <div className='bg-gray-200 p-10 flex justify-center items-center flex-col'>
       <h3 className='mb-5 text-blue-800'>
        About Newleaf <ArrowLeft className="inline-block" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione facilis tenetur voluptatibus repudiandae dolore facere neque consectetur quisquam at magnam!
        </p>
       </div>
        <h3 className="text-blue-800 bg-gray-200 rounded-lg inline-block p-5 font-bold flex justify-center items-center">Sports Day</h3>
        <div className="p-4 bg-white shadow-lg rounded-lg text-center flex flex-col items-center">
          <img src={cover4} alt="Example" className="w-32 h-32 md:h-full md:w-3/4 mx-auto lg:rounded-md mb-4" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, deleniti.</p>
        </div>
        <div className='bg-gray-200 p-10 flex justify-center items-center flex-col'>
       <h3 className='mb-5 text-blue-800'>
        About Newleaf <ArrowLeft className="inline-block" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione facilis tenetur voluptatibus repudiandae dolore facere neque consectetur quisquam at magnam!
        </p>
       </div>
      </div>
      </div>
    </div>
  );
};

export default Heropage;

