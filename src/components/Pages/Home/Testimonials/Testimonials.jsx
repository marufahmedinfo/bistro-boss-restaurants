import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import iconcot from '../../../../assets/icon/png-clipart-quotation-mark-apostrophe-computer-icons-quotation-text-number-removebg-preview.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-weld-zeta.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-20 max-w-screen-2xl mx-auto'>
            
            <SectionTitle
            subHeading={'What Our Clients Say'}
            heading={'TESTIMONIALS'}
            ></SectionTitle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">

{
    reviews.map(review => <SwiperSlide
        key={review._id}
    >
        <div className="flex flex-col items-center mx-24 my-16">
            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
            />
            <img src={iconcot} alt="icon...." className='h-32' />
            <p className="py-16 md:mx-52">{review.details}</p>
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
        </div>
    </SwiperSlide>)
}
</Swiper>
            
        </section>
    );
};

export default Testimonials;