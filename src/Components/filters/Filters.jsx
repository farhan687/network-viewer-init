import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

import { FILTERS, DEFAULT_FILTER } from "../../constants";

const Filters = ({ searchKeyword, updateSearch, updateFilter }) => {
  const [activeFilter, setFilter] = useState(DEFAULT_FILTER);

  const handleFilterClick = (selectedFilter) => {
    const nextFilter = selectedFilter.key === activeFilter.key ? DEFAULT_FILTER : selectedFilter;
    setFilter(nextFilter);
    updateFilter(nextFilter);
  };

  return (
    <div>
      <span>
        <Search searchKeyword={searchKeyword} updateSearch={updateSearch} />
        {FILTERS.map(({ name, filterBy }) => (
          <button type="button" key={name} onClick={() => handleFilterClick(filterBy)}>
            {name}
          </button>
        ))}
      </span>
    </div>
  );
};

Filters.propTypes = {
  searchKeyword: PropTypes.string,
  updateSearch: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
};

Filters.defaultProps = {
  searchKeyword: ''
};

export default Filters;
