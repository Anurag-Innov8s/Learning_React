import React from 'react';
import './Anns.css'; // Make sure to create a separate CSS file (AICards.css) and import it
import { Link } from 'react-router-dom';

const AI = () => {
    return (
        <div>
            <div className="ai-container">
                <div className="ai-card">
                    <h2>Introducción a las Redes Neuronales Artificiales</h2>
                    <p>
                        Las Redes Neuronales Artificiales (ANNs) son modelos computacionales inspirados en la estructura y función del cerebro humano. Consisten en nodos interconectados, a menudo organizados en capas, donde cada nodo representa una unidad de procesamiento similar a una neurona. Las ANNs son un componente fundamental del aprendizaje profundo.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Tipos de Redes Neuronales</h2>
                    <ol>
                        <li>Redes Neuronales de Retroalimentación (FNN)</li>
                        <li>Redes de Funciones de Base Radial (RBFN)</li>
                        <li>Mapas Auto-organizativos de Kohonen (SOM)</li>
                        <li>Redes de Hopfield</li>
                    </ol>
                </div>
                <div className="ai-card">
                    <h2>Modelo de Perceptrón</h2>
                    <p>
                        El modelo de Perceptrón es una unidad fundamental de la red neuronal que toma múltiples entradas binarias, aplica sumas ponderadas y produce una salida binaria a través de una función de activación. Cada entrada se asocia con un peso, y la salida se determina según si la suma ponderada supera un umbral predefinido.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Perceptrón Multicapa (MLP)</h2>
                    <p>
                        El Perceptrón Multicapa (MLP) es una arquitectura de red neuronal con capas de entrada, ocultas y de salida. Utilizando funciones de activación, aprende patrones complejos mediante retropropagación y descenso de gradiente. Bien adaptado para tareas como reconocimiento de patrones y modelado predictivo, los MLP son versátiles y fundamentales en aplicaciones de redes neuronales.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Propagación hacia Atrás (Back Propagation)</h2>
                    <p>
                        La Propagación hacia Atrás es un algoritmo de aprendizaje supervisado para entrenar redes neuronales. Consta de un pase hacia adelante para calcular predicciones y un pase hacia atrás para ajustar pesos basados en el error calculado. Al actualizar iterativamente los pesos mediante descenso de gradiente, la Propagación hacia Atrás busca minimizar la diferencia entre las salidas predichas y reales, mejorando así el aprendizaje y las capacidades predictivas de la red.
                    </p>
                </div>
            </div>
            <div className='aibtn'>
                <Link to={"/read/Ml/spanish"}>
                    <button className='mlbtn'>Leer ML</button>
                </Link>
                <Link to={"/read/dl/spanish"}>
                    <button className='mlbtn'>Ir a DL</button>
                </Link>
                <Link to={"/read/ann/"}>
                    <button className='aispanish'>Cambiar idioma a inglés</button>
                </Link>
                <Link to={"/Home"}>
                    <button className='aispanish'>Inicio</button>
                </Link>
            </div>
        </div>
    );
};

export default AI;
