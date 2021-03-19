import styled from 'styled-components';

export const InputBox = styled.input`
  background-color: #424242;
  border: none;
  outline: none;
  color: #FFFFFF;
  font-size: 20px;
  width: 400px;
  padding: 0 25px;
  opacity: 0.8;
  height: 30px;
  margin-right: 10px;
  font-weight: 900;
  font-family: 'Quicksand', sans-serif;
`;
export const ReadOnlyInputBox = styled(InputBox)`
  background-color: #232323;
  color: #6f6c6c  ;

`
export const InputTitle = styled.div`
  color: #F65261;
  font-size: 13px;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  margin: 10px 0;
`;

export const InputFormContainer = styled.div`
  margin: 10px 0;
`;

