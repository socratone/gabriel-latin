import React from 'react';
import NavItem from './NavItem';
import DropdownItem from './DropdownItem';
import MenuButton from './MenuButton';
import RightNav from './RightNav';
import styles from './Nav.module.scss';
import { useSelector } from 'react-redux';

const Nav = () => {
  const isMenu = useSelector(state => state.ui.nav.isMenu);

  return (  
    <header className={styles.wrap}>
      <div className={styles.navWrap}>
        <div className={styles.titleWrap}>
          <p className={styles.title}>
            <span className={styles.firstChar}>G</span>abriel{' '}
            <span className={styles.firstChar}>I</span>nstitutum{' '}
            <span className={styles.firstChar}>L</span>atinitatis</p>
        </div>
        <nav className={styles.nav}>
          <NavItem to="/">
            Home
          </NavItem>
          <NavItem to="/about">
            About
          </NavItem>
          <NavItem to="/whylatin">
            Why Latin ?
          </NavItem>
          <NavItem to="/courses/regular">
            Regular Courses
          </NavItem>
          <NavItem 
            to="/courses/private"
            dropdown={[
              <DropdownItem to="/courses/private" key="1">GPA AP GCSE A/AS</DropdownItem>, 
              <DropdownItem to="/courses/private" key="2">Latin</DropdownItem>,
              <DropdownItem to="/courses/private" key="3">Greek</DropdownItem>,
              <DropdownItem to="/courses/private" key="4">Class On Demand</DropdownItem>
            ]}>
              Private Courses
          </NavItem>
          <NavItem 
            right
            to="/exams"
            dropdown={[
              <DropdownItem to="/exams" key="1">National Latin Exam</DropdownItem>, 
              <DropdownItem to="/exams" key="2">National Greek Exam</DropdownItem>,
              <DropdownItem to="/exams" key="3">National Mythology Exam</DropdownItem>,
              <DropdownItem to="/exams" key="4">National Classical Etymology Exam</DropdownItem>,
              <DropdownItem to="/exams" key="5">National Roman Civilaziation Exam</DropdownItem>,
              <DropdownItem to="/exams" key="6">National Latin Vocabulary Exam</DropdownItem>
            ]}>
              Exams
          </NavItem>
          <NavItem 
            to="/more"
            dropdown={[
              <DropdownItem to="/more" key="1">Resources</DropdownItem>, 
              <DropdownItem to="/more" key="2">Book Reviews</DropdownItem>
            ]} 
            right>
              More
          </NavItem>
        </nav>
      </div>
      <MenuButton />
      {isMenu && <RightNav />}
    </header>
  );
}
 
export default Nav;