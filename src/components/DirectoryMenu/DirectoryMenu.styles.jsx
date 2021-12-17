import styled from '@emotion/styled/macro';

export const DirectoryMenuStyles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
