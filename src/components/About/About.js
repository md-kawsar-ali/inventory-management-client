import React from 'react';
import carImg from './../../img/car-1.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section style={{ background: '#F5F4F4', padding: '80px 0' }}>
            <div className="container">
                <div className="row justify-content-center align-items-center g-5">
                    <div className="col-lg-6 px-5">
                        <img src={carImg} className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-5">
                        <h2 className='fw-bold mb-4'>World largest automotive Inventory.</h2>
                        <p>NO #1 CAR SUPPLIER! Motodeal is the number one car supplier in the entire world. We have a huge collection of most expensive cars.</p>
                        <p>It is easy to use and manageable inventory management system created with React JS, Node JS and Mongodb. Try exploring the inventory management system</p>
                        <Link to="/registration" className='theme-btn mt-2'>Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;