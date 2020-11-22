import React, { useState, useEffect, useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';
import Login from './Modals/Login';
import{ useUserContext} from '../contexts/UserContext';
import { useLoginContext } from '../contexts/LoginContext';
import logo from '../assets/J&D_Logo_BG_K.png';
import { SettingsPowerRounded } from '@material-ui/icons';

const NavBar = () => {
  // const [state, dispatch] = useUserContext();
  const [state, dispatch] = useLoginContext();

  // All content commented out may be needed later for reimplementation of passport login

  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // const toggle = () => setIsOpen(!isOpen);

  // const logoutWithRedirect = () =>
  //   logout({
  //     returnTo: window.location.origin,
  //   });

  const handleStudentLogin = () => {
    dispatch({  type: 'student'})
    console.log(state)
  }

  // const handleAdminLogin = () => {
  //    dispatch({  type: 'admin'})
  //   console.log(state)
  // }

  // useEffect(() => {
  //   setIsLoginModal(state.isLoginModal);
  // }, [state.isLoginModal]);
  
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
          <li to='/'>
            <Link to='/'>
              <h5>HOME</h5>
            </Link>
          </li>
          <li to='/profile'
            id='studentLoginBtn'
            onClick={handleStudentLogin}
            // status={isStudentLogin}
            // onClick={() => setIsStudentLogin(true)}
          >
            <Link to='/profile'>
              <h5>STUDENT LOGIN</h5>
            </Link>
          </li>
          {/* <li to='/'
            id='adminLoginBtn'
            onClick={handleAdminLogin}
            // status={isAdminLogin}
            >
            
            <Link to='/'>
              <h5>ADMIN LOGIN</h5>
            </Link>
          </li> */}
          {/* {!isOpen ? (
            <>
            <li
              to='/'
              id='qsLoginBtn'
              onClick={() => {
                loginWithRedirect({});
              }}
            >
              <Link to='/'>
                <h5>STUDENT LOGIN</h5>
              </Link>
            </li>
            <li
              to='/'
              id='qsLoginBtn'
              onClick={() => {
                loginWithRedirect({});
              }}
            >
              <Link to='/'>
                <h5>ADMIN LOGIN</h5>
              </Link>
            </li>
            </>
          ) : (
            <>
              <li to='/profile'>
                <Link to='/profile'>
                  <h5>PROFILE</h5>
                </Link>
              </li>
              <li
                to='/logout'
                id='qsLogoutBtn'
                onClick={() => {
                  logoutWithRedirect();
                }}
              >
                <Link to='/'>
                  <h5>LOGOUT</h5>
                </Link>
              </li>
            </>
          )} */}
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
