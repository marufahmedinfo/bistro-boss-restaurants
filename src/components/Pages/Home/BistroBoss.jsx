import React from 'react';
import bgimg from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className="relative bg-cover bg-center h-96 bg-fixed" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white text-center px-8 py-6 shadow-lg md:max-w-screen max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 font-cinzel">BISTRO BOSS</h2>
          <p className="text-gray-600">
          Welcome to Bistro Boss, where culinary excellence meets an inviting ambiance. 
  Our menu is crafted with fresh, locally sourced ingredients to bring you 
  an unforgettable dining experience. From expertly prepared gourmet dishes to 
  a curated selection of fine wines, we take pride in delivering flavors that 
  inspire and delight. Join us for an exceptional journey of taste and elegance.
          </p>
        </div>
      </div>
    </div>
    );
};

export default BistroBoss;