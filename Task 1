import React,{Component} from 'react';
import './App.css';
import Text from './Text';
import Data from './countries.json';
//import countries from './countries';

function App() {
  var countriesToSelect = Data.map(item => item.name + '-' + item.code);

  return (
    <div className="App">
      <div className="App-Component">
         <h2 style={{fontFamily:"Times New Roman",fontSize:"40px"}}>Select Country</h2>
           <div className="App-Component">
             <Text items={countriesToSelect} />
          </div>
      </div>
    </div>
  );
}

export default App;
