import styled from '@emotion/styled/macro';
import Button from '../Button';

export const ItemStyles = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  @media (max-width: 800px) {
    width: 47vw;
    margin: 0 1vw 2vh;
  }

  @media (max-width: 500px) {
    width: 98%;
  }

  &:hover {
    > div:first-of-type {
      opacity: 0.9;
    }

    button {
      transform: translateY(0);
      opacity: 0.9;
    }
  }
`;

export const ItemImageStyles = styled.div`
  cursor: pointer;
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ imageUrl }) => (imageUrl ? imageUrl : '')});
  margin-bottom: 5px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const CtaStyles = styled(Button)`
  width: 80%;
  margin-bottom: 1em;
  padding: 0.66em 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  backdrop-filter: blur(4px);
  transform: translateY(1em);
  opacity: 0;
  font-family: inherit;
  border: none;
  will-change: opacity, transform;
  transition: all 0.3s ease-out;
  transform-origin: bottom;

  &.inverted {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &:hover {
    transform: translateY(0) scale(1.04) !important;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
  }

  @media (max-width: 800px) {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: translateY(0) !important;
  }
`;

export const FooterStyles = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameStyles = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceStyles = styled.span`
  width: 10%;
`;
