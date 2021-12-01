/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Directory from '../../components/directory-menu/directory-menu.component';
import './home.styles.scss';

export default function HomePage() {
  return (
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
}
