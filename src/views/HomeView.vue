<template>
  <main>
    <div class="container">
      <input @keydown.enter="addItem" v-model="todoText" type="text" class="form-control main-task-input" placeholder="Type something and press ENTER" aria-label="Todo Item">
    </div>
    <div class="container">
      <TodoList @itemDelete="deleteItem" :items="todoStore.todos" />
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
  todoStore.deleteTodoItem(itemId)
}

</script>

<style scoped>
.main-task-input {
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 1.2em;
}
</style>
