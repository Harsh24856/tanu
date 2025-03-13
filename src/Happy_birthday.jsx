import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './hb.css';
import {motion} from 'motion/react';

export const Happy_birthday = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Create balloons
    const container = document.querySelector('.container');
    for (let i = 0; i < 100; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      container.appendChild(balloon);
    }
    
    // Create hearts
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤';
      container.appendChild(heart);
    }
    
    return () => {
      // Cleanup when component unmounts
      const balloons = document.querySelectorAll('.balloon');
      const hearts = document.querySelectorAll('.heart');
      balloons.forEach(balloon => balloon.remove());
      hearts.forEach(heart => heart.remove());
    };
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Happy Birthday</h1>
        <button onClick={() => {
          navigate('/tofu');
        }}>Click me</button>
      </div>
    </div>
  );
};
