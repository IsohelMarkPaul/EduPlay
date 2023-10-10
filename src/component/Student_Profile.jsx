import React, { useState, useEffect } from 'react';
import axios from 'axios';
import studentDP from '../assets/StudentProfilePicture/StudentDP.jpg';
import { FcApproval } from "react-icons/fc";
import Student_Navbar from './Student_Navbar';

function Student_Profile() {
    const [userData, setUserData] = useState(null);
    const [badgeData, setBadgeData] = useState([]);
    const [achievementData, setAchievementData] = useState([]);

    useEffect(() => {
        // Fetch user profile data
        axios.get('/api/user-profile')
            .then((response) => setUserData(response.data))
            .catch((error) => console.error(error));

        // Fetch badge data
        axios.get('/api/badges')
            .then((response) => setBadgeData(response.data))
            .catch((error) => console.error(error));

        // Fetch achievement data
        axios.get('/api/achievements')
            .then((response) => setAchievementData(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className='backgroundYellow'>
            <div className=' p-4 m-4 bg-[#fff5be] rounded-3xl'>
                <div className='flex items-center'>
                    <div className='w-40 h-40 mr-4 bg-gray-500 aspect-square rounded-SM profile-picture'>
                        <img src={studentDP} alt="English Module" className="object-cover w-full h-full rounded-lg" />
                    </div>
                    <div className='overflow-hidden font-bold'>
                        <p className='text-3xl font-expletus'>{userData ? userData.name : 'Loading...'}</p>
                        <p className='text-3xl font-expletus'>Grade Level: {userData ? userData.grade : 'Loading...'}</p>
                        <p className='text-3xl font-expletus'>Student ID: <span>{userData ? userData.studentId : 'Loading...'}</span></p>
                    </div>
                </div>
            </div>

            <div className='m-4  lg:p-0 rounded-3xl grid lg:grid-cols-[70%_30%] lg:gap-2 gap-5  '>
                <div className="rounded-xl bg-[#fff5be]">
                    <div className="p-5 text-5xl font-bold text-center font-sourceSans3">
                        <h1>BADGES</h1>
                    </div>
                    <div className="grid grid-cols-4 p-4 sm:px-20 sm:grid-cols-4 sm:gap-5 lg:grid-cols-5 xl:grid-cols-6">
                        {badgeData.map((badge, index) => (
                            <div key={index} className="h-auto m-2 mb-2 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-400 bg-gradient-to-tl from-pink-600 via-teal-200 to-white aspect-square">
                                <img src={badge.imageUrl} alt={`Badge ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="bg-[#fff5be]  rounded-xl lg:mx-2">
                    <div className="text-5xl font-bold text-center font-sourceSans3">
                        <h1 >ACHIEVEMENTS</h1>
                    </div>

                    <div className="grid p-4 sm:gap-2">
                        {achievementData.map((achievement, index) => (
                            <div key={index} className='bg-[#fff5be]'>
                                <div className="w-full flex items-center mb-4 shadow-gray-500 hover:shadow-green-400 shadow-md px-4 py-2 text-xl font-bold text-black bg-[#a5d6a7] rounded-full font-rfont  focus:outline-none focus:shadow-outline" type="button">
                                    <FcApproval className="text-3xl cursor-pointer" />
                                    <p>{achievement.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Student_Profile;
