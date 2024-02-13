import React from 'react';
import './Dl.css'; // Make sure to create a separate CSS file (AICards.css) and import it
import { Link } from 'react-router-dom';
const AI = () => {
    return (
        <div>
            <div className="ai-container">
                <div className="ai-card">
                    <h2>Introduction to Deep Learning</h2>
                    <p>
                        A subset of machine learning utilizing neural networks with multiple layers, enabling computers to automatically learn complex patterns and representations from data, often applied in tasks like image recognition and natural language processing..
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Types of Deep Learning</h2>
                    <ol>
                        
                        <li>Convolutional Neural Networks (CNN)</li>
                        <li>Recurrent Neural Networks (RNN)</li>
                        <li>Long Short-Term Memory Networks (LSTM)</li>
                        <li>Bi-directional LSTM (Bi-LSTM)</li>
                        <li>Generative Adversarial Networks (GAN)</li>
                        <li>Autoencoders</li>
                    </ol>

                </div>
                <div className="ai-card">
                    <h2>Transfer Learning</h2>
                    <p>
                        Transfer Learning is a machine learning approach that uses pre-trained models for a specific task to enhance performance on a related task, leveraging learned features and patterns. This is particularly useful when labeled data for the new task is limited, as it allows for the transfer of knowledge from one task to another.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Self-Supervised Learning</h2>
                    <p>
                        A machine learning approach where a model is trained on unlabeled data by creating its own pseudo-labels, often using techniques like data augmentation or pretext tasks. This method is beneficial when labeled data is limited, enabling the model to learn meaningful representations autonomously.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Graph Neural Network</h2>
                    <p>

                        Graph Neural Networks (GNNs) are a class of neural networks designed to operate on graph-structured data, capturing relationships and dependencies between interconnected nodes. GNNs are particularly useful for tasks where data is naturally represented as graphs, such as social network analysis, recommendation systems, and molecular chemistry.
                    </p>
                </div>
            </div>
            <div className='aibtn'>
                <Link to={"/read/Ann"}>
                    <button className='mlbtn'>Read ANN</button>
                </Link>
                <Link to={"/read/Dl/spanish"}>
                    <button className='aispanish'>Change language to Spanish</button>
                </Link>
                <Link to={"/Home"}>
                    <button className='aispanish'>Home</button>
                </Link>
                <Link to={"/thankyou"}>
                    <button className='aispanish'>Next</button>
                </Link>
                </div>
        </div>
    );
};

export default AI;
