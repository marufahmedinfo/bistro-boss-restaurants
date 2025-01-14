import React, { useContext } from 'react';
import backgr from '../../../assets/others/authentication.png';
import login from '../../../assets/others/authentication2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaGithub } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SocialLogin from '../../SocialLogin/SocialLogin';


const Register = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { handleRegister, updateUserProfile, handleGoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        // console.log(data);
        handleRegister(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }


                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {

                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User created Successfully.",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                        // console.log('user profile info updated')
                    })
                    .catch(err => console.log(err))
            })
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100"
            style={{ backgroundImage: `url(${backgr})` }}
        >
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div
                className="bg-white shadow-2xl rounded-xl p-8 w-11/12 md:w-2/3 lg:w-1/2 flex flex-col md:flex-row-reverse items-center gap-8"
                style={{ backgroundImage: `url(${backgr})` }}
            >
                {/* Left Section with Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={login}
                        alt="Illustration"
                        className=""
                    />
                </div>

                {/* Right Section with Login Form */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4 text-center">Register Now!</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name='name'
                                {...register("name", { required: true })}
                                placeholder="Type here"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.name && <span className='text-red-500'>Name is required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                name='photo'
                                {...register("photoURL", { required: true })}
                                placeholder="Enter Your Photo URL"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.photoURL && <span className='text-red-500'>Photo URL is required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                {...register("email", { required: true })}
                                placeholder="Type here"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-500'>Password must be less then 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have one uppercase, one lowercase, one number and one specie character</p>}
                        </div>

                        <div className='form-control mt-6'>
                            <input
                                type="submit"
                                // disabled={disabled}
                                value={'Sign Up'}
                                // className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md"
                                className='btn btn-warning'
                            />
                        </div>


                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-md text-yellow-500">
                            Already Have An Account ? <Link to={'/login'} className="text-yellow-500 hover:text-blue-500 underline">Login Now!</Link>
                        </p>

                        <p className="text-sm mt-4">Or sign in with</p>
                        <div className="flex items-center justify-center gap-4 mt-2">
                            <SocialLogin></SocialLogin>
                            <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md">
                                <FaFacebookF size={30} />
                            </button>
                            <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md">
                                <FaGithub size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;