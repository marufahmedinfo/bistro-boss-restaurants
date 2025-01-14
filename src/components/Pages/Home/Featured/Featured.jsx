import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import featured from '../../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className='featured-item bg-fixed my-20'>
            <div className='inset-0 bg-black bg-opacity-50 text-white  pt-10'>
            <SectionTitle
                heading={'From our Menu'}
                subHeading={'Check it out'}
            ></SectionTitle>

            <div className='md:flex justify-center items-center pt-12 max-w-screen-2xl mx-auto pb-20 '>
                <div>
                    <img src={featured} alt="Featured Image......" />
                </div>
                <div className='md:ml-10'>
                    <p>January 02, 2025</p>
                    <p> WHERE CAN I GET SOME?</p>
                    <p>Energistically impact global action items through granular convergence. Professionally deploy high-quality benefits after turnkey deliverables. Credibly envisioneer intermandated synergy with multifunctional quality vectors. Collaboratively reintermediate corporate expertise through virtual e-services. Progressively leverage existing revolutionary innovation via.</p>
                    <button className='btn btn-outline border-0 border-b-4 border-white text-white'>Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;