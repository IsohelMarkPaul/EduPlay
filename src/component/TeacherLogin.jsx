import React from 'react';
import logo from '../assets/logo.png';
import boygirl from '../assets/BoyAndGirl.png';
import TeacherSignIn from './TeacherSignUp';

function TeacherLogin() {
    return (
        <div className="flex items-center justify-center min-h-screen background ">
            <main className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] m-4 text-center   grid grid-cols-[35%_65%] ">

                <div className='grid grid-rows-[40%_15%_35%] text-white bg-[#252525] bg-opacity-95  '>
                    <div className="flex items-center justify-center">
                        <img className='w-32 ' src={logo} alt="Logo" />
                    </div>

                    <div><h1 className='text-6xl font-bold font-reemkufifont'>EDUPLAY</h1></div>

                    <div className="flex items-center justify-center">
                        <img className='object-cover w-fit h-[90%]' src={boygirl} alt="Logo" />
                    </div>
                </div>
                <div className='bg-[#f7d538] opacity-95 flex flex-row  justify-center'>
                    <div>
                        <h1 className='mt-40 font-extrabold mb-14 px-14 text-8xl font-expletus'>SIGN IN  </h1>
                        <div>
                            <form className=''>
                                <input className="w-[100%] rounded-full flex p-4 mt-8 text-4xl bg-black text-white placeholder-white font-kumbh" id="username" type="text" placeholder="Email:">
                                </input>

                                <input className="w-[100%] justify-center flex items-center rounded-full   p-4 mt-8 text-4xl bg-black text-white placeholder-white font-kumbh" id="password" type="password" placeholder="Password:">
                                </input>

                                <div class="flex justify-around mt-2 ">
                                    <div class="mb-6  ">
                                        <label class="block font-bold text-gray-500">
                                            <input class="leading-tight " type="checkbox"></input>
                                            <span class="text-lg ml-1 ">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>

                                    <div>
                                        <a class="inline-block text-lg font-bold text-blue-500 align-baseline hover:text-blue-800 ml-10" href="#">
                                            Forgot Password?
                                        </a>
                                    </div>


                                </div>
                                <button class="w-[80%] font-sourceSans3 text-center rounded-full  p-4 mt-4 text-5xl bg-black shadow-lg hover:shadow-green-400 text-white placeholder-white font-bold" type="button">
                                    SIGN IN
                                </button>

                            </form>
                            <p class="pb-4 text-2xl font-medium mt-2 font-sourceSans3">Don't have an account? <a href="#" class="font-bold font-sourceSans3 ">Sign Up</a></p>
                        </div>

                    </div>


                </div>
            </main >
        </div >
    );
}

export default TeacherLogin;
