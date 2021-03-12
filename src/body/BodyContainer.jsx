import React from 'react';

import { BodyContainer, NavigationBlock, ContentContainer } from './BodyContainer.style-components'
import MenuContainer from './Menu-container/MenuContainer'
import SearchDropdown from './SearchDropdown/SearchDropdown'
import MovieCard from './MovieCard/MovieCard';
import { ResultTitle } from '../Common/Common.style-components';
import Footer from '../footer/Footer';
import { MovieList } from './MockMovieData';

const Body = () => {
  let movieNodes = MovieList.map(obj => (
    <MovieCard movieObject={obj}></MovieCard>
  ));
  return (
    <BodyContainer>
      <NavigationBlock>
        <div><MenuContainer></MenuContainer></div>
        <SearchDropdown></SearchDropdown>
      </NavigationBlock>
      <ResultTitle> <b>{movieNodes.length}</b> movies found</ResultTitle>
      <ContentContainer>
        {movieNodes}
      </ContentContainer>
      <Footer />
    </BodyContainer>
  )
};

export default Body;

