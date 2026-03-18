import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100vh" }}
      transition={{ duration: 0.8, ease: "anticipate" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          color: '#c920b8',
          textShadow: '0 0 30px rgba(201, 32, 184, 0.8)',
          fontFamily: 'monospace',
          marginBottom: '2rem'
        }}
      >
        SS
      </motion.div>
      <div style={{ width: '250px', height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          style={{
            height: '100%',
            backgroundColor: '#c920b8',
            boxShadow: '0 0 15px #c920b8'
          }}
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;
