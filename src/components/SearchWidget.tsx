import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchWidget = () => {
  return (
    <div className="search-widget">
      <div className="search-input-area">
        <div className="search-icon">
          <BsSearch />
        </div>
        <input
          className="search-input"
          type="search"
          placeholder="Start typing to search"
        />
      </div>
    </div>
  );
};

export default SearchWidget;
