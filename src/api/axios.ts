import axios from 'axios';

export const getCollaborators = async (url: string) =>
  await axios.get(url.replace(/{\/collaborator}/, ''), {
    headers: {
      authorization: `Basic ${btoa(
        `ishmaell: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`
      )}`,
    },
  });
