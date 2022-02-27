<template>
  <main>
    <div class="container">
      <input @keydown.enter="addItem" v-model="todoText" type="text" class="form-control" placeholder="Type something and press ENTER" aria-label="Todo Item">
    </div>
    <div class="container">
      <TodoList :items="todoStore.todos" />
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

</script>
