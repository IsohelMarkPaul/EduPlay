import { React } from 'react';
import logo from '../assets/logo.png';
import boygirl from '../assets/BoyAndGirl.png';
import { useFormik } from 'formik';
import { TeacherSchema } from '../SchemaValidation';
import { Link, useNavigate } from 'react-router-dom';



function TeacherLogin() {
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            TeacherUsername: "",
            TeacherPassword: "",
        },
        validationSchema: TeacherSchema,
        onSubmit: (values) => onSubmit(values, navigate),

    });

    const navigate = useNavigate();

    const onSubmit = (values) => {
        console.log("Submitted");
        console.log(values)
        navigate('/TeacherHomepage');

    }
    console.log(errors);
    console.log(values)


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
                        <h2 className='font-extrabold mt-36 px-14 text-7xl font-expletus'>Teacher</h2>
                        <h1 className='font-extrabold mb-14 px-14 text-8xl font-expletus'>SIGN IN  </h1>
                        <div>
                            <form action="" onSubmit={handleSubmit}>


                                <input className={`w-[100%] rounded-full flex p-4 px-10 mt-8 text-4xl bg-black text-white border-2 placeholder-white font-kumbh
                                 ${touched.TeacherUsername && errors.TeacherUsername ? 'border-red-500  shadow-lg shadow-red-500' : ''}`}
                                    name='TeacherUsername'
                                    type="text"
                                    placeholder="Username"
                                    value={values.TeacherUsername}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                </input>

                                <input className={`w-[100%] rounded-full flex p-4 px-10 mt-8 text-4xl bg-black text-white border-2 placeholder-white font-kumbh
                                 ${touched.TeacherPassword && errors.TeacherPassword ? 'border-red-500 shadow-lg shadow-red-500 ' : ''}`}
                                    id="TeacherPassword"
                                    type="password"
                                    placeholder="Password"
                                    value={values.TeacherPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                </input>

                                <div className="flex justify-around mt-3 ">
                                    <div className="mb-6 ">
                                        <label className="block font-bold text-gray-500">
                                            <input className="leading-tight " type="checkbox"></input>
                                            <span className="ml-1 text-lg ">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <Link to="/Teacher_Send_Email" className="inline-block ml-10 text-lg font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>
                                <button className="w-[80%] font-sourceSans3 text-center rounded-full  p-4 mt-4 text-5xl bg-black shadow-lg hover:shadow-green-400 text-white placeholder-white font-bold"
                                    type="submit">
                                    SIGN IN
                                </button>
                            </form>

                            <p className="pb-4 mt-2 text-2xl font-medium font-sourceSans3">Don't have an account? <Link to='/TeacherSignUp' className="font-bold font-sourceSans3 ">Sign Up </Link></p>
                        </div>
                    </div>
                </section>
            </main >
        </div >
    );
}

export default TeacherLogin;
