import React from 'react';
import NavItem from './NavItem';
import NavSubItem from './NavSubItem';
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
            subItems={[
              <NavSubItem to="/courses/private" key="1">GPA AP GCSE A/AS</NavSubItem>, 
              <NavSubItem to="/courses/private" key="2">Latin</NavSubItem>,
              <NavSubItem to="/courses/private" key="3">Greek</NavSubItem>,
              <NavSubItem to="/courses/private" key="4">Class On Demand</NavSubItem>
            ]}
            subItemsWidth="150px"
          >
            Private Courses
          </NavItem>
          <NavItem 
            right
            to="/exams"
            subItems={[
              <NavSubItem to="/" key="1">National Latin Exam</NavSubItem>, 
              <NavSubItem to="/" key="2">National Greek Exam</NavSubItem>,
              <NavSubItem to="/" key="3">National Mythology Exam</NavSubItem>,
              <NavSubItem to="/" key="4">National Classical Etymology Exam</NavSubItem>,
              <NavSubItem to="/" key="5">National Roman Civilaziation Exam</NavSubItem>,
              <NavSubItem to="/" key="6">National Latin Vocabulary Exam</NavSubItem>
            ]}
            subItemsWidth="248px"
          >
            Exams
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
      </div>
      <MenuButton />
      {isMenu && <RightNav />}
    </header>
  );
}
 
export default Nav;