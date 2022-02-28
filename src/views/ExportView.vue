<script setup lang="ts">
import { useTodoStore } from '@/stores/todos';

// get a reference to the todo store to use
let todoStore = useTodoStore()

function exportData() {
  console.log('Export Data pressed')
}


</script>


<template>
  <div class="container">
    <h1>Export data</h1>

    <h3 v-if="todoStore.todos.length === 0" class="text-center">There is no data to export!</h3>

    <div v-else>
      <h3 class="text-center">The following information will be exported</h3>

      <div v-if="todoStore.itemsTodo.length > 0">
        <hr />
        <h4>Items with <strong>To Do</strong> status</h4>
        <u>
          <li v-for="item in todoStore.itemsTodo" :key="item.id">{{ item.text }}</li>
        </u>
      </div>

      <div v-if="todoStore.itemsInProgress.length > 0">
        <hr />
        <h4>Items with <strong>In Progress</strong> status</h4>
        <u>
          <li v-for="item in todoStore.itemsInProgress" :key="item.id">{{ item.text }}</li>
        </u>
      </div>

      <div v-if="todoStore.itemsDone.length > 0">
        <hr />
        <h4>Items with <strong>Done</strong> status</h4>
        <u>
          <li v-for="item in todoStore.itemsDone" :key="item.id">{{ item.text }}</li>
        </u>
      </div>

      <div v-if="todoStore.todos.length > 0">
        <hr />
        <h4>Press the <strong>Export Data</strong> button to export data</h4>
        <button @click="exportData" class="btn btn-warning">Export Data</button>
      </div>

    </div>

  </div>
</template>
