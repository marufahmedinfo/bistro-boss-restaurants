import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import scoping from '../../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../../hooks/useMenu';
import OrderTab from '../Order Tab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex =  categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
              <Helmet>
                            <title>Bistro Boss | Our Shop</title>
                        </Helmet>
            
            <Cover
                img={scoping}
                title={'OUR SHOP'}
                subTitle={'Would you like to try a dish?'}
            ></Cover>

            <div className='max-w-screen-xl mx-auto py-10'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drink</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab
                            items={salad}
                        ></OrderTab>

                    </TabPanel>
                    <TabPanel>
                    <OrderTab
                            items={pizza}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab
                            items={soup}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab
                            items={dessert}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab
                            items={drinks}
                        ></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;