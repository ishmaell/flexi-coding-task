import React, { useState } from 'react';
import { ISearchQueryContext } from '../models/searchQuery';

interface ContextProviderProps {
  children: React.ReactNode;
}

export const SearchQueryContext =
  React.createContext<ISearchQueryContext | null>(null);

export const SearchQueryProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export default SearchQueryContext;
