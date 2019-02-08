import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EvolveConfig } from './evolve/config';
const [style] = [EvolveConfig.style];

class MiniWorkshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  componentWillUnmount() {
    this.setState({ hovered: false });
  }

  expandElement = () => {
    const { inView } = this.props;
    this.setState({ hovered: inView || false });
  };

  despandElement = () => {
    this.setState({ hovered: false });
  };

  handleKeyPress = () => {
    // eslint-disable-next-line no-console
    console.log('Keys Were Pressed');
  };

  render() {
    const { workshop, isActive, noneActive, onClick, rowWidth } = this.props;
    const { hovered } = this.state;
    const [data] = [workshop];
    const hasImage = data.teaser_image.url;
    const widthizer = rowWidth >= 500 ? '32%' : '95%';
    const colWidth = {
      overflow: 'display',
      minWidth: hovered && noneActive ? widthizer : widthizer,
      transition: 'all 0.5s',
      marginTop: hovered && noneActive ? 0 : 5,
      borderColor: isActive ? 'pink' : 'transparent',
      opacity: isActive || hovered || noneActive ? 1 : 0.45
    };

    const openArrow = {
      opacity: hovered ? 1 : 0,
      transition: 'all 0.5s'
    };
    return hasImage ? (
      <div
        style={{ ...style.row.col, ...colWidth }}
        onFocus={() => this.expandElement()}
        onMouseOver={() => this.expandElement()}
        onMouseLeave={() => this.despandElement()}
        onClick={() => onClick()}
        onKeyPress={this.handleKeyPress}
        role="presentation"
      >
        <img
          src={data.teaser_image.url.replace('dev', 'prod')}
          alt={data.title}
          style={{
            transition: 'all 0.4s',
            boxShadow: hovered ? '0px 10px 50px #999' : false
          }}
        />
        <div style={{ ...style.row.openArrow, ...openArrow }}>V</div>
      </div>
    ) : (
      false
    );
  }
}

MiniWorkshop.propTypes = {
  inView: PropTypes.bool.isRequired,
  workshop: PropTypes.arrayOf.isRequired,
  isActive: PropTypes.bool.isRequired,
  noneActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MiniWorkshop;
