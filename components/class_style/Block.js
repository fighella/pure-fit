import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppHelpers } from '../../utils/tools';
import { fonts, colors } from '../../styles/variables';
import Link from 'next/link'

const noFetchError = () => console.log('Did not fetch.');

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toShow: 4
    };
  }
  componentDidMount() {
    this.setState({ toShow: 100 });
  }
 
  render() {
    const { classStyles } = this.props;
    console.log(this.props)
    const cs = classStyles.slice(0, this.state.toShow)
      .map((class_style, index) => {
        return ( <CsCol
          key={`teacherCol${index}`}
        >
          <Link as={`/class_styles/${class_style.slug}`} href={`/class_styles_show?handle=${class_style.slug}`} key={class_style.slug}>
          <a title={class_style.title}>
         
            <Details bg={class_style.hero.url}>
              <StyleTitle children={class_style.title} />
            </Details>
          
          </a>
          </Link></CsCol>
        );
      });

    return <CsRow>{cs}</CsRow>;
  }
}

export default Block;

const CsRow = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: stretch;
  justify-content: space-around;
`;

const CsCol = styled.div`
  width: 31%;
  transition: all 0.5s;
  min-height: 160px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: row;
  margin: 0.5em 0;
  color: #333;
  overflow: auto;
  background: #fff;
  a { width: 100%;}
  @media (max-width: 700px) {
    width: 100%;
  }
 
`;

const Details = styled.div`
  width: 100%;
  padding-bottom: 85%;
  position: relative;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background-size: auto 100%;
  background-position: center center;
  background-repeat: none;
  ${props => (props.bg ? 'background-image: url(' + props.bg + ');' : false)}
  transition: background-size 0.4s;
  &:hover { 
    background-size: auto 105%;
  }
`;

const StyleTitle = styled.h4`
  position: absolute;
  bottom: 1%;
  text-shadow: 0 0 30px #333;
  width: 100%;
  ${fonts.primary};
  font-size: 42px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 450;
`;