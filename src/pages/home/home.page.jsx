/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Directory from '../../components/directory-menu/directory-menu.component';
import './homepage.styles.scss';

const HomePage = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  >
    <Directory />
  </div>
);

export default HomePage;
