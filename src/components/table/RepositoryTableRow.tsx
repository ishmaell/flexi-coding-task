import React from 'react';
import { IRepository } from '../../models/repository';

const RepositoryTableRow = ({
  full_name,
  name,
  description,
  collaborators_url,
}: IRepository) => {
  return (
    <tr>
      <td>10270250</td>
      <td>{full_name}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{collaborators_url}</td>
      <td>
        <button className="button primary">View Contributors</button>
      </td>
    </tr>
  );
};

export default RepositoryTableRow;
