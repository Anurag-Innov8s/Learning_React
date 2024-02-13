import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <div>
      <div className='welcome'>
        <h1>Welcome to the Learning Portal</h1>
      </div>
      <div className='picture'>
        <img src="https://imgs.search.brave.com/oahN8XLkPzelURyrTl1chKVajBVsPq3F1IYBP5nW1mQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMzc2/NzM5MzA2L3N0b2Nr/LXBob3RvLWNvbGxh/Z2Utd2hpdGUtY3Vi/ZXMtZGF0YS1zY2ll/bmNlLWRhdGEtYW5h/bHlzaXMtaW5zY3Jp/cHRpb24td2hpdGUt/c3VyZmFjZQ.jpeg" />
      </div>
      <div className='picture'>
        <img src="https://imgs.search.brave.com/pN6ExBMCVf2HoUI7fH-GyZnQU--bL6Y82VylIpK5dmM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ3NDg0/NzYuanBn" alt="Image Description" />
      </div>
      <div className='picture'>
        <img src="https://imgs.search.brave.com/UeUEZpYY_CD0taOiNTh2zdIZL-58L3FnGfE_wEFuHm4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L2Nkbi11/cGxvYWRzLzIwMjMw/NjAyMTEzMzEwL05l/dXJhbC1OZXR3b3Jr/cy1BcmNoaXRlY3R1/cmUucG5n" alt="Image Description" />
      </div>
      <div className='button'>
        {/* Use Link to navigate to another page */}
        <Link to="/Home">
          <button type='button'>Click to Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
