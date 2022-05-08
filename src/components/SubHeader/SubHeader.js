import React from 'react';
import headerBg from './../../img/banner-1.jpg';

const SubHeader = (props) => {

    const headerStyle = {
        backgroundImage: `url(${headerBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '0px'
    }

    return (
        <section style={headerStyle}>
            <div style={{ background: 'rgba(0, 0, 0, 0.7)', padding: '140px 0px' }}>
                <div className="container">
                    <h1 className='text-white mb-0 text-center text-uppercase'>{props.title}</h1>
                </div>
            </div>
        </section>
    );
};

export default SubHeader;