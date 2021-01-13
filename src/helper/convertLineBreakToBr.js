import React from 'react';

const convertLineBreakToBr = text => {
  let texts = [];
  let line = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\n') {
      texts.push(line);
      line = '';
      texts.push(<br key={i} />);
    } else {
      line += text[i];
    }
  }
  if (line !== '') texts.push(line);
  return texts;
};

export default convertLineBreakToBr;