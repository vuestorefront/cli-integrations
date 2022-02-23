import { v4 } from 'uuid';
import updateIntegrations from './updateIntegrations.mjs';

const run = async () => {
  await updateIntegrations('feat: add new integration', (integrations) => {
    const newIntegration = {
      id: v4(),
      name: process.env.INTEGRATION_NAME,
      gitRepositoryURL: process.env.INTEGRATION_GIT_REPOSITORY_URL,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    return [...integrations, newIntegration];
  });
};

run()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
