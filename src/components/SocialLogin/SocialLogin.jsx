import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { handleGoogleLogin } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignin = () => {
        handleGoogleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                };
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        Swal.fire({
                            title: "User SuccessFully Google Login",
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
                        navigate('/');
                    })

            })
            .catch(errro => {
                console.log(errro.message)
                setError(errro.message)
            })
    };

    return (
        <button onClick={handleGoogleSignin} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md">
            {/* Replace with actual icons */}
            <FcGoogle size={30} />
        </button>
    );
};

export default SocialLogin;