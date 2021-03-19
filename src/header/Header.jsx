import React from 'react';

import { AddButton, Background, BlurWrapper, FormContainer, HeaderTitle, SearchButton, SearchInput } from './Header.styled-components';
import { LogoTitle } from './LogoTitle/LogoTitle';

const Header = () =>
(
  <Background>
    <BlurWrapper>
      <LogoTitle></LogoTitle>
      <AddButton> + ADD MOVIE</AddButton>
      <FormContainer>
        <HeaderTitle> Find your movie</HeaderTitle>
        <span>
          <SearchInput placeholder="What do you want to watch" />
          <SearchButton> SEARCH </SearchButton>
        </span>
      </FormContainer>
    </BlurWrapper>
  </Background>
);
export default Header;