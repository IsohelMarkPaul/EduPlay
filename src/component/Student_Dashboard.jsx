import React, { useState } from 'react';
import { HiMenu, HiX, HiBell } from 'react-icons/hi';
import { GoDotFill } from 'react-icons/go'
import logo from '../assets/logo.png';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import english from '../assets/ModulesImage/english.jpg';
import math from '../assets/ModulesImage/Math.jpg';
import science from '../assets/ModulesImage/Science.jpg';
import gamePic from '../assets/GamifiedAss/game-pic.jpg';


const Student_Dashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isVisible, setIsVisible] = useState(true);

    const handleCloseClick = () => {
        setIsVisible(false);
    };
    const handleScrollToTop = () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Optional smooth scrolling
        });
    };


    return (
        <>
            <div className='backgroundYellow'>
                <nav className="m-4 text-white bg-[#252525] rounded-3xl sticky top-0 z-50">
                    <div className="flex items-center w-full p-2 ">
                        <div className="flex items-center">
                            <img className='w-24 m-0 ' src={logo} alt="Logo" />
                            <h1 className="pl-2 pr-40 text-4xl font-bold font-reemkufifont">EDUPLAY</h1>
                        </div>
                        <div className="justify-around hidden w-full space-x-4 text-4xl font-bold font-expletus xl:flex">

                            <a href="#" className="p-5 hover:text-gray-500 ">DASHBOARD</a>


                            <a href="#" className="p-5 hover:text-gray-500">MODULES</a>

                            <a href="#" className="p-5 hover:text-gray-500">GAMIFIED ASSESSMENTS</a>

                            <a href="#" className="p-5 hover:text-gray-500">PROFILE</a>

                        </div>

                        <div className="xl:hidden">
                            <HiMenu onClick={toggleMenu} className="text-3xl cursor-pointer" />
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className="py-4 bg-gray-800 xl:hidden">
                            <div className="container flex flex-col items-center mx-auto space-y-4">
                                <a href="#" className="text-white">DASHBOARD</a>
                                <a href="#" className="text-white">MODULES</a>
                                <a href="#" className="text-white">GAMIFIED ASSESSMENTS</a>
                                <a href="#" className="text-white">PROFILE</a>
                            </div>
                        </div>
                    )}


                </nav>
                <div>
                    {isVisible && (
                        <div className='relative p-4 m-4 bg-[#fff5be] rounded-3xl'>
                            <div className="absolute top-0 right-0 p-2">
                                <HiX className="text-5xl cursor-pointer" onClick={handleCloseClick} />
                            </div>

                            <div className='flex items-center'>
                                <h1 className='p-4 text-5xl font-bold font-sourceSans3'>NOTIFICATIONS </h1>
                                <HiBell className="text-5xl " />
                            </div>

                            <div className='ml-8 text-3xl font-expletus'>
                                <div className='flex items-center pb-2'>
                                    <GoDotFill className="ml-2 text-3xl" />
                                    <h2>Anchor tag ba to or Pure Notif Text lang UNLOCKED</h2>
                                </div>

                                <div className='flex items-center pb-2'>
                                    <GoDotFill className="ml-2 text-3xl" />
                                    <h2>Anchor tag ba to or Pure Notif Text lang UNLOCKED</h2>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div>

                    <div className='relative p-4 m-4  rounded-3xl grid lg:grid-cols-[70%_30%] lg:gap-2 gap-5 mt-10 '>
                        <div className="bg-[#fff5be]  rounded-xl">
                            <div className="p-5 text-5xl font-bold text-center font-sourceSans3">
                                <h1>MODULES</h1>
                            </div>
                            <div className="grid items-center justify-center grid-cols-2 p-4 sm:px-20 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
                                {/* English Module */}
                                <div className="border-black border-8 m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-[2/3] relative">
                                    <img src={english} alt="English Module" className="object-cover w-full h-full rounded-lg" />
                                </div>
                                {/* Math Module */}
                                <div className=" border-[#90caf9] border-8  m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-[2/3] relative">
                                    <img src={math} alt="Math Module" className="object-cover w-full h-full rounded-lg" />
                                </div>
                                {/* Science Module */}
                                <div className="border-[#90caf9] border-8   m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-[2/3] relative">
                                    <img src={science} alt="Science Module" className="object-cover w-full h-full rounded-lg" />
                                </div>
                                {/* You can add more modules here */}
                            </div>
                        </div>
                        <aside className="bg-[#fff5be]  rounded-xl" style={{ overflowY: 'auto' }}>
                            <div className="p-5 text-5xl font-bold text-center font-sourceSans3">
                                <h1>Gamified Assessments</h1>
                            </div>
                            <div className="p-4">
                                {/* Game Picture */}
                                <img src={gamePic} alt="Game Picture" className="border-8 border-black rounded-lg aspect-square h-[400px] w-full" />
                            </div>
                            <div className="grid items-center p-4 sm:gap-2">
                                <div className='flex items-center justify-center'>
                                    <button className="  w-[50%] shadow-gray-500 hover:shadow-green-400 shadow-lg px-4 py-2 text-xl font-bold text-white bg-black rounded-full font-rfont hover:bg-green-700 focus:outline-none focus:shadow-outline" type="button">
                                        PLAY
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>

                </div>

                <button
                    className="fixed justify-center p-3 text-white bg-blue-800 rounded-full bottom-4 right-4 focus:outline-none"
                    onClick={handleScrollToTop}
                >
                    <BsFillArrowUpCircleFill className="text-3xl " />
                </button>



            </div >

        </>



    );
};

export default Student_Dashboard;