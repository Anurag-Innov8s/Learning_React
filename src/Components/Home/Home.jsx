import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='center-buttons'>

            <div className='homebutton'>
                <h2>Get started with Artificial Intelligence</h2>
                <Link to={"/read/AI"}>
                    <button>Artificial Intelligence</button>
                </Link>
            </div>
            <div className='homebutton'>
                <h2>Get started with Machine Learning</h2>
                <Link to={"/read/Ml"}>
                    <button>Machine Learning</button>
                </Link>
            </div>
            <div className='homebutton'>
                <h2>Get started with Artificial Neural Network</h2>
                <Link to={"/read/ann"}>
                    <button>Artificial Neural Network</button>
                </Link>
            </div>
            <div className='homebutton'>
                <h2>Get started with Deep Learning</h2>
                <Link to={"/read/Dl"}>
                    <button>Deep Learning</button>
                </Link>
            </div>
            <div className='centerbtn'>
                <Link to={"/home/spain"}>
                    <button>Switch to Spanish</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
