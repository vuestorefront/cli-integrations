import updateIntegrations from './updateIntegrations.mjs';

const run = async () => {
  await updateIntegrations(
    'feat: remove one of the integrations',
    (integrations) => {
      return integrations.filter((integration) => {
        return integration.id !== process.env.INTEGRATION_ID;
      });
    }
  );
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
