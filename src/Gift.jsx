import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './gift.css';
import { motion } from 'framer-motion';
import { delay } from 'motion';

const GiftPage = () => {
  const navigate = useNavigate();
  const [isUnwrapping, setIsUnwrapping] = useState(false);
  const [isUnwrapped, setIsUnwrapped] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  
 

  // Animation timing effects
  useEffect(() => {
    if (isUnwrapping) {
      // Wait for animations to complete before showing the unwrapped gift
      const timer = setTimeout(() => {
        setIsUnwrapped(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isUnwrapping]);

  useEffect(() => {
    if (isUnwrapped) {
      // Show message after gift is fully unwrapped
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isUnwrapped]);

  const handleUnwrap = () => {
    setIsUnwrapping(true);
  };

  return (
    <div className="gift-page">
      <div className="gift-container">
        {!isUnwrapped ? (
          <div className="wrapped-gift">
            <div className="gift-box">
              <motion.div 
                className="gift-lid"
                animate={isUnwrapping ? { 
                  y: -100,
                  x: 50,
                  rotate: 45,
                  opacity: 0
                } : {}}
                transition={{ duration: 1.2 }}
              ></motion.div>
              <motion.div 
                className="gift-ribbon"
                animate={isUnwrapping ? { 
                  y: -200,
                  opacity: 0
                } : {}}
                transition={{ duration: 1.5 }}
              ></motion.div>
              <motion.div 
                className="gift-bow"
                animate={isUnwrapping ? { 
                  y: -150,
                  x: -50,
                  rotate: -45,
                  opacity: 0
                } : {}}
                transition={{ duration: 1.4 }}
              ></motion.div>
              <motion.div 
                className="gift-box-inner"
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#e74c3c',
                  borderRadius: '5px'
                }}
                animate={isUnwrapping ? { 
                  scale: [1, 1.1, 0],
                  opacity: [1, 1, 0]
                } : {}}
                transition={{ 
                  duration: 1.8,
                  times: [0, 0.4, 1],
                  delay: 0.5
                }}
              ></motion.div>
            </div>
            <button 
              className="unwrap-button" 
              onClick={handleUnwrap}
              disabled={isUnwrapping}
            >
              Unwrap Your Gift
            </button>
          </div>
        ) : (
          <div className="unwrapped-gift">
            <motion.div 
              className="gift-reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div 
                className="gift-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img src="/img/fam.jpg" alt="Special Gift" />
              </motion.div>
              
              <motion.div 
                className="gift-message"
                initial={{ opacity: 0, y: 20 }}
                animate={showMessage ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
              >
                <h2>Happy Birthday, Sis! 🎉💖</h2>
                <p>
                Wishing you a day filled with love, laughter, and all the happiness in the world! 

                </p>
                <p>You are more than just my sister—you’re my best friend, my headache, and my biggest cheerleader. I’m so grateful for all the memories we’ve made and the bond we share. May this year bring you endless joy, success, and everything your heart desires.</p>
                <p>For gift you have to come home 😜</p>
                
                <p className="signature">Love you always! <br />Tanu💕🎂🎁
                </p>

              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
      
      <motion.button 
        className="back-button" 
        onClick={() => navigate('/tofu')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      
      >
        Back to Countdown
      </motion.button>
    </div>
  );
};

export default GiftPage;