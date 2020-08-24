import React from 'react';
import styled from 'styled-components';
import TeacherCard from './Card';


const Block = (props) => {
    console.log('PROPZ',props.teachers);
    const teachers = props.teachers
      .map((teacher, index) => {
        console.log(teacher);
        if(teacher.fields){
          return (
            <TeacherCol key={`teacherCol${index}`}>
              <TeacherCard teacher={teacher.fields} id={teacher.sys.id} />
            </TeacherCol>
        );
          }
      });
    return <TeacherRow>{teachers}</TeacherRow>;
  }

const TeacherRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: #111;
  padding:2em;
`;

const TeacherCol = styled.div`
  width: 25%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default Block;