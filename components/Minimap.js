import React, { Component } from 'react';
export class MiniMap extends Component {
  render() {
    // AIzaSyAlAPJWPVIZimKXSTitFQtyeCFELQqVTSA Google Maps Key
    var address_n_map;
    address_n_map = this.props.hideMap ? (
      false
    ) : (
      <div className="flexCol">
        <div className="flexMap">
          <img src={this.props.map} alt="placeholder" />
        </div>
        <div className="flexAddress">
          {this.props.address}
          <br />
          {this.props.city}
          <br />
          {this.props.postcode} &bull;{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={directionsLink(this.props.place_id, this.props.name)}
          >
            Getting here
          </a>
          <br />
          {this.props.phone}
        </div>
      </div>
    );
    return <div className="minimap">{address_n_map}</div>;
  }
}

function directionsLink(loc, dest) {
  var base =
    'https://www.google.com/maps/dir/?api=1&destination_place_id=' +
    loc +
    '&destination=' +
    encodeURI('Pure Yoga ' + dest);
  return base;
}
