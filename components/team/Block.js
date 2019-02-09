import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppHelpers } from '../../utils/tools';
import TeacherCard from './Card';
const noFetchError = () => console.log('Did not fetch.');

export default class Block extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      teachers: [],
      toShow: 4
    };
  }
  componentDidMount() {
    this.fetchTeachers();
    this.setState({ toShow: 100 });
  }
  fetchTeachers = async () => {
    const response = await fetch(
      AppHelpers.mbParams(this.props, 'teachers')
    ).catch(noFetchError);
    const json = await response.json().catch(noFetchError);
    this.setState({
      teachers: json.teachers,
      loaded: true
    });
  };
  render() {
    var teachers = this.state.teachers
      .slice(0, this.state.toShow)
      .map((teacher, index) => {
        return (
          <TeacherCol key={`teacherCol${index}`}>
            <TeacherCard teacher={teacher} />
          </TeacherCol>
        );
      });

    return <TeacherRow>{teachers}</TeacherRow>;
  }
}

const TeacherRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const TeacherCol = styled.div`
  width: 25%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;