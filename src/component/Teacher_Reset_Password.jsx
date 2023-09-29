import { React } from 'react';
import logo from '../assets/logo.png';
import boygirl from '../assets/BoyAndGirl.png';
import { useFormik } from 'formik';
import { TeacherForgotSchemaResetPassword } from '../SchemaValidation';
import { useNavigate } from 'react-router-dom';



function Teacher_Reset_Password() {
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: TeacherForgotSchemaResetPassword,
        onSubmit: (values) => onSubmit(values, navigate),

    });

    const navigate = useNavigate();

    const onSubmit = (values) => {
        console.log("Submitted");
        console.log(values)
        navigate('/Teacher_PasswordReset_Success');

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
                        <h2 className='mt-40 font-extrabold px-14 text-7xl font-expletus'>Teacher</h2>
                        <h1 className='font-extrabold mb-14 px-14 text-8xl font-expletus'>Sign In  </h1>
                        <div>

                            <form action="" onSubmit={handleSubmit}>
                                {/* Password input */}
                                <input className={`w-[100%] justify-center mt-4 p-4 px-10 flex items-center rounded-full     text-4xl bg-[#252525] text-white placeholder-white font-kumbh
                                ${touched.password && errors.password ? 'border-red-500 shadow-lg shadow-red-500' : ''}`}
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                </input>

                                {/* Confirm Password input */}
                                <input className={`w-[100%] justify-center mt-4 p-4 px-10 flex items-center rounded-full     text-4xl bg-[#252525] text-white placeholder-white font-kumbh
                                ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500 shadow-lg shadow-red-500' : ''}`}
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password "
                                    name='confirmPassword'
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                </input>

                                <button className="w-[50%] font-sourceSans3 text-center rounded-full  p-4 mt-8 text-4xl bg-black shadow-lg hover:shadow-green-400 text-white placeholder-white font-bold"
                                    type="submit">
                                    Send Code
                                </button>
                            </form>


                        </div>
                    </div>
                </section>
            </main >
        </div >
    );
}

export default Teacher_Reset_Password;
