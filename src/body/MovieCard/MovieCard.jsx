import React, { useState } from 'react';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';

import { BodyTitle } from '../../Common/Common.style-components';
import {
  ActionIcon,
  ActionButton,
  MovieCardBlock,
  MovieTitle,
  PosterContainer,
  TitleContainer,
  YearContainer,
  DropDownActionContainer
} from './MovieCard.styled-components';

import { DropDownItemElement } from '../SearchDropdown/SearchDropdown.styled-components';
import { Movie } from '../MockMovieData';

const MovieCard = (movieObject) => {
  const [isOpen, showDD] = useState(false);
  let showDropdownBlock = () => showDD(!isOpen);
  return (

    <MovieCardBlock>
      <PosterContainer src={movieObject.movieObject.imgSrc}>
        <ActionButton onClick={showDropdownBlock}>
          <ActionIcon icon={faEllipsisV}></ActionIcon>
        </ActionButton>
        <DropDownActionContainer isOpen={isOpen }>
          <DropDownItemElement>Edit</DropDownItemElement>
          <DropDownItemElement>Delete</DropDownItemElement>
        </DropDownActionContainer> 
      </PosterContainer>
      <TitleContainer>
        <span>
          <MovieTitle textSize="25">{movieObject.movieObject.name }</MovieTitle>
          <MovieTitle textSize="15">{movieObject.movieObject.ganre}</MovieTitle>
        </span>
        <YearContainer><BodyTitle textColor='#8f8a8a'>{movieObject.movieObject.releaseDate}</BodyTitle></YearContainer>
      </TitleContainer>
    </MovieCardBlock>

  )
}

MovieCard.PropTypes = {
  movieObject: PropTypes.instanceOf(Movie).isRequired
}
export default MovieCard;