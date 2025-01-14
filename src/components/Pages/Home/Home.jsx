import React from 'react';
import Banner from './Banner';
import Catagory from './Catagory/Catagory';
import BistroBoss from './BistroBoss';
import PopularMenu from './PopularMenu/PopularMenu';
import NumberCall from './NumberCall';
import ChifRecomend from './ChifRecomend/ChifRecomend';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Banner></Banner>
            <div className='max-w-screen-2xl mx-auto'>
                <Catagory></Catagory>
                <BistroBoss></BistroBoss>
                <PopularMenu></PopularMenu>
                <NumberCall></NumberCall>
                <ChifRecomend></ChifRecomend>
            </div>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;