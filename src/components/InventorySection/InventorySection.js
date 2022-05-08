import React, { useEffect, useState } from 'react';
import SingleInventory from '../SingleInventory/SingleInventory';
import './InventorySection.css';

const InventorySection = () => {
    const [featureCar, setFeatureCar] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-wildwood-76810.herokuapp.com/cars?page=0&size=6')
            .then(res => res.json())
            .then(data => setFeatureCar(data))
            .catch(err => console.error(err))
    }, []);

    return (
        <section className='inventory-section'>
            <div className="container">
                <h2 className='title text-center'><span>Featured</span> Inventory</h2>

                <div className="row g-5">
                    {
                        featureCar?.map(car => <SingleInventory key={car._id} car={car} col="col-lg-4 col-md-6" />)
                    }
                </div>
            </div>
        </section>
    );
};

export default InventorySection;