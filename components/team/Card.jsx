import React from 'react';
import { withRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components';


const TeacherCard = (props) => {
    const teacher = props.teacher;
    const img = teacher.photos ? <TeacherImg bg_img={teacher.photos[0]} /> : false

    return (
      <Link href={`/team_show?handle=${teacher.teacherKey}&id=${props.id}`} as={`/team/${teacher.teacherKey}/${props.id}`}><a>
      <TeacherProfile
        // onMouseOver={() => this.shuffleImages()}
        dropped={props.dropped}
      >
        {img}
        <TeacherInfo>
          <TeacherName>
            {teacher.firstName} {teacher.lastName}
            <TeacherPosition>{teacher.position}</TeacherPosition>
          </TeacherName>
        </TeacherInfo>
      </TeacherProfile></a>
      </Link>
    );
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
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #fff;
  border: 1px solid #333;
  box-shadow: 0 0 80px #222;
  opacity: 0.9;
  ${props => (props.dropped ? isDropped : false)}
  margin-bottom: 1em;
  z-index: 100;
  transition: all 0.5s;
  &:hover {
    z-index: 110;
    box-shadow: 0 0 120px #000;
    opacity: 1;
  }
`;

const TeacherImg = styled.div`
  background-size: cover;
  background-image: url(${props => props.bg_img.fields.file ? props.bg_img.fields.file.url : false});
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
  color: #efefef;
  padding: 4px;
  margin: 0 auto;
  font-size: 1em;
  text-shadow: 0 0 10px #333;
`;

const TeacherPosition = styled.span`
  display: block;
  color: #888;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
`;

export default withRouter(TeacherCard);
