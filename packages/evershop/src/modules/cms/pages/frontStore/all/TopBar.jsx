import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function TopBar() {
  const messages = [
    "ELEGANT BEYOND SIMPLICITY",
    "FREE SHIPPING ABOVE $60 AND FREE RETURNS* IN SRI LANKA",
    "SIGN UP HERE TO GET $5 OFF YOUR FIRST ORDER"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextMessage();
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleNextMessage = () => {
    setFadeIn(false); // Start fade-out
    setTimeout(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setFadeIn(true); // Start fade-in
    }, 400); // Duration of fade-out transition
  };

  const handlePreviousMessage = () => {
    setFadeIn(false); // Start fade-out
    setTimeout(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex - 1 + messages.length) % messages.length
      );
      setFadeIn(true); // Start fade-in
    }, 400); // Duration of fade-out transition
  };

  return (
    <div style={{ 
      backgroundColor: '#f8d7d0', 
      color: '#000', 
      textAlign: 'center', 
      fontSize: '1rem',
      padding: '5px',
    //   marginBottom: '2px', 
    //   position: 'relative', 
      width: '100%', 
      top: 0, 
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <button 
        onClick={handlePreviousMessage} 
        style={{ 
          background: 'none', 
          border: 'none', 
          fontSize: '0.8rem', 
          cursor: 'pointer' ,
          paddingLeft:'4rem'
        }}>
        <ArrowBackIosIcon />
      </button>
      
      <div style={{ 
        flex: 1, 
        opacity: fadeIn ? 1 : 0, 
        transition: 'opacity 0.5s ease-in-out' 
      }}>
        {messages[currentMessageIndex]}
      </div>
      
      <button 
        onClick={handleNextMessage} 
        style={{ 
          background: 'none', 
          border: 'none', 
          fontSize: '0.8rem', 
          cursor: 'pointer' ,
          paddingRight:'4rem'
        }}>
        <ArrowForwardIosIcon />
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            font-size: 1rem;
          }
          button {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          div {
            font-size: 0.8rem;
          }
          button {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}

export default TopBar;

export const layout = {
  areaId: 'top-bar',
  sortOrder: 30
};
