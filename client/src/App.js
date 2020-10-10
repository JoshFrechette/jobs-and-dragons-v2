import React, { useState } from 'react';
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
import Login from './components/Modals/Login';
import { LoginProvider } from './contexts/LoginContext'
// import jobListing from './views/jobListing';
// import SavedJobs from './views/SavedJobs';

// import { useUserContext } from './contexts/UserContext';
// import { useAuth0 } from './react-auth0-spa';
// import UserInfo from './components/UserInfo';
// import CoverPage from './components/CoverPage';
// import Resume from './components/Resume';

// styles/
import './App.css';

const App = () => {

  // let state = { show: false };

  // let showModal = () => {
  //   this.setState({ show: true });
  // };

  // let hideModal = () => {
  //   this.setState({ show: false });
  // };
  //   const { loading, isAuthenticated } = useAuth0();

  //   if (loading) {
  //     return <Loading />;
  //   }

  return (
    <LoginProvider>
      <div id='app'>
        {/* {isAuthenticated ? <NavBar /> : null} */}
        <div className='row'>
          <Switch>
            {/* {isAuthenticated ? (
            <Route exact path='/' component={Home} />
          ) : ( */}
            <Route>
              <NavBar />
              <Home >
                <Login

                />
              </Home>
              <Footer />
            </Route>
            {/* )} */}

            <PrivateRoute
              exact
              path='/userinfo'
            // component={UserInfo}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/joblisting'
            // component={jobListing}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/joblisting/saved'
            // component={SavedJobs}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/coverpage'
            // component={CoverPage}
            ></PrivateRoute>
            <PrivateRoute
              exact path='/resume'
            // component={Resume}
            ></PrivateRoute>

            <PrivateRoute path='/game' component={Game}></PrivateRoute>
            <PrivateRoute path='/profile' component={Profile}></PrivateRoute>
            <PrivateRoute path='/admin' component={AdminPlatform}></PrivateRoute>
          </Switch>
        </div>
        {/* {isAuthenticated ? <Footer /> : null} */}
      </div>
    </LoginProvider>
  );
};

export default App;
