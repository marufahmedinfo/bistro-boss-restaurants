import React from 'react';
import second from '../../../../assets/icon/logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
           <div className="footer p-10 bg-blue-950 text-neutral-content">
                <div className='items-center justify-center flex flex-col  max-w-xl mx-auto'>
                    <div className='items-center justify-center flex flex-col'>
                        <img src={second} alt="" className='h-20' />
                        <h3 className='text-3xl font-bold text-orange-500'>Bistro Boss Restaurant</h3>
                    </div>
                    <h3 className='text-3xl font-bold text-white'>CONTACT US</h3>
                    <p className='text-lg'>kanaighat, sylhet, Bangladesh <br />
                        Email :  marufahmedinfos@gmail.com <br />
                        Number :  +880 1320316967<br />
                        Mon - Fri: 08:00 - 22:00  ---- Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='footer-center max-w-xl mt-20'>
                    <h3 className="text-3xl font-bold text-white">Follow US</h3>
                    <p className='my-4'>Join us on social media</p>
                    <div className="grid grid-flow-col gap-4 ">
                        <a href="https://www.facebook.com/maruf.ahmed.163821/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={30} /></a>
                        <a href="https://www.instagram.com/marufahmedinfos/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} /></a>
                        <a href="https://x.com/MarufAhmmedinfo" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} /></a>
                        <a href="https://www.linkedin.com/in/marufahmedinfos/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} /></a>

                    </div>
                </div>
           </div>
            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;