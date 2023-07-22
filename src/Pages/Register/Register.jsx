import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import animation from '../../../public/animation.json';
import Lottie from "lottie-react";
import { useDispatch } from 'react-redux';
import { useRegisterMutation } from '../../app/features/auth/authApi';
import { login } from '../../app/features/auth/authSlice';



const Register = () => {
    const { register, handleSubmit } = useForm();
    const [postRegister,{data}] = useRegisterMutation()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(postRegister(data))
        //     fetch("https://weero-furniture-server.onrender.com/api/auth/register",{
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //           },
        //         body: JSON.stringify(data)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if(data.refreshToken){
        //                 document.cookie = `refreshToken=${data.refreshToken}; path=/`;
        //             }
        //         })
          

    }

    if(data){
        dispatch(login(data.data.user))
    }
    
    return (
        <div className='w-full lg:w-2/4 mx-auto my-10 p-5 border rounded border-primary' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-center text-3xl font-semibold text-primary my-10'>Register User</h1>
            <div className=''>
                <div className='ml-3 mt-5 md:mt-0'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
                        <div className='my-2 w-full m-1'>
                            <label className='font-semibold'> First Name</label>
                            <input type='text' className='w-full border focus:outline-none focus:border-primary p-2 my-2 rounded' {...register("firstName")} placeholder='first name' required />
                        </div>
                        <div className='my-2 w-full m-1'>
                            <label className='font-semibold'> Last Name</label>
                            <input type='text' className='w-full border focus:outline-none focus:border-primary p-2 my-2 rounded' {...register("lastName")} placeholder='last name' required />
                        </div>
                        <div className='my-2 w-full m-1'>
                            <label className='font-semibold'> Email</label>
                            <input type='email' className='w-full border focus:outline-none focus:border-primary p-2 my-2 rounded' {...register("email")} placeholder='Email' required />
                        </div>
                        <div className='my-2 w-full m-1'>
                            <label className='font-semibold'> Phone</label>
                            <input type='tel' className='w-full border focus:outline-none focus:border-primary p-2 my-2 rounded' {...register("phone")} placeholder='Phone' required />
                        </div>
                        <div className='my-2 w-full m-1'>
                            <label className='font-semibold'> Password</label>
                            <input type='password' className='w-full border focus:outline-none focus:border-primary p-2 my-2 rounded' {...register("password")} placeholder='Password' required />
                        </div>
                        <div className='my-2 w-full m-1'>
                            <label className='font-semibold'>Confirm Password</label>
                            <input type='password' className='w-full border focus:outline-none focus:border-primary p-2 my-2 rounded' {...register("confirmPassword")} placeholder='Confirm Password' required />
                        </div>
                        </div>
                        <div>
                            <button className='w-full text-center transition duration-500 hover:bg-[#333533] bg-primary text-white rounded font-semibold text-lg my-3 py-2' type='submit'>Submit</button>
                        </div>


                    </form>
                    <h1 className='text-center font-semibold'>Already have an account?<Link to='/login' className='text-primary'>Login here</Link></h1>
                    <hr className='border-t-2 my-5' />
                    <div className='flex justify-evenly items-center hover:border-gray-800 border text-gray-800 hover:text-secondary border-primary rounded my-3 py-1 px-3 hover:bg-[#333533]  transition duration-500'>
                        <img className='w-10 h-10' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                        <button className='w-full text-center  font-semibold text-sm  '>Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;