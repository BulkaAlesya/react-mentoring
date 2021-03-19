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

export const Dropdown = ({ items, selected, changeSelected, width, fullSize }) => {
  const [isOpen, openDropdown] = useState(false);
  let showDropdownBlock = () => openDropdown(!isOpen);
  const onDropdownClick = (i) => {
    changeSelected(i);
    showDropdownBlock();
  };
  const itemComponents = items.map(i => (
    <DropDownItemElement
      key={JSON.stringify(i)}
      onClick={() => onDropdownClick(i)}>
      <BodyTitle textColor="#FFFFFF">{i.label}</BodyTitle>
    </DropDownItemElement>
  ));
  return (
    <span>
      <SearchDropdownBlock
        width={width}
        fullSize={fullSize}
        onClick={showDropdownBlock}>
        <span><BodyTitle textColor='#FFFFFF'> {selected} </BodyTitle></span>
        <span><DropdownIcon icon={faSortDown}></DropdownIcon></span>
      </SearchDropdownBlock>
      <DropDownItemContainer
        width={width}
        isOpen={isOpen}>
        {itemComponents}
      </DropDownItemContainer>
    </span>
  )
}
Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  changeSelected: PropTypes.func.isRequired,
  width: PropTypes.number,
  fullSize: PropTypes.bool
}

export const SearchDropdown = ({ onAction }) => {
  const [selectedItem, updateSelectedItem] = useState('Realese date');
  const dropdownClick = (a) => {
    updateSelectedItem(a.label);
    onAction(a);
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

