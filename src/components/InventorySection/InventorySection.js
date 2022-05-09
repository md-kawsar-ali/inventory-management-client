import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleInventory from '../SingleInventory/SingleInventory';
import './InventorySection.css';
import Loader from './../Loader/Loader';

const InventorySection = () => {
    const [featureCar, setFeatureCar] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://sheltered-wildwood-76810.herokuapp.com/cars?page=0&size=6')
            .then(res => res.json())
            .then(data => {
                setFeatureCar(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <section className='inventory-section'>
            <div className="container">
                <h2 className='title text-center'><span>Featured</span> Inventory</h2>

                <div className="row g-5">
                    {
                        featureCar?.map(car => <SingleInventory key={car._id} car={car} col="col-lg-4 col-md-6" />)
                    }
                </div>

                <div className="text-center mt-5">
                    <Link className='theme-btn' to="/manage">View All Cars</Link>
                </div>
            </div>
        </section>
    );
};

export default InventorySection;