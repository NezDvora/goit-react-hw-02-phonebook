import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ input, onChange }) => {
  return (
    <>
      <div>
        <label>
          Find contacts by name
          <input type="text" value={input} onChange={onChange} />
        </label>
      </div>
    </>
  );
};

Filter.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
