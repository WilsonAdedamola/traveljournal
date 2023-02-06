import React from 'react';
import Header from './components/Header';
import Card from './components/Card'
import travelData from './travelData';
import './App.css';

function App() {

const data = travelData.map(details => {
  return <Card details={details}/>
})

  return (
    <div className="App">
      <Header />
      {data}
      <div className="programmer">
        <p>Coded by <span className="pname"><a href="https://www.twitter.com/wildam_wildam" target="_blank">wilsonAdedamola</a></span></p>
      </div>
    </div>
  );
}

export default App;
