import React from 'react';

export function ContentData(WrappedComponent, PureData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        contents: []
      };
    }
    componentDidMount() {
      this.MindbodyBlogInit();
    }
    MindbodyBlogInit() {
      console.log('Props', this.props);
      var src = new PureData(this.props, false).contents,
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
          this.setState({ contents: data.contents, loaded_contents: true })
        )
        .then(() => console.log('inside mount', this.state))
        .catch(err => console.log('Did not fetch your things.'));
    }
    render() {
      return <WrappedComponent data={this.state.contents} {...this.props} />;
    }
  };
}
