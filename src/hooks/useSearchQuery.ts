import { useState } from 'react';

const useSearchQuery = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  return { searchQuery, setSearchQuery };
};

export default useSearchQuery;
