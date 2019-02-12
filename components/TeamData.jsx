import React from 'react';

function TeamData(WrappedComponent, PureData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        teacher: false,
        loaded_contents: false,
        workshops: []
      };
    }
    componentDidMount() {
      this.grabTeachers();
      this.grabWorkshops();
    }
    grabWorkshops = () => {
      var src = new PureData(this.props, 12).workshops,
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
          this.setState({ workshops: data.workshops, loaded: true })
        )
        .catch(err => console.log('Did not fetch your things.'));
    };
    byLocationAndWorkshop = e => {
      return (
        e.location.toLowerCase() === this.props.match.params.handle &&
        e.workshop_type === 'Workshop'
      );
    };
    grabTeachers() {
      var src = new PureData(this.props, false).teachers,
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
          this.setState({ teacher: data.teachers, loaded_contents: true })
        )
        .catch(err => console.log('Did not fetch your things.'));
    }
    render() {
      return (
        <WrappedComponent
          teacher_data={this.state.teacher}
          workshops_data={this.state.workshops}
          {...this.props}
        />
      );
    }
  };
}

export default TeamData;
