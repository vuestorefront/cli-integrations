import { getOctokit } from '@actions/github';
import { v4 } from 'uuid';
import { fromBase64, toBase64 } from './utils/base64.mjs';

const run = async () => {
  const octokit = getOctokit(process.env.GITHUB_TOKEN);

  const owner = process.env.GITHUB_REPOSITORY_OWNER;

  const repo = process.env.GITHUB_REPOSITORY.replace(owner + '/', '');

  const repository = await octokit.rest.repos.get({ repo, owner });

  const branch = repository.data.default_branch;

  const content = await octokit.rest.repos.getContent({
    repo,
    owner,
    ref: branch,
    path: 'data.json',
  });

  const data = fromBase64(content.data.content);

  data.push({
    id: v4(),
    name: process.env.INTEGRATION_NAME,
    gitRepositoryURL: process.env.INTEGRATION_GIT_REPOSITORY_URL,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  await octokit.rest.repos.createOrUpdateFileContents({
    repo,
    owner,
    branch,
    message: `feat: add "${process.env.INTEGRATION_NAME}" to integrations`,
    sha: content.data.sha,
    path: 'data.json',
    content: toBase64(data),
  });
};

run()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
