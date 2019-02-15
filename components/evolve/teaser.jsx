/* eslint-disable no-undef */
import React, { Component } from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import textile from 'textile-js';
import { AppHelpers } from '../../utils/helpers';
import { EvolveConfig } from './config';
import styled from 'styled-components';
import EvolveTeachers from './teachers';
import Favorite from '../Favorite';
import EvolvePresenter from '../../presenters/EvolvePresenter'
import Link from 'next/link';

const [zone, style] = [EvolveConfig.zone, EvolveConfig.style];
const defaultTab = 'Overview';

class EvolveTeaser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.wsTab,
      height: false
      // videoURL: false,
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo({
      top: this.myRef.current.offsetTop + 200,
      behavior: 'smooth'
    });
    this.setState({
      view: defaultTab,
      height: document.getElementById('teaser').clientHeight
    });
  }

  componentWillUnmount() {
    this.setState({ view: defaultTab, height: false });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.workShop !== this.state.workShop) {
      this.setView(defaultTab);
    }
  }

  setView = view => {
    this.setState({ view });
  };

  render() {
    const { workShop, hideDescription } = this.props;
    const { view, height } = this.state;
    const infoTabs = [
      defaultTab,
      workShop.teacher_text ? 'Teachers' : false,
      'Full Details'
    ].filter(Boolean);
    const bg = {
      backgroundImage: `url(${
        workShop.hero_image.url
          ? workShop.hero_image.url.replace('dev', 'prod')
          : ''
      })`,
      opacity: view === infoTabs[0] ? 1 : 0.2,
      width: view === infoTabs[0] ? '55%' : '90%',
      filter: `grayscale(${view === infoTabs[0] ? 0 : 50}%) blur(${
        view === infoTabs[0] ? 0 : 3
      }px)`,
      transition: 'all 0.1s',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    };
    const endTime =
      workShop.endTime > workShop.startTime
        ? moment.tz(workShop.endTime, zone).format('h:mma')
        : false;
    const startTime = workShop.startTime
      ? moment.tz(workShop.startTime, zone).format('h:mma')
      : false;

    const endDate =
      workShop.endTime > workShop.startTime
        ? moment.tz(workShop.endTime, zone).format('ll')
        : false;
    const startDate = workShop.startTime
      ? moment.tz(workShop.startTime, zone).format('ll')
      : false;

    const dates =
      workShop.customDates || [startDate, endDate].filter(Boolean).join(' - ');
    const times =
      workShop.customTimes || [startTime, endTime].filter(Boolean).join(' - ');
    const location = `Pure ${workShop.location}`;
    const desc = workShop.custom_teaser || workShop.description;
    const italic = { fontStyle: 'oblique' };
    const teacher = workShop.teacher_text ? (
      <span>
        <strong>
          Teacher
          {workShop.teacher_text.includes(' and ') ? 's' : false}
        </strong>{' '}
        : {workShop.teacher_text}
      </span>
    ) : (
      false
    );
    const investment = workShop.investment ? (
      <span>
        <strong>Investment</strong>: {workShop.investment}
      </span>
    ) : (
      false
    );

    const tabs = infoTabs.map(tab => (
      <span
        onClick={() => this.setView(tab)}
        style={
          tab === view
            ? {
                ...style.teaser.bottom_tabs.tab,
                ...style.teaser.bottom_tabs.tab.active
              }
            : style.teaser.bottom_tabs.tab
        }
      >
        {tab}
      </span>
    ));

    const bookNow = workShop.mindbody_link ? (
      <a
        href={workShop.mindbody_link}
        target="_blank"
        rel="noopener noreferrer"
        style={style.teaser.book_now}
      >
        Book Now
      </a>
    ) : (
      false
    );

    const teaserContent = (
      <TeaserContent id="teaser" rowWidth={this.props.rowWidth}>
        <span style={style.teaser.type}>
          <span style={style.teaser.type_brand}>PURE</span>{' '}
          {workShop.workshop_type}
        </span>
        <h1 style={style.teaser.heading}>{workShop.title}</h1>
        <strong style={style.teaser.details}>
          {AppHelpers.slashJoin([dates, times, location])}
        </strong>
        <p>
          <strong>{workShop.subtitle}</strong>
        </p>
        <div
          style={style.teaser.description}
          dangerouslySetInnerHTML={{ __html: textile(desc) }}
        />
        <div style={style.flex}>
        <Link href={`/evolve_show?id=${workShop.id}&title=${workShop.title.toLowerCase().replace(/ /g, '-')}`} as={`/evolve/${workShop.id}/${workShop.title.toLowerCase().replace(/ /g, '-')}`}>
          <a
            style={style.teaser.more_info}
          >
            More info
          </a>
          </Link>
          &nbsp;
          {bookNow}
          <Favorite id={[workShop.id].join('-')} favorite_type="ws" />
        </div>

        <div style={{ ...italic, ...style.teaser.description }}>
          {teacher}
          <br />
          {investment}
        </div>
      </TeaserContent>
    );

    const minHeight = { minHeight: height, paddingRight: '2.5%' };
    const teachersContent = (
      <div
        style={{
          textAlign: 'left',
          paddingLeft: '2.5%',
          paddingTop: '1em',
          textTransform: 'uppercase'
        }}
      >
        <EvolveTeachers id={workShop.id} />
      </div>
    );

    const fullDetailsContent = (
      <div style={{ ...style.teaser.content, ...minHeight }}>
        <h1 style={style.teaser.heading}>{workShop.title}</h1>
        <br />
        <div
          style={style.teaser.description}
          dangerouslySetInnerHTML={{ __html: textile(workShop.description) }}
        />
      </div>
    );

    const locationContent = (
      <div style={{ ...style.teaser.content, ...minHeight }}>
        <div>Loc!</div>
      </div>
    );

    let currentView = teaserContent;
    switch (view) {
      case 'Overview':
        currentView = teaserContent;
        break;
      case 'Teachers':
        currentView = teachersContent;
        break;
      case 'Full Details':
        currentView = fullDetailsContent;
        break;
      case 'Location':
        currentView = locationContent;
        break;
      default:
        currentView = false;
    }
    const video = workShop.video ? (
      <video id="background-video" loop autoPlay>
        <source src={workShop.video} type="video/mp4" />
        <source src={workShop.video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    ) : (
      false
    );
    const left =
      this.props.rowWidth >= 500 ? (
        <div style={{ ...style.teaser.bg, ...bg }}>
          {video}
          <div style={style.teaser.left_grad} />
        </div>
      ) : (
        false
      );
    return (
      <div ref={this.myRef} style={style.teaser} id={`workshop_${workShop.id}`}>
        <span style={style.close} onClick={() => hideDescription()}>
          X
        </span>
        {left}
        {currentView}
        <div style={style.teaser.bottom_fade} />
        <BottomTabs style={style.teaser.bottom_tabs}>{tabs}</BottomTabs>
      </div>
    );
  }
}

EvolveTeaser.propTypes = {
  workShop: PropTypes.shape.isRequired,
  hideDescription: PropTypes.func.isRequired
};

const BottomTabs = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 20;
  max-width: 95%;
  margin: 1em auto 0 auto;
  padding-bottom: 0;
`;

const TeaserContent = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 0 0.25%;
  z-index: 10;
  padding: 1em 2.5%;
  padding-right: ${props => (props.rowWidth >= 500 ? '40%' : '0%')};
  display: 'block';
`;

export default EvolveTeaser;
