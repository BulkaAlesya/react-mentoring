import React from 'react';

import { BodyTitle } from '../Common.style-components';
import { LogoTitle } from '../../header/LogoTitle/LogoTitle';
import { ButtonBlock, NotFoundContainer, NotFoundTextBox, GoBackButton } from './ErrorPage.styled-components';

const ErrorPage = React.Catch(function MyErrorBoundary(props, error) {
  return (
    error ? (<NotFoundContainer>
      <LogoTitle></LogoTitle>
      <NotFoundTextBox>404</NotFoundTextBox>
      <ButtonBlock>
        <GoBackButton onClick={onButtonClick}> <BodyTitle textSize={40} textColor=" #F65251">Go Back To Home </BodyTitle></GoBackButton>
      </ButtonBlock>
    </NotFoundContainer>)
      : props.children
  );
});

export default ErrorPage;