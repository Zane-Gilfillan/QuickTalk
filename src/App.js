// import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Spinner from 'react-spinkit'
import Login from './components/Login'
import pic from './img/loading.svg'

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img src={pic} alt="" />
          <Spinner
            name='ball-spin-fade-loader'
            color='orange'
            fadeIn='none'
          />
        </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
    <div className="app">
     <Router>
       {!user ? (
         <Login />
       ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
       </>
       )}

     </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 300px;
    padding: 20px;
    margin: 40px;
  }
`;