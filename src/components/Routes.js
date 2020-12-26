import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HeaderBumper from './common/HeaderBumper';
import Nav from './nav/Nav';
import Exams from './pages/Exams';
import Fnq from './pages/Fnq';
import Home from './pages/Home';
import Llpsi from './pages/Llpsi';
import More from './pages/More';
import PrivateCourses from './pages/PrivateCourses';
import RegularCourses from './pages/RegularCourses';
import styles from './Routes.module.scss';

const Routes = () => {
  return (  
    <Router>
      <Nav />
      <div className={styles.mainWrap}>
        <Switch>
          <Route path="/llpsi">
            <HeaderBumper />
            <Llpsi />
          </Route>
          <Route path="/courses/regular">
            <HeaderBumper />
            <RegularCourses />
          </Route>
          <Route path="/courses/private">
            <HeaderBumper />
            <PrivateCourses />
          </Route>
          <Route path="/exams">
            <HeaderBumper />
            <Exams />
          </Route>
          <Route path="/fnq">
            <HeaderBumper />
            <Fnq />
          </Route>
          <Route path="/more">
            <HeaderBumper />
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