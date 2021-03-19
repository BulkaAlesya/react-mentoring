import React, { useState } from 'react';

import { BodyContainer, NavigationBlock, ContentContainer } from './BodyContainer.style-components'
import MenuContainer from './Menu-container/MenuContainer'
import { SearchDropdown } from './SearchDropdown/SearchDropdown'
import MovieCard from './MovieCard/MovieCard';
import { ResultTitle } from '../Common/Common.style-components';
import Footer from '../footer/Footer';
import { MovieList } from './MockMovieData';

const sortBy = (list, field) => list.sort((curr, next) => curr[field] > next[field] ? 1 : -1);
const deleteBy = (movie) => {};
const converToNode = (movieList) => movieList.map(obj => (
  <MovieCard key={JSON.stringify(obj)}
    movieObject={obj} onMovieDelete={deleteBy}>
  </MovieCard>
));


const Body = () => {
  const [movieNodes, unpdateMovieList] = useState(converToNode(MovieList));
  const sortAction = (f) => {
    unpdateMovieList(converToNode(sortBy(MovieList, f.id)));
  };
  return (
    <BodyContainer>
      <NavigationBlock>
        <div><MenuContainer></MenuContainer></div>
        <SearchDropdown
          onAction={sortAction}></SearchDropdown>
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

