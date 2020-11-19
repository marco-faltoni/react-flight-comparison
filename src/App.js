import React from 'react';
import './App.css';
import Home from './pages/Home';


function App() {

  const url = 'https://recruitment.shippypro.com/flight-engine/api';
  const auth = `${process.env.REACT_APP_SHIPPY_KEY}`;

  async function ApiData (url){
    const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth,
        }
    });
    const data = await dataFetch.json();
    console.log(data);
    
    // ritorno i dati convertiti
    return data;
  }

  ApiData(url);

  return (
    <div className="App">
      <h1>Prova</h1>
      <Home />
    </div>
  );
}

export default App;
