import React from 'react';
import notFound from './../../../img/notfound.png';

const NotFound = () => {
    return (
        <section style={{ backgroundColor: '#fde4e1' }}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-7 col-8">
                        <img src={notFound} className='img-fluid mx-auto' alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;