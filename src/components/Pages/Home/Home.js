import React from 'react';
import About from '../../About/About';
import Brand from '../../Brand/Brand';
import Banner from './../../Banner/Banner';
import InventorySection from './../../InventorySection/InventorySection';

const Home = () => {
    return (
        <main>
            <Banner />
            <InventorySection />
            <About />
            <Brand />
        </main>
    );
};

export default Home;