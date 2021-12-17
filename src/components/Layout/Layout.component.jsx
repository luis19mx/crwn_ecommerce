import Header from '../Header';
import GlobalStyles from '../GlobalStyles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}
