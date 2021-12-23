import { Component } from 'react';
import Img from '../../assets/error.png';
import {
  ErrorImageStyles,
  ErrorOverlayStyles,
  ErrorTextStyles,
} from './ErrorBoundary.styles';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.log('info', info);
    console.log('error', error);
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <ErrorOverlayStyles>
          <ErrorImageStyles src={Img} alt="" />
          <ErrorTextStyles>Sorry this page is broken 💩</ErrorTextStyles>
          <code>{error}</code>
        </ErrorOverlayStyles>
      );
    }

    return this.props.children;
  }
}
