import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import styled, { css } from 'styled-components';
import { navHeading } from '../utils/nav';
import { PureBrand } from '../styles/variables';
import ScheduleClasses from './schedule/Classes';
import Link from 'next/link'

const hasClasses = c => c.length >= 1;
const isMiniSchedule = m => m === true;

// eslint-disable-next-line camelcase
export function Schedule({ classes, location, mini, loaded, name, full_link, view }) {
  const schedule = hasClasses(classes) ? (
    <ScheduleClasses
      classes={classes}
      location={location}
      mini={isMiniSchedule(mini)}
      view={view}
    />
  ) : (
    <tr>
      <td>
        {loaded ? (
          'No classes found.'
        ) : (
          <div>a
            {loaded ? '...' : <img src="/static/ajax-loader.gif" />}
          </div>
        )}
      </td>
    </tr>
  );
  const schedHead = view ? false : <div className="schedule-heading">{navHeading(name)}</div>
  const innerSchedule = (
    <div className="schedule-container">
      {schedHead}
      <table>
        <tbody>{schedule}</tbody>
      </table>

      <BottomLink>
        {!(!isMiniSchedule(mini) && full_link !== false) ? (
          <br />
        ) : (
          <Link
            href={`/schedule/${name.toLowerCase().replace('pure yoga ', '')}`}
          ><span>
            {`Full ${name.split(' ')[2]} Schedule`}
            &nbsp;&raquo;
            </span>
          </Link>
        )}
      </BottomLink>
    </div>
  );

  return (
    <ScheduleBlock className="schedule" view={view}>
      {hasClasses(classes) >= 1 ? (
        innerSchedule
      ) : (
        <LoadBlock>
            {loaded ? '...' : <img src="/static/ajax-loader.gif" />}
        </LoadBlock>
      )}
    </ScheduleBlock>
  );
}

export function isFuture(startTime) {
  return moment(startTime)
    .add(5, 'hours')
    .isAfter();
}

const highlightFont = css`
  font-family: bodoni-urw, serif;
  letter-spacing: 0.02em;
  font-weight: 400;
  font-style: italic;
`;

const pureButton = css`
  background: ${PureBrand.pureRed};
  border-color: ${PureBrand.pureRed};
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 6px;
  &:hover {
    background: ${PureBrand.pureBlue};
    border-color: ${PureBrand.pureBlue};
  }
`;

const primaryFont = css`
  text-transform: none;
  font-family: proxima-nova, sans-serif;
  font-weight: 400;
`;

const secondaryFont = css`
  font-family: 'Futura PT Medium', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
`;

const ScheduleBlock = styled.div`
  background: ${(props) => props.view ? 'none' : 'rgba(255, 255, 255, 0.9)'};
  border: ${(props) => props.view ? 'none' : '1px solid #efefef'};
  border-radius: 6px;
  width: 100%;
  tr {
    transition: all 0.3s;
  }
  tr:hover {
    background: #eee;
  }
  tr td {
    border-bottom: ${(props) => props.view ? 'none' :  '1px solid #eee'};
    padding-bottom: 0.3em;
  }
  td.class-times {
    letter-spacing: 0px;
    padding-top: 3px;
    font-size: 0.9em;
    max-width: 75px;
    min-width: 42px;
    width: 5%;
    opacity: 1;
    span {
      font-size: 0.8em;
    }
  }
  div.schedule-container {
    width: 90%;
    margin: 0 auto;
  }
  table {
    width: 100%;
  }
  td.class-teacher {
    transition: all 0.3s;
    max-width: 32px;
    filter: saturate(0);
    opacity: 0.3;
  }
  tr:hover td.class-teacher {
    filter: saturate(1);
    opacity: 1;
  }

  td.class-title {
    strong {
      ${primaryFont}
      font-weight: 900;
    }
    color: #111;
    span {
      opacity: 1;
    }
  }
  tr:hover > td.class-action {
    padding-left: 12px;
  }
  td.class-action {
    transition: all 0.5s;
    text-align: right;
  }

  .highlight {
    text-align: left;
    ${highlightFont}
    color: #666;
    font-size: 1.05em;
  }

  .book-class {
    ${pureButton}
    font-size: 12px;
    &.unbookable {
      background: #fff;
    }
  }

  .heading {
    font-size: 1.1em;
    ${secondaryFont}
    display: block;
    padding: 1em;
  }
`;
const BottomLink = styled.div`
  text-align: center;
  margin: 6px;
  a {
    border-radius: 8px;
    display: block;
    padding: 0.5em;
    color: #666;
    background: #fafafa;
    ${secondaryFont};
    &:hover {
      background: #eee;
      color: #111;
      text-decoration: none;
    }
  }
`;

const LoadBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: 2em;
`;

Schedule.propTypes = {
  // location: PropTypes.arrayOf,
  // classes: PropTypes.arrayOf.isRequired,
  mini: PropTypes.bool,
  loaded: PropTypes.bool,
  name: PropTypes.string.isRequired,
  full_link: PropTypes.bool.isRequired,
};
