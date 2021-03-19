import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Movie } from '../../body/MockMovieData';
import Input from '../Input/Input';
import { AddEditDialogContainer, ResetButton, SaveButton } from './AddEditDialog.styled-components';

export const AddEditDialog = ({ movieObject, isEditMode}) => {
  const [object, updateObject] = useState(movieObject);
  const resetObject = () => {
    updateObject(new Movie('', '', [], '', '', '', ''));
  };
  
  return (
    <AddEditDialogContainer>
      <Input
        type='name'
        value={object?.name}
        readonly={isEditMode}
        placeholder="Title here"
        title='Title'></Input>
      <Input
        type='date'
        placeholder="Select date"
        title='release date'></Input>
      <Input
        type='name'
        placeholder="Movie url here"
        value={object?.url}
        title='movie url'></Input>
      <Input
        type='dropdown'
        value={object?.ganre.toString()}
        title='ganre'></Input>
      <Input
        type='name'
        value={object?.overview}
        placeholder="Overview here"
        title='overview'></Input>
      <Input
        type='name'
        value={object?.runtime}
        placeholder="Runtime here"
        title='runtime'></Input>
      <ResetButton onClick={resetObject}>Reset</ResetButton>
      <SaveButton>Submit</SaveButton>

    </AddEditDialogContainer>
  )
}
AddEditDialog.propTypes = {
  movieObject: PropTypes.instanceOf(Movie),
  isEditMode: PropTypes.bool.isRequired,
}

AddEditDialog.defaultProps = {
  movieObject: new Movie('', '', '', '', '', '', ''),
  isEditMode: false,
}