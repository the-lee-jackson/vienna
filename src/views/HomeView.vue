<template>
  <main>
    <h1>Welcome to Vienna App</h1>
    <p>Current page id: <strong>{{ pageLoadId }}</strong></p>
    <button class="btn btn-primary" @click="generateNewId">Generate new page id</button>
  </main>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { ref } from 'vue'

const  pageLoadId = ref(uuidv4())

function generateNewId() {
  pageLoadId.value = uuidv4()
}

</script>
