import React from 'react';
import InventorySection from '../../InventorySection/InventorySection';
import SubHeader from './../../SubHeader/SubHeader';

const LatestInventory = () => {
    return (
        <main>
            <SubHeader title="Latest Inventory" />
            <InventorySection />
        </main>
    );
};

export default LatestInventory;