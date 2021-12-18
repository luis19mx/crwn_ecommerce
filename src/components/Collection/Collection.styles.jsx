import styled from '@emotion/styled/macro';

export const CollectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const TitleStyles = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  text-transform: uppercase;
`;

export const ItemsStyles = styled.h2`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5vh 10px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  & > div {
    margin-bottom: 30px;
  }
`;
