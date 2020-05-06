import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'




function App() {
  return (
   <Router>
     <Switch>
       <Route component={Home} path="/" />
       <Route component={Login} path="/login" />
       <Route component={Signup} path="/signup" />

     </Switch>
   </Router>
  );
}

export default App;
