import React,{ Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SignUp from './Component/SignUp'
import Home from './Component/Home'
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'






class App extends Component{
  render() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/"  exact component={SignUp}/>
      <Route path="/home" component={Home}/>
      </Switch>
      

    </div>
    </Router>
  );
}
}


export default App;
