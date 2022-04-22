# `cli-integrations`

  ---------

### Stay connected

[![GitHub Repo stars](https://img.shields.io/github/stars/vuestorefront/vue-storefront?style=social)](https://github.com/vuestorefront/vue-storefront)
[![Twitter Follow](https://img.shields.io/twitter/follow/vuestorefront?style=social)](https://twitter.com/vuestorefront)
[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCkm1F3Cglty3CE1QwKQUhhg?style=social)](https://www.youtube.com/c/VueStorefront)
[![Discord](https://img.shields.io/discord/770285988244750366?label=join%20discord&logo=Discord&logoColor=white)](https://discord.vuestorefront.io)

The list of `@vue-storefront/cli` integration options and some workflows (using GitHub Actions) to managem them.

## How to consume these integrations?

You can just fetch as any raw content in the GitHub.

```js
fetch('https://github.com/vuestorefront/cli-integrations/blob/main/data.json')
  .then((response) => response.json())
  .then((integrations) => {
    // ...
  });
```

## How to add, update or remove an integration?

To add, update or remove an integration you must have `write` permission in this repository. With `write` permission you can execute "Add Integration", "Update Integration" or "Remove Integration" manual workflows.

### How to execute a manual workflow?

1. Open repository "Actions".

   ![](./docs/images/repository-actions.png)

2. Select the workflow you want to run.

   ![](./docs/images/repository-actions-workflow.png)

3. Click in "Run workflow" button.

   ![](./docs/images/repository-actions-workflow-run.png)

4. Fill in workflow's inputs and submit to execute the workflow.

   ![](./docs/images/repository-actions-workflow-run-submit.png)
