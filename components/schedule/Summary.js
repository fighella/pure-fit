import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as moment from 'moment-timezone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import AddToCalendar from 'react-add-to-calendar';
import styled from 'styled-components';
import PureData from '../../utils/src';
import mailtoLink from 'mailto-link';
import Favorite from '../Favorite';
const zone = 'Etc/GMT';
const format = 'h:mma';

export class ClassSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded_teacher: false,
      teacher: false
    };
  }
  componentDidMount() {
    this.grabTeacher();
  }
  grabTeacher = () => {
    var src = new PureData(
        {
          teacher: this.props.teacher.name
            .replace(/ +(?= )/g, '')
            .replace(' ', '-')
            .toLowerCase()
        },
        false
      ).teachers,
      params = [];
    src.filters.map((filter, index) =>
      params.push(
        Object.values(src.filters[index])[0]
          ? `&by_${Object.keys(src.filters[index])[0]}=${
              Object.values(src.filters[index])[0]
            }`
          : ''
      )
    );
    var url = params.reduce((acc, cv) => {
      return acc + cv;
    }, src.base);
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ teacher: data.teachers, loaded_teacher: true })
      )
      .then(() => console.log('inside mount', this.state))
      .catch(err => console.log('Did not fetch your things.'));
  };
  render() {
    let location_name,
      class_title,
      end_time,
      start_time,
      teacher_name,
      class_description,
      _event,
      tp,
      come_early_message;

    tp = this.props;
    teacher_name = tp.teacher.name;
    class_description = tp.details.class_description.description
      ? tp.details.class_description.description.replace(/<\/?[^>]+(>|$)/g, '')
      : `A Hot Yoga Class w/ ${teacher_name}`;
    location_name = tp.details.location.name;
    class_title = tp.details.class_description.name;
    start_time = moment.tz(this.props.yoga_class.start_time, zone);
    end_time = moment.tz(this.props.yoga_class.end_time, zone);
    const start_t = moment.tz(this.props.yoga_class.start_time, zone);
    const end_t = moment.tz(this.props.yoga_class.end_time, zone);
    come_early_message = 'Please arrive 10 mins before class.';
    _event = {
      title: `${class_title} w/ ${teacher_name} -- @ Pure Yoga`,
      description: `${class_description} \n\n ${come_early_message}`,
      location: `${location_name}, Ottawa, Ontario`,
      startTime: start_t.add(5, 'hours'),
      endTime: end_t.add(5, 'hours')
    };
    console.log('tp', tp);
    const fave = this.state.teacher ? (
      <Favorite id={[this.state.teacher.id].join('-')} favorite_type="tr" />
    ) : (
      false
    );
    return (
      <ClassSummaryComponent>
        <div className="summary-bg">
          <CloseButton onClick={() => this.props.toggle()}>X</CloseButton>
          <div
            className="summary-bg-img"
            style={{
              backgroundImage: `url('https://s3.amazonaws.com/pureyogaottawa.com/website/studio/Pure%20Yoga%20Downtown.jpg')`
            }}
          />
          <div className="white-strap" />
          <div className="summary-header">
            <div className="summary-teacher">
              <img
                alt={this.props.name}
                src={
                  this.state.loaded_teacher && this.state.teacher
                    ? this.state.teacher.headshot.small_thumb.url
                    : false
                }
              />
            </div>
            <div className="summary-title">
              <strong style={{ color: '#fff', fontWeight: 'bold' }}>
                {class_title}
              </strong>
              <br />
              w/ {teacher_name} {fave}{' '}
              {this.props.details.substitute ? '(Sub)' : false}
              <br />
            </div>
          </div>
        </div>
        <div className="summary-content">
          <p>
            <strong>
              {start_time.format(format)} - {end_time.format(format)},{' '}
              {this.props.details.location.name}
            </strong>
          </p>
          <p>{class_description}</p>
          <p>
            <em>{come_early_message}</em>
          </p>
        </div>
        <div className="summary-footer">
          <AddToCalendar event={_event} displayItemIcons={false} />
          <div>
            <span>
              <Favorite
                id={[
                  this.props.teacher.id,
                  tp.details.class_description.id
                ].join('-')}
                favorite_type="yct"
              />
            </span>
            <span>
              {' '}
              <a
                href={mailtoLink({
                  subject: _event.title,
                  body: `${_event.title}\n\n${start_time.format(
                    format
                  )} - ${end_time.format(format)} - ${start_time.format(
                    'd Y'
                  )}\n\n${class_description}\n\n${
                    this.props.details.location.name
                  }`
                })}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ margin: '1px 6px 0', fontWeight: 400 }}
                />
              </a>
            </span>
          </div>
        </div>
      </ClassSummaryComponent>
    );
  }
}

const ClassSummaryComponent = styled.div`
  .summary-header {
    min-height: 110px;
    padding: 1em 1em 0;
    position: relative;
    display: flex;
    z-index: 10;
    color: #fff;
    align-items: baseline;

    .summary-teacher {
      img {
        width: 100%;
        height: 100%;
      }
      width: 20%;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 12px;
      border: 3px solid #fff;
    }
  }
  .summary-title {
    line-height: 1.3em;
    text-transform: none;
    strong {
      text-transform: uppercase;
      font-size: 1.3em;
      font-weight: bold;
    }
  }
  .summary-content {
    margin-top: -12px;
    margin-left: 25%;
    margin-right: 5%;
    margin-bottom: 12px;
    z-index: 10;
    position: relative;
    p {
      line-height: 1.6em;
      margin: 0;
    }
    strong {
      font-weight: 700;
    }
    em {
      color: #999;
    }
  }

  .white-strap {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 22px;
    background: #fff;
    z-index: 5;
  }

  .summary-bg {
    background: #111;
    position: relative;
    .summary-bg-img {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 15px;
      background-size: cover;
      opacity: 0.8;
      mix-blend-mode: screen;
      background-position: center center;
      width: 100%;
    }
  }

  .summary-footer {
    background: #efefef;
    padding: 4px 8px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    a {
      color: #333;
      text-transform: uppercase;
    }
  }
`;

const CloseButton = styled.a`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #333;
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
  display: block;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
`;
