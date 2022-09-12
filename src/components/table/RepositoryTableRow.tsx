import React from 'react';
import moment from 'moment';
import { IRepository } from '../../models/repository';
import { truncateStr } from '../../utils';

const RepositoryTableRow = ({
  full_name,
  owner,
  description,
  collaborators_url,
  created_at,
}: IRepository) => {
  return (
    <tr>
      <td>10270250</td>
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
