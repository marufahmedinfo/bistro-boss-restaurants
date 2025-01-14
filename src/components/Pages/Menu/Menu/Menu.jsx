import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuimg from '../../../../assets/menu/banner3.jpg'
// import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../../hooks/useMenu';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover
                img={menuimg}
                title={'Our Menu'}
                subTitle={'Enthusiastically parallel task backward-compatible niche markets through just in time users. Rapidiously administrate plug-and-play core competencies whereas efficient metrics. Holisticly recaptiualize highly efficient supply chains without superior supply chains. Enthusiastically brand virtual schemas via top-line expertise.'}
            ></Cover>
            <SectionTitle
                heading="TODAY'S OFFER"
                subHeading="Don't miss"
            ></SectionTitle>
             {/* offered menu items */}
             <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={dessert} title="dessert" img={dessertImg} subTitle={'Globally matrix functionalized supply chains through user friendly materials. Distinctively deploy bricks-and-clicks ideas after value-added total linkage. Progressively deliver quality synergy after technically sound testing procedures. Competently target bleeding-edge leadership after effective technologies. Credibly redefine process-centric.'}></MenuCategory>

            
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} subTitle={'Globally matrix functionalized supply chains through user friendly materials. Distinctively deploy bricks-and-clicks ideas after value-added total linkage. Progressively deliver quality synergy after technically sound testing procedures. Competently target bleeding-edge leadership after effective technologies. Credibly redefine process-centric.'}></MenuCategory>

            
            <MenuCategory items={salad} title={"salad"} img={saladImg} subTitle={'Globally matrix functionalized supply chains through user friendly materials. Distinctively deploy bricks-and-clicks ideas after value-added total linkage. Progressively deliver quality synergy after technically sound testing procedures. Competently target bleeding-edge leadership after effective technologies. Credibly redefine process-centric.'}></MenuCategory>

            
            <MenuCategory items={soup} title={"soup"} img={soupImg} subTitle={'Globally matrix functionalized supply chains through user friendly materials. Distinctively deploy bricks-and-clicks ideas after value-added total linkage. Progressively deliver quality synergy after technically sound testing procedures. Competently target bleeding-edge leadership after effective technologies. Credibly redefine process-centric.'}></MenuCategory>

            
        </div>
    );
};

export default Menu;