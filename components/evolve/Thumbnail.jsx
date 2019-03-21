import React, { Component } from 'react';
import { EvolveConfig } from './config';
import { withCookies } from 'react-cookie';
import Favorite from '../../components/Favorite'
import styled from 'styled-components'
const [style] = [EvolveConfig.style];
;

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
  }

  expandElement = () => {
    const { inView } = this.props;
    this.setState({ hovered: inView || false });
  };

  despandElement = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { workshop, isActive, noneActive, rowWidth } = this.props;
    const { hovered } = this.state;
    const [data] = [workshop];
    const hasImage = data.teaser_image.url;
    const widthizer = rowWidth >= 500 ? '32%' : '95%';
    const colWidth = {
      overflow: 'display',
      minWidth: hovered && noneActive ? widthizer : widthizer,
      transition: 'color 0.5s',
      marginTop: hovered && noneActive ? 0 : 5,
      borderColor: isActive ? 'pink' : 'transparent',
      opacity: isActive || hovered || noneActive ? 1 : 0.45
    };
    return hasImage ? (
      <div
        style={{ ...style.row.col, ...colWidth }}
        onMouseOver={() => this.expandElement()}
        onMouseLeave={() => this.despandElement()}
      >
        <FavPosition>
          <Favorite id={[data.id].join('-')} favorite_type="ws" />
        </FavPosition>
        <img
          src={data.teaser_image.url.replace('dev', 'prod')}
          alt={data.title}
          style={{
            transition: 'box-shadow 0.4s',
            boxShadow: hovered ? '0px 10px 50px #999' : false
          }}
        />
      </div>
    ) : (
      false
    );
  }
}

export default withCookies(Thumbnail);

const FavPosition = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 1000;
  * { color: #fff;}
`