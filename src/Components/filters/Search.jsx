import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchKeyword, updateSearch }) => {
  const handleUpdate = event => updateSearch(event.target.value);

  return (
    <div>
      <input
        placeholder="Filter URLs"
        type="text"
        value={searchKeyword}
        onChange={handleUpdate}
      />
    </div>
  );
};

Search.propTypes = {
  searchKeyword: PropTypes.string,
  updateSearch: PropTypes.func.isRequired
};

Search.defaultProps = {
  searchKeyword: ''
};

export default Search;
