import styled, { css } from 'styled-components';

const Title = styled.h3`
  line-height: 1.5;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 2rem;
  
  ${props => props.main && css`
    font-size: 2rem;
    font-weight: 700;
    margin-top: 40px;
  `}
    
  ${props => props.big && css`
    font-size: 1.75rem;
    font-weight: 400;
    margin-top: 2rem;
  `}

  ${props => props.small && css`
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 2rem;
  `}

  ${props => props.section && css`
    margin-top: 80px;
  `}

  ${props => props.removeBottom && css`
    margin-bottom: 0;
  `}
`;

export default Title;