import Loading from '../Loading';

const WithSpinner =
  (WrapperComponent) =>
  ({ isLoading, ...otherProps }) =>
    isLoading ? <Loading /> : <WrapperComponent {...otherProps} />;

export default WithSpinner;
