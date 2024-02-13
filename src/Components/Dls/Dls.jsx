import React from 'react';
import './Dls.css'; // Make sure to create a separate CSS file (Dl.css) and import it
import { Link } from 'react-router-dom';

const AI = () => {
    return (
        <div>
            <div className="ai-container">
                <div className="ai-card">
                    <h2>Introducción al Aprendizaje Profundo</h2>
                    <p>
                        Un subconjunto del aprendizaje automático que utiliza redes neuronales con múltiples capas, permitiendo que las computadoras aprendan automáticamente patrones y representaciones complejas a partir de datos, aplicado comúnmente en tareas como reconocimiento de imágenes y procesamiento del lenguaje natural.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Tipos de Aprendizaje Profundo</h2>
                    <ol>
                        <li>Redes Neuronales Convolucionales (CNN)</li>
                        <li>Redes Neuronales Recurrentes (RNN)</li>
                        <li>Redes de Memoria a Corto y Largo Plazo (LSTM)</li>
                        <li>Redes de Memoria a Corto y Largo Plazo Bidireccionales (Bi-LSTM)</li>
                        <li>Redes Generativas Adversarias (GAN)</li>
                        <li>Autoencoders</li>
                    </ol>

                </div>
                <div className="ai-card">
                    <h2>Aprendizaje por Transferencia</h2>
                    <p>
                        El Aprendizaje por Transferencia es un enfoque de aprendizaje automático que utiliza modelos preentrenados para una tarea específica para mejorar el rendimiento en una tarea relacionada, aprovechando las características y patrones aprendidos. Esto es especialmente útil cuando los datos etiquetados para la nueva tarea son limitados, ya que permite transferir conocimientos de una tarea a otra.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Aprendizaje Auto-Supervisado</h2>
                    <p>
                        Un enfoque de aprendizaje automático donde un modelo se entrena con datos no etiquetados creando sus propias pseudoetiquetas, a menudo utilizando técnicas como aumento de datos o tareas de pretexto. Este método es beneficioso cuando los datos etiquetados son limitados, permitiendo que el modelo aprenda representaciones significativas de manera autónoma.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Redes Neuronales de Grafos</h2>
                    <p>
                        Las Redes Neuronales de Grafos (GNNs) son una clase de redes neuronales diseñadas para operar en datos estructurados como grafos, capturando relaciones y dependencias entre nodos interconectados. Las GNNs son especialmente útiles para tareas donde los datos se representan naturalmente como grafos, como análisis de redes sociales, sistemas de recomendación y química molecular.
                    </p>
                </div>
            </div>
            <div className='aibtn'>
                <Link to={"/read/Ann/spanish"}>
                    <button className='mlbtn'>Leer ANN</button>
                </Link>
                <Link to={"/read/Dl/"}>
                    <button className='aispanish'>Cambiar idioma a inglés</button>
                </Link>
                <Link to={"/Home"}>
                    <button className='aispanish'>Inicio</button>
                </Link>
                <Link to={"/Home"}>
                    <button className='aispanish'>Siguiente</button>
                </Link>
            </div>
        </div>
    );
};

export default AI;
