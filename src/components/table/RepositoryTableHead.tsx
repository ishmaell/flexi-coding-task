import React from 'react';

const RepositoryTableHead = () => {
  return (
    <thead>
      <tr>
        <th className="w-1/6">ID</th>
        <th className="w-1/6">Fullname</th>
        <th className="w-1/6">Owner</th>
        <th style={{ width: '20%' }}>Description</th>
        <th className="w-1/6">Date Created</th>
        <th className="w-1/6"></th>
      </tr>
    </thead>
  );
};

export default RepositoryTableHead;
