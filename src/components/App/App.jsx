import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Support from '../Support/Support';
import ThankYou from '../ThankYou/ThankYou';
import Understanding from '../Understanding/Understanding';

import './App.css';

function App() {

  return (
    <Router>
      <div className='App'>
        <Route path="/" exact>
          <Header />
          <Feeling />
        </Route>
        <Route path="understanding">
          <Header />
          <Understanding />
        </Route>
        <Route path="support">
          <Header />
          <Support />
        </Route>
        <Route path="comments">
          <Header />
          <Comments />
        </Route>
        <Route path="review">
          <Review />
        </Route>
        <Route path="thank-you">
          <ThankYou />
        </Route>
      </div>
    </Router>
  );
}

export default App;
