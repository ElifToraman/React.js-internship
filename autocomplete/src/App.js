import React from 'react';
import './App.css';
//import Text from './components/Text';
import countryNames from './data/countries.json';
import HookTest from './components/HookTest';


function App() {
  var countriesToSelect = [];

  if(countryNames && countryNames.length>0) {
     countriesToSelect=countryNames.map(item => item.name + '-' + item.code);
  }

  return (
    <div className="App">
      <h2 className="App-Container">Select Country</h2>
        <div className="App-Component">
          <HookTest items={countriesToSelect} />
        </div>
    </div>
  );
}

export default App;
