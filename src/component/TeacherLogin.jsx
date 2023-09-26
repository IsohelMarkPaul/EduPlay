import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../assets/logo.png';
import boygirl from '../assets/BoyAndGirl.png';



function TeacherLogin() {

    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

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
                <section className='bg-[#f7d538] opacity-95 flex flex-row  justify-center'>
                    <div>
                        <h1 className='mt-40 font-extrabold mb-14 px-14 text-8xl font-expletus'>SIGN IN  </h1>
                        <div>
                            <form action="" onSubmit={onSubmit}>
                                <input ref={register()} className="w-[100%] rounded-full flex p-4 px-10 mt-8 text-4xl bg-black text-white placeholder-white font-kumbh"
                                    name='username'
                                    type="text"
                                    placeholder="Username">
                                </input>

                                <input ref={register()} className="w-[100%] justify-center flex items-center rounded-full  px-10  p-4 mt-8 text-4xl bg-black text-white placeholder-white font-kumbh" id="password" type="password" placeholder="Password">

                                </input>

                                <div className="flex justify-around mt-2 ">
                                    <div className="mb-6 ">
                                        <label className="block font-bold text-gray-500">
                                            <input className="leading-tight " type="checkbox"></input>
                                            <span className="ml-1 text-lg ">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <a className="inline-block ml-10 text-lg font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <button className="w-[80%] font-sourceSans3 text-center rounded-full  p-4 mt-4 text-5xl bg-black shadow-lg hover:shadow-green-400 text-white placeholder-white font-bold" type="submit">
                                    SIGN IN
                                </button>
                            </form>

                            <p className="pb-4 mt-2 text-2xl font-medium font-sourceSans3">Don't have an account? <a href="#" className="font-bold font-sourceSans3 ">Sign Up</a></p>
                        </div>
                    </div>
                </section>
            </main >
        </div >
    );
}

export default TeacherLogin;
