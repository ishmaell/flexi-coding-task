import React from 'react';
import moment from 'moment';
import { IRepository } from '../../models/repository';
import { truncateStr } from '../../utils';
import useSearchQuery from '../../hooks/useSearchQuery';

const RepositoryTableRow = ({
  full_name,
  owner,
  description,
  collaborators_url,
  created_at,
}: IRepository) => {
  const { searchQuery } = useSearchQuery();
  return (
    <tr>
      <td>{searchQuery}</td>
      <td>{full_name}</td>
      <td>{owner}</td>
      <td>{truncateStr(description, 50)}</td>
      <td>{moment(moment(created_at, 'YYYYMMDD'), 'YYYYMMDD').calendar()}</td>
      <td>
        <button className="button primary">View Contributors</button>
      </td>
    </tr>
  );
};

export default RepositoryTableRow;
