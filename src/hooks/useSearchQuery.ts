import { useContext } from 'react';

import SearchQueryContext from '../context/SearchQueryContext';
import { ISearchQueryContext } from '../models/searchQuery';

const useSearchQuery = () =>
  useContext(SearchQueryContext) as ISearchQueryContext;

export default useSearchQuery;
