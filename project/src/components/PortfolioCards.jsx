import React from 'react'
import { useState, useEffect } from 'react';
import CarCase from "../assets/images/portfolio/carCase.png"
import { Link } from 'react-router-dom'

export default function PortfolioCards() {
    const [cardsToShow, setCardsToShow] = useState(7);
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
      
      const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1280) { // xl
          setCardsToShow(8);
        } else if (width >= 768) { // md
          setCardsToShow(12);
        } else if (width >= 640) { // sm
          setCardsToShow(8);
        } else {
          setCardsToShow(7);
        }
      };
  
      handleResize(); // Initial check
      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <Link to="/car">
      <div className="w-[95%] xl:w-[90%] mt-8 md:mt-15 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: cardsToShow }).map((_, index) => (
          <div key={index} className="flex flex-col w-full">
            <img className="w-full h-48 md:h-56 object-cover rounded-tl-2xl rounded-2xl" src={CarCase} alt="Car" />
            <div className="w-full h-auto min-h-[100px] text-white">
              <p className='font-semibold text-[18px] xl:text-[22px] mt-2'>2 957 000 р.</p>
              <p className='text-[16px] xl:text-[18px]'>KGM Torres, 2025</p>
              <p className='font-light text-[14px] xl:text-[16px]'>2024</p>
            </div>
          </div>
        ))}
      </div>
        </Link>
    );
}
