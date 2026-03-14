import { useState, useEffect, useRef } from 'react';
import firstImage from "../assets/images/contacts/black/1.png"
import secondImage from "../assets/images/contacts/black/2.png"
import thirdImage from "../assets/images/contacts/black/3.png"
import fourthImage from "../assets/images/contacts/black/4.png"
import fifthImage from "../assets/images/contacts/black/5.png"
import sixthImage from "../assets/images/contacts/black/6.png"

import firstColoredImage from "../assets/images/contacts/colored/1.png"
import secondColoredImage from "../assets/images/contacts/colored/2.png"
import thirdColoredImage from "../assets/images/contacts/colored/3.png"
import fourthColoredImage from "../assets/images/contacts/colored/4.png"
import fifthColoredImage from "../assets/images/contacts/colored/5.png"
import sixthColoredImage from "../assets/images/contacts/colored/6.png"

const ParallaxImageGallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const galleryRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '-10px 0px -10px 0px'
            }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }
        };
    }, []);

    return (
        <div ref={galleryRef} className='flex mt-12 sm:mt-14 md:mt-16 lg:mt-18 xl:mt-20 relative w-[90%] mx-auto min-h-screen'>
            <div className='w-1/2 flex flex-col'>
                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={firstImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={firstColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={secondImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={secondColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={thirdImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={thirdColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>
            </div>

            {/* Правая колонка */}
            <div className='w-1/2 flex flex-col'>
                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={fourthImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={fourthColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={fifthImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={fifthColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                <div className="relative group cursor-pointer overflow-hidden flex-1">
                    <img
                        src={sixthImage}
                        alt="Описание"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src={sixthColoredImage}
                        alt="Описание"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>
            </div>
        </div>
    );
};

export default ParallaxImageGallery;