import React from 'react';
import AppCss from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body'
import PodcastMenu from '../PodcastPage/PodcastMenuPage/PodcastMenu'
import PodcastPlaylist from '../PodcastPage/PodcastPlayList/PodcastPlaylist'
import PageNotFound from '../ErrorPages/PageNotFound/PageNotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className={AppCss.App}>
          <Header />
          <Body>
            <Switch>
              <Route exact path="/">
                <PodcastMenu />
              </Route>
              <Route path="/PodcastPlaylist">
                <PodcastPlaylist />
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
