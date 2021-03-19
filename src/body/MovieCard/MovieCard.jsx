import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

import { BodyTitle } from '../../Common/Common.style-components';
import { Dialog } from '../../Common/modal/Dialog';
import { Movie } from '../MockMovieData';
import { DropDownItemElement } from '../SearchDropdown/SearchDropdown.styled-components';
import {
  ActionButton,
  ActionIcon,
  DropDownActionContainer,
  MovieCardBlock,
  MovieTitle,
  PosterContainer,
  TitleContainer,
  YearContainer,
} from './MovieCard.styled-components';

const MovieCard = ({ movieObject, onMovieDelete }) => {
  const [isOpen, showDD] = useState(false);
  let showDropdownBlock = () => showDD(!isOpen);
  const [showEdit, showEditDialog] = useState(false);
  const [showDelete, showDeleteDialog] = useState(false);
  const openEditdialog = () => { showEditDialog(true); showDD(false); }
  const openDeletedialog = () => { showDeleteDialog(true); showDD(false); }
  const onEditorRequestClose = () => { showEditDialog(false); }
  const onDeleteRequestClose = () => {
    showDeleteDialog(false);
    onMovieDelete(movieObject);
  }
  return (

    <MovieCardBlock>
      <PosterContainer src={movieObject.imgSrc}>
        <ActionButton onClick={showDropdownBlock}>
          <ActionIcon icon={faEllipsisV}></ActionIcon>
        </ActionButton>
        <DropDownActionContainer isOpen={isOpen}>
          <DropDownItemElement onClick={openEditdialog}>Edit</DropDownItemElement>
          <Dialog
            movieObject={movieObject}
            open={showEdit}
            type='edit'
            title='Edit Movie'
            onClose={() => onEditorRequestClose()}></Dialog>
          <DropDownItemElement onClick={openDeletedialog}>Delete</DropDownItemElement>
          <Dialog
            open={showDelete}
            movieObject={movieObject}
            type='delete'
            title='Delete Movie'
            onClose={() => onDeleteRequestClose()}></Dialog>
        </DropDownActionContainer>
      </PosterContainer>
      <TitleContainer>
        <span>
          <MovieTitle textSize={25}>{movieObject.name}</MovieTitle>
          <MovieTitle textSize={15}>{movieObject.ganre}</MovieTitle>
        </span>
        <YearContainer><BodyTitle textColor='#8f8a8a'>{movieObject.releaseDate}</BodyTitle></YearContainer>
      </TitleContainer>
    </MovieCardBlock>

  )
}

MovieCard.propTypes = {
  movieObject: PropTypes.instanceOf(Movie).isRequired,
  onMovieDelete: PropTypes.func.isRequired
}
export default MovieCard;