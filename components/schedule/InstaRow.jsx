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

    return (
      <React.Fragment key={index_key}>
        <tr
        >
          <td className="class-times">
            {moment.tz(yoga_class.start_time, zone).format('h:mm')}
            <span>{moment.tz(yoga_class.start_time, zone).format('a')}</span>
          </td>
          <td
            className="class-title"
            style={{ position: 'relative', textAlign: 'left' }}
          >
                <strong style={{ lineHeight: '1.2em', display: 'block' }}>
                <span style={{ background: '#fff', padding: '4px', display: 'inline-block' }}>
                  {yoga_class.class_name}
                  <span className="highlight"> @ {yoga_class.location.split(' ')[2]}</span>
                  </span>
                </strong>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

ScheduleRow.propTypes = {
  mini: PropTypes.bool.isRequired,
  // cookies: PropTypes.string.isRequired,
  // yoga_class: PropTypes.shape.isRequired,
  // id: PropTypes.number.isRequired,
  hideTeacher: PropTypes.bool,
  index_key: PropTypes.number.isRequired
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
