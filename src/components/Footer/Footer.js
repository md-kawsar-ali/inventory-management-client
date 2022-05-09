import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './../../img/logo.png';

const Footer = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-wildwood-76810.herokuapp.com/cars?page=0&size=5')
            .then(res => res.json())
            .then(data => setCars(data))
            .catch(err => console.error(err))
    }, []);

    const date = new Date();
    const Year = date.getFullYear();

    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-md-6">
                            <img src={logo} className="mb-4" alt="" />
                            <p>NO #1 CAR SUPPLIER! Motodeal is the number one car supplier in the entire world. We have a huge collection of most expensive cars.</p>
                            <a href="mailto:info@motodeal.co">Email: info@motodeal.co</a>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <h4>Navigation</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Services</Link></li>
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Terms & conditions</Link></li>
                                <li><Link to="/">FAQ</Link></li>
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4>Popular Cars</h4>
                            <ul>
                                {
                                    cars?.map(car => <li key={car._id}><Link to={`/car/${car._id}`}>{car.model}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <p>Copyright &copy; {Year}. All rights reserved!</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;