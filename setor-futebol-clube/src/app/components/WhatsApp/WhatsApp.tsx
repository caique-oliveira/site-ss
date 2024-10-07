"use client";

import React, { CSSProperties } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  const handleClick = () => {
    window.open('https://wa.me/556192774884', '_blank'); // Substitua pelo seu número
  };

  const styles: { container: CSSProperties; icon: CSSProperties } = {
    container: {
      position: 'fixed' as 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      padding: '15px',
      cursor: 'pointer',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      zIndex: '9999',
    },
    icon: {
      color: '#fff',
      fontSize: '30px',
    },
  };

  return (
    <div style={styles.container} onClick={handleClick}>
      <FaWhatsapp style={styles.icon} />
    </div>
  );
};

export default WhatsApp;
