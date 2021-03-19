import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const SearchDropdownBlock = styled.button`
  border: none;
  outline: none;
  height: ${props => props.width ? '40px' : 'auto'};
  background-color: ${props => props.fullSize ? '#424242' : 'inherit' };
  display: ${props => props.fullSize ? 'flex':'inline-block' };
  justify-content: ${props => props.fullSize ? 'space-between':'none' };
  width: ${props => props.width ? `${props.width}px` : '150px'};
`;
SearchDropdownBlock.propTypes = {
  width: PropTypes.number,
  fullSize: PropTypes.bool,
}

export const DropDownItemContainer = styled.div`
  display: ${props => props.isOpen ? 'block' : ' none'};
  position: absolute;
  background-color: #424242;
  width: ${props => props.width ? `${props.width}px` : '150px'};
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;
DropDownItemContainer.propTypes = {
  width: PropTypes.number,
  isOpen: PropTypes.bool,
}

export const DropDownItemElement = styled.span`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
    &:hover {
    background-color: #f65261;
    color: #FFFFFF;
  }
`;

export const DropdownIcon = styled(FontAwesomeIcon)`
  color: #f65261;
  margin-left: 10px
`;