import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useAppDispatch } from '../hooks/useRedux';
import { apiSlice } from '../features/repository/repositoryApiSlice';

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
  const dispatch = useAppDispatch();
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setSearchValue('');
      dispatch(apiSlice.util.resetApiState());
    } else {
      setSearchValue(event.target.value);
    }
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
            onChange={onChangeHandler}
            placeholder="Start typing to search"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchWidget;
