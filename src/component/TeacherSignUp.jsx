import React from 'react'
import logo from '../assets/logo.png';
import boygirl from '../assets/BoyAndGirl.png';
import TeacherLogin from './TeacherLogin';

const TeacherSignIn = () => {
    return (
        <div className="flex items-center justify-center min-h-screen background ">
            <main className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] m-4 text-center   grid grid-cols-[35%_65%] ">

                <div className='grid grid-rows-[40%_15%_35%] text-white bg-[#252525] bg-opacity-95  '>
                    <div className="flex items-center justify-center">
                        <img className='object-cover w-fit h-[90%] m-0 ' src={logo} alt="Logo" />
                    </div>

                    <div><h1 className='text-6xl font-bold font-reemkufifont'>EDUPLAY</h1></div>

                    <div className="flex items-center justify-center">
                        <img className='object-cover w-fit h-[90%]' src={boygirl} alt="Logo" />
                    </div>
                </div>
                <div className='bg-[#f7d538] opacity-95 flex flex-row  px-14 justify-center'>
                    <div>
                        <h1 className='mt-24 font-extrabold px-14 text-8xl text-[#252525] font-expletus'>SIGN UP  </h1>
                        <div>
                            <form className=''>
                                <div className='flex justify-center gap-2 mt-8'>
                                    <input className="w-[100%] rounded-full flex p-4 px-10 text-4xl bg-[#252525] text-white placeholder-white font-kumbh" id="fname" type="text" placeholder="First Name">
                                    </input>

                                    <input className="w-[100%] justify-center p-4 px-10 flex items-center rounded-full     text-4xl bg-[#252525] text-white placeholder-white font-kumbh" id="lname" type="text" placeholder="Last Name">
                                    </input>
                                </div>

                                <input className="w-[100%] justify-center mt-4 p-4  px-10 flex items-center rounded-full     text-4xl bg-[#252525] text-white placeholder-white font-kumbh" id="lname" type="email" placeholder="Email">
                                </input>

                                <input className="w-[100%] justify-center mt-4 p-4 px-10 flex items-center rounded-full     text-4xl bg-[#252525] text-white placeholder-white font-kumbh" id="lname" type="password" placeholder="Password" required>
                                </input>

                                <input className="w-[100%] justify-center mt-4 p-4 px-10 flex items-center rounded-full     text-4xl bg-[#252525] text-white placeholder-white font-kumbh" id="lname" type="password" placeholder="Confirm Password " required>
                                </input>


                                <button class="w-[50%] font-sourceSans3 text-center rounded-full p-2  mt-10 text-5xl bg-[#252525]  shadow-lg  text-white placeholder-white font-bold" type="button">
                                    SIGN UP
                                </button>

                            </form>
                            <p class="pb-4 text-2xl font-medium mt-4 font-sourceSans3">Already have an account? <a href="#" class="font-bold font-sourceSans3 underline ">Sign In</a></p>
                        </div>

                    </div>


                </div >
            </main >
        </div >
    )
}

export default TeacherSignIn;