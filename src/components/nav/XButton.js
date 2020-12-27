import React from 'react';
import XIcon from '../icon/XIcon';

const style = {
  position: 'absolute',
  top: '22px',
  right: '20px',
  cursor: 'pointer',
  fontSize: '14px'
};

const XButton = ({ onClick }) => {
  return (  
    <button onClick={onClick} style={style}>
      <XIcon size={16} />
    </button>
  );
}
 
export default XButton;