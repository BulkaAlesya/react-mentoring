import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Movie } from '../../../body/MockMovieData';
import { BodyTitle } from '../../Common.style-components';
import { ConfirmButton, DeleteDialogContainer } from './DeleteDialog.styled-components';

export const DeleteDialog = ({ movieObject, onClose}) => {
  const [object, updateObject] = useState(movieObject);
  const resetObject = () => {
    updateObject(new Movie('', '', [], '', '', '', ''));
  };

  return (
    <DeleteDialogContainer>
      <BodyTitle textColor='#ffffff' textSize={15}> Are you sure you want to delete {object.name} movie</BodyTitle>
      <ConfirmButton onClick={() => onClose()}>Confirm</ConfirmButton>
    </DeleteDialogContainer>
  )
}
DeleteDialog.propTypes = {
  movieObject: PropTypes.instanceOf(Movie),
  onClose: PropTypes.func.isRequired,
}
