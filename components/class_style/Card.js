import React, { Component } from 'react';
import Link from './utils';
import { withRouter } from 'next/router';
import styled, { css } from 'styled-components';

class TeacherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: this.props.teacher.pose_1.card.url
    };
  }
  loadTeacher = () => {
    let path = Link(this.props.teacher.slug);
    this.props.history.push(path);
  };
  shuffleImages = () => {
    const timages = [
      this.props.teacher.pose_1.card.url,
      this.props.teacher.pose_2.card.url,
      this.props.teacher.pose_3.card.url
    ].filter(function(el) {
      return el != null;
    });
    this.setState({ bg: timages[Math.floor(Math.random() * timages.length)] });
  };
  render() {
    const teacher = this.props.teacher;
    return (
      <TeacherProfile
        onMouseOver={() => this.shuffleImages()}
        dropped={this.props.dropped}
        onClick={() => this.loadTeacher()}
      >
        <TeacherImg bg_img={this.state.bg} />
        <TeacherInfo>
          <TeacherName>
            {teacher.first_name} {teacher.last_name}
            <TeacherPosition>{teacher.position}</TeacherPosition>
          </TeacherName>
        </TeacherInfo>
      </TeacherProfile>
    );
  }
}

const isDropped = css`
  border: 1px solid #f5f5f5;
  box-shadow: 2px 2px 2px #ccc;
  margin: 4px auto;
  width: 85%;
`;

const TeacherProfile = styled.div`
  position: relative;
  cursor: pointer;
  max-width: 320px;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #f5f5f5;
  box-shadow: 0 0 80px #dedede;
  ${props => (props.dropped ? isDropped : false)}
  margin-bottom: 1em;
  z-index: 100;
  transition: all 0.5s;
  &:hover {
    z-index: 110;
    box-shadow: 0 0 120px #eee;
  }
`;

const TeacherImg = styled.div`
  background-size: cover;
  background-image: url(${props => props.bg_img});
  background-position: center center;
  width: 100%;
  padding-top: 110%;
  background-repeat: none;
  transition: all 0.5s;
  z-index: 0;
`;

const TeacherInfo = styled.div`
  width: 100%;
  position: absolute;
  bottom: 6px;
  left: 8px;
  text-align: left;
`;

const TeacherName = styled.div`
  color: #333;
  padding: 4px;
  margin: 0 auto;
  font-size: 1em;
  text-shadow: 0 0 10px #fff;
`;

const TeacherPosition = styled.span`
  display: block;
  color: #888;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
`;

export default withRouter(TeacherCard);
