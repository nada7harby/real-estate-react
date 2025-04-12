import React from 'react';
import { Box } from '@mui/material';

const MapFullWidth = () => {
  return (
    <Box sx={{ width: '100%', height: '500px', position: 'relative' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.688392370431!2d-80.27103772393517!3d25.78772720940106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6652e90a8b1%3A0x47e47549349766f6!2sMerrick%20Way%2C%20Coral%20Gables%2C%20FL%2033134%2C%20USA!5e0!3m2!1sen!2s!4v1709655547379!5m2!1sen!2s"
        style={{
          border: 0,
          width: '100%',
          height: '100%',
          borderRadius: '12px',
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default MapFullWidth; 