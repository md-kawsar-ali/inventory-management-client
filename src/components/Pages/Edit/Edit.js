import React, { useState, useEffect } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import SubHeader from './../../SubHeader/SubHeader';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Edit = () => {
    const { id } = useParams();
    const [model, setModel] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');
    const [engine, setEngine] = useState('');
    const [body, setBody] = useState('');
    const [transmission, setTransmission] = useState('');
    const [color, setColor] = useState('');
    const [doors, setDoors] = useState('');
    const [quantity, setQuantity] = useState('');
    const [dealer, setDealer] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://sheltered-wildwood-76810.herokuapp.com/cars/${id}`)
            .then(res => res.json())
            .then(data => {
                setModel(data.model);
                setImg(data.img);
                setPrice(data.price);
                setYear(data.year);
                setEngine(data.engine);
                setBody(data.body);
                setTransmission(data.transmission);
                setColor(data.color);
                setDoors(data.doors);
                setQuantity(data.quantity);
                setDealer(data.dealer);
            })
            .catch(err => console.dir(err))
    }, [id]);

    // Handle Model
    const handleModel = (e) => {
        setModel(e.target.value);
    }

    // Handle Image
    const handleImg = (e) => {
        setImg(e.target.value);
    }

    // Handle Price
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    // Handle Year
    const handleYear = (e) => {
        setYear(e.target.value);
    }

    // Handle Engine
    const handleEngine = (e) => {
        setEngine(e.target.value);
    }

    // Handle Body
    const handleBody = (e) => {
        setBody(e.target.value);
    }

    // Handle Transmission
    const handleTransmission = (e) => {
        setTransmission(e.target.value);
    }

    // Handle Color
    const handleColor = (e) => {
        setColor(e.target.value);
    }

    // Handle Doors
    const handleDoors = (e) => {
        setDoors(e.target.value);
    }

    // Handle Quantity
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    // Handle Dealer
    const handleDealer = (e) => {
        setDealer(e.target.value);
    }

    // Handle Update
    const handleUpdate = (e) => {
        e.preventDefault();

        if (model && img && price && year && engine && body && transmission && color && doors && quantity && dealer) {
            const newCar = {
                model, img, price, year, engine, body, transmission, color, doors, quantity, dealer
            }

            fetch(`https://sheltered-wildwood-76810.herokuapp.com/cars/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCar)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Car Successfully Updated!', { duration: 5000 });
                    setTimeout(() => {
                        navigate(`/car/${id}`);
                    }, 2000);
                })
                .catch(err => toast.error('Something Went Wrong!'))
        }
    }

    return (
        <main>
            <SubHeader title="Edit Car Detail" />

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form onSubmit={handleUpdate} className='row g-3'>
                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Model"
                                    >
                                        <Form.Control type="text" onChange={handleModel} placeholder="Model" value={model} required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Image Link"
                                    >
                                        <Form.Control type="url" onChange={handleImg} value={img} placeholder="Image Link" required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Price"
                                    >
                                        <Form.Control type="number" onChange={handlePrice} value={price} placeholder="Price" required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Year"
                                    >
                                        <Form.Control type="text" onChange={handleYear} value={year} placeholder="Year" required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Engine"
                                    >
                                        <Form.Control type="text" onChange={handleEngine} value={engine} placeholder="Engine" required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Body"
                                    >
                                        <Form.Control type="text" onChange={handleBody} value={body} placeholder="Body" required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Transmission"
                                    >
                                        <Form.Control type="text" onChange={handleTransmission} value={transmission} placeholder="Transmission" required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Color"
                                    >
                                        <Form.Control type="text" onChange={handleColor} value={color} placeholder="Color" required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Doors"
                                    >
                                        <Form.Control type="text" onChange={handleDoors} value={doors} placeholder="Doors" required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Quantity"
                                    >
                                        <Form.Control type="number" onChange={handleQuantity} value={quantity} placeholder="Quantity" required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Dealer"
                                    >
                                        <Form.Control type="text" onChange={handleDealer} value={dealer} placeholder="Dealer" required />
                                    </FloatingLabel>
                                </div>

                                <div className="col-lg-4">
                                    <button type="submit" className="theme-btn w-100 h-100">Make Changes</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Edit;