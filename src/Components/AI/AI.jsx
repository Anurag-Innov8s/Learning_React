import React from 'react';
import './AI.css'; // Make sure to create a separate CSS file (AICards.css) and import it
import { Link } from 'react-router-dom';
const AI = () => {
    return (
        <div>
            <div className="ai-container">
                <div className="ai-card">
                    <h2>Introduction to AI</h2>
                    <p>
                        Artificial Intelligence (AI) is a computer science discipline creating intelligent machines that learn and execute tasks. It encompasses areas like machine learning and computer vision, with applications in healthcare and robotics. AI is reshaping technology, influencing daily life in diverse ways.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Its Types</h2>
                    <ol>
                        <li>Narrow or Weak AI</li>
                        <li>General or Strong AI</li>
                        <li>Artificial Superintellingence</li>
                        <li>Reactive Machine</li>
                        <li>Self-aware AI</li>
                    </ol>
                </div>
                <div className="ai-card">
                    <h2>ASI</h2>
                    <p>
                        Artificial Superintelligence (ASI) envisions machines surpassing human intelligence across all domains, posing ethical and societal considerations. This advanced form of AI has the potential to outperform humans in problem-solving and creativity, prompting the need for responsible development.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Natural Language Processing</h2>
                    <p>
                        Natural Language Processing (NLP) is a field of artificial intelligence focused on enabling computers to understand, interpret, and generate human language. Using algorithms and linguistic models, NLP allows machines to comprehend and respond to written or spoken language.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Computer Vision</h2>
                    <p>
                        Computer Vision involves the development of algorithms and models enabling machines to interpret and make decisions based on visual data. This field of artificial intelligence enables computers to analyze and understand images and videos, replicating human vision capabilities.
                    </p>
                </div>
            </div>
            <div className='aibtn'><Link to={"/read/ml"}>
                <button className='mlbtn'>Move to ML</button>
            </Link>
                <Link to={"/read/AI/spanish"}>
                    <button className='aispanish'>Change language to Spanish</button>
                </Link>
                <Link to={"/Home"}>
                    <button className='aispanish'>Home</button>
                </Link></div>
        </div>
    );
};

export default AI;
