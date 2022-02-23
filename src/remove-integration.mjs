import updateIntegrations from './updateIntegrations.mjs';

const run = async () => {
  const { INTEGRATION_ID: id } = process.env;

  await updateIntegrations(
    'feat: remove one of the integrations',
    (integrations) => {
      return integrations.filter((integration) => {
        return integration.id !== id;
      });
    }
  );
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
