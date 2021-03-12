import styled from 'styled-components';
import PropTypes from 'prop-types';

export const MenuItem = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  background-color: inherit;
  padding: 5px 10px ;
  border-bottom: ${props => props.active ? 'solid #f65261 2px' : ''};
`;

MenuItem.PropTypes = {
  active: PropTypes.bool
}

