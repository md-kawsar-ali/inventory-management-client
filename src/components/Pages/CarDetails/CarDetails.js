import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CarDetails.css';
import SubHeader from './../../SubHeader/SubHeader';
import { ListGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import Loader from './../../Loader/Loader';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://sheltered-wildwood-76810.herokuapp.com/cars/${id}`)
            .then(res => res.json())
            .then(data => {
                setCar(data);
                setLoading(false);
            })
            .catch(err => {
                console.dir(err);
                setLoading(false);
            })
    }, [id]);

    // Handle Delivery
    const handleDelivery = () => {
        if (parseInt(car.quantity) === 0) {
            toast.error('Car Not Available! (Out of Stock)', {
                duration: 3000
            })
            return;
        }

        const quantity = parseInt(car.quantity) - 1;

        fetch(`https://sheltered-wildwood-76810.herokuapp.com/car/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then((data) => {
                setCar(prevCar => ({
                    ...prevCar,
                    quantity
                }));

                toast.success('Delivered Successfully!', {
                    duration: 3000
                });
            })
            .catch(err => {
                toast.error('Something went wrong! Check Internet Connection', {
                    duration: 3000
                })
            })
    }

    // Handle ReStock
    const handleStock = (e) => {
        e.preventDefault();
        const inputField = parseInt(e.target.quantity.value);

        if (inputField > 0) {
            const quantity = parseInt(car.quantity) + inputField;

            fetch(`https://sheltered-wildwood-76810.herokuapp.com/car/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quantity })
            })
                .then(res => res.json())
                .then((data) => {
                    setCar(prevCar => ({
                        ...prevCar,
                        quantity
                    }));

                    toast.success('Stock Added Successfully!', {
                        duration: 3000
                    });

                    e.target.reset();
                })
                .catch(err => {
                    toast.error('Something went wrong! Check Internet Connection', {
                        duration: 3000
                    })
                })
        } else {
            toast.error('Please, enter valid quantity!', {
                duration: 3000
            })
        }
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <main>
            <SubHeader title={car.model} />

            <section className='car-details'>
                <div className="container">
                    <div className="row justify-content-center g-5">
                        <div className="col-lg-6">
                            <img src={car.img} className="w-100 mb-4" style={{ borderRadius: '10px' }} alt={car.model} />
                            <h3>Overview</h3>
                            <p>{car.model} is a high quality modern {car.transmission} car with {car.engine}cc engine. It has {car.doors} doors and {car.body} body.</p>

                            <p className="mb-0">Packed with power normally reserved for the track, M generates performa nce unlike anything else. And after four decades of delivering hair-raising thrills, it's still pushing the limits. But don't just take our word for it. Grip the wheel of any of our eight M models—from coupes to convertibles to Sports Activity Vehicles®</p>
                        </div>

                        <div className="col-lg-4">
                            <div className="details">
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <strong>{car.model}</strong>
                                        <strong>${car.price}</strong>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Year:</span>
                                        <span>{car.year}</span>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Engine:</span>
                                        <span>{car.engine}cc</span>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Transmission:</span>
                                        <span>{car.transmission}</span>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Body:</span>
                                        <span>{car.body}</span>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Color:</span>
                                        <span>{car.color}</span>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Doors:</span>
                                        <span>{car.doors}</span>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Dealer:</span>
                                        <span>{car.dealer}</span>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="d-flex justify-content-between">
                                        <span>Quantity:</span>
                                        <span>{car.quantity > 0 ? car.quantity : 'Out of Stock'}</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>

                            <div className="delivery">
                                <button onClick={handleDelivery} className="theme-btn w-100">Delivered</button>
                            </div>

                            <Form onSubmit={handleStock}>
                                <div className="row g-3">
                                    <div className='col'>
                                        <Form.Control name="quantity" size="lg" type="number" placeholder="Quantity" />
                                    </div>
                                    <div className='col'>
                                        <button type="submit" className="theme-btn w-100">Restock</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CarDetails;