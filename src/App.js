import React, { createContext } from 'react';
// components
import Nav from './components/SearchNav';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import {Route} from 'react-router-dom';
// import styles
import "./style/app.scss";
// import components
import Home from './pages/Home';

// second alert
export const MiddleAlertContext = createContext()

// optional configuration for alerts
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
      <AlertProvider
        template={AlertTemplate}
        position={positions.TOP_CENTER}
        timeout= {5000}
        context={MiddleAlertContext}
      >
        <div className="App">
          <Nav />
          <Route path={['/flight/:id', '/']} >
            <Home />
          </Route>
        </div>
      </AlertProvider>
    </AlertProvider>


  );
}

export default App;
