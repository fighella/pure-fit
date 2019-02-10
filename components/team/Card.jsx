import React, { Component } from 'react';
import { withRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components';


class TeacherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: this.props.teacher.pose_1.card.url
    };
  }

       
    render() {
      const teacher = this.props.teacher;
    return (
      <Link href={`/team_show?handle=${this.props.teacher.slug}`} as={`/team/${this.props.teacher.slug}`}><a>
      <TeacherProfile
        // onMouseOver={() => this.shuffleImages()}
        dropped={this.props.dropped}
      >
        <TeacherImg bg_img={this.state.bg} />
        <TeacherInfo>
          <TeacherName>
            {teacher.first_name} {teacher.last_name}
            <TeacherPosition>{teacher.position}</TeacherPosition>
          </TeacherName>
        </TeacherInfo>
      </TeacherProfile></a>
      </Link>
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
  opacity: 0.9;
  ${props => (props.dropped ? isDropped : false)}
  margin-bottom: 1em;
  z-index: 100;
  transition: all 0.5s;
  &:hover {
    z-index: 110;
    box-shadow: 0 0 120px #eee;
    opacity: 1;
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
