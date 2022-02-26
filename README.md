# `cli-integrations`

---------

# #TechForUkraine

<table>
  <tr>
    <td style="width:40%;">
       <img src="https://user-images.githubusercontent.com/1626923/155853691-d6d0a541-d3b9-40bf-b8f5-2d38303e9e49.png" />
    </td>
    <td>
      <h2><strong>Ongoing tensions on Ukrainian territory close the space for civil society.</strong></h2>
      <h3>How can you support Ukrainian civil society?</h3>
      All the help is valid, and if you are not able to help locally, by giving shelter to a fellow Ukraine, there are some ways that you can help also:
      <ul>
        <li>
          Support the Ukraine Armed forces directly by sending funding to the open special accounts.<br />
          <a href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi" target="_blank">NBU Opens Special Account to Raise Funds for Ukraine’s Armed Forces</a>
        </li>
        <li>
          Help the ICRC (Red Cross) with donations.<br />
          <a href="https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine" target="_blank">Ukrainian Red Cross Society</a>
        </li>
        <li>
          Donate to the United Help Ukraine.<br />
          <a href="https://unitedhelpukraine.org/" target="_blank">United Help Ukraine</a>
        </li>
        <li>
          Donate to Voices of Children<br />
          <a href="https://voices.org.ua/en/" target="_blank">Voices of Children</a>
        </li>
    </td>
  </tr>
</table>

---------

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
