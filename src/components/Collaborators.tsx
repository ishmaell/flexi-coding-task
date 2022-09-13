import React from 'react';
import { ICollaborator } from '../models/collaborator';
import { FiLink } from 'react-icons/fi';

const Collaborator: React.FC<ICollaborator> = ({
  login,
  avatar_url,
  html_url,
}) => {
  return (
    <div className="collaborator">
      <div className="avatar-name">
        <img className="avatar" src={avatar_url} alt={login} />
        <p>{login}</p>
      </div>
      <a className="url" href={html_url} target="_blank" rel="noreferrer">
        <FiLink />
      </a>
    </div>
  );
};

export default Collaborator;
