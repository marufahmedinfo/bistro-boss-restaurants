import React from 'react';
import MenuItem from '../../Home/PopularMenu/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img, subTitle }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} subTitle={subTitle} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16  max-w-screen-xl mx-auto">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className='flex justify-center items-center'>

                    <button className="btn btn-outline border-0 border-b-4 mt-4 flex justify-center items-center">ORDER YOUR FAVORITE FOOD</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;