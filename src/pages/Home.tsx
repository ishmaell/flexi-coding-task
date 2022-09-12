import { useState } from 'react';
import { MdError } from 'react-icons/md';
import { RiFolderOpenLine } from 'react-icons/ri';
import Card from '../components/Card';
import SearchWidget from '../components/SearchWidget';
import { useFetchRepositoriesMutation } from '../features/repository/repositoryApiSlice';
import Spinner from '../components/Spinner';
import NoData from '../components/NoData';
import RepositoryTable from '../components/table/RepositoryTable';
import useSearchQuery from '../hooks/useSearchQuery';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [fetchRepositories, { data, isLoading, isError, isSuccess }] =
    useFetchRepositoriesMutation();
  const { setSearchQuery } = useSearchQuery();
  const handleSearch = () => {
    if (searchValue) {
      setSearchQuery(searchValue);
      const encodedStr = encodeURIComponent(searchValue);
      fetchRepositories(encodedStr);
    }
  };

  return (
    <Card>
      <SearchWidget
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />
      <div className="table-area">
        {!isLoading && data?.items && data?.items?.length > 0 && (
          <RepositoryTable
            items={data.items}
            total_count={data.total_count}
            incomplete_results={data.incomplete_results}
          />
        )}
        {isLoading && <Spinner />}
        {isError && (
          <NoData
            Icon={MdError}
            message="An error occured. Please try again."
          />
        )}
        {!isError && !isLoading && (!isSuccess || data?.items.length === 0) && (
          <NoData Icon={RiFolderOpenLine} message="No records to display" />
        )}
      </div>
    </Card>
  );
};

export default Home;
