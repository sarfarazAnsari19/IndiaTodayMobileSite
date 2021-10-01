import React from 'react';
import ReactDom from 'react-dom';
// import { ReactFragment } from 'react';

import './css/style-home.css';
import './css/style-talk.css';

import NavbarTop from './NavbarTop';
import Home from './Home';
import TalkToAstrologer from './Talk_To_Astrologer';
import NavbarBottom from './NavbarBottom';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function Main() {
  return (
    <>
      <Router>
      <NavbarTop />

        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/talkToAstrologer">
              <TalkToAstrologer />
            </Route>
        </Switch>

        <div className="extra-space_"></div>
        <NavbarBottom />
      </Router>
    </>
  )
}

ReactDom.render(<Main />, document.getElementById('root'));