import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../Cover/Cover';
import contactImg from '../../../../assets/contact/banner.jpg'
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { TiMap, TiPhone } from 'react-icons/ti';
import { TfiAlarmClock } from 'react-icons/tfi';

const Contact = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>

            <Cover
                img={contactImg}
                title={'OUR SHOP'}
                subTitle={'Would you like to try a dish?'}
            ></Cover>






            <div className="bg-gray-100 p-8 max-w-screen-xl mx-auto">
                {/* Contact Information */}
                <SectionTitle
                    heading="OUR LOCATION"
                    subHeading="Visit Us"
                ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="bg-yellow-500 flex justify-center p-4 items-center text-3xl mb-2">
                            <TiPhone size={40} color='white' />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">PHONE</h4>
                        <p className="text-gray-600 mt-2">+880 1320316967</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="bg-yellow-500 flex justify-center p-4 items-center text-3xl mb-2">
                            <TiMap size={40} color='white' />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">ADDRESS</h4>
                        <p className="text-gray-600 mt-2">Kanaighat, Syltet <br /> Dhaka</p>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <div className="bg-yellow-500 flex justify-center p-4 items-center text-3xl mb-2">
                            <TfiAlarmClock size={40} color='white' />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">
                            WORKING HOURS
                        </h4>
                        <p className="text-gray-600 mt-2">
                            Mon-Fri: 08:00 - 20:00 <br />
                            Sat-Sun: 10:00 - 22:00
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <SectionTitle
                    heading="CONTACT FORM"
                    subHeading="Send Us a Message"
                ></SectionTitle>
                <form className="bg-white shadow-md rounded-lg p-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium">
                                Name*
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium">
                                Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium">
                            Phone*
                        </label>
                        <input
                            type="text"
                            id="phone"
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium">
                            Message*
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                            placeholder="Write your message here"
                        ></textarea>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="recaptcha"
                                className="w-4 h-4 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500"
                            />
                            <label
                                htmlFor="recaptcha"
                                className="ml-2 text-gray-600 text-sm font-medium"
                            >
                                I'm not a robot
                            </label>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            disabled
                            className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;