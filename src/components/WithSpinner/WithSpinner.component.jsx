import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles';

const WithSpinner =
  (WrapperComponent) =>
  ({ isLoading, ...otherProps }) =>
    isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );

export default WithSpinner;
