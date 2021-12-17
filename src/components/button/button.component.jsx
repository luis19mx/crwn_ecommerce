import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';

const Button = ({ children, ...props }) => (
  <ButtonStyles {...props}>{children}</ButtonStyles>
);

export default Button;

const ButtonStyles = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;

  ${getButtonStyles}
`;

function getButtonStyles({ isBlue, inverted }) {
  if (isBlue) return blueStyles;
  return inverted ? invertedStyles : regularStyles;
}

const blueStyles = css`
  background-color: #4285f4;
  color: white;
  border: 1px solid transparent;

  &:hover {
    background-color: #357ae8;
    border-color: #357ae8;
  }
`;

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const regularStyles = css`
  background-color: black;
  color: white;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`;
