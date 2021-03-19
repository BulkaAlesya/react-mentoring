import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchDropdownBlock = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  display: inline-block;
  width: 150px;
`;

export const DropDownItemContainer = styled.div`
  display: ${props => props.isOpen ? 'block' : ' none'};
  position: absolute;
  background-color: #424242;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

`;
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