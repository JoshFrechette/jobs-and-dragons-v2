import React, { useState, useContext, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'materialize-css';

// import PrivateRoute from './components/PrivateRoute';
// import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './views/Home';
import Profile from './views/Profile';
import Game from './views/Game';
import { LoginProvider } from './contexts/LoginContext';

// import { useUserContext } from './contexts/UserContext';

// styles/
import './App.css';

const App = () => {

  //   if (loading) {
  //     return <Loading />;
  //   }

  return (
    <LoginProvider>
      <div id='app'>
        <div className='row'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
          <Footer />
        </div>
      </div>
    </LoginProvider>
  );
};

export default App;
