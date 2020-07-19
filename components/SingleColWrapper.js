import React from 'react';
import { DarkBlock, CustomContainer } from './layout/helpers';

export function SingleColWrapper(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <DarkBlock>
        <CustomContainer fluid={this.props.fluid}>
          <WrappedComponent {...this.props} />
        </CustomContainer>
        </DarkBlock>
      );
    }
  };
}