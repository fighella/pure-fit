import React from 'react';

export function BlogData(WrappedComponent, PureData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        blogs: []
      };
    }
    componentDidMount() {
      this.MindbodyBlogInit();
    }
    MindbodyBlogInit() {
      var src = new PureData(this.props, false).blogs,
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
        .then(data => this.setState({ blogs: data.blogs, loaded_blogs: true }))
        .catch(err => console.log('Did not fetch your things.'));
    }
    render() {
      return <WrappedComponent data={this.state.blogs} {...this.props} />;
    }
  };
}

// export default BlogData();