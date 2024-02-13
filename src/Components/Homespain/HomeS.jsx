import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='center-buttons'>

            <div className='homebutton'>
                <h2>Comienza con Inteligencia Artificial</h2>
                <Link to={"/read/AI/spanish"}>
                    <button>Inteligencia Artificial</button>
                </Link>
            </div>
            <div className='homebutton'>
                <h2>Comienza con Aprendizaje Automático</h2>
                <Link to={"/read/Ml/spanish"}>
                    <button>Aprendizaje Automático</button>
                </Link>
            </div>
            <div className='homebutton'>
                <h2>Comienza con Redes Neuronales Artificiales</h2>
                <Link to={"/read/ann/spanish"}>
                    <button>Redes Neuronales Artificiales</button>
                </Link>
            </div>
            <div className='homebutton'>
                <h2>Comienza con Aprendizaje Profundo</h2>
                <Link to={"/read/Dl/spanish"}>
                    <button>Aprendizaje Profundo</button>
                </Link>
            </div>
            <div className='centerbtn'>
                <Link to={"/Home"}>
                    <button>Cambiar a inglés</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
