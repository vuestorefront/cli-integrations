import { v4 } from 'uuid';
import updateIntegrations from './updateIntegrations.mjs';

const run = async () => {
  const { INTEGRATION_NAME, INTEGRATION_GIT_REPOSITORY_URL } = process.env;

  await updateIntegrations(
    `feat: add '${INTEGRATION_NAME}' integration`,
    (integrations) => {
      const newIntegration = {
        id: v4(),
        name: INTEGRATION_NAME,
        gitRepositoryURL: INTEGRATION_GIT_REPOSITORY_URL,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      return [...integrations, newIntegration];
    }
  );
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
