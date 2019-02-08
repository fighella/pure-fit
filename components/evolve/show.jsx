import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import textile from 'textile-js';
import Hero from '../Hero';
import { EvolveConfig } from './config';
import WorkshopData from './WorkshopData';
import PureData from '../utils/src';
import { AppContent } from '../data/content';
import EvolveTeachers from './teachers';
import EvolveRow from './row';
import Favorite from '../Favorite';
import { fonts, colors } from '../css_variables';

const [style] = [EvolveConfig.style];
const t = AppContent.evolve.show;

function Content({ workshops }) {
  const workshop = workshops ? workshops[0] : {};
  const WorkshopContents = WorkshopData(EvolveRow, PureData);
  const desc = workshop ? workshop.description : false;

  const loaded =
    workshops.length >= 1 ? (
      <React.Fragment>
        <Hero
          custom_imgs={[workshop.hero_image.url]}
          imgs={[]}
          title={workshop.title}
          subtitle=""
          compact
        />
        <HeroSubNav
          dates={workshop.custom_dates}
          location={workshop.custom_location || workshop.location}
          teachers={workshop.custom_teacher_text || workshop.teacher_text}
        />
        <br />
        <Container fluid>
          <Row>
            <Col xs={7}>
              <h3>
                {workshop.title} {workshop.teaser_text}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: textile(desc) }} />
            </Col>
            <Col xs={5}>
              <EvolveTeachers id={workshop.id} header={false} />
              <p style={{ textAlign: 'center' }}>
                <Favorite
                  id={[workshop.id].join('-')}
                  favorite_type="ws"
                  size="large"
                  showText
                />
              </p>
              <BookNow
                href={workshop.mindbody_link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block' }}
              >
                Book Now
              </BookNow>
            </Col>
          </Row>
        </Container>
        <div
          style={{
            background: '#fff',
            marginTop: '1em',
            paddingTop: '1em',
            paddingBottom: '1em'
          }}
        >
          <h3
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: '0.5em auto'
            }}
          >
            {t.you_might_also_like}
          </h3>
          <WorkshopContents not={workshop.id} />
          <br />
        </div>
      </React.Fragment>
    ) : (
      false
    );
  return <div>{loaded}</div>;
}

const HeroSubNav = ({ dates, location, teachers }) => (
  <NavRow>
    <NavItem align="left">{dates}</NavItem>
    <NavSpacer />
    <NavItem align="center">{location} Location</NavItem>
    <NavSpacer />
    <NavItem align="right">with {teachers}</NavItem>
  </NavRow>
);

HeroSubNav.propTypes = {
  location: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  teachers: PropTypes.arrayOf.isRequired
};

Content.propTypes = {
  workshops: PropTypes.arrayOf.isRequired
};

class EvolveShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
  }

  render() {
    const WorkshopContents = WorkshopData(Content, PureData);
    const loaded = (
      <div style={style.body}>
        <WorkshopContents id={this.props.match.params.id} />
      </div>
    );
    const content = this.state.loaded ? loaded : 'Loading';
    return content;
  }
}

const NavSpacer = styled.div`
  min-height: 100%;
  display: block;
  position: relative;
  width: 1px;
  background: #ccc;
`;

const NavRow = styled.div`
  z-index: 22;
  position: relative;
  display: flex;
  justify-items: stretch;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
`;
const NavItem = styled.div`
  color: #999;
  z-index: 22;
  text-align: ${props => props.align};
  padding: 0.5em 0.8em;
  position: relative;
`;

const BookNow = styled.a`
  width: 93%;
  border-radius: 8px;
  margin: 0 auto;
  border: 1px solid ${colors.red};
  padding: 0.75em;
  text-align: center;
  font-weight: bold;
  ${fonts.primary};
  background: ${colors.red};
  color: #fff;
  transition: all 0.5s;
  &:hover {
    color: ${colors.pink};
    text-decoration: none;
    background: #fff;
  }
`;

export default EvolveShow;
