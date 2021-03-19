import styled from 'styled-components';
import { Button } from '../Common.style-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AddEditDialogContainer = styled.div`
  width: 500px;
  background-color: #232323;
`;
export const CloseIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  margin-left: 95%;
  display: block;
  font-size: 30px;
`;

export const SaveButton = styled(Button)`
  background-color: #F65261;
  color: white
`;

export const ResetButton = styled(Button)`
  background-color: #232323;
  color: #F65261;
  border: solid #F65261 2px;
  margin: 0 20px 0 70px;
`;

