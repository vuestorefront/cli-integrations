import updateIntegrations from './updateIntegrations.mjs';

const run = async () => {
  await updateIntegrations(
    'feat: update one of the integrations',
    (integrations) => {
      return integrations.map((integration) => {
        if (integration.id !== process.env.INTEGRATION_ID) return integration;

        return {
          ...integration,
          name: process.env.INTEGRATION_NAME?.trim() || integration.name,
          gitRepositoryURL:
            process.env.INTEGRATION_GIT_REPOSITORY_URL?.trim() ||
            integration.gitRepositoryURL,
          updatedAt: new Date().toISOString(),
        };
      });
    }
  );
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
