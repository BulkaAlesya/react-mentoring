import React, { useState } from 'react';

import { Dialog } from '../Common/modal/Dialog';
import {
  AddButton,
  Background,
  BlurWrapper,
  FormContainer,
  HeaderTitle,
  SearchButton,
  SearchInput,
} from './Header.styled-components';
import { LogoTitle } from './LogoTitle/LogoTitle';

const Header = () => {
  const [show, showDialog] = useState(false);
  const opendialog = () => {
    showDialog(true);
  };
  const onRequestClose = () => {
    showDialog(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(e);
    }
  }
    return (
      <Background>
        <BlurWrapper>
          <LogoTitle></LogoTitle>
          <AddButton onClick={opendialog}> + ADD MOVIE</AddButton>
          <Dialog
            title='Add Movie'
            open={show}
            onClose={() => onRequestClose()}></Dialog>
          <FormContainer>
            <HeaderTitle> Find your movie</HeaderTitle>
            <span>
              <SearchInput onKeyPress={handleKeyPress} placeholder="What do you want to watch" />
              <SearchButton> SEARCH </SearchButton>
            </span>
          </FormContainer>
        </BlurWrapper>
      </Background>
    );
  }
  export default Header;
