import React from 'react';
import NavItem from './NavItem';
import NavSubItem from './NavSubItem';
import styles from './Nav.module.scss';

const Nav = () => {
  return (  
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavItem to="/" home>
          Home
        </NavItem>
        <NavItem to="/llpsi">
          LLPSI
        </NavItem>
        <NavItem to="/courses/regular">
          Regular Courses
        </NavItem>
        <NavItem to="/courses/private">
          Private Courses
        </NavItem>
        <NavItem 
          to="/exams"
          subItems={[
            <NavSubItem to="/" key="1">National Latin Exam</NavSubItem>, 
            <NavSubItem to="/" key="2">National Greek Exam</NavSubItem>
          ]}
          subItemsWidth="160px"
        >
          Exams
        </NavItem>
        <NavItem to="/fnq">
          F&Q
        </NavItem>
        <NavItem 
          to="/more"
          subItems={[
            <NavSubItem to="/" key="1">Resources</NavSubItem>, 
            <NavSubItem to="/" key="2">Book Reviews</NavSubItem>
          ]} 
          subItemsWidth="112px"
          right
        >
          More
        </NavItem>
      </nav>
    </header>
  );
}
 
export default Nav;