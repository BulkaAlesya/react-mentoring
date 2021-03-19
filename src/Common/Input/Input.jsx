import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Dropdown } from '../../body/SearchDropdown/SearchDropdown';
import { DropdownItem } from '../../body/SearchDropdown/SearchDropdownData';
import { InputBox, InputFormContainer, InputTitle, ReadOnlyInputBox } from './Input.styled-components';

const Input = ({ type, title, placeholder, value, readonly }) => {
  const items = [new DropdownItem('Comedy', 1), new DropdownItem('Action', 1), new DropdownItem('Fantastic', 1),];
  const [stateValue, updatestateValue] = useState(value);
  const dropdownClick = (a) => {
    updatestateValue(a.label);
  };

  const inputVariant = type === 'dropdown' ?
    (<Dropdown
      width={450}
      items={items}
      fullSize={true}
      changeSelected={dropdownClick}
      selected={stateValue || 'Select Genre'}>
    </Dropdown>) :
    (readonly ? (<ReadOnlyInputBox type={type} placeholder={placeholder} defaultValue={stateValue} readOnly={true}></ReadOnlyInputBox>)
      : (<InputBox type={type} placeholder={placeholder} defaultValue={stateValue}></InputBox>));
  return (
    <InputFormContainer>
      <InputTitle>{title}</InputTitle>
      {inputVariant}
    </InputFormContainer>
  );
}
export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  readonly: PropTypes.bool,
}
Input.defaultProps = {
  readonly: false,
}