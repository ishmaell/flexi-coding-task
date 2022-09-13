import React, { useState } from 'react';
import { IRepositoryResponse, IRepository } from '../../models/repository';
import RepositoryTableHead from './RepositoryTableHead';
import RepositoryTableRow from './RepositoryTableRow';
import Modal from '../Modal';
import Spinner from '../Spinner';
import { getCollaborators } from '../../api/axios';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setCollaborators } from '../../features/collaborators/collaboratorsSlice';
import Collaborator from '../Collaborators';

const RepositoryTable: React.FC<IRepositoryResponse> = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFetchingCollaborators, setIsFetchingCollaborators] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { collaborators } = useAppSelector((state) => state.collaborators);

  const RenderCollaborators = () => {
    if (collaborators.length === 0) return <p>No collaborators was found</p>;
    else {
      return collaborators.map((elem) => (
        <Collaborator
          key={elem.id}
          id={elem.id}
          login={elem.login}
          avatar_url={elem.avatar_url}
          html_url={elem.html_url}
        />
      ));
    }
  };

  const openModalHandler = async (collaboratorsUrl: string) => {
    setIsModalOpen(true);
    setIsFetchingCollaborators(true);
    try {
      const collaborators = await getCollaborators(collaboratorsUrl);
      console.log(collaborators.data);
      dispatch(setCollaborators(collaborators.data));
    } catch (error) {
    } finally {
      setIsFetchingCollaborators(false);
    }
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  const RenderTableRow = () =>
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

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
        {isFetchingCollaborators && <Spinner />}
        {!isFetchingCollaborators && (
          <>
            <div className="modal-title">Contributors</div>
            {RenderCollaborators()}
          </>
        )}
      </Modal>
      <table className="table">
        <RepositoryTableHead />
        <tbody>{RenderTableRow()}</tbody>
      </table>
    </>
  );
};

export default RepositoryTable;
