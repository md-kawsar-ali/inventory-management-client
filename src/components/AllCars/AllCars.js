import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './AllCars.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AllCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-wildwood-76810.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
            .catch(err => console.error(err))
    }, []);

    // Handle Delete
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`https://sheltered-wildwood-76810.herokuapp.com/car/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = cars?.filter(car => car._id !== id);
                    setCars(remaining);
                    toast.success('Deleted Successfully!');
                })
                .catch(err => toast.error('Failed to Delete!'))
        }
    }

    return (
        <section className='all-cars'>
            <div className="container">
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars?.map((car, index) => <tr key={car._id}>
                                <td>{index + 1}</td>
                                <td style={{ height: '60px', width: '60px', padding: '0' }}>
                                    <img src={car.img} alt="" />
                                </td>
                                <td>
                                    <Link to={`/car/${car._id}`}>{car.model}</Link>
                                </td>
                                <td>{car.year}</td>
                                <td>{car.color}</td>
                                <td>${car.price}</td>
                                <td>{car.quantity}</td>
                                <td>{car.dealer}</td>
                                <td style={{ width: '190px' }}>
                                    <button onClick={() => handleDelete(car._id)} className='theme-btn py-1 px-3 me-2'>Delete</button>
                                    <button className='theme-btn py-1 px-3 bg-success'>Edit</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default AllCars;