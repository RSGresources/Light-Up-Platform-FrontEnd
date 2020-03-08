import React from 'react';
import AppCss from './App.module.css';
import AppBar from '../AppBar/AppBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Webinars from '../Webinars/Webinars';
import Courses from '../Courses/Courses';
import Library from '../Library/Library';
import Forums from '../Forums/Forums';
import Training from '../Training/Training';
import WeeklyReignition from '../WeeklyReignition/WeeklyReignition';
import AboutLightUp from '../AboutLightUp/AboutLightUp';
import Subscriptions from '../Subscriptions/Subscriptions';
import Podcasts from '../Podcasts/Podcasts';
import PageNotFound from '../ErrorPages/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Router>
        <div className={AppCss.App}>
          <AppBar />
          <Body>
              <Switch>
                <Route exact path="/">
                  <Podcasts />
                </Route>
                <Route path='/Webinars'>
                    <Webinars />
                </Route>
                <Route path='/Courses'>
                    <Courses />
                </Route>
                <Route path='/Library'>
                    <Library />
                </Route>
                <Route path='/Forums'>
                    <Forums />
                </Route>
                <Route path='/Training'>
                    <Training />
                </Route>
                <Route path='/WeeklyReignition'>
                    <WeeklyReignition />
                </Route>
                <Route path='/AboutLightUp'>
                    <AboutLightUp />
                </Route>
                <Route path='/Subscriptions'>
                    <Subscriptions />
                </Route>
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            </Body>
            <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
