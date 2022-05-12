import React from 'react';
import imgOne from './../../img/brand-1.png';
import imgTwo from './../../img/brand-2.png';
import imgThree from './../../img/brand-3.png';
import imgFour from './../../img/brand-4.png';
import imgFive from './../../img/brand-5.png';

const Brand = () => {
    return (
        <section className='text-center'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-9 col-md-10 col-12">
                        <h2 className='title mb-4'><span>Luxurious</span> Brand</h2>
                        <p className='text-muted'>Packed with power normally reserved for the track, M generates performa nce unlike anything else. And after four decades of delivering hair-raising thrills, it's still pushing the limits. But don't just take our word for it. Grip the wheel of any of our eight M models—from coupes to convertibles to Sports Activity Vehicles®</p>

                        <div className="row justify-content-between align-items-center mt-3 gy-4 gx-1 gx-md-4">
                            <div className="col-lg-2 col-md-2 col-2">
                                <img src={imgOne} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <img src={imgTwo} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <img src={imgThree} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <img src={imgFour} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <img src={imgFive} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand;