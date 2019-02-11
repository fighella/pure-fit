/* eslint-disable camelcase */
import React, { Component } from 'react';
import * as moment from 'moment-timezone';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Popover, PopoverBody } from 'reactstrap';
import { withCookies } from 'react-cookie';
import { ClassSummary } from './Summary';
import { isFuture } from '../Schedule';

// import Favorite from '../Favorite';
const zone = 'Etc/GMT';

class ScheduleRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false,
      hovered: false
    };
  }

  handleClick = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = state => ({
    popoverOpen: !state.popoverOpen,
    isHovering: !state.isHovering
  });

  hidePopup = () => ({
    popoverOpen: false
  });

  isMini() {
    const { mini } = this.props;
    return mini === true;
  }

  isBooked() {
    // eslint-disable-next-line camelcase
    const { cookies, yoga_class } = this.props;
    return (
      cookies.cookies.class_ids &&
      cookies.cookies.class_ids.includes(yoga_class.class_details.id)
    );
  }

  render() {
    const { yoga_class, id, hideTeacher, index_key } = this.props;
    const { hovered, toggle, popoverOpen } = this.state;
    const popoverId = `popoverId_${yoga_class.class_details.id}`;

    const summary = (
      <ClassSummary
        teacher={yoga_class.teacher_details}
        details={yoga_class.class_details}
        yoga_class={yoga_class}
        target={id}
        toggle={() => this.handleClick()}
      />
    );

    const popover = (
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target={popoverId}
        toggle={toggle}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() =>
          this.setState({
            hovered: false,
            popoverOpen: !hovered
          })
        }
      >
        <PopoverBody>{summary}</PopoverBody>
      </Popover>
    );
    const withe = hideTeacher || (
      <React.Fragment>
        <span style={{ fontSize: 12 }}>/w </span>
        {yoga_class.teacher.split(' ')[0]}
        {yoga_class.class_details.substitute ? (
          <span
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              color: '#999'
            }}
          >
            {' '}
            sub
          </span>
        ) : (
          false
        )}
      </React.Fragment>
    );
    if (this.isBooked()) {
      // eslint-disable-next-line no-console
      console.log('IS BOOKED');
    }
    return (
      <React.Fragment key={index_key}>
        <tr
          className={
            isFuture(yoga_class.start_time) ? 'bookable' : 'not_bookable'
          }
        >
          <td className="class-times">
            {moment.tz(yoga_class.start_time, zone).format('h:mm')}
            <span>{moment.tz(yoga_class.start_time, zone).format('a')}</span>
          </td>
          <td style={{ minWidth: 1, width: 2 }} />
          <td
            className="class-title"
            style={{ position: 'relative', textAlign: 'left' }}
          >
            <PopoverButton
              onClick={this.handleClick}
              onFocus={() => console.log('Focused')}
              type="button"
            >
              {popover}
              <span id={popoverId}>
                <strong>
                  {yoga_class.class_name} {withe}{' '}
                </strong>
                <br />
                {this.isMini() ? (
                  ''
                ) : (
                  <span className="highlight">{yoga_class.location}</span>
                )}
              </span>
            </PopoverButton>
          </td>
          <td className="class-action">
            {isFuture(yoga_class.start_time) ? (
              <a href={`https://clients.mindbodyonline.com/ws.asp?studioid=21952&stype=-7&sTG=22&sVT=5&sView=day&date=${moment.tz(yoga_class.start_time, zone).format('MM%2FDD%2FYYYY')}&sLoc=${yoga_class.class_details.location.id}`} target="_blank" className="btn btn-sm book-class">
                BOOK
                {this.isBooked() ? 'ED' : false}
              </a>
            ) : (
              <a href="/" className="btn btn-sm book-class unbookable">
                LOOK
                {this.isBooked() ? 'ED' : false}
              </a>
            )}
          </td>
        </tr>
        {/* <tr><td colSpan='4'>{summary}</td></tr> */}
      </React.Fragment>
    );
  }
}

ScheduleRow.propTypes = {
  mini: PropTypes.bool.isRequired,
  cookies: PropTypes.string.isRequired,
  yoga_class: PropTypes.shape.isRequired,
  id: PropTypes.number.isRequired,
  hideTeacher: PropTypes.bool.isRequired,
  index_key: PropTypes.string.isRequired
};

const PopoverButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: 0;
  }
`;

export default withCookies(ScheduleRow);
