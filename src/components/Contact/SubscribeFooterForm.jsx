import React, { Component } from 'react';

class SubscribeFooterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: null
    }
    this.validateForm = this.validateForm.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value })
  }

  validateForm(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(this.state.email)) {
      fetch('https://uidesignbox.us19.list-manage.com/subscribe/post-json?u=a59ec8b3f10ef200bb9c43367&id=1d3b8f7099&c=?', {
        method: 'POST',
        body: data
      })
      .then(() => {
        this.props.submit();
        return;
      })
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <form className="subscribe-footer__form" onSubmit={this.validateForm}>
        <input type="hidden" name="u" value="a59ec8b3f10ef200bb9c43367"></input>
        <input type="hidden" name="id" value="1d3b8f7099"></input>
        <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Email Address" onChange={this.handleEmail}></input>
        <button type="submit" className="submit__btn">Subscribe</button>
      </form>
    )
  }
};

export default SubscribeFooterForm;