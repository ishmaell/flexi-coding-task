import React from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { IRepository } from '../../models/repository';
import { truncateStr, addHighlight } from '../../utils';
import useSearchQuery from '../../hooks/useSearchQuery';

const RepositoryTableRow = ({
  id,
  full_name,
  name,
  owner,
  description,
  created_at,
  openModal,
}: IRepository) => {
  const { searchQuery } = useSearchQuery();
  const highLightedDesc = parse(
    addHighlight(searchQuery, truncateStr(description, 30))
  );
  const highLighedFullname = parse(addHighlight(searchQuery, full_name));
  return (
    <tr>
      <td>{id}</td>
      <td>{highLighedFullname}</td>
      <td>{owner}</td>
      <td>{highLightedDesc}</td>
      <td>{moment(moment(created_at, 'YYYYMMDD'), 'YYYYMMDD').calendar()}</td>
      <td>
        <button
          onClick={() => openModal(owner, name)}
          className="button primary"
        >
          View Contributors
        </button>
      </td>
    </tr>
  );
};

export default RepositoryTableRow;
