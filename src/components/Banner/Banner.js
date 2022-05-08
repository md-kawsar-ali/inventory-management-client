import React from 'react';
import './Banner.css';
import bannerBg from './../../img/banner-1.jpg';

const Banner = () => {
    return (
        <section className="banner" style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1><span>No #1</span> Car Supplier <br />in the World!</h1>
                        <p>Motodeal is the number one car supplier in the entire world.<br /> We have a huge collection of most expensive cars.</p>
                        <a href="/" className="theme-btn">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;