import { v4 } from 'uuid';
import updateIntegrations from './updateIntegrations.mjs';

const run = async () => {
  const {
    INTEGRATION_NAME: name,
    INTEGRATION_DOCUMENTATION_URL: documentationURL,
    INTEGRATION_GIT_REPOSITORY_URL: gitRepositoryURL,
  } = process.env;

  await updateIntegrations(
    `feat: add '${name}' integration`,
    (integrations) => {
      const newIntegration = {
        name,
        gitRepositoryURL,
        documentationURL,
        id: v4(),
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
