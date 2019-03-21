import { AppHelpers } from '../utils/tools';
import { withCookies, Cookies } from 'react-cookie';
class Favorites {
  constructor(props, context) {
    this.cookies = props.cookies;
    this.favorite = props.favorite;
    this.user_id = cookies.get('user_id');
    this.context = context;
  }

  canAdd = () => {
    return this.user_id != '';
  };

  cannotAdd = () => {
    return 'You must be logged in to add to favorites.';
  };

  add() {
    if (this.canAdd()) {
      const url = AppHelpers.mbParams({}, 'add_favorite');
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(this.credentials),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => this.setMbIdCookie(data))
        .catch(error => alert('Sorry. Cannot login.' + error));
    } else {
      cannotAdd();
    }
  }

  remove() {
    if (canAdd()) {
      const url = AppHelpers.mbParams({}, 'add_favorite');

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(this.credentials),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => this.setMbIdCookie(data))
        .catch(error => alert('Sorry. Cannot login.' + error));
    } else {
      cannotAdd();
    }
  }

  getFavorites(data) {
    const userId = data.client.client.id;
    this.context.setState({
      logged_in: userId,
      action: 'You have been logged in.'
    });
    this.cookies.set('user_id', userId);
  }
}

export default withCookies(Sessions);
