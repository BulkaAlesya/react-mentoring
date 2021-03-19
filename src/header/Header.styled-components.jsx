import styled from 'styled-components';

import { Button } from '../Common/Common.style-components';
import { InputBox } from '../Common/Input/Input.styled-components';

export const Background = styled.div`
  position: absolute;
  top: 20px;
  height: 320px;
  width: 75%;
  left: 15%;
  background-image: url("https://d1v224g40dbxxy.cloudfront.net/s3fs-public/banner-images/poster2_mobile_1.jpg?WeqzVGAT5VMelUiAwmnVDDCai3uqeGVM");
  background-size: cover;
`;

export const FormContainer = styled.div`
  display: block;
  position: relative;
  top: 90px;
  margin: 0 auto;
  width: 85%;
`;
export const BlurWrapper = styled.div`
  height: 320px;
  width: 100%;
  backdrop-filter: blur(2px) brightness(50%)
`;
export const SearchInput = styled(InputBox)`
  background-color: #232323;
  width: 70%;
  height: 40px;
`;

export const HeaderTitle = styled.div`
  color: white;
  text-transform: uppercase;
  font-size: 45px;
  margin-bottom: 30px;
  display: block;
  font-weight: 100;
  font-family: 'Quicksand', sans-serif;
`;

export const SearchButton = styled(Button)`
  background-color: #f65261;
  color: white;
`;

export const AddButton = styled(Button)`
  background-color: #555555;
  color: #f65261;
  opacity: 0.8;
  position: absolute;
  right: 3%;
  top: 45px;
`;

