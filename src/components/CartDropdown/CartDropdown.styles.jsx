import styled from '@emotion/styled/macro';

export const CartDropdownStyles = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000;
  background-color: #fff;
  top: 80px;
  right: 0;
  z-index: 2;

  button {
    margin-top: auto;
  }

  [aria-disabled='true'] {
    background-color: gray;
    opacity: 0.7;

    &:hover {
      color: white;
      border-color: transparent;
    }
  }
`;

export const ItemsStyles = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const MessageStyles = styled.span`
  font-size: 18px;
  margin: 50px auto 0;
  text-align: center;
`;
