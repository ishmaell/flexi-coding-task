export interface ISearchQuery {
  searchQuery: string;
}

export interface ISearchQueryContext {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}
