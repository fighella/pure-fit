import React from 'react';

function ClassStyleData(WrappedComponent, PureData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        class_style: false,
        loaded_contents: false
      };
    }
    componentDidMount() {
      this.grabClassStyles();
    }
    grabClassStyles = () => {
      var src = new PureData({ class_style: this.props.class_style }, 12)
          .classStyle,
        params = [];
      src.filters.map((filter, index) =>
        params.push(
          Object.values(src.filters[index])[0]
            ? `&by_${Object.keys(src.filters[index])[0]}=${
                Object.values(src.filters[index])[0]
              }`
            : ''
        )
      );
      var url = params.reduce((acc, cv) => {
        return acc + cv;
      }, src.base);
      fetch(url)
        .then(response => response.json())
        .then(data =>
          this.setState({ class_style: data.class_styles, loaded: true })
        )
        .catch(err => console.log('Did not fetch your things.'));
    };
    byLocationAndWorkshop = e => {
      return (
        e.location.toLowerCase() === this.props.match.params.handle &&
        e.workshop_type === 'Workshop'
      );
    };
    render() {
      return (
        <WrappedComponent
          class_styles={this.state.class_style}
          {...this.props}
        />
      );
    }
  };
}

export default ClassStyleData;
