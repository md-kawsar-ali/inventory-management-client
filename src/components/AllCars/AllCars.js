import React, { useState, useEffect } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import './AllCars.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Loader from './../Loader/Loader';

const AllCars = (props) => {
    const { title, uid } = props;
    const [cars, setCars] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

    // Get Cars
    useEffect(() => {
        let url;

        if (uid) {
            url = `https://sheltered-wildwood-76810.herokuapp.com/cars/user?page=${page}&size=10&uid=${uid}`;
        } else if (uid === undefined) {
            url = `https://sheltered-wildwood-76810.herokuapp.com/cars?page=${page}&size=10`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })
    }, [page, uid]);

    // Count Cars and Pages
    useEffect(() => {
        let url;

        if (uid) {
            url = `https://sheltered-wildwood-76810.herokuapp.com/carCount/${uid}`;
        } else if (uid === undefined) {
            url = `https://sheltered-wildwood-76810.herokuapp.com/carCount`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })
    }, [uid]);

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

    // Pagination
    const headerHeight = document.querySelector('header')?.offsetHeight;
    const subHeaderHeight = document.querySelector('.sub-header')?.offsetHeight;
    const topOffset = headerHeight + subHeaderHeight;

    let items = [];
    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => {
                setLoading(true);
                window.scrollTo(0, topOffset);
                setPage(number - 1);
            }} active={(number - 1) === page}>
                {number}
            </Pagination.Item>
        );
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <section className='all-cars'>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className='mb-0 lh-1'>{title}</h2>
                    <Link className='theme-btn bg-success text-white mb-2' to='/add'>Add New</Link>
                </div>

                {
                    cars.length !== 0 ? <Table bordered hover>
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
                                    <td>{page * 10 + index + 1}</td>
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
                                        <Link to={`/edit/${car._id}`} className='theme-btn text-white py-1 px-3 bg-success'>Edit</Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                        :
                        <h3 className='text-center text-danger fw-bold mt-5 mb-0'>No Inventory Found!</h3>
                }

                {
                    pageCount > 1 && <Pagination className="mt-5 gap-2">{items}</Pagination>
                }
            </div>
        </section>
    );
};

export default AllCars;