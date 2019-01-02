import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './Input';
import InputSubmit from './InputSubmit';

import './searchform.scss';

class SearchForm extends PureComponent {
  componentDidMount() {
    this.input.focus();
  };

  render() {
    return (
      <div className="search-form__container">
        <form id="searchFormHeader" className="search-form__header" action="/search">
          <label htmlFor="q" name="search" type="hidden" className="hidden-label">Search website</label>
          <Input
            type={'search'}
            onSubmit={handleSubmit}
            autoComplete={'off'}
            name={'q'}
            htmlFor={'q'}
            placeholder={'Search the site.'}
            length={'25'}
          />
          <InputSubmit
            type={'submit'}
            title={'Seach website submit'}
            classes={'search-form__btn'}
          >
            <FontAwesomeIcon icon="search" aria-hidden="true" />
          </InputSubmit>

        </form>
      </div>
    );
  }
};

export default SearchForm;