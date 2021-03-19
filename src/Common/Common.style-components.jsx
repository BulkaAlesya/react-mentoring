import styled from 'styled-components';
import { PropTypes } from 'prop-types';

export const BodyTitle = styled.span`
  color: ${props => props.textColor};
  font-size:  ${props => props.textSize ? `${props.textSize}px` : '15px'};
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
`;
BodyTitle.propTypes = {
  textColor: PropTypes.string.isRequired,
  textSize: PropTypes.number
}

export const ResultTitle = styled.div`
  color: #FFFFFF;
  font-size: 17px;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  margin: 15px 50px;
`;

export const Button = styled.button`
  font-size: 15px;
  border: none; 
  outline: none;
  height: 40px;
  width: 180px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'Quicksand', sans-serif;
  
`;