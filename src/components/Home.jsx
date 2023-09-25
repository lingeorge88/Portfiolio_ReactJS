import React from 'react';
import HeroImage from '../assets/heroimage.png';
import { TiArrowRightOutline}from "react-icons/ti";
import { Link } from 'react-scroll';
import BigBangStarField from 'react-big-bang-star-field';

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white' >
        <BigBangStarField numStars={200} maxStarSpeed={1} scale={2} style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }} className='absolute w-full h-full' starColor={"251, 182, 242"}/>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h5 className='font-default mt-8 text-sm sm:text-xl'>👋 Hi, my name is</h5>
                <h3 className='font-default text-2xl sm:text-7xl font-bold italic'>George Lin</h3>
                <p className='font-default text-white py-4 max-w-md text-base font-light mr-8'>
                    I am a Software Developer from Seattle, Washington. 
                I am focused on building responsive, performant and user-friendly applications with a focus on Frontend development.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500}className='group text-white text-base w-fit px-6 py-3 my-2 flex font-default item-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer hover:scale-105 duration-200 '>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <TiArrowRightOutline size={25} className='ml-1'/>
                            </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="profileImage" className='rounded-2xl mx-auto max-w-xs md:max-w-sm' style={{ overflowY: 'scroll' }}/>
            </div>
        </div>
    </div>
    
  )
}

export default Home;