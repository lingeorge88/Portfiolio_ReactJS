import React from 'react';

import WeatherApp from '../assets/portfolio/WeatherApp.png';
import Bookworms from '../assets/portfolio/Bookworms.png';
import RetroRush from '../assets/portfolio/RetroRush.png'
import PortfolioRJS from '../assets/portfolio/PortfolioReactJS.png';
import SocialAPI from '../assets/portfolio/SocialAPI.png';
import PokeTrader from '../assets/portfolio/PokeTrader.png';


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: RetroRush,
            demoUrl:'https://retro-rush-38883.netlify.app/',
            codeUrl:'https://github.com/lingeorge88/8bitGamesV2',
            title: "Retro Rush",
            description:'A unique fullstack E-commerce website featuring throwback graphics and the React-Redux library for state management'
        },
        {
            id: 2,
            src: PokeTrader,
            demoUrl:'https://poketraderv1.herokuapp.com/',
            codeUrl:'https://github.com/lingeorge88/Poke_Trader',
            title: "Poké Trader",
            description: "A full stack MERN application that allows Pokemon TCG enthusiasts to save and show off their card portfolio"
        },
        {
            id: 3,
            src: PortfolioRJS,
            demoUrl: 'https://lingeorge88.github.io/Portfiolio_ReactJS/',
            codeUrl:'https://github.com/lingeorge88/Portfiolio_ReactJS',
            title: 'Portfolio website',
            description:'A modern single page web application built with ReactJS, TailwindCSS and React Scroll to display my skills and projects'
        },
        {
            id: 4,
            src: Bookworms,
            demoUrl:'https://bookwormsglin.herokuapp.com/',
            codeUrl:'https://github.com/lingeorge88/Book_worms',
            title: "Bookworms",
            description: "A full stack application that utilizes Google Books API to allow avid readers to discover new books and saving their book collections online!"
        },
        {
            id: 5,
            src: WeatherApp,
            demoUrl:'https://lingeorge88.github.io/5-day-weather-forecast/',
            codeUrl:'https://github.com/lingeorge88/5-day-weather-forecast',
            title: '5 Day Weather Forecast',
            description: "A classic 5-day weather forecast application utilizing only HTML, CSS, Bootstrap, Javascript and the OpenWeatherMap API"
        },
        {
            id: 6,
            src: SocialAPI,
            demoUrl:'https://github.com/lingeorge88/SocialMedia_API_NoSQL',
            codeUrl:'https://github.com/lingeorge88/SocialMedia_API_NoSQL',
            title: 'MongoConnectFriends',
            description:'A REST API built with MongoDB and the Mongoose Express Package'
        },
    ]
    function handleDemoClick(demoUrl) {
        window.open(demoUrl, "_blank");
      };

      function handleCodeClick(codeUrl) {
        window.open(codeUrl, "_blank");
      };
  return (
    <div name="portfolio" className='font-default text-base bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='mt-20 pb-8 sm:mt-0'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-500'>🎨 Portfolio</p>
            <p className='py-6'>Check out some of my work! Youtube video walkthrough for some of the projects are available at: https://www.youtube.com/channel/UCEnm9jmp38-HDzUvFg2T-nA</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
        {
            portfolios.map(({id, src, demoUrl, codeUrl,title,description}) =>(
                
            <div key={id} className='shadow-md shadow-purple-500 rounded-lg duration-200 hover:scale-105'>
                
                <h2 className="text-xl text-center font-bold shadow-md shadow-indigo-500">{title}</h2>
                <div className='flex justify-between items-center'>
        {title === 'Retro Rush' && <span className='text-sm bg-yellow-300 text-black py-1 px-2 rounded'>Featured</span>}
      </div>
            <p className='text-sm m-2'>{description}</p>
                <img src={src} alt="" className='rounded-md '/>
                <div className='flex item-center justify-center'>
                    <button className='w-1/2 px6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleDemoClick(demoUrl)}>Demo</button>
                    <button className='w-1/2 px6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleCodeClick(codeUrl)}>Code</button>
                </div>
            </div>
        
            ))
        }
    </div>
    </div>
    </div>
  )
}

export default Portfolio;