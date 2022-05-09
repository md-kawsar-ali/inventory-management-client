import React from 'react';
import SubHeader from '../../SubHeader/SubHeader';
import AllCars from './../../AllCars/AllCars';

const Manage = () => {
    return (
        <main>
            <SubHeader title="Manage All Cars" />
            <AllCars />
        </main>
    );
};

export default Manage;