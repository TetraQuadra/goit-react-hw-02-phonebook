import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  render() {
    const { name, number, onNameChange, onNumberChange, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <input
          style={{ marginRight: 16 }}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onNameChange}
          placeholder="Name"
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onNumberChange}
          placeholder="Phone Number"
        />
        <button
          style={{
            padding: '8px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            margin: '20px 0 0 280px',
          }}
          type="submit"
        >
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onNameChange: PropTypes.func,
  onNumberChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ContactForm;
