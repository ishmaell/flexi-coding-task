import React from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchWidgetProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  handleSearch: (value?: string) => void;
}

const SearchWidget: React.FC<SearchWidgetProps> = ({
  searchValue,
  setSearchValue,
  handleSearch,
}) => {
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="search-widget">
        <div className="search-input-area">
          <div className="search-icon">
            <BsSearch />
          </div>
          <input
            className="search-input"
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Start typing to search"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchWidget;
