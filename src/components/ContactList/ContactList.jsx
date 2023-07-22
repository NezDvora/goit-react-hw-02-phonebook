import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}{' '}
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
