import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';

import { Movie } from '../../body/MockMovieData';
import { BodyTitle } from '../Common.style-components';
import { AddEditDialog } from './AddEditDialog';
import { DeleteDialog } from './DeleteDialog/DeleteDialog';
import { CloseIcon } from './AddEditDialog.styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: '#232323',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    paddingLeft: '50px',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    backdropFilter: 'blur(5px)',
  }
};
export const Dialog = ({ movieObject, onClose, open, title, type}) => {
  const form = type === 'delete' ?
    (<DeleteDialog movieObject={movieObject} onClose={onClose}></DeleteDialog>) :
    (<AddEditDialog
      onClose={onClose}
      movieObject={movieObject}
      isEditMode={!!movieObject}
    ></AddEditDialog>)
  return (
    <>
      <Modal
        isOpen={open}
        onClose={onClose}
        style={customStyles}
        ariaHideApp={false}
      >
        <div onClick={onClose}>
          <CloseIcon icon={faTimes}></CloseIcon>
        </div>
        <BodyTitle textColor='#ffffff' textSize={30}> {title}</BodyTitle>
        {form}
      </Modal>
    </>
  )
}
Dialog.propTypes = {
  movieObject: PropTypes.instanceOf(Movie),
  onClose: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}