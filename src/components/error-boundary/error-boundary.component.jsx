import React, { Component } from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends Component {
  // https://www.kapwing.com/404-illustrations?ref=producthunt
  // error illustrations
  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }
  
  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
          <ErrorImageText>Sorry, something went wrong...</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
};

export default ErrorBoundary;