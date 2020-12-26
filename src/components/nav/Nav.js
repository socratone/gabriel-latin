import React from 'react';
import NavItem from './NavItem';
import NavSubItem from './NavSubItem';
import styles from './Nav.module.scss';

const Nav = () => {
  return (  
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavItem to="/" home>Home</NavItem>
        <NavItem 
          to="/llpsi"
          subItems={[
            <NavSubItem key="1">방가워요1</NavSubItem>, 
            <NavSubItem key="2">방가워요2</NavSubItem>
          ]}
        >
          LLPSI
        </NavItem>
        <NavItem to="/courses/regular">Regular Courses</NavItem>
        <NavItem to="/courses/private">Private Courses</NavItem>
        <NavItem to="/exams">Exams</NavItem>
        <NavItem to="/fnq">F&Q</NavItem>
        <NavItem 
          to="/more" 
        >
          More
        </NavItem>
      </nav>
    </header>
  );
}
 
export default Nav;