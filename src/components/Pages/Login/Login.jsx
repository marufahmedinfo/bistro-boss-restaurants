import React, { useContext, useEffect, useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import backgr from '../../../assets/others/authentication.png'
import login from '../../../assets/others/authentication2.png'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaGithub } from 'react-icons/fa6';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../provider/AuthProvider';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn, handleGoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const form = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "User Login SuccessFully",
                    showClass: {
                        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
                    },
                    hideClass: {
                        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
                    }
                });
                navigate(form, { replace: true });

            })

    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        // console.log(value)
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100"
            style={{ backgroundImage: `url(${backgr})` }}
        >
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div
                className="bg-white shadow-2xl rounded-xl p-8 w-11/12 md:w-2/3 lg:w-1/2 flex flex-col md:flex-row items-center gap-8"
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
                    <h2 className="text-2xl font-bold mb-4 text-center">Login Now!</h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Type here"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                <LoadCanvasTemplate />
                            </label>
                            <div className="flex items-center gap-4">
                                <input
                                    onBlur={handleValidateCaptcha}
                                    type="text"
                                    name="captcha"
                                    placeholder="Type The Text above"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />

                                {/* <button
                                    
                                    className="rounded-md bg-yellow-500 btn-xs"
                                >
                                    Validate
                                </button> */}
                            </div>
                        </div>

                        <div className='form-control mt-6'>
                            <input
                                type="submit"
                                // TODO 
                                disabled={false}
                                value={'Sign In'}
                                // className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md"
                                className='btn btn-warning'
                            />
                        </div>


                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-md text-yellow-500">
                            New here? <Link to={'/register'} className="text-yellow-500 hover:text-blue-500 underline">Create a New Account</Link>
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

export default Login;