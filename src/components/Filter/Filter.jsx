import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ input, onChange }) => {
  return (
    <>
      <div className={css.contactItems}>
        <label className={css.labelFind}>
          Find contacts by name
          <input className={css.inputFilter} type="text" value={input} onChange={onChange} />
        </label>
      </div>
    </>
  );
};

Filter.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
