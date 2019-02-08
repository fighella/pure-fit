import React, { Component } from 'react';
import { Schedule } from '../Schedule';
import PureData from '../../utils/src';

export class ScheduleCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      loaded: false
    };
  }
  MindbodyFetch = () => {
    // Use if want to override
    // const filter = [
    //   { location: this.props.location || 'all' },
    //   { day: this.props.day || 'Today' },
    //   { class_style: this.props.class_style || 'all' },
    //   { teacher: this.props.teacher || 'all' }
    // ];
    var src = new PureData({ day: this.props.day }, false).classes,
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
      .then(data => this.setState({ classes: data.classes, loaded: true }))
      .catch(err => console.log('Did not fetch your things.'));
  };
  componentDidMount() {
    this.MindbodyFetch();
  }

  render() {
    return (
      <Schedule
        name={this.props.hide_title || this.props.name}
        location={this.props.name}
        mini={this.props.mini}
        day={this.props.day}
        classes={this.state.classes}
        loaded={this.state.loaded}
      />
    );
  }
}
