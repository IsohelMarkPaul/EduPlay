import React, { useState } from 'react';
import { HiMenu, HiX, HiBell } from 'react-icons/hi';
import english from '../assets/ModulesImage/english.jpg';
import logo from '../assets/logo.png';
import studentDP from '../assets/StudentProfilePicture/StudentDP.jpg';
import { AiFillEdit } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";

function Student_Profile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isEditingProfile, setIsEditingProfile] = useState(false);

    const handleEditProfile = () => {
        setIsEditingProfile(!isEditingProfile);
    };

    return (
        <div className='backgroundYellow'>
            <nav className="m-4 text-white bg-[#252525] rounded-3xl sticky top-0 z-50">
                <div className="flex items-center w-full p-2">
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
                {isEditingProfile ? (
                    <div className='relative p-4 m-4 bg-[#fff5be] rounded-3xl'>
                        <div className="absolute top-0 right-0 p-2">
                            <button className="text-5xl cursor-pointer" onClick={handleEditProfile}>
                                Cancel
                            </button>
                        </div>

                        <div className='flex items-center'>
                            <div className='w-40 h-40 mr-4 bg-gray-500 rounded-sm profile-picture aspect-square'>
                                <img src={studentDP} alt="English Module" className="object-cover w-full h-full rounded-lg" />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className='text-3xl font-expletus'
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className='text-3xl font-expletus'
                                />
                                <input
                                    type="text"
                                    placeholder="Grade Level"
                                    className='text-3xl font-expletus'
                                />
                                <input
                                    type="text"
                                    placeholder="Student ID"
                                    className='text-3xl font-expletus'
                                />
                                <button
                                    type="button"
                                    className='justify-center px-4 text-5xl text-center bg-green-400 rounded-full cursor-pointer'
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='relative p-4 m-4 bg-[#fff5be] rounded-3xl'>
                        <div className="absolute top-0 right-0 p-4">
                            <button className="flex items-center p-4 text-3xl text-white bg-black rounded-full cursor-pointer" onClick={handleEditProfile}>
                                <AiFillEdit className="mt-1 text-3xl cursor-pointer" />
                                Edit Profile
                            </button>
                        </div>

                        <div className='flex items-center'>
                            <div className='w-40 h-40 mr-4 bg-gray-500 aspect-square rounded-SM profile-picture'>
                                <img src={studentDP} alt="English Module" className="object-cover w-full h-full rounded-lg" />
                            </div>
                            <div className='overflow-hidden font-bold'>
                                <p className='text-3xl font-expletus'>Juan Dela Cruz</p>
                                <p className='text-3xl font-expletus'>Juan.Delacruz@ust.edu.ph</p>
                                <p className='text-3xl font-expletus'>Grade Level: 1</p>
                                <p className='text-3xl font-expletus'>Student ID: <span>2023696969</span></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div>
                <div className='relative p-4 m-4  rounded-3xl grid lg:grid-cols-[70%_30%] lg:gap-2 gap-5  '>
                    <div className="bg-[#fff5be]  rounded-xl">
                        <div className="p-5 text-5xl font-bold text-center font-sourceSans3">
                            <h1>BADGES</h1>
                        </div>
                        <div className="grid grid-cols-4 p-4 sm:px-20 sm:grid-cols-4 sm:gap-5 lg:grid-cols-5 xl:grid-cols-6">
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                            <div className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square"></div>
                        </div>
                    </div>

                    <aside className="w-auto bg-[#fff5be]   rounded-xl">
                        <div className="p-5 text-5xl font-bold text-center font-sourceSans3">
                            <h1>ACCOMPLISHMENTS</h1>
                        </div>

                        <div className="grid p-4 sm:gap-2">
                            <div>
                                <div className="w-full flex items-center mb-4 shadow-gray-500 hover:shadow-green-400 shadow-md px-4 py-2 text-xl font-bold text-black bg-[#a5d6a7] rounded-full font-rfont  focus:outline-none focus:shadow-outline" type="button">
                                    <FcApproval className="text-3xl cursor-pointer" />
                                    <p>Math Module 1: Operations</p>
                                </div>
                                <div className="w-full flex items-center  mb-4 shadow-gray-500 hover:shadow-green-400 shadow-md px-4 py-2 text-xl font-bold text-black bg-[#a5d6a7] rounded-full font-rfont  focus:outline-none focus:shadow-outline" type="button">
                                    <FcApproval className="text-3xl cursor-pointer" />
                                    <p>English Module 1: Parts of Speech</p>
                                </div>
                                <div className="w-full flex items-center mb-4 shadow-gray-500 hover:shadow-green-400 shadow-md px-4 py-2 text-xl font-bold text-black bg-[#a5d6a7] rounded-full font-rfont  focus:outline-none focus:shadow-outline" type="button">
                                    <FcApproval className="text-3xl cursor-pointer" />
                                    <p>Science Module 1: States of Matter</p>
                                </div>
                                <div className="w-full flex items-center mb-4 shadow-gray-500 hover:shadow-green-400 shadow-md px-4 py-2 text-xl font-bold text-black bg-[#a5d6a7] rounded-full font-rfont  focus:outline-none focus:shadow-outline" type="button">
                                    <FcApproval className="text-3xl cursor-pointer" />
                                    <p>Science Module 1 Quiz: 9/10</p>
                                </div>


                            </div>
                        </div>
                    </aside>


                </div>
            </div>
        </div>
    );
}

export default Student_Profile;