import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';
import Login from './Modals/Login';
import{ useUserContext} from '../contexts/UserContext';
import { LoginContext } from '../contexts/LoginContext';
import logo from '../assets/J&D_Logo_BG_K.png';
import { SettingsPowerRounded } from '@material-ui/icons';

const NavBar = () => {
  const [state, dispatch] = useUserContext();
  // const [modal, student, admin] = useContext(LoginContext);
  const [isOpen, setIsOpen] = useContext(LoginContext);
  const [isStudentLogin, setIsStudentLogin] = useContext(LoginContext);
  const [isAdminLogin, setIsAdminLogin] = useContext(LoginContext);

  // All content commented out may be needed later for reimplementation of passport login

  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // const toggle = () => setIsOpen(!isOpen);

  // const logoutWithRedirect = () =>
  //   logout({
  //     returnTo: window.location.origin,
  //   });

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     setIsOpen(true);
  //   } else {
  //     setIsOpen(false);
  //   }
  // }, [isAuthenticated]);

  // let state = { show: false };

  // let showModal = () => {
  //   this.setState({ show: true });
  // };

  // let hideModal = () => {
  //   this.setState({ show: false });
  // };
  console.log(isAdminLogin, isStudentLogin)
  const handleStudentLogin = () => {
    setIsOpen(true);
    // console.log("Student Logging in")
    setIsStudentLogin(true);
    console.log(isStudentLogin, isOpen)
  }

  const handleAdminLogin = () => {
    // console.log("Admin Logging in")
    setIsOpen(true);
    setIsAdminLogin(true);
    console.log(isAdminLogin, isOpen)
  }

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
          <li to='/'
            id='studentLoginBtn'
            onClick={handleStudentLogin}
            // status={isStudentLogin}
            // onClick={() => setIsStudentLogin(true)}
          >
            <Link to='/'>
              <h5>STUDENT LOGIN</h5>
            </Link>
          </li>
          <li to='/'
            id='adminLoginBtn'
            onClick={handleAdminLogin}
            // status={isAdminLogin}
            >
            
            <Link to='/'>
              <h5>ADMIN LOGIN</h5>
            </Link>
          </li>
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
