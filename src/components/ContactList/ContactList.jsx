import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li style={{ marginBottom: 16 }} key={contact.id}>
          <span>
            {contact.name} - {contact.number}
          </span>
          <button
            onClick={() => onDeleteContact(contact.id)}
            style={{
              padding: '5px 10px',
              background: 'pink',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              marginLeft: 12,
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
