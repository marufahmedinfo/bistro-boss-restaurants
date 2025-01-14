import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import sl1 from '../../../../assets/home/slide1.jpg'
import sl2 from '../../../../assets/home/slide2.jpg'
import sl3 from '../../../../assets/home/slide3.jpg'
import sl4 from '../../../../assets/home/slide4.jpg'
import sl5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../SectionTitle/SectionTitle';
const Catagory = () => {
    return (
       <section>
        <SectionTitle
        heading={'ORDER ONLINE'}
        subHeading={'From 11:00am to 10:00pm'}
        ></SectionTitle>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
      >
        <SwiperSlide>
            <img src={sl1} alt="" className='md:w-full md:h-96 object-cover' />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={sl2} alt="" className='md:w-full md:h-96 object-cover' />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={sl3} alt="" className='md:w-full md:h-96 object-cover' />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={sl4} alt="" className='md:w-full md:h-96 object-cover' />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={sl5} alt="" className='md:w-full md:h-96 object-cover' />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
        </SwiperSlide>

      </Swiper>
       </section>
    );
};

export default Catagory;