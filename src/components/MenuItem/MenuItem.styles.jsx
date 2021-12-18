import styled from '@emotion/styled/macro';

export const MenuItemStyles = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  position: relative;
  overflow: hidden;

  @media (max-width: 800px) {
    height: 200px;
  }

  &:first-of-type {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;

    img {
      transform: scale(1.1);
      transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    > div {
      opacity: 1;
    }
  }
`;

export const ContentStyles = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
  will-change: opacity;
  opacity: 0.7;
  position: relative;
  z-index: 1;
  transition: opacity 0.15s linear;

  h1 {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  span {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const ImageStyles = styled.img`
  transform: scale(1);
  will-change: transform;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.15s linear;
`;
