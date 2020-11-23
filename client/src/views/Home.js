import React from 'react';

import Login from '../components/Modals/Login';
import { useLoginContext } from '../contexts/LoginContext';


import brandLogo from '../assets/J&D_newLogo.png';
import background from '../assets/J&D_Dungeon_dark.jpg';
import fullBackground from '../assets/light_honeycomb.png';

// import LandingDescription from '../components/LandingDescription';

import 'materialize-css';

const Home = (props) => {
  const [state, dispatch] = useLoginContext();

  const show = state.isOpen;

  return (
    <>

      <div style={mainStyle}>
        <img
          className='responsive-img'
          style={bgStyle}
          src={background}
          alt='Background'
        />

        <div style={topStyle}>
          {show ? (
            <Login>
              <p>{state.isStudentLogin}</p>
            </Login>
          ) : null}
          <div className='container'>
            <img
              style={brandLogoStyle}
              className='responsive-img'
              src={brandLogo}
              alt='Brand Logo'
            />

          </div>

          <div className='container' style={descStyle}>
            <h3>Let the JOB HUNT begin ...</h3>
          </div>

        </div>

      </div>

    </>
  );
}
const mainStyle = {
  backgroundImage: `url(${fullBackground})`,
};

const bgStyle = {
  backgroundImage: `url(${background}) fixed`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative',
  width: '100%',
  height: 'calc(100vh - 130px)',
};

const topStyle = {
  position: 'absolute',
  top: '100px',
  width: '100%',
  textAlign: 'center',
};

const brandLogoStyle = {
  width: '100%',
  paddingTop: '100px',
};

const descStyle = {
  color: 'white',
  marginTop: '30px',
  background:
    'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,0.1310129915730337) 87%)',
  width: '90vw',
  textShadow: '2px 2px black',
};

const modal = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)'
};

const modalMain = {
  position: "fixed",
  background: 'white',
  width: '80%',
  height: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

const displayBlock = {
  display: 'block'
};

const displayNone = {
  display: 'none'
}

export default Home;
