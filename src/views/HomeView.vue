<template>
  <main>
    <div class="container">
      <h3 v-if="todoStore.currentEditItem">Edit item <span class="badge rounded-pill bg-secondary">{{ todoStore.currentEditItem }}</span></h3>
      <h3 v-else>Add a new item to the list</h3>
      <input
        @keydown.enter="addItem"
        v-model="todoText"
        type="text"
        class="form-control main-task-input"
        placeholder="Type something and press ENTER"
        aria-label="Todo Item"
      />
    </div>
    <div v-if="todoStore.itemsTodo.length > 0" class="container">
      <h3>Todo Items</h3>
      <TodoList
        @itemDelete="deleteItem"
        @itemEdit="editItem"
        @itemChangeStatus="changeItemStatus"
        :items="todoStore.itemsTodo"
      />
    </div>

    <div v-if="todoStore.itemsInProgress.length > 0" class="container">
      <h3>In Progress Items</h3>
      <TodoList
        @itemDelete="deleteItem"
        @itemEdit="editItem"
        @itemChangeStatus="changeItemStatus"
        :items="todoStore.itemsInProgress"
      />
    </div>

    <div v-if="todoStore.itemsDone.length > 0" class="container">
      <h3>Done Items</h3>
      <TodoList
        @itemDelete="deleteItem"
        @itemEdit="editItem"
        @itemChangeStatus="changeItemStatus"
        :items="todoStore.itemsDone"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todos';
import TodoList from '../components/TodoList.vue'

// get a reference to the todo store to use
let todoStore = useTodoStore()

let todoText = ref('')

/**
 * verifies that something was typed other than whitespace
 * and add the value to the list of todos
 */
function addItem() {
  // check to see if the edit mode is activated
  if (todoStore.currentEditItem) {

    // if the input is empty, then cancel the operation
    if (todoText.value.trim() === '') {
      todoStore.clearCurrentEditItem()
      return
    }

    // update the selected item for edit operation
    todoStore.updateItem(todoStore.currentEditItem, todoText.value.trim())

    // clear the edit mode after
    todoStore.clearCurrentEditItem()

    // clear the input after
    todoText.value = ''

    return
  }

  // check to see if we have anything else besides whitespace entered
  if (todoText.value.trim() === '') return

  // get the value from the input and add it to the store
  todoStore.addTodoItem(
    todoText.value.trim() // remove spaces from beginning and end
  )

  // clear the input value
  todoText.value = ''
}

function deleteItem(itemId: string) {
  todoStore.clearCurrentEditItem()
  todoText.value = ''
  todoStore.deleteTodoItem(itemId)
}

function editItem(itemId: string) {
  todoStore.setCurrentEditItem(itemId)
  todoText.value = todoStore.currentEditItemText
}

function changeItemStatus(itemId: string, newStatus: string) {
  todoStore.clearCurrentEditItem()
  todoText.value = ''
  todoStore.changeItemStatus(itemId, newStatus)
}

</script>

<style scoped>
.main-task-input {
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 1.2em;
}
</style>
