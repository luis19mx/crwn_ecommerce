import styled from '@emotion/styled/macro';

export const CheckoutItemStyles = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  > span {
    width: 23%;
  }
`;

export const ImageContainerStyles = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RemoveStyles = styled.div`
  padding-left: 12px;
  cursor: pointer;
  will-change: transform;
  transform: scale(1);
  transform-origin: right;
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const QuantityStyles = styled.span`
  display: flex;
`;

export const QuantityArrowStyles = styled.span`
  cursor: pointer;
`;

export const QuantityValueStyles = styled.span`
  margin: 0 10px;
`;
