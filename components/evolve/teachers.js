import React, { Component } from 'react';
import { EvolveConfig } from './config';
import TeacherCard from '../team/Card';
import styled from 'styled-components';
import { AppHelpers } from '../../utils/tools';

const [style] = [EvolveConfig.style];
const noFetchError = () => console.log('Did not fetch.');

export default class EvolveTeachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      teachers: []
    };
  }

  fetchYogaTeachers = async () => {
    const response = await fetch(
      AppHelpers.mbParams(this.props, 'workshopTeachers')
    ).catch(noFetchError);
    const json = await response.json().catch(noFetchError);
    this.setState({
      teachers: json.teachers,
      loaded: true
    });
  };

  componentWillMount() {
    this.fetchYogaTeachers();
  }

  componentWilllUnmount() {
    this.setState({ teachers: false, loaded: false });
  }

  render() {
    var teachers = this.state.teachers.map((teacher, index) => {
      return (
        <FlexCol key={'teacher_card_' + index}>
          <TeacherCard teacher={teacher} />
        </FlexCol>
      );
    });
    return (
      <div>
        {this.props.header ? (
          <h1 style={style.teaser.heading}>Your Teachers</h1>
        ) : (
          false
        )}
        <FlexRow>{this.state.loaded ? teachers : 'Loading...'}</FlexRow>
      </div>
    );
  }
}

const FlexRow = styled.div`
  display: flex;

  width: 100%;
  margin: auto;
  flex-direction: row;
  justify-content: left;
`;

const FlexCol = styled.div`
  min-width: 50%;
  text-align: left;
  p { 
    font-size: 1.1em; line-height: 1.4em;
    white-space: pre-wrap;
    font-family: futura-pt;
    font-style: normal;
    font-size: 18px;
    letter-spacing: .05em;
    line-height: 2em;
    font-weight: 300;
    }  
  } 
`;
