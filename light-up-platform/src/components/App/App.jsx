import React from 'react';
import AppCss from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
      <div className={AppCss.App}>

          <div className="row">
            <div className="col-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
            <Body>
              <Switch>

              </Switch>
            </Body>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Footer/>
            </div>
          </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
