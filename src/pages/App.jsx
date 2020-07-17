import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact'
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Navbar from '../layout/NavBar'

import Footer from '../pages/Footer'

const App = () =>
{
  return(<>
 
  <BrowserRouter>
  <Navbar />
  <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' exact component={About}/>
      <Route path='/service' exact component={Service}/>
      <Route path='/contact' exact component={Contact}/>
      <Redirect to="/"></Redirect>
  </Switch>
  <Footer/>
  </BrowserRouter>
    </>)
}

export default App;
 