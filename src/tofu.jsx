import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './tofu.css';

const CountdownCube = () => {
  const navigate = useNavigate();
  
  // Use useMemo to ensure targetDate is only created once
  const targetDate = useMemo(() => new Date('2025-03-13T00:00:00'), []);
  
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        // Target date has passed
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Calculate time components
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };
    
    // Calculate immediately and then set interval
    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array since targetDate won't change

  return (
    <div className="countdown-page">
      <div className="countdown-header">
        <h1>Birthday Countdown</h1>
      </div>
      
      <div className="countdown-timer">
        <div className="time-block">
          <div className="time-value">{timeRemaining.days}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="time-block">
          <div className="time-value">{timeRemaining.hours}</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="time-block">
          <div className="time-value">{timeRemaining.minutes}</div>
          <div className="time-label">Minutes</div>
        </div>
        <div className="time-block">
          <div className="time-value">{timeRemaining.seconds}</div>
          <div className="time-label">Seconds</div>
        </div>
      </div>
      
      <div className="photo-cube-container">
        <div className="cube">
          <div className="card_side1"><img src="/img/tanu1.jpg" alt="Memory 1" /></div>
          <div className="card_side2"><img src="/img/tanu2.jpg" alt="Memory 2" /></div>
          <div className="card_side3"><img src="/img/tanu3.jpeg" alt="Memory 3" /></div>
          <div className="card_side4"><img src="/img/tanu4.jpeg" alt="Memory 4" /></div>
          <div className="card_side5"><img src="/img/tanu5.jpeg" alt="Memory 5" /></div>
          <div className="card_side6"><img src="/img/tanu6.jpeg" alt="Memory 6" /></div>
        </div>
      </div>
      
      <button className="gift-button" onClick={() => navigate('/gift')}>
        View Your Special Gift
      </button>
    </div>
  );
};

export default CountdownCube;