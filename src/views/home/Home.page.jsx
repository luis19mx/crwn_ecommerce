/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DirectoryMenu from '../../components/DirectoryMenu';
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
      <DirectoryMenu />
    </div>
  );
}
