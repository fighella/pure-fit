import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppHelpers } from '../utils/tools';
import { fonts, colors } from '../css_variables';
import Link from 'next/link'

const noFetchError = () => console.log('Did not fetch.');

class Block extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      class_styles: [],
      toShow: 4
    };
  }
  componentDidMount() {
    this.fetchClassStyles();
    this.setState({ toShow: 100 });
  }
  fetchClassStyles = async () => {
    const response = await fetch(
      AppHelpers.mbParams(this.props, 'classStyles')
    ).catch(noFetchError);
    const json = await response.json().catch(noFetchError);
    this.setState({
      class_styles: json.class_styles,
      loaded: true
    });
  };
  render() {
    var class_styles = this.state.class_styles
      .slice(0, this.state.toShow)
      .map((class_style, index) => {
        return (
          <Link href={`${class_style.slug}`}>
          <CsCol
            key={`teacherCol${index}`}
          >
            <ImgTease bg={class_style.hero.url} />
            <Details>
              <StyleTitle children={class_style.title} />
              <BlockTeaser children={class_style.teaser} />
              <BlockLink href={class_style.slug}>Read More &raquo;</BlockLink>
            </Details>
          </CsCol>
          </Link>
        );
      });

    return <CsRow>{class_styles}</CsRow>;
  }
}

export default Block;

const CsRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: stretch;
  justify-content: space-around;
`;

const CsCol = styled.div`
  width: 40%;
  transition: all 0.5s;
  min-height: 160px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: row;
  margin: 0.5em 0;
  border-radius: 4px;
  overflow: auto;
  background: #fff;
  &:hover {
    border-color: ${colors.red};
  }
`;

const Details = styled.div`
  width: 68%;
  padding: 4% 0;
  padding-left: 3%;
`;

const ImgTease = styled.div`
  width: 31.8%;
  background-color: #ccc;
  background-size: cover;
  background-position: center center;
  background-repeat: none;
  position: relative;

  ${props => (props.bg ? 'background-image: url(' + props.bg + ');' : false)}
`;

const StyleTitle = styled.h4`
  ${fonts.primary};
  font-size: 22px;
  text-transform: none;
  font-weight: 300;
`;

const BlockTeaser = styled.p`
  color: #999;
`;

const BlockLink = styled.a`
  color: ${colors.blue};
`;
