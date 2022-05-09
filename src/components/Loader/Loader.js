import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <section className='d-flex align-items-center justify-content-center' style={{ minHeight: '90vh' }}>
            <Spinner style={{ color: 'var(--red)' }} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </section>
    );
};

export default Loader;