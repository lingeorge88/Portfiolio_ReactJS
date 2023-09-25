import React from 'react';
import BigBangStarField from 'react-big-bang-star-field';


const Particles = () => {
  return (
    <BigBangStarField numStars={200} maxStarSpeed={1} scale={2} className='absolute w-full h-full' starColor={"251, 182, 242"}/>
  )
}

export default Particles;