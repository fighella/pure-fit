import { AppHelpers } from '../utils/tools';

class Sessions {
  constructor(props, username, password, context) {
    this.cookies = props.cookies;
    this.context = context;
    this.credentials = {
      username,
      password
    };
  }

  login() {
    const url = AppHelpers.mbParams({}, 'login');

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => this.setMbIdCookie(data))
      .catch(error =>
        this.context.setState({
          message: `Sorry, Incorrect Password. Please try again.`
        })
      );
  }

  logout() {
    this.cookies.set('user_id', '');
    this.context.setState({
      logged_in: '',
      action: 'You have been logged out.'
    });
  }

  setMbIdCookie(data) {
    const userId = data.client.client.id;
    this.context.setState({
      logged_in: userId,
      action: 'You have been logged in.'
    });
    this.cookies.set('user_id', userId);
  }
}

export default Sessions; //esioithRouter(withCookies(Sessions))e;
