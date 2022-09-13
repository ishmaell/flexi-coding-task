import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.REACT_APP_AUTH_TOKEN,
});

export const getCollaboratorsOct = async (owner: string, repo: string) =>
  await octokit.request(`GET /repos/{owner}/{repo}/collaborators`, {
    owner: owner,
    repo: repo,
  });
