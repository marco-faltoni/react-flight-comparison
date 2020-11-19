import React from 'react';
// components
import Nav from './components/SearchNav';

import { render } from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
// import styles
import "./style/app.scss";
// import components
import Home from './pages/Home';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 3500,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


function App() {
  return (
    <AlertProvider  template={AlertTemplate} {...options}>
      <div className="App">
        <Nav />
        <Home />
      </div>
    </AlertProvider>
  );
}

export default App;
