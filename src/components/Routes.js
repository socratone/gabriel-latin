import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './nav/Nav';
import Home from './pages/Home';
import WhyLatin from './pages/WhyLatin';
import About from './pages/About';
import More from './pages/More';
import Courses from './pages/Courses';
import styles from './Routes.module.scss';

const HEADER_HEIGHT = 134;
const HEADER_HEIGHT_MOBILE = 50;

const Routes = () => {
  const [height, setHeight] = useState('');

  window.onresize = () => {
    setHeight(setMainHeight());
  }

  useEffect(() => {
    setHeight(setMainHeight());
  }, [])

  const setMainHeight = () => {
    if (window.innerWidth <= 800) 
      return window.innerHeight - HEADER_HEIGHT_MOBILE + 'px';
    return window.innerHeight - HEADER_HEIGHT + 'px';
  };

  return (  
    <Router>
      <Nav />
      <div className={styles.mainWrap} style={{ height }} id="scroll">
        <Switch>
          <Route path="/whylatin">
            <WhyLatin />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses/regular">
            <Courses category="regular" />
          </Route>
          <Route path="/courses/private">
            <Courses category="private" />
          </Route>
          <Route path="/exams">
            <Courses category="exams" />
          </Route>
          <Route path="/more">
            <More />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
 
export default Routes;