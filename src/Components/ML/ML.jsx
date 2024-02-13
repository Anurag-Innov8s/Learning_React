import React from 'react';
import './ML.css'; // Make sure to create a separate CSS file (AICards.css) and import it
import { Link } from 'react-router-dom';
const AI = () => {
    return (
        <div>
            <div className="ai-container">
                <div className="ai-card">
                    <h2>Introduction to Machine Learning</h2>
                    <p>
                        Machine Learning is a branch of artificial intelligence that empowers computers to learn and improve from data. It involves developing algorithms that can make predictions or decisions without explicit programming.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Types of Machine Learning</h2>
                    <ol>
                        <li>Supervised Learning</li>
                        <li>Unsupervised Learning</li>
                        <li>Reinforcement Learning</li>
                        {/* <li>Reactive Machine</li>
                        <li>Self-aware AI</li> */}
                    </ol>
                </div>
                <div className="ai-card">
                    <h2>Supervised Learning</h2>
                    <p>
                        Supervised Learning involves training a model on labeled data to make predictions based on input-output pairs, aiming to minimize the prediction error on new, unseen data.Eg-Classification and Regression
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Unsupervised Learning</h2>
                    <p>
                        Unsupervised Learning Involves training a model on unlabeled data to discover patterns, structures, or relationships within the data without explicit output guidance.Eg-Clustering
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Reinforcement Learning</h2>
                    <p>
                        Reinforcement Learning: Focuses on training agents to make sequences of decisions in an environment, learning through trial and error by receiving feedback in the form of rewards or penalties.Eg-Exploration
                    </p>
                </div>
            </div>
            <div className='aibtn'>
                <Link to={"/read/AI/"}>
                    <button className='mlbtn'>Read AI</button>
                </Link>
                <Link to={"/read/ann"}>
                    <button className='mlbtn'>Move to ANN</button>
                </Link>
                <Link to={"/read/Ml/spanish"}>
                    <button className='aispanish'>Change language to Spanish</button>
                </Link>
                <Link to={"/Home"}>
                    <button className='aispanish'>Home</button>
                </Link></div>
        </div>
    );
};

export default AI;
