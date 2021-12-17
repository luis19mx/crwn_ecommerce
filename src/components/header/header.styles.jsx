import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

export const HeaderStyles = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;

  @media (max-width:800px) {
    padding-left: 3vw;
  }
`;
export const LogoContainerStyles = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width:800px) {
    width: 14%;
  }
`;
export const OptionsStyles = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  @media (max-width:800px) {
    width: auto;
  }
`;
export const OptionStyles = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;

  @media (max-width:800px) {
    padding-left: 3vw;
    padding-right: 3vw;
  }
`;
export const OptionStylesAsDiv = styled.div`
  padding: 10px 15px;
  text-transform: uppercase;
`;
