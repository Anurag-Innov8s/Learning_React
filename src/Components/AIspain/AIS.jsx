import React from 'react';
import './AI.css'; // Make sure to create a separate CSS file (AICards.css) and import it
import { Link } from 'react-router-dom';

const AI = () => {
    return (
        <div>
            <div className="ai-container">
                <div className="ai-card">
                    <h2>Introducción a la Inteligencia Artificial</h2>
                    <p>
                        La Inteligencia Artificial (IA) es una disciplina de la informática que crea máquinas inteligentes capaces de aprender y realizar tareas. Abarca áreas como el aprendizaje automático y la visión por computadora, con aplicaciones en salud y robótica. La IA está transformando la tecnología, influyendo en la vida diaria de diversas maneras.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Sus Tipos</h2>
                    <ol>
                        <li>IA Estrecha o Débil</li>
                        <li>IA General o Fuerte</li>
                        <li>Superinteligencia Artificial</li>
                        <li>Máquina Reactiva</li>
                        <li>IA Autoconsciente</li>
                    </ol>
                </div>
                <div className="ai-card">
                    <h2>ASI</h2>
                    <p>
                        La Superinteligencia Artificial (ASI) vislumbra máquinas superando la inteligencia humana en todos los dominios, planteando consideraciones éticas y sociales. Esta forma avanzada de IA tiene el potencial de superar a los humanos en resolución de problemas y creatividad, lo que destaca la necesidad de un desarrollo responsable.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Procesamiento del Lenguaje Natural</h2>
                    <p>
                        El Procesamiento del Lenguaje Natural (PLN) es un campo de la inteligencia artificial centrado en capacitar a las computadoras para entender, interpretar y generar lenguaje humano. Utilizando algoritmos y modelos lingüísticos, el PLN permite a las máquinas comprender y responder a lenguaje escrito o hablado.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Visión por Computadora</h2>
                    <p>
                        La Visión por Computadora implica el desarrollo de algoritmos y modelos que permiten a las máquinas interpretar y tomar decisiones basadas en datos visuales. Este campo de la inteligencia artificial capacita a las computadoras para analizar y entender imágenes y videos, replicando las capacidades de visión humana.
                    </p>
                </div>
            </div>
            <div className='aibtn'>
                <Link to={"/read/ml"}>
                    <button className='mlbtn'>Ir a ML</button>
                </Link>
                <Link to={"/read/AI/"}>
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
