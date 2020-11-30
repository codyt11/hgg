import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
