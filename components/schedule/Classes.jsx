import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScheduleRow from './Row';

class ScheduleClasses extends Component {
  render() {
    let { dateText } = false;
    const { location, classes, mini } = this.props;

    const classList = location
      ? classes.filter(function f(_class) {
          return _class.location === this;
        }, location)
      : classes;
    const rows = classList.map((_class, index) => {
      dateText =
        index === 0 || classes[index - 1].day !== _class.day ? (
          <tr key={`class_${_class.id}`}>
            <td colSpan={5}>
              <span
                className="highlight"
                style={{ paddingTop: '1.6em', display: 'block' }}
              >
                {_class.day}
              </span>
            </td>
          </tr>
        ) : (
          false
        );

      return (
        <React.Fragment key={dateText}>
          {dateText}
          <ScheduleRow yoga_class={_class} index_key={index} mini={mini} />
        </React.Fragment>
      );
    });
    return classes.length >= 1 ? (
      rows
    ) : (
      <p style={{ textAlign: 'center' }}>
        No classes were loaded for this period.
      </p>
    );
  }
}

ScheduleClasses.propTypes = {
  location: PropTypes.shape.isRequired,
  classes: PropTypes.arrayOf.isRequired,
  mini: PropTypes.shape.isRequired
};

export default ScheduleClasses;
