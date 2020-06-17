import React from 'react';
import './name.css';
import Label from './Label';
//import {Router,Route} from 'react-router'

import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header className="sam">
        <h1 className="SignUp">
          Sign Up <img src="images/flower.png" alt="" align="right" />
        </h1>
        <div className="or">
          or
          <Link to="/home" target="_blank" className="login">
            login the account
          </Link>
        </div>
      </header>
      <Label />
    </div>
  );
};

export default App;
