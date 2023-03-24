import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {Dashboard} from "./components/Dashboard"

function App() {

  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
