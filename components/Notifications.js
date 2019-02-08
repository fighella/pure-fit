class Notifications {
  constructor(msg) {
    this.msg = msg;
  }

  notify() {
    const alertUser = this.customNotifier();
    return alertUser;
  }

  customNotifier = () => {
    // eslint-disable-next-line no-alert
    // eslint-disable-next-line no-undef
    alert(`Error: ${this.msg}`);
  };
}

export default Notifications;
