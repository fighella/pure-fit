import React from 'react';
import { AppHelpers } from '../utils/tools';
const noFetchError = () => console.log('Did not fetch.');

export default function PricingData(WrappedComponent, PureData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mounted: true,
        loaded: false,
        standard_pricing: [],
        featured_pricing: []
      };
    }
    componentDidMount() {
      this.mounted = true;
      this.fetchYogaPricing();
    }
    componentWillUnMount() {
      this.mounted = false;
    }
    fetchYogaPricing = async () => {
      const response = await fetch(
        AppHelpers.mbParams(this.props, 'pricing')
      ).catch(noFetchError);
      const json = await response.json().catch(noFetchError);
      if (this.state.mounted) {
        this.setState({
          standard_pricing: json.standard_packages,
          featured_pricing: json.featured_packages,
          loaded: true
        });
      }
    };
    render() {
      return (
        <WrappedComponent
          featured_pricing={this.state.featured_pricing}
          standard_pricing={this.state.standard_pricing}
          {...this.props}
        />
      );
    }
  };
}
