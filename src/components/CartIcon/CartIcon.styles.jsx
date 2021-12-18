import styled from '@emotion/styled/macro';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconStyles = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const IconStyles = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

export const CountStyles = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
