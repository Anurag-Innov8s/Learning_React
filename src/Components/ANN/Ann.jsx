import React from 'react';
import './Ann.css'; // Make sure to create a separate CSS file (AICards.css) and import it
import { Link } from 'react-router-dom';
const AI = () => {
    return (
        <div>
            <div className="ai-container">
                <div className="ai-card">
                    <h2>Introduction to Artificial Neural Network</h2>
                    <p>
                        Artificial Neural Networks (ANNs) are computational models inspired by the structure and function of the human brain. They consist of interconnected nodes, often organized into layers, where each node represents a neuron-like processing unit. ANNs are a fundamental component of deep learning.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Types of Neural Network</h2>
                    <ol>
                        <li>Feedforward Neural Networks (FNN)</li>
                        <li>Radial Basis Function Networks (RBFN)</li>
                        <li>Kohonen Self-Organizing Maps (SOM)</li>
                        <li>Hopfield Networks</li>
                    </ol>

                </div>
                <div className="ai-card">
                    <h2>Perceptron Model</h2>
                    <p>
                        The Perceptron model is a foundational neural network unit that takes multiple binary inputs, applies weighted sums, and produces a binary output through an activation function. Each input is associated with a weight, and the output is determined by whether the weighted sum surpasses a predefined threshold.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Multilayer Perceptron (MLP)</h2>
                    <p>
                        The Multilayer Perceptron (MLP) is a neural network architecture with input, hidden, and output layers. Using activation functions, it learns complex patterns through backpropagation and gradient descent. Well-suited for tasks like pattern recognition and predictive modeling, MLPs are versatile and foundational in neural network applications.
                    </p>
                </div>
                <div className="ai-card">
                    <h2>Back Propagation</h2>
                    <p>
                        Backpropagation is a supervised learning algorithm for training neural networks. It consists of a forward pass to calculate predictions and a backward pass to adjust weights based on the calculated error. By iteratively updating weights using gradient descent, Backpropagation aims to minimize the difference between predicted and actual outputs, enhancing the network's learning and predictive capabilities.
                    </p>
                </div>
            </div>
            <div className='aibtn'>
                <Link to={"/read/Ml"}>
                    <button className='mlbtn'>Read Ml</button>
                </Link>
                <Link to={"/read/dl"}>
                    <button className='mlbtn'>Move to DL</button>
                </Link>
                <Link to={"/read/ann/spanish"}>
                    <button className='aispanish'>Change language to Spanish</button>
                </Link>
                <Link to={"/Home"}>
                    <button className='aispanish'>Home</button>
                </Link></div>
        </div>
    );
};

export default AI;
