import React from 'react';

const footerStyle = {
  // bottom: 0,
  position: 'absolute',
  width: '100%',
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  textShadow: '2px 2px black',
  padding: '12px',
  minHeight: 65,
};

function Footer() {

  return (
    <footer id='footer' style={footerStyle} copyrights='copy 2015 Copyright Text'>
      <h5>JOBS & DRAGONS © 2020</h5>
    </footer>
  );
}

export default Footer;
