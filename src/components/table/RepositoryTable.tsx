import React from 'react';
import { IRepositoryResponse, IRepository } from '../../models/repository';
import RepositoryTableHead from './RepositoryTableHead';
import RepositoryTableRow from './RepositoryTableRow';

const RepositoryTable: React.FC<IRepositoryResponse> = ({ items }) => {
  console.log(items);
  const RenderTableRow = () =>
    items.map((item: IRepository, index: number) => (
      <RepositoryTableRow
        id={item.id}
        name={item.name}
        full_name={item.full_name}
        description={item.description}
        collaborators_url={item.collaborators_url}
        username={''}
        owner={item.owner.login}
        language={''}
      />
    ));

  return (
    <table className="table">
      <RepositoryTableHead />
      {/* <RenderTableRow /> */}
      <tbody>{RenderTableRow()}</tbody>
    </table>
  );
};

export default RepositoryTable;
