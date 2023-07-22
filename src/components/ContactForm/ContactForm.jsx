import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  onSubmitHandler = event => {
    event.preventDefault();
    const id = nanoid();
    this.props.onSubmit(id, this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onInputChange}
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onInputChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
