export interface IRepositoryOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  type: string;
}

export interface IRepository {
  id: number;
  full_name: string;
  name: string;
  description: string;
  collaborators_url: string;
  username: string;
  owner: IRepositoryOwner | any;
  language: string;
  created_at: string;
  openModal: (url: string) => void;
}

export interface IRepositoryResponse {
  items: IRepository[];
  total_count: number;
  incomplete_results: boolean;
}

export interface IRepositoryState {
  repositories: IRepository[];
}
