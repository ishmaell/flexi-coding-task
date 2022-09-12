import React from 'react';
import { IRepositoryResponse, IRepository } from '../../models/repository';
import RepositoryTableHead from './RepositoryTableHead';
import RepositoryTableRow from './RepositoryTableRow';

const RepositoryTable: React.FC<IRepositoryResponse> = ({ items }) => {
  console.log(items);
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
      />
    ));

  return (
    <table className="table">
      <RepositoryTableHead />
      <tbody>{RenderTableRow()}</tbody>
    </table>
  );
};

export default RepositoryTable;
