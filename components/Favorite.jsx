/* eslint-disable camelcase */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as Fave } from '@fortawesome/free-solid-svg-icons';
import { faHeart as notFave } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie';
import { AppHelpers } from '../utils/tools';
import Notifications from './Notifications';

class Favorite extends Component {
  constructor(props) {
    super(props);
    const { cookies, favorite_type, id } = this.props;
    this.client_id = cookies.get('user_id') || false;
    const fids = cookies.get('fids') || [];
    this.state = {
      favorite: fids.includes(`${favorite_type}.${id}`)
    };
  }

  toggleFavorite = async () => {
    const { favorite } = this.state;
    await this.callToggleFavorite(
      favorite ? 'remove_favorite' : 'add_favorite'
    );
    this.setState({ favorite: favorite || true });
  };

  callToggleFavorite = async toggleType => {
    const url = AppHelpers.mbParams({}, toggleType);
    const notifier = new Notifications('You Must Login to collect favorites.');
    const { favorite_type, id } = this.props;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        client_id: this.client_id,
        fid: `${favorite_type}.${id}`
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(() => notifier.notify());
    const json = await response.json().catch(() => notifier.notify());
    if (!json.data) {
      notifier.notify();
    } else {
      this.setState({
        fids: json.data.favorites
      });
      this.setCookies();
    }
  };

  setCookies = () => {
    const { cookies } = this.props;
    const { fids } = this.state;
    cookies.set('fids', fids);
  };

  render() {
    const { favorite } = this.state;
    const { size, showText } = this.props;
    // const [count, setCount] = useState(0);

    return (
      <span>
        <FontAwesomeIcon
          icon={favorite ? Fave : notFave}
          style={{
            width: size === 'tiny' ? 10 : false,
            margin: '1px 6px 0',
            fontWeight: 400,
            opacity: size === 'tiny' ? '0.2' : false
          }}
          onClick={() => this.toggleFavorite()}
        />
        {showText && !favorite ? 'Add Favorite' : ''}
      </span>
    );
  }
}

Favorite.propTypes = {
  cookies: PropTypes.string.isRequired,
  favorite_type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  showText: PropTypes.bool.isRequired
};

export default withCookies(Favorite);
