import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DropDownItemContainer } from '../SearchDropdown/SearchDropdown.styled-components';
import { PropTypes } from 'prop-types';

export const MovieCardBlock = styled.div`
  display: inline-block;
  width: 400px;
  height: 600px;
  margin-left: 50px;
  margin-top: 10px;
`;
export const PosterContainer = styled.div`
  width: 400px;
  height: 500px;
  background: ${props => `url(${props.src})`} no-repeat;
  background-size: 100%; 
`;
export const TitleContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const YearContainer = styled.span`
  border: solid  #8f8a8a 1px;
  height: 25px;
  padding: 1px 10px;
  border-radius: 5px;
`;

export const MovieTitle = styled.div`
  color: #ffffff;
  font-size:  ${props => props.textSize ? `${props.textSize}px` : '15px'};
  font-family: 'Quicksand', sans-serif;
  margin-top: 5px;
`;
MovieTitle.propTypes = {
  textSize: PropTypes.number
}

export const ActionButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: #232323;
  border-radius: 15px;
  position: relative;
  left: 90%;
  top: 10px;
  `;

export const ActionIcon = styled(FontAwesomeIcon)`
  color: #958d8d;
  font-size: 20px;
  position: relative;
  left: 11px;
  top: 4px;
`;

export const DropDownActionContainer = styled(DropDownItemContainer)`
  position: relative;
  left: 70%;
  width: 160px;
  color: #ffff;
  
`;
