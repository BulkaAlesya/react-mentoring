import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BodyTitle } from '../../Common/Common.style-components';
import {
  DropdownIcon,
  DropDownItemContainer,
  DropDownItemElement,
  SearchDropdownBlock,
} from './SearchDropdown.styled-components';
import { SearchItems } from './SearchDropdownData';

const Dropdown = ({ items, selected, changeSelected }) => {
  const [isOpen, openDropdown] = useState(false);
  let showDropdownBlock = () => openDropdown(!isOpen);
  const itemComponents = items.map(i => (
    <DropDownItemElement onClick={() => changeSelected(i.label)}>
      <BodyTitle textColor="#FFFFFF">{i.label}</BodyTitle>
    </DropDownItemElement>
  ));
  return (
    <span>
      <SearchDropdownBlock onClick={showDropdownBlock}>
        <BodyTitle textColor='#FFFFFF'> {selected} </BodyTitle>
        <DropdownIcon icon={faSortDown}></DropdownIcon>
      </SearchDropdownBlock>
      <DropDownItemContainer isOpen={isOpen}>
        {itemComponents}
      </DropDownItemContainer>
    </span>
  )
}
Dropdown.PropTypes = {
  items: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired
}

const SearchDropdown = () => {
  const [selectedItem, updateSelectedItem] = useState('Realese date');
  const dropdownClick = (a) => {
    updateSelectedItem(a);
  };

  return (
    <div>
      <BodyTitle textColor='#999797'> sort by </BodyTitle>
      <Dropdown
        items={SearchItems}
        changeSelected={dropdownClick}
        selected={selectedItem}
      ></Dropdown>
    </div>
  );
}
export default SearchDropdown;
