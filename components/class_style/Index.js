import React, { Component } from 'react';
import Hero from '../Hero';
import { AppContent } from '../data/content';
import styled from 'styled-components';
import ClassStylesBlock from './Block';
import { fonts } from '../css_variables';
const t = AppContent.class_styles;

export default class Index extends Component {
  render() {
    return (
      <div style={{ background: '#fafafa' }}>
        <Hero
          imgs={['team_91']}
          title={t.title}
          subtitle={t.subtitle}
          compact
          faded
        />
        <Header>{t.class_styles_heading}</Header>
        <ClassStylesBlock />
      </div>
    );
  }
}
const Header = styled.h1`
  text-align: center;
  font-size: 4em;
  max-width: 60%;
  margin: 0.5em auto;
  ${fonts.highlight}
`;
