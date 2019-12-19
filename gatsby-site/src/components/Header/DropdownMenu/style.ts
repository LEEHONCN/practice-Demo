import styled from 'styled-components';
import { 
  blackColor,
  mainColor,
  boxShadown
} from "../../style/design-specification";

export const DropdownMenuBox = styled.div`
  ${boxShadown};
  padding: 32px 64px 40px;
  width: 510px;
  height: 100px;
  background-color: #fff;
`;

export const DropdownMenuBoxItem = styled.div`
  display: inline-block;
`;

export const Title = styled.h1`
  ${blackColor}
  font-size: 16px
`;