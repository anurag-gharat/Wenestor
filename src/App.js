import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'




function App() {
  return (
   <Router>
     <Navbar />
     <Switch>
       <Route exact component={Home} path="/" />
       <Route component={Login} path="/login" />
       <Route component={Signup} path="/signup" />

     </Switch>
     <Footer />
   </Router>
  );
}

export default App;
