import React, { Component } from 'react';
import styled from 'styled-components';
import ReactInstagramFeed from 'react-instagram-feed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
export class Instafeed extends Component {
  render() {
    return (
      <InstaContent vertical={this.props.vertical}>
        <h3>
          {this.props.title || (
            <span>
              Follow Us{' '}
              <a href="https://instagram.com/pureyogaottawa">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ margin: '0', fontWeight: 400, color: '#333' }}
                />
              </a>
            </span>
          )}
        </h3>
        <ReactInstagramFeed
          accessToken={this.props.accessToken}
          count={5}
          type="user"
          param="self"
          resolution="standard"
          wrapper={Wrapper}
          className="insta-wrapper"
          hasLink
          showButton={false}
          // buttonText="Fetch (from inside of ReactInstagramFeed component)"
          before={() => {
            console.log('Before fetching feeds');
          }}
          after={() => {
            console.log('After fetching feeds');
          }}
        />
      </InstaContent>
    );
  }
}

//{
//   "name": "Jonny Dalgleish",
//   "id": "10161215303490165"
// }
// GET TOCKENS PIXEL UNION
// FOREVER TOKEN:: EAAGdFGrmdfgBANjaK548EEPy8v9I485wcUvxp48LZAtuw0JY2ASHFiLamplZAkjOkru9EOXDmR3VSZAEMzGdAGRqLhdWduXsCnLiuMRZCc39DlGBn5ZCLdJbdFeQm5m9PwGgU0PZCkOQ8TWlmpJWQLPcjG9FEQg9bohlSSl7Kn5llgYJg6GeIngOuUUASCsmTedZCgSNCFhKgZDZD
const InstaContent = styled.div`
  padding: 3em 0;
  text-align: center;
  background: none;
  * {
    box-sizing: border-box;
  }
  .insta-wrapper {
    display: flex;
    flex-direction: ${props => (props.vertical ? 'column' : 'row')};
    justify-content: space-between;
    padding: 0 2%;
  }
  .frame {
    padding: ${props => (props.vertical ? '98% 0 0' : '19% 0 0')};
    width: ${props => (props.vertical ? '98%' : '19%')};
    margin: ${props => (props.vertical ? '0.5em' : false)};
  }
`;

const Frame = styled.div`
  flex-direction: row;
  background: #efefef;
  border-radius: 5px;
  display: inline-block;
  position: relative;
  float: left;

  height: 0;
  overflow: hidden;
  box-sizing: border-box;
  transition: 0.5s all;
  &:hover {
    box-shadow: 0 3px 14px #333;
    blockquote {
      opacity: 1;
    }
  }
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: auto;
    z-index: 1;
  }
  blockquote {
    position: absolute;
    bottom: 0;
    margin: 0;
    width: 100%;
    color: #111;
    background-color: #fff;
    z-index: 3;
    opacity: 0.3;
    display: none;
  }
  .igf-like,
  .igf-comment {
    position: absolute;
    padding: 0 4px;
    line-height: 1em;
    color: #fff !important;
    font-size: 12px;
    text-decoration: blink;
    z-index: 5;
    bottom: 3px;
    i {
      padding: 2px;
    }
  }
  .igf-like {
    left: 32px;
  }
  .igf-comment {
    left: 3px;
  }
`;

const Wrapper = ({ children }) => <Frame className="frame">{children}</Frame>;
