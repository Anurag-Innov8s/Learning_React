import React from 'react';
import './Thankyou.css';
import { Link } from 'react-router-dom';

const Thankyou = () => {
    return (
        <div className='tk'>
            <div className='tk-image'>
                <h1>Thank You</h1>
            </div>
            <div className='tk-button-container'>
                <Link to="/Home">
                    <button className='tkbtn'>Click to restart</button>
                </Link>
            </div>
        </div>
    );
};

export default Thankyou;
