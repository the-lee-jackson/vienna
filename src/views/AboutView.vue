<template>
  <div class="container">
    <h1>About project Vienna</h1>

    <p>This is a simple <em>TODO</em> app for demonstrating Vue 3 functionalities.</p>

    <h4>The user can do the following operations with the list</h4>
    <ul>
      <li>can add an item</li>
      <li>can delete an item</li>
      <li>can edit an item</li>
      <li>can change the status of an item</li>
    </ul>

    <h4>Possible transitions of an item's status</h4>
    <ul>
      <li>TODO to IN PROGRESS</li>
      <li>IN PROGRESS to DONE</li>
      <li>DONE to IN PROGRESS</li>
    </ul>

    <h4>Deleting an item</h4>
    <p>To delete an item, press on the "Delete" button. Once an item is deleted, it can't be recovered!</p>

    <h4>Privacy</h4>
    <ul>
      <li>Data is kept locally in the browser</li>
      <li>No data is sent to an external server.</li>
      <li>To remove all data simply <em>refresh</em> the current page.</li>
    </ul>

    <h4>Export Data</h4>
    To export data from the app, go to the <strong>Export Data</strong> page and 
    click the <strong>Export Data</strong> button at the bottom of the page.
    The button will appear if at least one item is added to the list.

  </div>
</template>
