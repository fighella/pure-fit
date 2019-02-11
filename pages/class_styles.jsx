import React, { Component } from 'react';
import Hero from '../components/Hero';
import { AppContent } from '../data/content';
import styled from 'styled-components';
import ClassStylesBlock from '../components/class_style/Block';
import fetch from 'isomorphic-unfetch';
import { fonts } from '../styles/variables';
import { AppHelpers } from '../utils/tools';
import Layout from '../components/Layout';
const t = AppContent.class_styles;

const Index = (props) => (
  <Layout>
      <div style={{ background: '#fafafa' }}>
        <Hero
          imgs={['team_91']}
          title={t.title}
          subtitle={t.subtitle}
          compact
          faded
        />
        <Header>{t.class_styles_heading}</Header>
        <ClassStylesBlock classStyles={props.classStyles} />
      </div>
      </Layout>
    );

Index.getInitialProps = async function() {
  try {
    const response = await fetch(AppHelpers.mbParams({}, 'classStyles'));
    let json = await response.json();
    return {
      classStyles: json.class_styles
    }
  } catch {
    console.log('noFetchError();');
  }
}


const Header = styled.h1`
  text-align: center;
  font-size: 4em;
  max-width: 60%;
  margin: 0.5em auto;
  ${fonts.highlight}
`;

export default Index;