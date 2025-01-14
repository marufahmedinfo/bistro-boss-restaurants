import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import img1 from '../../../../assets/menu/pizza-bg.jpg'
import img2 from '../../../../assets/menu/salad-bg.jpg'
import img3 from '../../../../assets/menu/soup-bg.jpg'
import FoodCard from '../../../FoodCard/FoodCard';
import useMenu from '../../../../hooks/useMenu';

const ChifRecomend = () => {
    const salads = [
        { id: 1, name: "Caesar Pizza", recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.", image: `${img1}` },
        { id: 2, name: "Caesar Salad", recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.", image: `${img2}` },
        { id: 3, name: "Caesar Soup", recipe: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.", image: `${img3}` },
    ];
    return (
        <section>
            <SectionTitle
                heading={'Chef Recommends'}
                subHeading={'Should Try'}
            ></SectionTitle>

            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {salads.map((salad) => (
                        <FoodCard key={salad._id} salad={salad}></FoodCard>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ChifRecomend;