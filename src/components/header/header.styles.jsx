import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyles = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
`;
export const LogoContainerStyles = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const OptionsStyles = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;
export const OptionStyles = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
`;
