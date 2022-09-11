import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchRepositories = async (query = '', page = 1, per_page = 10) =>
  axios.get(
    `${BASE_URL}/search/repositories?q=${query}&page=${page}&per_page=${per_page}`
  );
