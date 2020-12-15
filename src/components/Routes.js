import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
      <div className={styles.screen}>
        <div className={styles.screenBumper}></div>
        <main className={styles.main}>
          <Switch>
            <Route path="/llpsi">
              <Llpsi />
            </Route>
            <Route path="/courses/regular">
              <RegularCourses />
            </Route>
            <Route path="/courses/private">
              <PrivateCourses />
            </Route>
            <Route path="/exams">
              <Exams />
            </Route>
            <Route path="/fnq">
              <Fnq />
            </Route>
            <Route path="/more">
              <More />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
 
export default Routes;