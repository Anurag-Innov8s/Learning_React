import React from 'react';
import './Mls.css'; // Make sure to create a separate CSS file (AICards.css) and import it
import { Link } from 'react-router-dom';

const Mls = () => {
    return (
        <div>
            <div className="ai-container">
                <div className="ai-card">
                    <h2>Introducción al Aprendizaje Automático</h2>
                    <p>
                        El Aprendizaje Automático es una rama de la inteligencia artificial que permite a las computadoras aprender y mejorar a partir de datos. Involucra el desarrollo de algoritmos que pueden hacer predicciones o tomar decisiones sin programación explícita.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Tipos de Aprendizaje Automático</h2>
                    <ol>
                        <li>Aprendizaje Supervisado</li>
                        <li>Aprendizaje No Supervisado</li>
                        <li>Aprendizaje por Reforzamiento</li>
                    </ol>
                </div>
                <div className="ai-card">
                    <h2>Aprendizaje Supervisado</h2>
                    <p>
                        El Aprendizaje Supervisado implica entrenar un modelo con datos etiquetados para hacer predicciones basadas en pares de entrada y salida, con el objetivo de minimizar el error de predicción en datos nuevos y no vistos. Ejemplo: Clasificación y Regresión.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Aprendizaje No Supervisado</h2>
                    <p>
                        El Aprendizaje No Supervisado implica entrenar un modelo con datos no etiquetados para descubrir patrones, estructuras o relaciones dentro de los datos sin una guía de salida explícita. Ejemplo: Agrupamiento.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Aprendizaje por Reforzamiento</h2>
                    <p>
                        El Aprendizaje por Reforzamiento se centra en entrenar agentes para tomar secuencias de decisiones en un entorno, aprendiendo mediante ensayo y error al recibir retroalimentación en forma de recompensas o penalizaciones. Ejemplo: Exploración.
                    </p>
                </div>
            </div>
            <div className='aibtn'>
                <Link to={"/read/AI/spanish"}>
                    <button className='mlbtn'>Leer AI</button>
                </Link>
                <Link to={"/read/ann/spanish"}>
                    <button className='mlbtn'>Ir a ANN</button>
                </Link>
                <Link to={"/read/ML"}>
                    <button className='aispanish'>Cambiar idioma a inglés</button>
                </Link>
                <Link to={"/Home"}>
                    <button className='aispanish'>Inicio</button>
                </Link>
            </div>
        </div>
    );
};

export default Mls;
