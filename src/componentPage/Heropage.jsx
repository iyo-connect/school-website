import React from 'react'
import { Link } from "react-router-dom";
import hero_image from "../images/coverImage4.jpg"
import aboutImage from "../images/coverImage2.jpg"
import Image1 from "../images/coverImage1.jpg"
import Image2 from "../images/coverImage3.jpg"
import { Button } from "../components/ui/button"
import Slider from './imageSlider'
import { ArrowUp } from 'lucide-react';
const Heropage = () => {
  return (
    <div classname="">
      <img src={hero_image} alt="Hero Image" id='/'/>
      <div className='absolute top-[12rem] left-[5%] w-[40%]'>
        <h1 className='text-white font-bold text-[45px]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, error!
        </h1>
        <Button className="w-[20%] font-bold text-[17px] mt-2 ms-2 bg-[#060270] hover:bg-[#13005A]">
          <Link to='/admission'>
          Apply Now
          </Link>
        </Button>
      </div>
      <div className=' mt-[9%] w-70% '>
        <h2 className='font-bold ms-[60px] text-[45px] text-[#03004E] '>
          Why NewLeaf ?
        </h2>
        <div className='m-[7%] mx-auto flex items-center flex-row-reverse gap-[40px] w-[60rem]'>
          <p className='w-70% text-[23px]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum maxime reiciendis consequatur culpa dolorem harum ipsum? Reiciendis a asperiores consequatur sequi voluptas ipsa inventore exercitationem excepturi, pariatur, sapiente molestiae ad.
          </p>
          <img src={aboutImage} alt="AboutImage" width="250px" className='rounded-md' />
        </div>
        <div className='m-[7%] mx-auto flex items-center gap-[40px] w-[60rem]'>
          <p className='w-70% text-[23px]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum maxime reiciendis consequatur culpa dolorem harum ipsum? Reiciendis a asperiores consequatur sequi voluptas ipsa inventore exercitationem excepturi, pariatur, sapiente molestiae ad.
          </p>
          <img src={Image1} alt="AboutImage" width="250px" className='rounded-md' />
        </div>
        <div className='m-[7%] mx-auto flex items-center flex-row-reverse gap-[40px] w-[60rem]'>
          <p className='w-70% text-[23px]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum maxime reiciendis consequatur culpa dolorem harum ipsum? Reiciendis a asperiores consequatur sequi voluptas ipsa inventore exercitationem excepturi, pariatur, sapiente molestiae ad.
          </p>
          <img src={Image2} alt="AboutImage" width="250px" className='rounded-md' />
        </div>
        {/* //Our Campus */}
        <Slider/>
      </div>
    <Button className="absolute right-5 bottom-[-113.5rem] bg-blue-900">
      <a href='#/'><ArrowUp/></a>
    </Button>
    </div>
  )
}

export default Heropage;