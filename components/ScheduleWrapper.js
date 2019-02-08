import React from 'react';

export default function ScheduleWrapper(WrappedComponent, PureData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        classes: []
      };
    }
    componentDidMount() {
      this.MindbodyBlogInit();
    }
    MindbodyBlogInit() {
      var src = new PureData(this.props, false).classes,
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
          this.setState({ classes: data.classes, loaded_classes: true })
        )
        .then(() => console.log('inside mount', this.state))
        .catch(err => console.log('Did not fetch your things.'));
    }
    render() {
      return (
        <WrappedComponent
          name="name"
          classes={this.state.classes}
          {...this.props}
        />
      );
    }
  };
}
