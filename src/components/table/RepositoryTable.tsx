import React, { useState } from 'react';
import { IRepositoryResponse, IRepository } from '../../models/repository';
import RepositoryTableHead from './RepositoryTableHead';
import RepositoryTableRow from './RepositoryTableRow';
import Modal from '../Modal';
import Spinner from '../Spinner';
import { getCollaboratorsOct } from '../../api';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import {
  setCollaborators,
  searchCollaborators,
  clearCollaborators,
} from '../../features/collaborators/collaboratorsSlice';
import Collaborator from '../Collaborators';
import { BsSearch } from 'react-icons/bs';
import { ICollaborator } from '../../models/collaborator';

const RepositoryTable: React.FC<IRepositoryResponse> = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFetchingCollaborators, setIsFetchingCollaborators] =
    useState<boolean>(false);
  const [selectedRepo, setSelectedRepo] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useAppDispatch();
  const { collaborators, filteredCollaborators } = useAppSelector(
    (state) => state.collaborators
  );

  const closeModalHandler = () => {
    setSelectedRepo('');
    setIsModalOpen(false);
  };

  const resetCollaborators = () => {
    dispatch(clearCollaborators());
  };

  const openModalHandler = async (owner: string, repo: string) => {
    setIsModalOpen(true);
    setIsFetchingCollaborators(true);
    setSelectedRepo(repo);

    resetCollaborators();

    try {
      const collaborators = await getCollaboratorsOct(owner, repo);
      dispatch(setCollaborators(collaborators.data));
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setIsFetchingCollaborators(false);
    }
  };

  const searchHandler = () => {
    dispatch(searchCollaborators(searchValue));
  };

  const RenderCollaborators = (): any => {
    if (searchValue) {
      if (filteredCollaborators.length === 0) {
        return <p className="no-collaborators">No match was found</p>;
      }
      return filteredCollaborators.map((elem: ICollaborator) => {
        const { id, login, avatar_url, html_url } = elem;
        return (
          <Collaborator
            key={id}
            id={id}
            login={login}
            avatar_url={avatar_url}
            html_url={html_url}
          />
        );
      });
    }
    if (collaborators.length === 0)
      return <p className="no-collaborators">No collaborators was found</p>;
    else {
      return collaborators.map((elem: ICollaborator) => {
        const { id, login, avatar_url, html_url } = elem;
        return (
          <Collaborator
            key={id}
            id={id}
            login={login}
            avatar_url={avatar_url}
            html_url={html_url}
          />
        );
      });
    }
  };

  const RenderTableRow = (): any =>
    items.map((item: IRepository) => (
      <RepositoryTableRow
        key={item.id}
        id={item.id}
        name={item.name}
        full_name={item.full_name}
        description={item.description}
        collaborators_url={item.collaborators_url}
        username={''}
        owner={item.owner.login}
        language={item.language}
        created_at={item.created_at}
        openModal={openModalHandler}
      />
    ));

  React.useEffect(() => {
    if (searchValue) searchHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
        {isFetchingCollaborators && <Spinner />}
        {!isFetchingCollaborators && (
          <>
            <div className="modal-title">Contributors / {selectedRepo}</div>
            <div className="modal-search-area">
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
                    placeholder="Search collaborators"
                  />
                </div>
              </div>
            </div>
            <RenderCollaborators />
          </>
        )}
      </Modal>

      <table className="table">
        <RepositoryTableHead />
        <tbody>
          <RenderTableRow />
        </tbody>
      </table>
    </>
  );
};

export default RepositoryTable;
