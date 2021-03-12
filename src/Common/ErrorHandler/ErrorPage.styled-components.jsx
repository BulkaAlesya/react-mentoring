import styled from 'styled-components';
import { BodyContainer } from '../../body/BodyContainer.style-components';
import { SearchButton } from '../../header/Header.styled-components';

export const NotFoundContainer = styled(BodyContainer)`
  top: 100px;
`;

export const NotFoundTextBox = styled.div`
  padding: 70px 0 30px;
  width: 100%;
  text-align: center;
  font-size: 200px;
  font-family: 'Press Start 2P', cursive;
  color: #555555;
`;

export const ButtonBlock = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 100px;

`;
export const GoBackButton = styled(SearchButton)`
  width: 400px;
  height: 100%;
  background-color: inherit;
  border: solid #F65251 1px;
`;