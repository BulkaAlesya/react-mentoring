import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MenuItem } from './MenuContainer.styled-container';
import { BodyTitle } from '../../Common/Common.style-components';

const AddButon = ({ handleAddValue, label, isActive }) => {
  return <MenuItem
    active={isActive}
    onClick={handleAddValue}>
    <BodyTitle textColor='#ffffff'>{label}</BodyTitle></MenuItem>
}
class MenuObject {
  constructor(label, isActive) {
    this.label = label;
    this.isActive = isActive;
  }
}

AddButon.propsTypes = {
  handleAddValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
}

const MenuItemsList = [new MenuObject('All', true),
new MenuObject('Documetary', false),
new MenuObject('Comedy', false),
new MenuObject('Horror', false),
new MenuObject('crime', false)]

const MenuContainer = () => {
  const [list, updateList] = useState([true, false, false, false, false]);

  const updateItemStatus = (i) => {
    const newList = list.map(l => false);
    newList[i] = true;
    updateList(newList);
  }
  return MenuItemsList.map((item, i) => (
    <AddButon
      key={item.label}
      handleAddValue={() => updateItemStatus(i)}
      label={item.label}
      isActive={list[i]}
    ></AddButon>
  ));
}
export default MenuContainer;

