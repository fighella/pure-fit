class ContactForm {
  constructor({
    email,
    name,
    username,
    phone,
    comment,
    from_page,
    secretcode,
    enquiry_type,
    subscribed
  }) {
    this.data = {
      email,
      secretcode,
      name,
      username,
      phone,
      comment,
      from_page,
      enquiry_type,
      subscribed
    };
  }

  sendForm() {
    const url = 'https://cdn.pureyogaottawa.com/api/v1/enquiries.json';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(error =>
        this.context.setState({
          message: `Sorry, Message Did Not Send. Please try again.`
        })
      );
  }
}

export default ContactForm; //esioithRouter(withCookies(Sessions))e
