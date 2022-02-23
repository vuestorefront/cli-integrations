import updateIntegrations from './updateIntegrations.mjs';

const run = async () => {
  const {
    INTEGRATION_ID: id,
    INTEGRATION_NAME: name,
    INTEGRATION_DOCUMENTATION_URL: documentationURL,
    INTEGRATION_GIT_REPOSITORY_URL: gitRepositoryURL
  } = process.env;

  await updateIntegrations(
    'feat: update one of the integrations',
    (integrations) => {
      return integrations.map((integration) => {
        if (integration.id !== id) return integration;

        return {
          ...integration,
          name: name || integration.name,
          gitRepositoryURL: gitRepositoryURL || integration.gitRepositoryURL,
          documentationURL: documentationURL || integration.documentationURL,
          updatedAt: new Date().toISOString()
        };
      });
    }
  );
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
