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

  </div>
</template>
