import React, { useState, useContext, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'materialize-css';

import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './views/Home';
import Profile from './views/Profile';
import AdminPlatform from './views/AdminPlatform';
import Game from './views/Game';
import { LoginProvider } from './contexts/LoginContext';

// import { useUserContext } from './contexts/UserContext';

// styles/
import './App.css';

// PrivateRoutes commented out until logging in issues can be resolved. 

const App = () => {

  //   if (loading) {
  //     return <Loading />;
  //   }

  return (
    <LoginProvider>
      <div id='app'>
        <div className='row'>
          <Switch>

            <Route>
              <NavBar />
              <Home />
              <Footer />
            </Route>
            <Route 
              exact path='/game' 
              component={Game}
            ></Route>
            <Route 
              exact path='/profile' 
              component={Profile}
            ></Route>
            <Route 
              exact path='/admin' 
              component={AdminPlatform}
            ></Route>

            {/* <PrivateRoute 
              exact path='/game' 
              component={Game}>
            </PrivateRoute>
            <PrivateRoute 
              exact path='/profile' 
              component={Profile}>
            </PrivateRoute>
            <PrivateRoute 
              exact path='/admin' 
              component={AdminPlatform}>
            </PrivateRoute> */}

          </Switch>
        </div>
        {/* {isAuthenticated ? <Footer /> : null} */}
      </div>
    </LoginProvider>
  );
};

export default App;
