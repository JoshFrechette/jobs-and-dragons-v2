import React, { useState, useEffect, useContext, useReducer } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'materialize-css';
import Login from './Modals/Login';
import { useUserContext } from '../contexts/UserContext';
import { useLoginContext } from '../contexts/LoginContext';
import logo from '../assets/J&D_Logo_BG_K.png';
import { SettingsPowerRounded } from '@material-ui/icons';

const NavBar = () => {
  // const [state, dispatch] = useUserContext();
  const [state, dispatch] = useLoginContext();
  const history = useHistory();
  // All content commented out may be needed later for reimplementation of passport login

  const handleStudentLogin = () => {
    dispatch({ type: 'student' })
  }

  const handleStudentLogout = () => {
    dispatch({ type: 'loggedOut' });
    history.push('/');
  }

  useEffect(()=> {
    console.log(state)
  }, [])

  return (
    <nav>
      <div className='nav-wrapper grey darken-4'>
        <a href='/' className='brand-logo left' style={{ maxWidth: '300px' }}>
          <img
            style={NavbarLogoStyle}
            className='responsive-img'
            src={logo}
            alt='logo'
          />
        </a>
        <ul className='right'>
          <li>
            <Link to='/'>
              <h5>HOME</h5>
            </Link>
          </li>
          {!state.isLoggedIn ? (
            <li
              id='studentLoginBtn'
              onClick={handleStudentLogin}
            >
              <Link>
                <h5>STUDENT LOGIN</h5>
              </Link>
            </li>
          ) : (
              <li
                id='studentLoginBtn'
                onClick={handleStudentLogout}
                style={{ cursor: 'pointer' }}
              >
                <h5>STUDENT LOGOUT</h5>
              </li>
            )}
        </ul>
      </div>
    </nav>
  );
};

const NavbarLogoStyle = {
  width: '70%',
  maxWidth: '100',
  marginTop: '10px',
  marginLeft: '10px',
};

export default NavBar;
