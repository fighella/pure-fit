import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';

export function SingleColWrapper(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <CustomContainer fluid={this.props.fluid}>
          <WrappedComponent {...this.props} />
        </CustomContainer>
      );
    }
  };
}

const CustomContainer = styled(Container)`
  padding: ${props => (props.fullWidth ? 0 : false)};
`;
