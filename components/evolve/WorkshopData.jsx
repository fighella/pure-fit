import React from 'react';
import { AppHelpers } from '../../utils/tools';

const noFetchError = () => console.log('Did not fetch.');

function WorkshopData(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        workshops: [],
        loaded: false
      };
    }

    componentDidMount() {
      this.fetchYogaWorkshops();
    }

    fetchYogaWorkshops = async () => {
      try {
        const response = await fetch(
          AppHelpers.mbParams(this.props, 'workshops')
        );
        const json = await response.json();
        this.setState({
          workshops: json.workshops,
          loaded: true
        });
      } catch {
        noFetchError();
      }
    };

    render() {
      const { workshops } = this.state;
      return <WrappedComponent workshops={workshops} {...this.props} />;
    }
  };
}

export default WorkshopData;
