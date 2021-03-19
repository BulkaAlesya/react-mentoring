import React from 'react';
import styled from 'styled-components';

const NetflixLogoTitle = styled.span`
  color: #f65261;
  font-size: 25px;
  font-family: 'Lato', sans-serif;
`;

const RouletteLogoTitle = styled.span`
  color: #f65261;
  font-weight:600;
  font-size: 25px;
  font-family: 'Quicksand', sans-serif;
`;

const TitleContainer = styled.div`
  margin-left: 50px;
  padding-top: 2  0px;
`;
export const LogoTitle = () =>
(<TitleContainer>
  <NetflixLogoTitle>netflix</NetflixLogoTitle>
  <RouletteLogoTitle>roulette</RouletteLogoTitle>
</TitleContainer>
);

