import React from 'react';
import FoodCard from '../../../FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div>
            {/* {items.map((salad) => (
                <FoodCard key={salad._id} salad={salad}></FoodCard>
            ))} */}

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {items.map((salad) => (
                            <FoodCard key={salad._id} salad={salad}></FoodCard>
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>


    );
};

export default OrderTab;