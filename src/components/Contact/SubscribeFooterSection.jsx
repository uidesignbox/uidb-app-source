import React, { PureComponent } from 'react';
import SubscribeFooterForm from './SubscribeFooterForm';
import './contact.scss';

class SubscribeFooterSection extends PureComponent {
  constructor() {
    super();
    this.state = { isFormValid: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ isFormValid: true })
  }

  render() {
    return (
      <div className="subscribe-footer__container">
        <header className="subscribe-footer__head">
          <h2>The UiDesignBox Newsletter</h2>
          <small>Get highlights and updates from the site to your inbox.</small>
        </header>
        <SubscribeFooterForm submit={this.handleSubmit} />
        {this.state.isFormValid &&
          <p className='subscribe__thank-you'>Thank you for the subscribing!</p>}
      </div>
    )
  }
};

export default SubscribeFooterSection;