import { getOctokit } from '@actions/github';
import { fromBase64, toBase64 } from './utils/base64.mjs';

/**
 * @typedef {Object} Integration
 * @property {string} id
 * @property {string} name
 * @property {string} gitRepositoryURL
 * @property {string} [documentationURL]
 * @property {string} createdAt - ISO 8601 date string.
 * @property {string} updatedAt - ISO 8601 date string.
 */

/**
 * @callback Update
 * @param {Integration[]} integrations
 * @returns {Integration[]}
 */

/**
 * @param {string} message - The commit message
 * @param {Update} update
 * @returns {Promise<void>}
 */
const updateIntegrations = async (message, update) => {
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

  await octokit.rest.repos.createOrUpdateFileContents({
    repo,
    owner,
    branch,
    message,
    sha: content.data.sha,
    path: content.data.path,
    content: toBase64(update(fromBase64(content.data.content))),
  });
};

export default updateIntegrations;
