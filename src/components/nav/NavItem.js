import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavItem = ({ to, onClick, children }) => {
  const color = useSelector(state => state.ui.nav.color);

  const style = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    fontSize: '16px',
    color
  };

  return (  
    <Link to={to} onClick={onClick} style={style}>
      {children}
    </Link>
  );
}
 
export default NavItem;