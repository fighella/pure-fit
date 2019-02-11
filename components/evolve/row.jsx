import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import EvolveTeaser from './teaser';
import MiniWorkshop from '../MiniWorkshop';
import { EvolveConfig } from './config';
import Link from 'next/link'
import { withRouter } from 'next/router';

const [style] = [EvolveConfig.style];

const LinkWrapper = (props) => (
  <div style={{ minWidth: '31%' }}>
    <Link style={{ maxWidth: '100%' }} key={props.ws.id} href={`/evolve/?id=${props.ws.id}&title=${props.ws.title.toLowerCase().replace(/ /g, '-')}`} as={`/evolve/${props.ws.id}/${props.ws.title.toLowerCase().replace(/ /g, '-')}`}>
    <a style={{ width: '100%' }}>
      {props.children}
    </a>
  </Link>
  </div>
)

class EvolveRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // hovered: false,
      loadedWorkshop: false,
      start: 0,
      finish: 4,
      wsTab: false,
      dimensions: {
        width: -1,
        height: -1
      }
    };
  }

  showDescription = ws => {
    const { isLink } = this.props;
    const { loadedWorkshop } = this.state;

    if (!isLink) {
      this.setState({
        loadedWorkshop:
          loadedWorkshop && loadedWorkshop.id === ws.id ? (
            false
          ) : (
            <EvolveTeaser
              workShop={ws}
              wsTab={'Overview'}
              hideDescription={() => this.hideDescription()}
              rowWidth={this.state.dimensions.width}
            />
          ),
        wsTab: 'Overview'
      });
    }
  };

  hideDescription = () => {
    this.setState({
      loadedWorkshop: false
    });
  };

  fadeOthers = () => {
    this.setState({
      // hovered: true,
    });
  };

  fadeOthers = () => {
    this.setState({
      // hovered: true,
    });
  };

  shouldScrollDown = element => {
    const { start } = this.state;
    let arrow;
    if (start !== 0) {
      arrow = element;
    }
    return arrow;
  };

  shouldScrollUp = (element, count) => {
    const { finish } = this.state;
    let arrow;
    if (finish <= count) {
      arrow = element;
    }
    return arrow;
  };

  isFirstPosition = spacer => {
    const { start } = this.state;
    let arrow;
    if (start === 0) {
      arrow = spacer;
    }
    return arrow;
  };

  scrollUp = () => {
    const { start, finish } = this.state;
    this.setState({
      start: start + 1,
      finish: finish + 1
    });
  };

  scrollDown = () => {
    const { start, finish } = this.state;
    this.setState({
      start: start - 1,
      finish: finish - 1
    });
  };

  notThisOne = ws => ws.id !== this.props.not;

  render() {
    const { loadedWorkshop, start, finish, dimensions } = this.state;
    const { limit, skip, workshops, not, title } = this.props;
    const wst = loadedWorkshop;
    let workshopsList =
      limit || skip ? workshops.slice(skip, limit + skip) : workshops;
    if (not) {
      workshopsList = workshopsList.filter(this.notThisOne);
    }
    
    const cols = workshopsList
      .slice(start, finish)
      .map((ws,index) => {
        const mw = <MiniWorkshop
        workshop={ws}
        noneActive={!loadedWorkshop}
        isActive={loadedWorkshop === ws}
        onClick={() => this.showDescription(ws)}
        key={ws.id}
        inView={index <= 2}
        rowWidth={dimensions.width}
        onMouseEnter={() => this.fadeOthers()}
        onMouseLeave={() => this.unfadeOthers()}
      />
      return(
        this.props.isLink ? <LinkWrapper ws={ws} index={index} children={mw} /> : mw
      )}
      );

    const scrollUp = this.shouldScrollUp(
      <ScrollRightButton role="button" onClick={() => this.scrollUp()}>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ fontWeight: 300, color: '#DC9D9D', fontSize: 36 }}
        />
      </ScrollRightButton>,
      workshopsList.length
    );
    const scrollBack = this.shouldScrollDown(
      <ScrollLeftButton role="button" onClick={() => this.scrollDown()}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ fontWeight: 300, color: '#DC9D9D', fontSize: 36 }}
        />
      </ScrollLeftButton>
    );
    const pTitle = title ? <h3 style={style.row.header}>{title}</h3> : false;
    return (
      <Measure
        bounds
        onResize={contentRect => {
          this.setState({ dimensions: contentRect.bounds });
        }}
      >
        {({ measureRef }) => (
          <div
            className="evolveRowContainer"
            style={style.row.container}
            ref={measureRef}
          >
            {workshopsList.length >= 1 ? pTitle : false}
            <div style={style.row}>
              <div style={style.row.spacer} />
              {scrollBack}
              {cols}
              <div style={{ minWidth: '31%' }} />
              <div style={{ minWidth: '31%' }} />
              <div style={{ minWidth: '31%' }} />
              {scrollUp}
              <div style={style.row.spacer} />
            </div>
            <div>{wst}</div>
          </div>
        )}
      </Measure>
    );
  }
}

EvolveRow.propTypes = {
  isLink: PropTypes.bool.isRequired,
  not: PropTypes.bool.isRequired,
  limit: PropTypes.number.isRequired,
  skip: PropTypes.number.isRequired,
  workshops: PropTypes.arrayOf.isRequired,
  title: PropTypes.string.isRequired
};

const ScrollRightButton = styled.button`
  position: absolute;
  right: 0;
  width: 4.3%;
  z-index: 10;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    svg {
      transform: scale(1.2);
    }
    background: rgba(255, 255, 255, 0);
  }
`;

const ScrollLeftButton = styled.button`
  position: absolute;
  left: 0;
  z-index: 10;
  height: 100%;
  background: none;
  border: none;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    svg {
      transform: scale(1.2);
    }
    background: rgba(1, 1, 1, 0.05);
  }
`;

export default withRouter(EvolveRow);
